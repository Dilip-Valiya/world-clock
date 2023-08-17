import React, { useState, useEffect } from "react";
import { useTimezoneStore } from "../states/timezoneStore";
import { DateTime } from "luxon";

interface Clock {
  timezone: string;
  alarmTime: string;
}

const AlarmClocks: React.FC = () => {
  const { selectedTimezones } = useTimezoneStore();
  const [alarms, setAlarms] = useState<Clock[]>([]);
  const [notificationPermission, setNotificationPermission] =
    useState<NotificationPermission>("default");

  const handleAddAlarm = (timezone: string, alarmTime: string) => {
    setAlarms([...alarms, { timezone, alarmTime }]);
  };

  useEffect(() => {
    if (notificationPermission === "granted") {
      alarms.forEach((alarm) => {
        const currentTime = DateTime.now();
        const alarmDateTime = DateTime.fromFormat(alarm.alarmTime, "HH:mm", {
          zone: alarm.timezone,
        });
        if (
          alarmDateTime.hour === currentTime.hour &&
          alarmDateTime.minute === currentTime.minute
        ) {
          new Notification(`Alarm for ${alarm.timezone}`, {
            body: `It's time for your alarm!`,
          });
        }
      });
    }
  }, [notificationPermission, alarms]);

  useEffect(() => {
    // Request notification permission
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        setNotificationPermission(permission);
      });
    } else {
      setNotificationPermission("granted");
    }
  }, []);

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Alarm Clocks</h2>
      <div className="grid gap-4">
        {selectedTimezones.map((timezone) => (
          <div
            key={timezone}
            className="p-4 border rounded shadow flex justify-between items-center"
          >
            <div className="font-semibold">{timezone}</div>
            <input
              type="time"
              className="border rounded p-1"
              onChange={(e) => handleAddAlarm(timezone, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlarmClocks;
