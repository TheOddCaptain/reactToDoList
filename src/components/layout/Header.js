import React from 'react';

function Header() {
    return (
        <header>
            <h1 style={headerStyles}>
                TodoList
            </h1>
        </header>
    )
}
const headerStyles = {
    color: 'white'
}
export default Header;