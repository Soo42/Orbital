import { useEffect, useState } from "react";
import UserStatus from "../user/UserStatus";

  
type ChatHeaderProps = {
    name: string;
};
  
function ChatHeader({ name }: ChatHeaderProps) {
    return <div className="chat-header">
        <h2>{name}</h2>
        <UserStatus name={name} status="online" />
    </div>;
}

export default ChatHeader;