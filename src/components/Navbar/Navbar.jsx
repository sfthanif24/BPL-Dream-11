import React from "react";
import dollerImg from "../../assets/dollar_1.png";

const Navbar = () => {
  return (
    <div class="navbar bg-base-100 shadow-sm container mx-auto">
      <div class="flex-1">
        <a class="$$btn $$btn-ghost text-xl">daisyUI</a>
      </div>
      <div class="flex-none">
        <button class="flex justify-between items-center gap-2 font-bold text-xl">
          0 Coins
          <img src={dollerImg} alt="DollerIcon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
