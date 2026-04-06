import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComment, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! I'm CareerFlow Assistant 🚀 How can I help you today? Ask me about roles, jobs, or how to use the platform!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Knowledge base for chatbot responses
  const knowledgeBase = {
    'hello|hi|hey|greetings': {
      responses: [
        "Hey there! 👋 Welcome to CareerFlow! How can I assist you today?",
        "Hello! 😊 Ready to find your perfect job role? I'm here to help!",
        "Hi! 🎉 I'm here to guide you through your career journey. What would you like to know?",
      ],
    },
    'what is|about|features|work': {
      responses: [
        "CareerFlow is your personal career guide! 🎯\n\n✨ Here's what we do:\n1. **Role Selection** - Choose from Backend, Frontend, Full Stack, DevOps, Data Science, or QA roles\n2. **Skills Assessment** - Take a quick 5-question quiz to assess your abilities\n3. **Job Matching** - Get personalized job recommendations based on your role and skills\n4. **Apply Now** - Find and apply to jobs that match your profile\n\nLet's get started! 🚀",
        "Welcome to CareerFlow! We help you find the perfect job that matches your skills and interests. Follow these steps:\n\n🎬 Step 1: Select your preferred job role\n📝 Step 2: Complete the skills assessment\n💼 Step 3: Browse matched jobs\n✅ Step 4: Apply to positions\n\nWhat's your next step?",
      ],
    },
    'roles|backend|frontend|full.*stack|devops|data.*science|qa': {
      responses: [
        "Great question! 🧑‍💻 We offer 6 amazing roles:\n\n🔹 **Backend Developer** - Server-side & database magic\n🔹 **Frontend Developer** - UI/UX & web design\n🔹 **Full Stack Developer** - Complete web development\n🔹 **DevOps Engineer** - Infrastructure & deployment\n🔹 **Data Scientist** - Analytics & ML magic\n🔹 **QA Engineer** - Testing & quality assurance\n\nEach role is tailored to different skills and interests. Choose wisely! 💡",
        "Our roles are:\n• Backend - APIs, databases, server logic\n• Frontend - Beautiful UIs, user experience\n• Full Stack - Both front and backend\n• DevOps - Cloud, infrastructure, deployment\n• Data Science - Data analysis, machine learning\n• QA - Testing, quality assurance\n\nWhich one interests you? 🤔",
      ],
    },
    'assessment|quiz|skills|questions': {
      responses: [
        "The Skills Assessment is a 5-question quiz 🎓 that helps us understand your expertise:\n\n1️⃣ Programming experience level\n2️⃣ Database knowledge\n3️⃣ Version control (Git)\n4️⃣ Cloud platform experience\n5️⃣ Problem-solving ability\n\nYour answers help us match you with jobs that fit your level! No pressure - just honest answers! 😊",
        "Our assessment includes questions about:\n✅ Your programming skills\n✅ Database experience\n✅ Git/version control\n✅ Cloud platforms\n✅ Problem-solving skills\n\nTake your time - your honest answers help us find better job matches! 🎯",
      ],
    },
    'jobs?|listings?|apply?|opportunities': {
      responses: [
        "Job Listings show opportunities matched to your role! 💼\n\n📌 You can:\n• Filter jobs by role\n• See job details (location, salary, requirements)\n• Check the 'New' badge for fresh opportunities\n• Click 'Apply Now' to submit your application\n\nFill up those applications! 🚀",
        "Once you complete the assessment, you'll see job listings tailored to you! 🎁\n\nEach job shows:\n✨ Job title & company\n📍 Location\n💰 Salary range\n📋 Requirements\n🟢 Status (New/Featured)\n\nReady to apply? Let's go! 💪",
      ],
    },
    'register?|sign.*up|account|profile': {
      responses: [
        "Getting started is easy! 📝\n\n1. Click **Register** in the navbar\n2. Fill in your email & password\n3. Start your career journey!\n\nOr you can use the **Register** button at the top right! 👆",
        "To create your profile:\n✏️ Go to the Register page\n✏️ Enter your name, email & password\n✏️ Start exploring roles & jobs!\n\nWe keep your data safe & secure! 🔒",
      ],
    },
    'help|support|contact|problem|issue|error': {
      responses: [
        "I'm here to help! 🤝\n\nLet me know what's troubling you:\n❓ Need help with registration?\n❓ Can't find a specific role?\n❓ Issues with the assessment?\n❓ Questions about job listings?\n\nLet's solve it together! 💡",
        "Oops, having trouble? 😟 I'm here to help!\n\nTell me more about:\n• What page you're on\n• What you're trying to do\n• What went wrong\n\nI'll do my best to assist! 🛠️",
      ],
    },
    'thanks|thank.*you|appreciate': {
      responses: [
        "You're welcome! 😊 Happy to help! Good luck with your career journey! 🚀",
        "Happy to assist! 🙌 Go find that dream job! 💼",
      ],
    },
    'bye|goodbye|exit|close|later': {
      responses: [
        "Bye! Good luck on your journey! 👋 Feel free to ask if you need help! 🚀",
        "See you later! 👋 Come back anytime you need help! 💪",
      ],
    },
  };

  const getRandomResponse = (responses) => {
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const generateBotResponse = (userInput) => {
    const input = userInput.toLowerCase().trim();

    // Find matching responses
    for (const [keywords, data] of Object.entries(knowledgeBase)) {
      const keywordArray = keywords.split('|');
      if (keywordArray.some((keyword) => input.includes(keyword))) {
        return getRandomResponse(data.responses);
      }
    }

    // Default response
    const defaultResponses = [
      "That's an interesting question! 🤔 Could you be more specific? Try asking about roles, jobs, assessment, registration, or how CareerFlow works!",
      "Hmm, I'm not sure about that one! 💭 Ask me about our job roles, skills assessment, or how to get started! I'm here to guide you! 😊",
      "Great question! 🎯 Try asking about:\n• Job roles available\n• Skills assessment\n• How to apply for jobs\n• Registration process\n\nI'm here to help! 🚀",
    ];

    return getRandomResponse(defaultResponses);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: generateBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className="chat-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <FaTimes />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <FaComment />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Chat Header */}
            <div className="chat-header">
              <div className="chat-header-content">
                <h3>CareerFlow Assistant 🤖</h3>
                <p>Always here to help! 💬</p>
              </div>
              <motion.button
                className="chat-close-btn"
                onClick={() => setIsOpen(false)}
                whileHover={{ rotate: 90 }}
              >
                <FaTimes />
              </motion.button>
            </div>

            {/* Messages Container */}
            <div className="chat-messages">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`message ${message.sender}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="message-bubble">
                      {message.text.split('\n').map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                    </div>
                    <span className="message-time">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div
                    className="message bot"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="message-bubble typing">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="chat-input-container">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything... 💭"
                className="chat-input"
                disabled={isLoading}
              />
              <motion.button
                className="chat-send-btn"
                onClick={handleSendMessage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading || !inputValue.trim()}
              >
                <FaPaperPlane />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
