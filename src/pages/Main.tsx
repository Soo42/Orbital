import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supabase } from "../App";  
import Sidebar from "../components/layout/SideBar";
import ChatBox from "../components/layout/ChatBox";
import UserPanel from "../components/layout/UserPanel";
import UserProfile from "./UserProfile";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./Main.css";
import Events from "./Events";

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
}

function Main({ user }: MainProps) {
  const [selectedFriend, setSelectedFriend] = useState<string | null>("1");
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <button id = "logout" onClick={handleLogout}>Logout</button>
       {/* <div style={{ flexGrow: 1, padding: "20px" }}>
        <Routes>
          <Route path="chat" element={<ChatBox selectedFriendId={selectedFriend} />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="events" element={<Events />} />
        </Routes>
      </div> */}
          <div style={{ width: "60px", backgroundColor: "#111", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <button onClick={() => navigate("/main")} className="icon">💬</button>
      <button onClick={() => navigate("/profile")} className="icon">👤</button>
      <button onClick={() => navigate("/events")} className="icon">📅</button>
    </div>
      <div style={{left: "50px", width: "50%"}}><Sidebar onSelectFriend = {setSelectedFriend}/></div>
      <div style={{width: "200%"}}><ChatBox selectedFriendId ={selectedFriend}/></div>
      <UserPanel />
    </div>
  );
}

export default Main;