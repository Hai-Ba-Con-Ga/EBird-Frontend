import { IconSend } from '@tabler/icons-react'
import React from 'react'
import { ChatBox, ChatFrame, ChatItem, ChatMessage } from './table.style'

type Props = {
    a : any
}

function TableChat({a}: Props) {
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
            <input type="text" placeholder="Type something..." />
            <IconSend />
          </ChatMessage>
        </ChatFrame>
  )
}

export default TableChat