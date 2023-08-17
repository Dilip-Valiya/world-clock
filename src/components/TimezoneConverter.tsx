import React, { useState } from "react";
import { useTimezoneStore } from "../states/timezoneStore";

const TimezoneConverter: React.FC = () => {
  const [inputDatetime, setInputDatetime] = useState("");
  const [selectedLocalTimezone, setSelectedLocalTimezone] =
    useState("Asia/Kolkata");
  const [selectedTargetTimezone, setSelectedTargetTimezone] =
    useState("America/New_York");
  const [convertedDatetime, setConvertedDatetime] = useState("");

  const { convertDatetime } = useTimezoneStore();

  const handleConvert = () => {
    const converted = convertDatetime(
      inputDatetime,
      selectedLocalTimezone,
      selectedTargetTimezone
    );
    setConvertedDatetime(converted);
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Timezone Converter</h2>
      <label className="block mb-2">
        Input Datetime:
        <input
          type="datetime-local"
          className="block w-full mt-1 p-1 border rounded"
          value={inputDatetime}
          onChange={(e) => setInputDatetime(e.target.value)}
        />
      </label>
      <div className="flex gap-4">
        <label className="block w-1/2">
          Local Timezone:
          <select
            className="block w-full mt-1 p-1 border rounded"
            value={selectedLocalTimezone}
            onChange={(e) => setSelectedLocalTimezone(e.target.value)}
          >
            <option value="Asia/Kolkata">India</option>
            <option value="America/New_York">US</option>
            <option value="Europe/London">UK</option>
            {/* Add more timezone options */}
          </select>
        </label>
        <label className="block w-1/2">
          Target Timezone:
          <select
            className="block w-full mt-1 p-1 border rounded"
            value={selectedTargetTimezone}
            onChange={(e) => setSelectedTargetTimezone(e.target.value)}
          >
            <option value="Asia/Kolkata">India</option>
            <option value="America/New_York">US</option>
            <option value="Europe/London">UK</option>
            {/* Add more timezone options */}
          </select>
        </label>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleConvert}
      >
        Convert
      </button>
      <p className="mt-2">
        {convertedDatetime !== "" && convertedDatetime !== "Invalid DateTime"
          ? `Converted Datetime: ${convertedDatetime}`
          : "No conversion performed yet."}
      </p>
    </div>
  );
};

export default TimezoneConverter;
