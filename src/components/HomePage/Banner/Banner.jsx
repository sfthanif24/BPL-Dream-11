import bannerImg from "../../../assets/banner-main.png";
import bgShadowImg from "../../../assets/bg-shadow.png";

const Banner = ({ onClaimCredit }) => {
  return (
    <section id="hero" className=" bg-white px-6 pb-4 pt-2 lg:px-10">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-[20px] bg-[#111111] px-6 pb-10 pt-9 text-center text-white shadow-[0_20px_50px_rgba(15,23,42,0.16)] sm:px-10 sm:pb-12 sm:pt-10 lg:min-h-96 lg:px-16 lg:pb-12 lg:pt-10">
          <img
            src={bgShadowImg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90"
          />

          <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-center pt-0">
            <img
              src={bannerImg}
              alt="Cricket hero graphic"
              className="mb-4 w-36 max-w-full sm:w-44 lg:w-48"
            />

            <h1 className="max-w-5xl text-[22px] font-extrabold leading-tight text-white sm:text-[30px] lg:text-[38px]">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>

            <p className="mt-3 text-[14px] font-medium text-[#d0d0d0] sm:text-[16px]">
              Beyond Boundaries Beyond Limits
            </p>

            <button
              type="button"
              onClick={onClaimCredit}
              className="mt-5 inline-flex items-center justify-center rounded-[18px] border border-[#4c4c4c] bg-[linear-gradient(90deg,#e8a8d7_0%,#f0d36b_100%)] px-5 py-3 text-[15px] font-extrabold text-slate-950 shadow-[0_2px_0_rgba(255,255,255,0.55)_inset] transition hover:scale-[1.01] hover:brightness-105"
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
