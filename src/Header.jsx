import React from "react";
import Logo from "./assets/logo";

const Header = () => {
    return (
        <div className="w-full bg-neutral-100 h-14 px-4 py-2 flex justify-between border-b-2 border-neutral-400">
            <Logo />
            <div className="flex gap-5">
                <button className="rounded-full w-9 h-9 bg-cyan-500 text-white hover:bg-cyan-400">3D</button>
                <button className="rounded-full w-9 h-9 bg-cyan-500 text-white hover:bg-cyan-400">M</button>
            </div>
        </div>
    );
};

export default Header;
