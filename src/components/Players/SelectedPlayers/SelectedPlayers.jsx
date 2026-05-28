import React from "react";
import SelectedCard from "../../ui/SelectedCard";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  const handleDeleteSelectedPlayer = (player) => {
    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName != player.playerName,
    );
    setSelectedPlayers(filteredPlayers);
    setCoin(coin + player.price);
  };
  return (
    <div>
      <div className="space-y-4">
        {selectedPlayers.length === 0 ? (
          <div className="h-100 flex items-center justify-center flex-col gap-4">
            <h2 className="font-semibold text-2xl">No players selected</h2>
            <p>Go to Available tab to select players</p>
          </div>
        ) : (
          selectedPlayers.map((player, index) => {
            return (
              <>
                <SelectedCard
                  key={index}
                  player={player}
                  handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
                />
              </>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SelectedPlayers;
