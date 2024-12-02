import { useState } from "react";
import useWebSocket from "react-use-websocket";

function ChatPage() {
  const [user, setUser] = useState("");
  const [userJoin, setUserJoin] = useState(false);
  const { sendMessage, lastMessage } = useWebSocket("ws://localhost:5001");
  const [message, setMessage] = useState("");

  const handleClick = () => {
    sendMessage(message);
    setMessage("");
  };

  const userJoined = (e) => {
    e.preventDefault();
    if (user.length > 0) {
      return setUserJoin(true);
    }
  };

  const exitChat = () => {
    setUser("");
    setUserJoin(false);
  };
  console.log(lastMessage);

  return (
    <div className="app flex justify-center pt-40">
      {!userJoin ? (
        <div className="screen join-screen active bg-slate-400 w-[300px] flex justify-center items-center h-[250px]">
          <form className="flex gap-8 flex-col items-center">
            <h2 className="text-3xl font-semibold text-violet-600">
              Join Chatroom
            </h2>
            <div className="form-input flex flex-col items-center gap-2">
              <label htmlFor="username">Username</label>
              <input
                onChange={(e) => setUser(e.target.value)}
                value={user}
                type="text"
                id="username"
                className="border px-2 py-1 rounded"
              />
            </div>
            <div className="form-input">
              <button
                id="join-user"
                className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-6 py-1 rounded-full"
                onClick={userJoined}
              >
                Join
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="screen chat-screen bg-slate-600 w-[600px] h-[600px] flex flex-col">
          <header className="flex justify-between bg-[#8e72e1] px-8 py-3 text-white">
            <div className="logo font-semibold">Chatroom</div>
            <button
              id="exit-chat"
              onClick={exitChat}
              className="border px-3 hover:bg-violet-600 active:bg-violet-700 rounded"
            >
              Exit
            </button>
          </header>

          <div className="messages flex-1 overflow-auto bg-gray-200 p-4">
            <div className="update text-center italic py-2">
              {user} is joined the conversation
            </div>

            <div className="message my-message flex justify-end mb-4">
              <div className="max-w-[80%] bg-white shadow p-2 rounded">
                <div className="name text-sm text-gray-500 mb-1">{user}</div>
                <div className="text break-words">
                  {lastMessage ? lastMessage.data : "Henüz bir mesaj yok."}
                </div>
              </div>
            </div>

            <div className="message other-message flex justify-start mb-4">
              <div className="max-w-[80%] bg-white shadow p-2 rounded">
                <div className="name text-sm text-gray-500 mb-1">Abc</div>
                <div className="text break-words">Hello</div>
              </div>
            </div>
          </div>

          <div className="typebox bg-[#8e72e1] flex items-center h-[50px] border-t">
            <input
              type="text"
              id="message-input"
              className="flex-1 h-full border px-2 text-lg"
              placeholder="Type a message..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <button
              id="send-message"
              onClick={handleClick}
              className="w-[80px] h-full hover:bg-violet-600 active:bg-violet-700 text-white font-semibold text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatPage;