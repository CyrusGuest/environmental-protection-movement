import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Sources from "./pages/Sources";
import KeyFigures from "./pages/KeyFigures";
import ModernConnections from "./pages/ModernConnections";
import KeyEvents from "./pages/KeyEvents";

function App() {
  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="key-figures" element={<KeyFigures />} />
        <Route path="modern-connections" element={<ModernConnections />} />
        <Route path="key-events" element={<KeyEvents />} />
        <Route path="sources" element={<Sources />} />
      </Routes>
    </>
  );
}

export default App;
