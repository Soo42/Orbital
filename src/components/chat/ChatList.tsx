import React from "react";
import { useState } from "react";
import Search from "../shared/SearchBar";

// type ChatListItemProps = {
//     name: string;
//     lastMessage: string;
// };

// function ChatList({ name, lastMessage }: ChatListItemProps) {
//     return ;
// }

// export default ChatList;

interface Friend {
  id: string;
  name: string;
  lastMessage: string;
}

interface ChatListProps {
  onSelect: (id: string) => void;
}

function ChatList({ onSelect }: ChatListProps): React.ReactElement {
  const [search, setSearch] = useState("");

  const mockFriends: Friend[] = [
    { id: "1", name: "Wenjie", lastMessage: "We have done our basic UI!" },
    { id: "2", name: "LiNkUS", lastMessage: "Wow, so cool!" },
  ];

  const filteredFriends = mockFriends.filter((friend) =>
    friend.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Search value={search} onChange={setSearch} />

      <div style={{ overflowY: "auto", flexGrow: 1 }}>
        {filteredFriends.map((friend) => (
          <div
            key={friend.id}
            onClick={() => onSelect(friend.id)}
            style={{
              padding: "10px",
              cursor: "pointer",
              borderBottom: "1px solid #333",
              color: "white",
            }}
          >
            <div style={{ fontWeight: "bold" }}>{friend.name}</div>
            <div style={{ fontSize: "0.875rem", color: "#ccc" }}>{friend.lastMessage}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatList;