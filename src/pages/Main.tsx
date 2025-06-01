import React, { useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../App";
import Sidebar from "../components/layout/SideBar";
import ChatBox from "../components/layout/ChatBox";
import UserPanel from "../components/layout/UserPanel";
import UserProfile from "./UserProfile";
import EditUserProfile from "./EditUserProfile";
import "./Main.css";

interface MainProps {
  user: Session["user"];
}

const handleLogout = async () => {
  const confirm = window.confirm("Are you sure you want to log out?");
  if (!confirm) return;

  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error logging out:", error.message);
  } else {
    console.log("Logged out successfully");
  }
};

function Main({ user }: MainProps) {
  const [isEditing, setIsEditing] = useState(false);

  // You should fetch this from backend or Supabase in real app
  const [profile, setProfile] = useState({
    name: "LiNkUS",
    username: "LiNkUS",
    bio: "hello, this is a test",
    avatarUrl: "/assets/img/LiNkUS.jpeg",
    location: "Kent Ridge Hall",
    streak: 4,
    connections: 12,
    interests: ["Hiking", "Music", "Startups"],
    classes: ["CS1010", "MA1521"],
  });

  const handleSave = (updatedProfile: {
    name?: string;
    username: string;
    bio?: string;
    avatarUrl: string;
    location?: string;
    interests: string[];
    classes: string[];
  }) => {
    setProfile((prev) => ({
      ...prev,
      ...updatedProfile,
    }));
    setIsEditing(false);
  };
  

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <button id="logout" onClick={handleLogout} style={{ position: "absolute", top: 10, right: 10 }}>
        Logout
      </button>

      <main style={{ flexGrow: 1, padding: "1rem", maxWidth: "600px", margin: "auto" }}>
        {isEditing ? (
          <EditUserProfile
            name={profile.name}
            username={profile.username}
            bio={profile.bio}
            avatarUrl={profile.avatarUrl}
            location={profile.location}
            interests={profile.interests}
            classes={profile.classes}
            onSave={handleSave}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <>
            <UserProfile
              name={profile.name}
              username={profile.username}
              bio={profile.bio}
              avatarUrl={profile.avatarUrl}
              location={profile.location}
              streak={profile.streak}
              connections={profile.connections}
              interests={profile.interests}
              classes={profile.classes}
            />
            <button
              onClick={() => setIsEditing(true)}
              style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
            >
              Edit Profile
            </button>
          </>
        )}
      </main>

      <Sidebar />
      <ChatBox />
      <UserPanel />
    </div>
  );
}

export default Main;
