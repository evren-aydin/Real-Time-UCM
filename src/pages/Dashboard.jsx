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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function Dashboard({ timestamps, userCounts, users }) {
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
      <div className="screen chat-screen bg-slate-100 w-[600px] h-[600px] flex flex-col">
        <h1 className="flex justify-between bg-[#8e72e1] px-8 py-3 text-white">
          Canlı kullanıcı bağlantı logları
        </h1>
        <Line data={chartData} options={chartOptions} />
        <h2 className="flex justify-between bg-[#8e72e1] px-8 py-3 text-white">
          Kullanıcı Detayları
        </h2>
        <div
          className="table-container"
          style={{ maxHeight: "200px", overflowY: "auto" }}
        >
          <table className="table-auto w-full border-collapse border border-gray-400 mt-2">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">IP Adresi</th>
                <th className="border border-gray-400 px-4 py-2">
                  Bağlantı Süresi
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 px-4 py-2">
                    {user.ip}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {user.connectionTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
