import React from "react";
import { Message } from "../../types";

const MessageBubble: React.FC<{ message: Message }> = ({ message }) => {
  return (
    <div
      style={{
        // textAlign: message.sender === "user" ? "right" : "left",
        margin: "5px 0",
      }}
    >
      {/* <strong>{message.sender === "user" ? "" : "Your friend"}:</strong>{" "} */}
      {message.content}
    </div>
  );
};

export default MessageBubble;