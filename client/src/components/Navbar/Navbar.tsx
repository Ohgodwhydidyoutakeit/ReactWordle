import { FC } from "react";

import './Navbar.css'

export const Navbar: FC = () => {
    return (
        <nav className="nav-container">

            <div className="title">
                <h1>React Wordle</h1>
            </div>
            <div className="options">
                {/* options will be here */}
                O
            </div>
        </nav>

    )
}