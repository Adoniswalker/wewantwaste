import { useState, useEffect } from "react";
import { fetchSkips } from "./api";
import SkipList from "./components/SkipList";
import Header from "./components/Header";
import type { WasteItem } from "./types/Waste.ts";
import NavBar from "./components/NavBar.tsx";

function App() {
  const [skips, setSkips] = useState<WasteItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSkips = async () => {
      try {
        const data = await fetchSkips();
        setSkips(data);
        setLoading(false);
      } catch {
        setError("Failed to load skips");
        setLoading(false);
      }
    };
    loadSkips();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <Header />
      {loading && (
        <div className="flex justify-center p-4">
          <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      )}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {!loading && !error && <SkipList skips={skips} />}
    </div>
  );
}

export default App;
