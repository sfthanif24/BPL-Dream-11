import { use } from "react";
import AvailablePlayers from "../../AvailablePlayers/AvailablePlayers";

const Players = ({ playerPromise, selectedPlayers, onSelectPlayer }) => {
  const players = use(playerPromise);
  return (
    <div
      id="players-section"
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="bg-white">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <h2 className="text-2xl font-black text-slate-950">
            Available Players
          </h2>
          <div className="flex items-center overflow-hidden rounded-md border border-slate-200 text-sm font-medium shadow-sm">
            <button className="bg-[#f2f25c] px-5 py-2 text-slate-900">
              Available
            </button>
            <button className="bg-white px-5 py-2 text-slate-400">
              Selected ({selectedPlayers.length})
            </button>
          </div>
        </div>
        <div className="py-6">
          <AvailablePlayers
            players={players}
            selectedPlayers={selectedPlayers}
            onSelectPlayer={onSelectPlayer}
          />
        </div>
      </div>
    </div>
  );
};

export default Players;
