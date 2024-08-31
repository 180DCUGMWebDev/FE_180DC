"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import StatsCard from "./StatsCard";
import Loading from "./Loading";

export default function Content() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("/api/analytics");
        setStats(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const statsData = [
    { value: stats[0].screenPageViews, label: "Pageviews" },
    { value: stats[0].activeUsers, label: "Active Users" },
  ];

  return (
    <div className="h-screen w-full bg-[#F8F8F8] lg:ml-[250px]  mx-auto flex px-4 font-latoSemibold flex-col ">
      <h1 className=" text-xl mt-[165px] ">
        Hei, karyawan! semangat kerjanya 😁
      </h1>
      <div className="flex flex-col lg:flex-row gap-4 max-w-sm w-full mt-8">
        {statsData.map((stat, index) => ( 
          <div key={index} className="w-full">
            <StatsCard value={stat.value} label={stat.label} />
          </div>
        ))}
      </div>
    </div>
  );
}
