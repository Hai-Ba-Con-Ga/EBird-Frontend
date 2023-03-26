import { IconSend } from "@tabler/icons-react";
import React, { useState } from "react";
import { ChatBox, ChatFrame, ChatItem, ChatMessage } from "./table.style";

type Props = {
	handleSendMessage: (message: string) => void;
	messages: any[];
};

function TableChat({ handleSendMessage, messages }: Props) {
	const [message, setMessage] = useState<string>("");
	return (
		<ChatFrame
			onSubmit={(e) => {
				e.preventDefault();
				handleSendMessage(message);
				setMessage("");
			}}
		>
			<h3>Chat Box</h3>
			<ChatBox>
				{messages?.map((msg, i) => (
					<ChatItem key={i}>
						<span>{msg?.user}</span>
						<span>{msg?.message}</span>
					</ChatItem>
				))}
			</ChatBox>
			<ChatMessage>
				<input
					type="text"
					placeholder="Type something..."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<IconSend
					onClick={() => {
						handleSendMessage(message);
						setMessage("");
					}}
				/>
			</ChatMessage>
		</ChatFrame>
	);
}

export default TableChat;
