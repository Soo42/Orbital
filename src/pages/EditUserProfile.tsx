import React, { useState } from "react";

interface EditUserProfileProps {
  name?: string;
  username: string;
  bio?: string;
  avatarUrl: string;
  location?: string;
  interests?: string[];
  classes?: string[];
  onSave: (updatedProfile: {
    name?: string;
    username: string;
    bio?: string;
    avatarUrl: string;
    location?: string;
    interests: string[];
    classes: string[];
  }) => void;
  onCancel: () => void;
}

const EditUserProfile: React.FC<EditUserProfileProps> = ({
  name = "",
  username,
  bio = "",
  avatarUrl,
  location = "",
  interests = [],
  classes = [],
  onSave,
  onCancel,
}) => {
  const [formName, setFormName] = useState(name);
  const [formUsername, setFormUsername] = useState(username);
  const [formBio, setFormBio] = useState(bio);
  const [formAvatarUrl, setFormAvatarUrl] = useState(avatarUrl);
  const [formLocation, setFormLocation] = useState(location);
  const [formInterests, setFormInterests] = useState(interests.join(", "));
  const [formClasses, setFormClasses] = useState(classes.join(", "));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      name: formName,
      username: formUsername,
      bio: formBio,
      avatarUrl: formAvatarUrl,
      location: formLocation,
      interests: formInterests
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean),
      classes: formClasses
        .split(",")
        .map((c) => c.trim())
        .filter(Boolean),
    });
  };

  return (
    <form className="edit-user-profile" onSubmit={handleSubmit} style={{ padding: "1rem", maxWidth: "400px" }}>
      <label style={{ display: "block", marginBottom: "0.5rem" }}>
        Name:
        <input
          type="text"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
          placeholder="Name"
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
      </label>

      <label style={{ display: "block", marginBottom: "0.5rem" }}>
        Username:
        <input
          type="text"
          value={formUsername}
          onChange={(e) => setFormUsername(e.target.value)}
          placeholder="Username"
          required
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
      </label>

      <label style={{ display: "block", marginBottom: "0.5rem" }}>
        Bio:
        <textarea
          value={formBio}
          onChange={(e) => setFormBio(e.target.value)}
          placeholder="Bio"
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
      </label>

      <label style={{ display: "block", marginBottom: "0.5rem" }}>
        Avatar URL:
        <input
          type="text"
          value={formAvatarUrl}
          onChange={(e) => setFormAvatarUrl(e.target.value)}
          placeholder="Avatar URL"
          required
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
      </label>

      <label style={{ display: "block", marginBottom: "0.5rem" }}>
        Location:
        <input
          type="text"
          value={formLocation}
          onChange={(e) => setFormLocation(e.target.value)}
          placeholder="Location"
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
      </label>

      <label style={{ display: "block", marginBottom: "0.5rem" }}>
        Interests (comma separated):
        <input
          type="text"
          value={formInterests}
          onChange={(e) => setFormInterests(e.target.value)}
          placeholder="e.g. Hiking, Music, Startups"
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
      </label>

      <label style={{ display: "block", marginBottom: "0.5rem" }}>
        Classes (comma separated):
        <input
          type="text"
          value={formClasses}
          onChange={(e) => setFormClasses(e.target.value)}
          placeholder="e.g. CS1010, MA1521"
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
      </label>

      <div style={{ marginTop: "1rem" }}>
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          style={{ padding: "0.5rem 1rem", marginLeft: "10px" }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditUserProfile;
