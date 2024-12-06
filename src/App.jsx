import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import Dashboard from "./pages/Dashboard";
import Header from "./layout/header";
import useWebSocket from "react-use-websocket";
import { useEffect, useState } from "react";

function App() {
  const { sendMessage, lastMessage, readyState } = useWebSocket(
    "ws://localhost:5001"
  );
  //Chat
  const [messages, setMessages] = useState([]);

  //DashBoard
  const [userCounts, setUserCounts] = useState([]);
  const [timestamps, setTimestamps] = useState([]);
  const [users, setUsers] = useState([]);

  //ortak useEffect
  useEffect(() => {
    if (lastMessage !== null) {
      try {
        const data = JSON.parse(lastMessage.data);
        switch (data.type) {
          case "update":
            const currentTime = new Date().toLocaleTimeString();

            setUserCounts((prev) => [...prev, data.count]);

            setTimestamps((prev) => [...prev, currentTime]);
            if (data.users) {
              setUsers(data.users);
            }

            break;
          case "message":
            setMessages((prev) => [...prev, data.text]);
            break;
          default:
            console.warn("Bilinmeyen mesaj tipi:", data.type);
        }
      } catch (error) {
        console.error("Mesaj parse edilirken hata oluştu:", error);
      }
    }
  }, [lastMessage]);
  return (
    <Router>
      <div className="overflow-x-hidden flex flex-row">
        <Header />

        <div className="bg-blue-100 w-full h-[950px] DcDivi p-8">
          <Routes>
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  userCounts={userCounts}
                  timestamps={timestamps}
                  users={users}
                />
              }
            />
            <Route
              path="/chat"
              element={
                <ChatPage
                  sendMessage={sendMessage}
                  readyState={readyState}
                  messages={messages}
                  setMessages={setMessages}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
