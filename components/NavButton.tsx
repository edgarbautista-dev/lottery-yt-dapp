import React from 'react';

interface Props {
    title: string;
    isActive?: boolean;
}

function NavButton({title, isActive}: Props) {
        return (
            <button className={`${isActive && "bg-emerald-600"} text-white py-2 px-4 rounded font-bold`}>
                {title}
            </button>);



}

export default NavButton;
