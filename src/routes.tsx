// Routes.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import TimezoneConverter from "./components/TimezoneConverter";
import WorldClockDisplay from "./components/WorldClockDisplay";
import AlarmClocks from "./components/AlarmClocks";
import Navigation from "./components/Navigation";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/timezone-converter" element={<TimezoneConverter />} />
        <Route path="/world-clock" element={<WorldClockDisplay />} />
        <Route path="/alarm-clocks" element={<AlarmClocks />} />
        <Route
          path="/"
          element={<Navigate to="/timezone-converter" replace />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
