import React from 'react';
import NavButton from "./NavButton";

function Header() {
  return (
        <div>
            <div className={"flex items-center space-x-2"}>
                <img
                    className={"rounded-full h-20 w-20"}
                    src={"https://www.pngmart.com/files/13/Halo-Game-PNG-Picture.png"}
                    alt=""
                />
            </div>
            <div>
                <h1 className={"text-lg text-white font-bold"}>Vellmond Draw</h1>
                <p className={"text-xs text-emerald-500 truncate"}>User...
                </p>
            </div>
            <div>
                <div className={"bg-emerald-900 p-4 space-x-2"}>
                    <NavButton isActive title={"Buy Tickets"}/>
                    <NavButton title={"Logout"}/>

                </div>
            </div>
        </div>
  );
}

export default Header;