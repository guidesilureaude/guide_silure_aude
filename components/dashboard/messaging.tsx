import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: number
  from: string
  content: string
  timestamp: string
}

interface Conversation {
  id: string
  name: string
  avatar: string
  lastMessage: string
  lastMessageDate: string
  unreadCount: number
  messages: Message[]
}

const initialConversations: Conversation[] = [
  {
    id: '1',
    name: 'Client A',
    avatar: '/placeholder.svg?height=40&width=40',
    lastMessage: 'Le week-end prochain serait-il possible ?',
    lastMessageDate: '2024-03-10',
    unreadCount: 1,
    messages: [
      { id: 1, from: 'Client A', content: 'Bonjour, je souhaiterais réserver une session de pêche.', timestamp: '2024-03-10 10:00' },
      { id: 2, from: 'Vous', content: 'Bonjour ! Bien sûr, quand souhaiteriez-vous venir ?', timestamp: '2024-03-10 10:05' },
      { id: 3, from: 'Client A', content: 'Le week-end prochain serait-il possible ?', timestamp: '2024-03-10 10:10' },
    ]
  },
  {
    id: '2',
    name: 'Client B',
    avatar: '/placeholder.svg?height=40&width=40',
    lastMessage: 'Merci pour l\'information !',
    lastMessageDate: '2024-03-09',
    unreadCount: 0,
    messages: [
      { id: 1, from: 'Client B', content: 'Quels sont vos tarifs pour une journée complète ?', timestamp: '2024-03-09 14:00' },
      { id: 2, from: 'Vous', content: 'Bonjour, nos tarifs pour une journée complète sont de 150€ par personne.', timestamp: '2024-03-09 14:30' },
      { id: 3, from: 'Client B', content: 'Merci pour l\'information !', timestamp: '2024-03-09 14:35' },
    ]
  },
]

interface ConversationListProps {
  conversations: Conversation[];
  activeConversation: string;
  setActiveConversation: (id: string) => void;
}

function ConversationList({ conversations, activeConversation, setActiveConversation }: ConversationListProps) {
  return (
    <ScrollArea className="h-[400px] w-[300px] rounded-md border">
      {conversations.map((conv) => (
        <div
          key={conv.id}
          className={`flex items-center space-x-4 p-4 hover:bg-accent cursor-pointer ${
            activeConversation === conv.id ? 'bg-accent' : ''
          }`}
          onClick={() => setActiveConversation(conv.id)}
        >
          <Avatar>
            <AvatarImage src={conv.avatar} alt={conv.name} />
            <AvatarFallback>{conv.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{conv.name}</p>
            <p className="text-sm text-muted-foreground">{conv.lastMessage}</p>
          </div>
          <div className="text-xs text-muted-foreground">
            {conv.lastMessageDate}
            {conv.unreadCount > 0 && (
              <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                {conv.unreadCount}
              </span>
            )}
          </div>
        </div>
      ))}
    </ScrollArea>
  )
}

interface ChatProps {
  conversation: Conversation;
  sendMessage: (conversationId: string, content: string) => void;
}

function Chat({ conversation, sendMessage }: ChatProps) {
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      sendMessage(conversation.id, newMessage)
      setNewMessage('')
    }
  }

  return (
    <div className="flex flex-col h-[400px]">
      <ScrollArea className="flex-grow p-4 border rounded-md mb-4">
        {conversation.messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${message.from === 'Vous' ? 'text-right' : 'text-left'}`}
          >
            <div
              className={`inline-block p-2 rounded-lg ${
                message.from === 'Vous' ? 'bg-primary text-primary-foreground' : 'bg-muted'
              }`}
            >
              <p>{message.content}</p>
              <span className="text-xs opacity-50">{message.timestamp}</span>
            </div>
          </div>
        ))}
      </ScrollArea>
      <div className="flex gap-2">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Écrivez votre message ici..."
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <Button onClick={handleSendMessage}>Envoyer</Button>
      </div>
    </div>
  )
}

export function Messaging() {
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations)
  const [activeConversation, setActiveConversation] = useState<string>(conversations[0].id)

  const sendMessage = (conversationId: string, content: string) => {
    setConversations((prevConversations) =>
      prevConversations.map((conv) =>
        conv.id === conversationId
          ? {
              ...conv,
              messages: [
                ...conv.messages,
                {
                  id: conv.messages.length + 1,
                  from: 'Vous',
                  content,
                  timestamp: new Date().toLocaleString(),
                },
              ],
              lastMessage: content,
              lastMessageDate: new Date().toLocaleDateString(),
            }
          : conv
      )
    )
  }

  const activeConv = conversations.find((conv) => conv.id === activeConversation)

  return (
    <div className="flex flex-col h-[calc(100vh-200px)]">
      <h2 className="text-2xl font-semibold mb-4">Messagerie</h2>
      <div className="flex gap-4 flex-1">
        <ConversationList
          conversations={conversations}
          activeConversation={activeConversation}
          setActiveConversation={setActiveConversation}
        />
        {activeConv && <Chat conversation={activeConv} sendMessage={sendMessage} />}
      </div>
    </div>
  )
}