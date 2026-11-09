
import { useState } from "react";
import "./App.css";
import SideBar from "./component/layout/Sidebar";

const initialRooms = [
  { id: "YK101", name: "JavaScript Practice", members: 3, language: "JavaScript", status: "Live" },
  { id: "YK102", name: "DSA Preparation", members: 2, language: "Python", status: "Live" },
  { id: "YK103", name: "React Study Group", members: 4, language: "JavaScript", status: "Live" },
];

const problems = [
  { title: "Two Sum", level: "Easy", category: "Arrays" },
  { title: "Reverse a String", level: "Easy", category: "Strings" },
  { title: "Valid Parentheses", level: "Medium", category: "Stack" },
];

function App() {
  const [activePage, setActivePage] = useState("Overview");
  const [rooms, setRooms] = useState(initialRooms);
  const [search, setSearch] = useState("");

  const [stats] = useState({
    solved: 0,
    hours: 0,
    streak: 0,
  });

  const filteredProblems = problems.filter((problem) =>
    problem.title.toLowerCase().includes(search.toLowerCase())
  );

  function createRoom() {
    const newRoom = {
      id: `YK${101 + rooms.length}`,
      name: `My Coding Room ${rooms.length + 1}`,
      members: 1,
      language: "JavaScript",
      status: "Live",
    };

    setRooms([...rooms, newRoom]);
    setActivePage("Coding Rooms");
  }



  return (
    <div className="app-layout">
      <SideBar />

      <main className="main-content">
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

        <div className="dashboard-content">
          {activePage === "Overview" && (
            <>
              <section className="welcome-section">
                <div>
                  <p className="eyebrow">MONDAY, YOUR CODING JOURNEY</p>
                  <h1>Welcome back, Rahul! 👋</h1>
                  <p className="welcome-subtitle">
                    Ready to learn something new and build something great?
                  </p>
                </div>

                <button className="primary-button" onClick={createRoom}>
                  <span>＋</span> Create Coding Room
                </button>
              </section>

              <section className="stats-grid">
                <StatCard
                  icon="⌘"
                  label="Problems Solved"
                  value={stats.solved}
                  note="+4 this week"
                  color="purple"
                />
                <StatCard
                  icon="◷"
                  label="Practice Hours"
                  value={stats.hours}
                  suffix=" hrs"
                  note="Keep it consistent"
                  color="blue"
                />
                <StatCard
                  icon="♨"
                  label="Day Streak"
                  value={stats.streak}
                  suffix=" days"
                  note="You're doing great!"
                  color="orange"
                />
                <StatCard
                  icon="▣"
                  label="Coding Rooms"
                  value={rooms.length}
                  note="Join your community"
                  color="green"
                />
              </section>

              <section className="content-grid">
                <div className="panel rooms-panel">
                  <div className="panel-header">
                    <div>
                      <h2>Recent Coding Rooms</h2>
                      <p>Collaborate and code together</p>
                    </div>
                    <button
                      className="text-button"
                      onClick={() => setActivePage("Coding Rooms")}
                    >
                      View all →
                    </button>
                  </div>

                  <div className="room-list">
                    {rooms.slice(0, 3).map((room) => (
                      <div className="room-item" key={room.id}>
                        <div className="room-symbol">{"</>"}</div>
                        <div className="room-info">
                          <strong>{room.name}</strong>
                          <span>
                            {room.language} · {room.members} members
                          </span>
                        </div>
                        <span className="live-badge">
                          <span className="status-dot"></span> {room.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="panel progress-panel">
                  <div className="panel-header">
                    <div>
                      <h2>Your Progress</h2>
                      <p>This week's activity</p>
                    </div>
                  </div>

                  <div className="progress-number">
                    <strong>75%</strong>
                    <span>Weekly goal</span>
                  </div>

                  <div className="progress-track">
                    <div className="progress-fill"></div>
                  </div>

                  <p className="progress-message">
                    Great work! You're making steady progress.
                  </p>

                  <div className="progress-footer">
                    <span>15 of 20 hours completed</span>
                    <span>75%</span>
                  </div>
                </div>
              </section>

              <section className="panel practice-panel">
                <div className="panel-header">
                  <div>
                    <h2>Recommended Practice</h2>
                    <p>Improve your problem-solving skills</p>
                  </div>
                  <button
                    className="text-button"
                    onClick={() => setActivePage("Practice")}
                  >
                    Explore all →
                  </button>
                </div>

                <div className="practice-list">
                  {problems.map((problem, index) => (
                    <div className="practice-item" key={problem.title}>
                      <div className="problem-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="problem-info">
                        <strong>{problem.title}</strong>
                        <span>{problem.category}</span>
                      </div>
                      <span
                        className={`difficulty ${problem.level.toLowerCase()}`}
                      >
                        {problem.level}
                      </span>
                      <button
                        className="solve-button"
                        onClick={() => setActivePage("Practice")}
                      >
                        Solve →
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              <footer className="footer">
                © 2026 YUKTI. Built for learners and developers.
              </footer>
            </>
          )}

          {activePage === "Coding Rooms" && (
            <section className="page-section">
              <div className="page-heading">
                <div>
                  <h1>Coding Rooms</h1>
                  <p>Create a room and collaborate with other developers.</p>
                </div>
                <button className="primary-button" onClick={createRoom}>
                  ＋ Create Room
                </button>
              </div>

              <div className="panel">
                {rooms.map((room) => (
                  <div className="room-item" key={room.id}>
                    <div className="room-symbol">{"</>"}</div>
                    <div className="room-info">
                      <strong>{room.name}</strong>
                      <span>
                        {room.id} · {room.language} · {room.members} members
                      </span>
                    </div>
                    <span className="live-badge">Live</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activePage === "Practice" && (
            <section className="page-section">
              <div className="page-heading">
                <div>
                  <h1>Coding Practice</h1>
                  <p>Choose a problem and improve your coding skills.</p>
                </div>
              </div>

              <input
                className="search-input"
                placeholder="Search coding problems..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />

              <div className="panel">
                {filteredProblems.length > 0 ? (
                  filteredProblems.map((problem) => (
                    <div className="practice-item" key={problem.title}>
                      <div className="problem-info">
                        <strong>{problem.title}</strong>
                        <span>{problem.category}</span>
                      </div>
                      <span
                        className={`difficulty ${problem.level.toLowerCase()}`}
                      >
                        {problem.level}
                      </span>
                    </div>
                  ))
                ) : (
                  <p>No matching problems found.</p>
                )}
              </div>
            </section>
          )}

          {activePage === "Mock Interviews" && (
            <section className="page-section">
              <h1>Mock Interviews</h1>
              <div className="panel placeholder-panel">
                <div className="placeholder-icon">◷</div>
                <h2>Practice for your next interview</h2>
                <p>
                  Collaborative mock interview sessions will be developed in
                  a future YUKTI milestone.
                </p>
              </div>
            </section>
          )}

          {activePage === "My Progress" && (
            <section className="page-section">
              <h1>My Progress</h1>
              <p>Here is your current learning summary.</p>
              <section className="stats-grid">
                <StatCard icon="⌘" label="Problems Solved" value={stats.solved} color="purple" />
                <StatCard icon="◷" label="Practice Hours" value={stats.hours} suffix=" hrs" color="blue" />
                <StatCard icon="♨" label="Day Streak" value={stats.streak} suffix=" days" color="orange" />
                <StatCard icon="▣" label="Coding Rooms" value={rooms.length} color="green" />
              </section>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

function StatCard({ icon, label, value, suffix = "", note, color }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${color}`}>{icon}</div>
      <p>{label}</p>
      <h2>
        {value}
        {suffix}
      </h2>
      {note && <span className="stat-note">{note}</span>}
    </div>
  );
}

export default App;
