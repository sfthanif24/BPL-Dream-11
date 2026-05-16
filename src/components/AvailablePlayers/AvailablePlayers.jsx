import { FaGlobe, FaStar, FaUser } from "react-icons/fa";

const AvailablePlayers = ({ players, selectedPlayers, onSelectPlayer }) => {
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0,
    }).format(price);

  const isSelected = (playerName) =>
    selectedPlayers.some((player) => player.playerName === playerName);

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {players.map((player) => {
        const alreadySelected = isSelected(player.playerName);
        const squadFull = selectedPlayers.length >= 11 && !alreadySelected;

        return (
          <article
            key={`${player.playerName}-${player.playerCountry}`}
            className="group overflow-hidden rounded-xl border border-[#e8e8e8] bg-white p-4 shadow-[0_6px_18px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(15,23,42,0.1)]"
          >
            <div className="mb-4 h-46.25 overflow-hidden rounded-xl bg-[#ececec]">
              <img
                src={player.playerImg}
                alt={player.playerName}
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="flex items-center gap-2 text-[17px] font-extrabold text-slate-900">
              <FaUser className="text-slate-700" />
              <h3>{player.playerName}</h3>
            </div>

            <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <FaGlobe className="text-slate-600" />
                <span>{player.playerCountry}</span>
              </div>
              <span className="rounded-sm bg-[#f3f3f3] px-3 py-1 text-[12px] font-medium text-slate-500">
                {player.playerType}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
              <span className="font-semibold text-slate-800">Rating</span>
              <div className="inline-flex items-center gap-1 text-slate-600">
                <FaStar className="text-slate-700" />
                <span>{player.rating}</span>
              </div>
            </div>

            {alreadySelected ? (
              <div className="mt-3 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                Selected
              </div>
            ) : null}

            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">Batting</span>
                <span>{player.battingStyle}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">Bowling</span>
                <span>{player.bowlingStyle}</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="font-semibold text-slate-900">
                  Price: ${formatPrice(player.price)}
                </span>
                <span className="rounded-md border border-slate-200 px-3 py-1 text-[12px] text-slate-500">
                  {player.playerType}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectPlayer(player)}
              disabled={alreadySelected || squadFull}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
            >
              <FaUser />
              {alreadySelected
                ? "Picked"
                : squadFull
                  ? "Squad Full"
                  : "Pick Player"}
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
