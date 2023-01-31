import React from 'react';
import NavButton from "./NavButton";

function Header() {
  return (
      <header className={"grid grid-cols-2 md:grid-cols-1 justify-between items-center p-2"}>
        <div>
            <div className={"flex items-center space-x-2"}>
                <img
                    className={"rounded-full h-14 w-14"}
                    src={"https://www.pngmart.com/files/13/Halo-Game-PNG-Picture.png"}
                    alt=""
                />
                <div>
                    <h1 className={"text-lg text-white font-bold"}>Vellmond Draw</h1>
                    <p className={"text-xs text-emerald-500 truncate"}>User...
                    </p>
                </div>
                <div className={"hidden md:flex md:col-span-3 items-center justify-center rounded-md"}>
                    <div className={"bg-cyan-900 p-4 space-x-2"}>
                        <NavButton isActive title={"Buy Tickets"}/>
                        <NavButton title={"Logout"}/>

                    </div>
                </div>
                <div className={"flex flex-col ml-auto text-right"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 mx-auto text-white cursor-pointer">
                        <path fill-rule="evenodd"
                              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                              clip-rule="evenodd"/>
                    </svg>
                    <span className={"md:hidden"}>
                        <NavButton title={"Logout"}/>
                    </span>


                </div>
            </div>
        </div>
      </header>
  );
}

export default Header;