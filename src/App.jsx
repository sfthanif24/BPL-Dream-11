import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Homepage/Banner/Banner";
import Players from "./components/Players/Players";
import { Suspense } from "react";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const App = () => {
  const playersPromise = fetchPlayer();
  return (
    <div>
      <Navbar />
      <Banner />
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Players playersPromise={playersPromise} />
      </Suspense>
    </div>
  );
};

export default App;
