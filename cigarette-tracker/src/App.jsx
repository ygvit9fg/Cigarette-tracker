import React, { useState } from "react";
import { getInsult } from "./api";

function App() {
  const [loading, setLoading] = useState(false);
  const [insult, setInsult] = useState("");

  const playSound = () => {
    const audio = new Audio("/sword-blade-7.mp3");
    audio.play();
  };

  const handleClick = async () => {
    setLoading(true);
    playSound();
    try {
      const text = await getInsult();
      setInsult(text);
    } catch (error) {
      setInsult("Ошибка генерации");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <button
        onClick={handleClick}
        disabled={loading}
        className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-4xl font-bold px-6 py-3 rounded-full shadow-lg transition"
      >
        {loading ? "Генерируем..." : "+"}
      </button>

      {insult && (
        <p className="mt-6 text-xl max-w-xl text-center">{insult}</p>
      )}
    </div>
  );
}

export default App;
