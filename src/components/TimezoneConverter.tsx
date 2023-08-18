import React, { useState } from "react";
import { DateTime } from "luxon";
import { Input, Select } from "antd";

import "../styles/TimezoneConverter.css"; // Create this CSS file for custom styling
import useDocumentTitle from "../lib/useDocumentTitle";

const { Option } = Select;

const TimezoneConverter: React.FC = () => {
  const [fromTime, setFromTime] = useState(DateTime.local().toFormat("HH:mm"));
  const [fromTimezone, setFromTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const handleFromTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFromTime(event.target.value);
  };

  const handleFromTimezoneChange = (value: string) => {
    setFromTimezone(value);
  };

  const timeOptions = [
    { value: "America/New_York", label: "America/New_York" },
    { value: "Asia/Calcutta", label: "Asia/Kolkata" },
    { value: "Asia/Tokyo", label: "Asia/Tokyo" },
    { value: "Europe/London", label: "Europe/London" },
    { value: "Australia/Sydney", label: "Australia/Sydney" },
    { value: "Africa/Johannesburg", label: "Africa/Johannesburg" },
    { value: "America/Los_Angeles", label: "America/Los_Angeles" },
    // ... Add more timezone options
  ];

  const convertedTime = DateTime.fromFormat(fromTime, "HH:mm")
    .setZone(fromTimezone)
    .toFormat("hh:mm a");

  const localTime = DateTime.local().toFormat("hh:mm a");

  useDocumentTitle("World Clock UI | Timezone Converter");

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Timezone Converter</h2>
      <div className="grid gap-4 md:flex md:flex-col md:items-center">
        <div className="md:flex md:items-center md:justify-between w-full">
          <div className="flex flex-col md:flex-row md:items-center md:w-2/5">
            <label className="mr-2">From&nbsp;Time:</label>
            <Input
              type="time"
              value={fromTime}
              onChange={handleFromTimeChange}
              className="border rounded px-2 py-1"
              placeholder="Enter time in HH:mm format"
            />
          </div>
          <div className="flex flex-col md:ml-4 md:flex-row md:items-center md:w-2/5">
            <label className="mr-2">From&nbsp;Timezone:</label>
            <Select
              value={fromTimezone}
              onChange={handleFromTimezoneChange}
              className="border rounded"
            >
              {timeOptions.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-around w-full">
          <div className="text-lg mt-4 md:mt-0">
            <p>Converted Time:</p>
            <p className="font-semibold">{convertedTime}</p>
          </div>
          <div className="text-lg mt-4 md:mt-0">
            <p>Local Time:</p>
            <p className="font-semibold">{localTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimezoneConverter;
