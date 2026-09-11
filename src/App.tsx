import { HashRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { BookList } from "./pages/BookList";
import { VolumePage } from "./pages/VolumePage";
import { StoryPage } from "./pages/StoryPage";

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:bookSlug" element={<BookList />} />
        <Route path="/:bookSlug/volume/:volumeNumber" element={<VolumePage />} />
        <Route path="/:bookSlug/volume/:volumeNumber/part/:partNumber" element={<StoryPage />} />
      </Routes>
    </HashRouter>
  );
}
