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
import PageNotFound from "./components/PageNotFound";
import { ALARM_CLOCK, TIMEZONE_CONVERTER, WORLD_CLOCK } from "./constant";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path={WORLD_CLOCK} element={<WorldClockDisplay />} />
        <Route path={TIMEZONE_CONVERTER} element={<TimezoneConverter />} />
        <Route path={ALARM_CLOCK} element={<AlarmClocks />} />
        <Route path="/" element={<Navigate to={WORLD_CLOCK} replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
