import logoImg from "../../assets/logo.png";
import dollerImg from "../../assets/dollar_1.png";

const Navbar = ({ coin }) => {
  return (
    <div className="navbar container mx-auto flex items-center justify-between px-0 py-4">
      <div className="flex-none">
        <a href="#hero" className="btn btn-ghost px-0 hover:bg-transparent">
          <img src={logoImg} alt="BPL Dream 11 logo" className="h-12 w-auto" />
        </a>
      </div>
      <div className="dropdown dropdown-end md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost px-3 text-lg">
          ☰
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content menu-sm mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
        >
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#players-section">Fixture</a>
          </li>
          <li>
            <a href="#players-section">Teams</a>
          </li>
          <li>
            <a href="#players-section">Schedules</a>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex flex-1 items-center justify-center gap-8 text-sm text-base-content/70">
        <a href="#hero" className="transition hover:text-base-content">
          Home
        </a>
        <a
          href="#players-section"
          className="transition hover:text-base-content"
        >
          Fixture
        </a>
        <a
          href="#players-section"
          className="transition hover:text-base-content"
        >
          Teams
        </a>
        <a
          href="#players-section"
          className="transition hover:text-base-content"
        >
          Schedules
        </a>
      </div>
      <div className="flex-none">
        <button className="flex justify-between items-center gap-2 font-bold text-xl">
          {coin} Coins
          <img src={dollerImg} alt="DollerIcon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
