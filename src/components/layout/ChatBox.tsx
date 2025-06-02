import React, {useState, useEffect} from "react";
import ChatHeader from "../chat/ChatHeader";
import MessageBubble from "../chat/MessageBubble";
import Message from "../chat/Message";
import TypingIndicator from "../shared/TypingIndicator";
import { JSX } from "react";

interface ChatBoxProps {
  selectedFriendId: string | null;
}

function ChatBox({ selectedFriendId }: ChatBoxProps): JSX.Element {
    return <div>
        <Message/>
    </div>;
}

export default ChatBox;
// This component represents the chat box area where messages are displayed
// and users can send new messages. It includes a chat header, message bubbles,
// a typing indicator, and an input field for new messages.