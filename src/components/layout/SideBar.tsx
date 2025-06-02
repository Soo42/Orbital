import React, {useState} from "react";
import { Link } from "react-router-dom";
import SearchBar from "../shared/SearchBar";
import ChatList from "../chat/ChatList";

interface SidebarProps {
  onSelectFriend: (id: string) => void;
}

const linkStyle = {
  display: "block",
  color: "white",
  padding: "10px 20px",
  textDecoration: "none",
};

function Sidebar({onSelectFriend}: SidebarProps): React.ReactElement {

  return (
    <div
      style={{
        width: "300px",
        height: "100vh",
        backgroundColor: "#111",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #333",
      }}
    >
      <ChatList onSelect={onSelectFriend} />
    </div>
  );
}

export default Sidebar;