import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedCard = ({ player, handleDeleteSelectedPlayer }) => {
  return (
    <div className="flex items-center justify-between gap-6 p-10 rounded-2xl border">
      <div className="flex items-center gap-6">
        <img
          src={player.playerImage}
          alt={player.playerName}
          className="w-auto h-18.75 rounded-md"
        />
        <div>
          <h2 className="flex items-center gap-2 font-semibold text-2xl">
            <FaUser /> {player.playerName}
          </h2>
          <p>{player.playerType}</p>
        </div>
      </div>
      <button
        className="btn text-red-500"
        onClick={() => handleDeleteSelectedPlayer(player)}
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default SelectedCard;
