import React from "react";
import "./UserProfile.css";

interface UserProfileProps {
  name?: string;
  username: string;
  bio?: string;
  avatarUrl: string;
  location?: string;
  interests?: string[];
  classes?: string[];
  streak?: number;
  connections?: number;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  username,
  bio,
  avatarUrl,
  location,
  interests = [],
  classes = [],
  streak = 0,
  connections = 0,
}) => {
  return (
    <div className="user-profile-container">
      <div className="avatar-section">
        <img src={avatarUrl} alt={`${username}'s avatar`} className="avatar" />
        <h2>{name || username}</h2>
        {location && <p className="location">{location}</p>}
      </div>

      {bio && <p className="bio">{bio}</p>}

      <div className="stats">
        <div>
          <strong>Streaks:</strong> {streak}
        </div>
        <div>
          <strong>Connections:</strong> {connections}
        </div>
      </div>

      {interests.length > 0 && (
        <div className="interests-section">
          <h3>Interests</h3>
          <ul className="interests-list">
            {interests.map((interest, idx) => (
              <li key={idx} className="interest-item">
                {interest}
              </li>
            ))}
          </ul>
        </div>
      )}

      {classes.length > 0 && (
        <div className="classes-section">
          <h3>Classes</h3>
          <ul className="classes-list">
            {classes.map((cls: string, idx: number) => (
              <li key={idx} className="class-item">
                {cls}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfile;