import LogoIcon from "../assets/logo.svg";
import MenuIcon from "../assets/icon-menu.svg";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div>
            <div className="border w-10 h-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="w-8 h-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className=" text-white/70 hover:text-white transition">Features</a>
              <a href="#" className=" text-white/70 hover:text-white transition">Developers</a>
              <a href="#" className=" text-white/70 hover:text-white transition">Pricing</a>
              <a href="#" className=" text-white/70 hover:text-white transition">About us</a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190D2E] to-[#4A208A] shadow-[0px_0px_12px_#8C45FF]">
              <div className="absolute inset-0">
                <div className="border border-white/20 absolute inset-0 rounded-lg [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="border border-white/40 absolute inset-0 rounded-lg [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="absolute rounded-lg inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_insert]"></div>
              </div>
              <span>Join waitlist</span>
            </button>
            <MenuIcon className="w-8 h-8 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
