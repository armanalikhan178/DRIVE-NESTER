import { useState, useEffect } from "react";

const ProjectTimer = () => {
  const projectStart = new Date("2025-08-01T10:00:00"); // your project start date

  
  const [currentTime, setCurrentTime] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      // ===== Current Time (Digital Clock) =====
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      setCurrentTime(
        `${hours.toString().padStart(2, "0")}:` +
        `${minutes.toString().padStart(2, "0")}:` +
        `${seconds.toString().padStart(2, "0")}`
      );

      // ===== Greeting Based on Time =====
      let greet = "";
      if (hours >= 5 && hours < 12) greet = "Good Morning";
      else if (hours >= 12 && hours < 17) greet = "Good Afternoon";
      else if (hours >= 17 && hours < 21) greet = "Good Evening";
      else greet = "Good Night";
      setGreeting(greet);

      // ===== Project Time Spent =====
      const diff = Math.floor((now - projectStart) / 1000);
      const days = Math.floor(diff / (3600 * 24));
      const spentHours = Math.floor((diff % (3600 * 24)) / 3600);
      const spentMinutes = Math.floor((diff % 3600) / 60);
      const spentSeconds = diff % 60;

      //let formatted =
        `${days > 0 ? days + "d " : ""}` +
        `${spentHours.toString().padStart(2, "0")}:` +
        `${spentMinutes.toString().padStart(2, "0")}:` +
        `${spentSeconds.toString().padStart(2, "0")}`;

    //  setTimeSpent(formatted);
    }, 1000);

    return () => clearInterval(timer);
  }, );

  return (
    <div className="ml-1 text-cyan-300 font-medium text-sm">
      {greeting}: Armaan :{currentTime}
    </div>
  );
};

export default ProjectTimer;
