
import { NavLink } from "react-router-dom";

const SideBar = () => {
    const navigation = [
        { name: "Overview", path: "/", icon: "⌂" },
        { name: "Coding Rooms", path: "/coding-rooms", icon: "▣" },
        { name: "Practice", path: "/practice", icon: "⌘" },
        { name: "Mock Interviews", path: "/interviews", icon: "◷" },
        { name: "My Progress", path: "/progress", icon: "▥" },
    ];

    return (
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
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === "/"}
                        className={({ isActive }) =>
                            `nav-item ${isActive ? "active" : ""}`
                        }
                    >
                        <span className="nav-icon">{item.icon}</span>
                        {item.name}
                    </NavLink>
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
    );
};

export default SideBar;
