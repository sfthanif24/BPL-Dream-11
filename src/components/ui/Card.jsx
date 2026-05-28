import { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const Card = ({
  player,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelectPlayer = () => () => {
    let newCoin = coin - player.price;
    if (newCoin >= 0) {
      setCoin(coin - player.price);
    } else {
      toast.error("You don't have enough coins to select this player.");
      return;
    }

    toast.success(`${player.playerName} has been selected!`);
    setIsSelected(true);
    setSelectedPlayers([...selectedPlayers, player]);
  };
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={player.playerImg} alt={player.playerName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
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

        <div className="card-actions justify-between items-center">
          <p className="font-semibold">Price: ${player.price}</p>
          <button
            className="btn"
            onClick={handleSelectPlayer()}
            disabled={isSelected}
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
