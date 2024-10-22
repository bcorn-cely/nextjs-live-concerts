'use client'

import { useState, useEffect, useRef } from 'react'
import { useChat } from 'ai/react'
import { SendHorizontal, Loader2, MessageCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    initialMessages: [
      {
        id: 'welcome',
        role: 'assistant',
        content: "Hello! I'm your AI assistant for artists and events. How can I help you today?"
      }
    ]
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="mb-4 p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg max-w-xs cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => setIsOpen(true)}
          >
            <p className="text-sm font-medium mb-2">{messages[0].content}</p>
            <button
              className="text-xs bg-white text-indigo-600 px-3 py-1 rounded-full hover:bg-indigo-100 transition-colors duration-300"
            >
              Start Chat
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={isOpen ? { width: 384, height: 512 } : { width: 64, height: 64 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="bg-white rounded-lg shadow-xl overflow-hidden"
        style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          zIndex: 50,
        }}
      >
        {isOpen ? (
          <div className="flex flex-col h-full">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4 flex justify-between items-center">
              <h3 className="font-semibold">AI Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === 'assistant' ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === 'assistant'
                        ? 'bg-white text-gray-800 shadow'
                        : 'bg-indigo-600 text-white'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-gray-800 placeholder-gray-400 bg-white"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full p-2 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-colors duration-300"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <SendHorizontal className="w-5 h-5" />
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-colors duration-300"
          >
            <MessageCircle className="w-8 h-8" />
          </motion.button>
        )}
      </motion.div>
    </div>
  )
}