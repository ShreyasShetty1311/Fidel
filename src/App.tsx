/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shell } from "./components/layout/Shell";
import { Landing } from "./pages/Landing";
import { Dashboard } from "./pages/Dashboard";
import { Onboarding } from "./pages/Onboarding";
import { Recommendations } from "./pages/Recommendations";
import { Portfolio } from "./pages/Portfolio";
import { Markets } from "./pages/Markets";
import { Signals } from "./pages/Signals";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route element={<Shell />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/research" element={<Recommendations />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/signals" element={<Signals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

