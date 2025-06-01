import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supabase } from "../App";
import Sidebar from "../components/layout/SideBar";
import ChatBox from "../components/layout/ChatBox";
import UserPanel from "../components/layout/UserPanel";
import UserProfile from "./UserProfile";
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
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <button id="logout" onClick={handleLogout}>
        Logout
      </button>
      <UserProfile
        username="LiNkUS"
        bio = "hello, this is a test"
        avatarUrl="/assets/img/LiNkUS.jpeg"
        location="Kent Ridge Hall"
        streak={4}
        connections={12}
        interests={["Hiking", "Music", "Startups"]}
        classes={["CS1010", "MA1521"]}
      />
      <Sidebar />
      <ChatBox />
      <UserPanel />
    </div>
  );
}

export default Main;
