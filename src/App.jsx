import { Suspense, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/HomePage/Banner/Banner";
import Players from "./components/HomePage/Players/Players";

const fetchPlayer = async () => {
  const response = await fetch("/players.json");
  return response.json();
};

const playerPromise = fetchPlayer();

const App = () => {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleClaimCredit = () => {
    setCoins((currentCoins) => currentCoins + 1000000);
  };

  const handleSelectPlayer = (player) => {
    setSelectedPlayers((currentPlayers) => {
      const alreadySelected = currentPlayers.some(
        (selectedPlayer) => selectedPlayer.playerName === player.playerName,
      );

      if (alreadySelected || currentPlayers.length >= 11) {
        return currentPlayers;
      }

      return [...currentPlayers, player];
    });
  };

  const handleExplorePlayers = () => {
    const playersSection = document.getElementById("players-section");

    if (playersSection) {
      playersSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-slate-900">
      <Navbar coins={coins} onClaimCredit={handleClaimCredit} />
      <Banner
        coins={coins}
        onClaimCredit={handleClaimCredit}
        onExplorePlayers={handleExplorePlayers}
      />
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Players
          playerPromise={playerPromise}
          selectedPlayers={selectedPlayers}
          onSelectPlayer={handleSelectPlayer}
        />
      </Suspense>
    </div>
  );
};

export default App;
