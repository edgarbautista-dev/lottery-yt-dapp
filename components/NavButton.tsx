import React from 'react';

interface Props {
    title: string;
}

function NavButton({title}: Props) {
        return <button>{title}</button>;

}

export default NavButton;
