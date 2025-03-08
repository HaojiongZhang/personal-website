
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Bot, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface Message {
  text: string;
  isBot: boolean;
}

const ChessBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm ChessBot. Ask me anything about chess!", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "The game of chess is over 1500 years old!",
        "There are more possible chess games than atoms in the observable universe.",
        "The longest official chess game lasted 269 moves.",
        "The word 'Checkmate' comes from the Persian phrase 'Shah Mat' which means 'the king is dead'.",
        "The shortest possible chess game ending in checkmate can be just 2 moves!",
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { text: randomResponse, isBot: true }]);
    }, 1000);
    
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-24 md:py-32">
        <section id="chessbot" className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">ChessBot</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your virtual chess assistant. Ask questions about chess rules, 
              strategies, or just chat about the game!
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto p-6 h-[500px] flex flex-col">
            <div className="flex-grow overflow-y-auto mb-4 space-y-4">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div 
                    className={`max-w-[80%] px-4 py-3 rounded-lg ${
                      message.isBot 
                        ? 'bg-secondary text-secondary-foreground rounded-tl-none' 
                        : 'bg-primary text-primary-foreground rounded-tr-none'
                    }`}
                  >
                    {message.isBot && (
                      <div className="flex items-center mb-1">
                        <Bot size={18} className="mr-2" />
                        <span className="font-medium">ChessBot</span>
                      </div>
                    )}
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Ask something about chess..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-grow"
              />
              <Button onClick={handleSendMessage}>
                <Send size={18} />
              </Button>
            </div>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ChessBot;
