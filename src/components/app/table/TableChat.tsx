import { IconSend } from '@tabler/icons-react'
import React, { useState } from 'react'
import { ChatBox, ChatFrame, ChatItem, ChatMessage } from './table.style'

type Props = {
   handleSendMessage : (message: string)=>void
}

function TableChat({handleSendMessage}: Props) {
  const [message, setMessage] = useState<string>('');
  return (
    <ChatFrame>
          <ChatBox>
            <ChatItem>
              <span>WyvernP</span>
              <span>
                Hello Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolores illum accusamus iste expedita maxime at nesciunt atque
                non vitae ad!
              </span>
            </ChatItem>
            <ChatItem>
              <span>WyvernP</span>
              <span>
                Hello Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolores illum accusamus iste expedita maxime at nesciunt atque
                non vitae ad!
              </span>
            </ChatItem>
            <ChatItem>
              <span>WyvernP</span>
              <span>
                Hello Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolores illum accusamus iste expedita maxime at nesciunt atque
                non vitae ad!
              </span>
            </ChatItem>
          </ChatBox>
          <ChatMessage>
            <input type="text" placeholder="Type something..." value={message} onChange={(e)=>setMessage(e.target.value)} />
            <IconSend onClick={()=>handleSendMessage(message)}/>
          </ChatMessage>
        </ChatFrame>
  )
}

export default TableChat