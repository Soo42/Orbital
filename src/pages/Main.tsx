import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supabase } from "../App";  
import Sidebar from "../components/layout/SideBar";
import ChatBox from "../components/layout/ChatBox";
import UserPanel from "../components/layout/UserPanel";

interface MainProps {
  user: Session["user"];
}

function Main({ user }: MainProps) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <ChatBox />
      <UserPanel />
    </div>
  );
}

export default Main;