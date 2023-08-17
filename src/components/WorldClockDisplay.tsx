import React, { useEffect, useState } from "react";
import { useTimezoneStore } from "../states/timezoneStore";

interface Clock {
  timezone: string;
  time: string;
}

const WorldClockDisplay: React.FC = () => {
  const { selectedTimezones } = useTimezoneStore();
  const [clocks, setClocks] = useState<Clock[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedClocks = selectedTimezones.map((timezone) => ({
        timezone,
        time: new Date().toLocaleTimeString("en-US", { timeZone: timezone }),
      }));
      setClocks(updatedClocks);
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedTimezones]);

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">World Clock Display</h2>
      <div className="grid gap-4">
        {clocks.map((clock) => (
          <div
            key={clock.timezone}
            className="p-4 border rounded shadow flex justify-between items-center"
          >
            <div className="font-semibold">{clock.timezone}</div>
            <div className="text-gray-600">{clock.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldClockDisplay;
