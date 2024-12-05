import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import useWebSocket from "react-use-websocket";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function Dashboard() {
  const [userCounts, setUserCounts] = useState([]);
  const [timestamps, setTimestamps] = useState([]);
  const { lastMessage } = useWebSocket("ws://localhost:5001");

  useEffect(() => {
    if (lastMessage !== null) {
      try {
        const data = JSON.parse(lastMessage.data);
        if (data.type === "update") {
          const currentTime = new Date().toLocaleTimeString();

          setUserCounts((prev) => [...prev, data.count]);
          setTimestamps((prev) => [...prev, currentTime]);
        }
      } catch (error) {
        console.error("Mesaj parse edilirken hata oluştu:", error);
      }
    }
  }, [lastMessage]);
  console.log(userCounts);
  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: "Aktif Kullanıcı Sayısı",
        data: userCounts,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        title: { display: true, text: "Zaman" },
      },
      y: {
        title: { display: true, text: "Kullanıcı Sayısı" },
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="dashboard flex justify-center pt-40">
      <div className="screen chat-screen bg-slate-200 w-[600px] h-[600px] flex flex-col">
        <h1>Canlı kullanıcı bağlantı logları</h1>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default Dashboard;
