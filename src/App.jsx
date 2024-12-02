import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import Dashboard from "./layout/Dashboard";
import Header from "./layout/header";

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden flex flex-row">
        <Header />

        <div className="bg-slate-300 w-full h-[950px] DcDivi p-8">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
