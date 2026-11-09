import { useState } from "react";

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activePage, setActivePage] = useState("Overview");
    const navigation = [
        { name: "Overview", icon: "⌂" },
        { name: "Coding Rooms", icon: "▣" },
        { name: "Practice", icon: "⌘" },
        { name: "Mock Interviews", icon: "◷" },
        { name: "My Progress", icon: "▥" },
    ];
    return (
        <>
            <aside className="sidebar">
                <div className="brand">
                    <div className="brand-icon">Y</div>
                    <div>
                        <h2>YUKTI</h2>
                        <span>Think. Code. Collaborate.</span>
                    </div>
                </div>

                <div className="nav-label">WORKSPACE</div>

                <nav>
                    {navigation.map((item) => (
                        <button
                            key={item.name}
                            className={`nav-item ${activePage === item.name ? "active" : ""
                                }`}
                            onClick={() => setActivePage(item.name)}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            {item.name}
                        </button>
                    ))}
                </nav>

                <div className="sidebar-bottom">
                    <div className="help-card">
                        <div className="help-icon">?</div>
                        <strong>Need some help?</strong>
                        <p>Keep learning and improving your coding skills.</p>
                    </div>

                    <div className="profile">
                        <div className="avatar">R</div>
                        <div className="profile-info">
                            <strong>Rahul</strong>
                            <span>Student Account</span>
                        </div>
                        <span className="profile-menu">•••</span>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default SideBar;