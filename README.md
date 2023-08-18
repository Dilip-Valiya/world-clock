# Project Idea: Timezone Converter and World Clock

**Description**:
Build a web application that allows users to convert time between different timezones and view multiple timezones on a world clock display.

## Features

1. **Timezone Converter**:
   Users can input a datetime. They can then choose a target timezone to which the input datetime should be converted. Display the converted datetime along with the time difference.

2. **World Clock Display**:
   Users can see the cities or locations to the world clock. Each clock should display the current time and date for that location.

3. **Alarm Clocks**:
   Enable users to set alarms for specific timezones, triggering a notification when the current time matches the alarm time.

## Implementation:

1. **Use the React framework**, to structure your application. Set up different routes for the timezone converter, world clock display and alarm/notification set for future time.
2. **Integrate Luxon** to handle timezone and datetime conversions. This library provides robust tools for working with dates and times, making it suitable for accurate timezone conversions.
3. **Responsive UI**: Use Tailwind CSS and Ant Design components to create a responsive and visually appealing user interface.
4. **State Management**: Utilize Zustand for state management to handle the user's selected timezones, input datetime, and other UI-related states.
5. **Type Safety**: Implement the project using TypeScript to ensure type safety and improve code quality.
