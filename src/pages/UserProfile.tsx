import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";
import EditUserProfile from "./EditUserProfile";
import { supabase } from "../App";
import { UserProfileProps } from "../types";


const UserProfile: React.FC<UserProfileProps> = ({
  name = "",
  username,
  bio = "",
  avatarUrl,
  location = "",
  interests = [],
  classes = [],
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfileProps>({
    name,
    username,
    bio,
    avatarUrl,
    location,
    interests,
    classes,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error("Failed to load profile:", error.message);
      } else if (data) {
        setProfile({
          username: data.username,
          avatarUrl: data.avatar_url,
          bio: data.bio || "",
          name: data.name || "",
          location: data.location || "",
          interests: data.interests || [],
          classes: data.classes || [],
        });
      }
    };

    fetchProfile();
  }, []);

  const handleSave = async (updatedProfile: UserProfileProps) => {
    setProfile(updatedProfile);
    setIsEditing(false);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      alert("Not logged in");
      return;
    }

    const { error } = await supabase.from("profiles").upsert({
      id: user.id,
      name: updatedProfile.name,
      username: updatedProfile.username,
      avatar_url: updatedProfile.avatarUrl,
      bio: updatedProfile.bio,
      location: updatedProfile.location,
      interests: updatedProfile.interests,
      classes: updatedProfile.classes,
      // updated_at: new Date().toISOString()
    });

    if (error) {
      console.error("Failed to save profile:", error.message);
      alert("Save failed.");
    } else {
      alert("Profile updated successfully!");
    }

    // localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const navigate = useNavigate();

  if (isEditing) {
    return (
      <EditUserProfile
        {...profile}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    );
  }


  return (
    <div className="user-profile-page">
    <div className="sidebar">
      <button onClick={() => navigate("/main")} className="icon">💬</button>
      <button onClick={() => navigate("/profile")} className="icon">👤</button>
      <button onClick={() => navigate("/events")} className="icon">📅</button>
    </div>
    <div className="user-profile-container">
      <div className="avatar-section">
        <img
          src={profile.avatarUrl}
          alt={`${profile.username}'s avatar`}
          className="avatar"
        />
        <h2>{profile.name || profile.username}</h2>
        <p className="location">@{profile.username}</p>
      </div>

      {profile.bio && (
        <p className="bio">{profile.bio}</p>
      )}

      {profile.location && (
        <p className="location">{profile.location}</p>
      )}

      {profile.interests && profile.interests.length > 0 && (
        <div className="interests-section">
          <h3>Interests</h3>
          <ul className="interests-list">
            {profile.interests.map((interest, idx) => (
              <li key={idx} className="interest-item">{interest}</li>
            ))}
          </ul>
        </div>
      )}

      {profile.classes && profile.classes.length > 0 && (
        <div className="classes-section">
          <h3>Classes</h3>
          <ul className="classes-list">
            {profile.classes.map((cls, idx) => (
              <li key={idx} className="class-item">{cls}</li>
            ))}
          </ul>
        </div>
      )}

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <button onClick={() => setIsEditing(true)} style={{ padding: "0.5rem 1rem" }}>
          Edit Profile
        </button>
      </div>
    </div>
    </div>
  );
};

export default UserProfile;
