import { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers.jsx/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise }) => {
  const players = use(playersPromise);

  const [selectedType, setSelectedType] = useState("available");
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between gap-4 mb-5">
        {selectedType === "available" ? (
          <h2 className="text-3xl font-bold">Available Players</h2>
        ) : (
          <h2 className="text-3xl font-bold">Selected Players(2/6)</h2>
        )}

        <div>
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E5FE29]" : ""} rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E5FE29]" : ""} rounded-l-none rounded-r-xl`}
          >
            Selected (0)
          </button>
        </div>
      </div>

      {selectedType === "available" ? (
        <AvailablePlayers players={players} />
      ) : (
        <SelectedPlayers />
      )}
    </div>
  );
};

export default Players;
