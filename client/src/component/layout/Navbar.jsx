import { useState } from "react";

const Navbar = () => {
    const [activePage, setActivePage] = useState("Overview");
    return (
        <>
            <header className="topbar">
                <div className="breadcrumb">
                    Workspace <span>/</span> {activePage}
                </div>

                <div className="topbar-right">
                    <div className="online-status">
                        <span className="status-dot"></span>
                        Online
                    </div>
                    <button className="notification">♧</button>
                    <div className="avatar small">R</div>
                </div>
            </header>
        </>
    )
}

export default Navbar;