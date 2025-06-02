import React, { useState } from "react";
import "./UserProfile.css";
import EditUserProfile from "./EditUserProfile";

export interface UserProfileProps {
  name?: string;
  username: string;
  bio?: string;
  avatarUrl: string;
  location?: string;
  interests?: string[];
  classes?: string[];
}

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

  const handleSave = (updatedProfile: UserProfileProps) => {
    setProfile(updatedProfile);
    setIsEditing(false);
    localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

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
  );
};

export default UserProfile;
