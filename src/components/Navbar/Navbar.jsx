import logoImg from "../../assets/logo.png";
import { FaCoins } from "react-icons/fa";

const Navbar = ({ coins }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center px-6 pb-4 pt-4 lg:px-10">
        <a
          href="#hero"
          aria-label="BPL Dream 11 home"
          className="justify-self-start"
        >
          <img src={logoImg} alt="BPL Dream 11 logo" className="h-14 w-auto" />
        </a>

        <nav className="hidden items-center justify-center gap-12 text-[15px] font-medium text-[#707070] md:flex">
          <a href="#hero" className="transition hover:text-slate-950">
            Home
          </a>
          <a
            href="#players-section"
            className="transition hover:text-slate-950"
          >
            Fixture
          </a>
          <a
            href="#players-section"
            className="transition hover:text-slate-950"
          >
            Teams
          </a>
          <a
            href="#players-section"
            className="transition hover:text-slate-950"
          >
            Schedules
          </a>
        </nav>

        <div className="inline-flex justify-self-end items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-[15px] font-extrabold text-slate-900 shadow-[0_6px_16px_rgba(15,23,42,0.05)]">
          <span>{coins.toLocaleString()} Coin</span>
          <FaCoins className="text-amber-500" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
