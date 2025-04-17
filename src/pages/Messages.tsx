
import { useState } from "react";
import { BottomNav } from "@/components/ui/bottom-nav";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageBubble } from "@/components/message-bubble";
import { Search, Send, MessageSquare, Sparkles, Users } from "lucide-react";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");
  
  const chats = [
    {
      id: "1",
      name: "Emma Johnson",
      avatar: "https://i.pravatar.cc/150?img=1",
      lastMessage: "Are we still meeting at the hotel lobby?",
      timestamp: new Date(Date.now() - 1000 * 60 * 25), // 25 mins ago
      unread: 2,
    },
    {
      id: "2",
      name: "TripGenie AI",
      avatar: "",
      lastMessage: "I've found some great restaurants near your hotel!",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      unread: 0,
      isAI: true,
    },
    {
      id: "3",
      name: "Michael Chen",
      avatar: "https://i.pravatar.cc/150?img=3",
      lastMessage: "The museum tour was amazing!",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
      unread: 0,
    },
    {
      id: "4",
      name: "Sarah Wilson",
      avatar: "https://i.pravatar.cc/150?img=5",
      lastMessage: "I'm looking forward to our trip next month!",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
      unread: 0,
    },
  ];
  
  // Sample messages for the first chat
  const messages = [
    {
      id: "1",
      sender: "Emma Johnson",
      avatar: "https://i.pravatar.cc/150?img=1",
      content: "Hey! I'm planning to arrive at the hotel around 3 PM tomorrow.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
      isSender: false,
    },
    {
      id: "2",
      sender: "You",
      content: "That works for me. I'll be there around the same time.",
      timestamp: new Date(Date.now() - 1000 * 60 * 55), // 55 mins ago
      isSender: true,
    },
    {
      id: "3",
      sender: "Emma Johnson",
      avatar: "https://i.pravatar.cc/150?img=1",
      content: "Great! Should we meet in the lobby and then head to dinner?",
      timestamp: new Date(Date.now() - 1000 * 60 * 50), // 50 mins ago
      isSender: false,
    },
    {
      id: "4",
      sender: "You",
      content: "Yes, that sounds perfect. I found a nice restaurant near the hotel that has great reviews.",
      timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 mins ago
      isSender: true,
    },
    {
      id: "5",
      sender: "Emma Johnson",
      avatar: "https://i.pravatar.cc/150?img=1",
      content: "Perfect! Looking forward to it!",
      timestamp: new Date(Date.now() - 1000 * 60 * 40), // 40 mins ago
      isSender: false,
    },
    {
      id: "6",
      sender: "Emma Johnson",
      avatar: "https://i.pravatar.cc/150?img=1",
      content: "Are we still meeting at the hotel lobby?",
      timestamp: new Date(Date.now() - 1000 * 60 * 25), // 25 mins ago
      isSender: false,
    },
  ];
  
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    console.log("Sending message:", newMessage);
    setNewMessage("");
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="flex h-screen flex-col pb-16">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <h1 className="mb-3 text-2xl font-bold">Messages</h1>
        {!selectedChat && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search conversations" className="pl-9" />
          </div>
        )}
        {selectedChat && (
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedChat(null)}
            >
              Back
            </Button>
            <div className="font-medium">
              {chats.find(chat => chat.id === selectedChat)?.name}
            </div>
            <div className="w-16" />
          </div>
        )}
      </header>

      {/* Chat List */}
      {!selectedChat && (
        <div className="flex-1 p-4">
          <Tabs defaultValue="all">
            <TabsList className="w-full">
              <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
              <TabsTrigger value="trips" className="flex-1">Trip Chat</TabsTrigger>
              <TabsTrigger value="companions" className="flex-1">Companions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-4 space-y-4">
              {chats.map((chat) => (
                <div 
                  key={chat.id}
                  className="flex cursor-pointer items-center justify-between rounded-lg p-3 hover:bg-muted/50"
                  onClick={() => setSelectedChat(chat.id)}
                >
                  <div className="flex items-center gap-3">
                    <Avatar>
                      {chat.isAI ? (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-tripgenie-500 to-tripgenie-600">
                          <Sparkles size={16} className="text-white" />
                        </div>
                      ) : (
                        <>
                          <AvatarImage src={chat.avatar} />
                          <AvatarFallback>{chat.name[0]}</AvatarFallback>
                        </>
                      )}
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{chat.name}</span>
                        {chat.unread > 0 && (
                          <span className="rounded-full bg-primary px-1.5 py-0.5 text-xs text-white">
                            {chat.unread}
                          </span>
                        )}
                      </div>
                      <p className="line-clamp-1 text-sm text-muted-foreground">
                        {chat.lastMessage}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {formatTime(chat.timestamp)}
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="trips">
              <div className="mt-8 text-center text-muted-foreground">
                <MessageSquare className="mx-auto h-12 w-12 opacity-20" />
                <p className="mt-2">No trip chats yet</p>
              </div>
            </TabsContent>
            
            <TabsContent value="companions">
              <div className="mt-8 text-center text-muted-foreground">
                <Users className="mx-auto h-12 w-12 opacity-20" />
                <p className="mt-2">No companion chats yet</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}
      
      {/* Chat Messages */}
      {selectedChat && (
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-6">
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message.content}
                timestamp={message.timestamp}
                isSender={message.isSender}
                senderAvatar={message.isSender ? undefined : message.avatar}
                senderName={message.isSender ? undefined : message.sender}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Message Input */}
      {selectedChat && (
        <div className="border-t bg-background p-4">
          <div className="flex gap-2">
            <Input 
              placeholder="Type your message..." 
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
            />
            <Button 
              size="icon"
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="bg-tripgenie-500 hover:bg-tripgenie-600"
            >
              <Send size={18} />
            </Button>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Messages;
