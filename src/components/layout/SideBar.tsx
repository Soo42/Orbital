import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import SearchBar from "../shared/SearchBar";
import ChatList from "../chat/ChatList";
import { supabase } from "../../App";
import { Friend } from "../../types";

interface SidebarProps {
  onSelectFriend: (id: string) => void;
}

const linkStyle = {
  display: "block",
  color: "white",
  padding: "10px 20px",
  textDecoration: "none",
};

function Sidebar({ onSelectFriend }: { onSelectFriend: (id: string) => void }): React.ReactElement {

  const [friends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      const { data, error } = await supabase
        .from("profiles") 
        .select("id, username")
        .neq("id", user?.id); 

      if (data) setFriends(data);
    };

    fetchUsers();
  }, []);

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