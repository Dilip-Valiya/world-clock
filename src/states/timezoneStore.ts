import { create } from "zustand";
import { DateTime, IANAZone } from "luxon";

interface TimezoneStore {
  selectedTimezones: string[];
  convertDatetime: (
    inputDatetime: string,
    sourceTimezone: string,
    targetTimezone: string
  ) => string;
}

export const useTimezoneStore = create<TimezoneStore>((set) => ({
  selectedTimezones: [
    "America/New_York",
    "Europe/London",
    "Asia/Kolkata",
    "Australia/Sydney",
    "Africa/Johannesburg",
    "America/Los_Angeles",
    "Asia/Tokyo",
    // Add more time zones here
  ],
  convertDatetime: (inputDatetime, sourceTimezone, targetTimezone) => {
    const sourceZone = IANAZone.create(sourceTimezone);
    const targetZone = IANAZone.create(targetTimezone);

    const datetime = DateTime.fromISO(inputDatetime, { zone: sourceZone });
    const convertedDatetime = datetime
      .setZone(targetZone)
      .toFormat("yyyy-MM-dd HH:mm:ss");

    return convertedDatetime;
  },
}));
