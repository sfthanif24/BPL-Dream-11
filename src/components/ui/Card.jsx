import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const Card = ({ player }) => {
  return (
      <div class="card bg-base-100 shadow-sm">
        <figure>
          <img src={player.playerImg} alt={player.playerName} />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            <FaUser /> {player.playerName}
          </h2>
          <div className="flex justify-between gap-2 items-center">
            <div className="flex items-center gap-2">
              <FaFlag />
              <p>{player.playerCountry}</p>
            </div>
            <button className="btn">{player.playerType}</button>
          </div>

          <div className="divider"></div>

          <h2 className="font-bold">{player.rating}</h2>

          <div className="flex justify-between gap-4 font-bold">
            <p>{player.battingStyle}</p>
            <p className="text-right">{player.bowlingStyle}</p>
          </div>

          <div class="card-actions justify-between items-center">
            <p className="font-semibold">Price: ${player.price}</p>
            <button class="btn">Chose Player</button>
          </div>
        </div>
      </div>
  );
};

export default Card;
