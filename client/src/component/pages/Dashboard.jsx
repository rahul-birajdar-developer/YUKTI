import StatCard from "../dashboard/StartCard";

const Dashboard = () => {
    return (
        <>
            <div className="dashboard-content">
                <section className="welcome-section">
                    <div>
                        <p className="eyebrow">YUKTI STUDENT WORKSPACE</p>
                        <h1>Welcome Back, Rahul! 👋</h1>
                        <p className="welcome-subtitle">
                            Ready to learn something new and build something great?
                        </p>
                    </div>
                </section>

                <section className="stats-grid">
                    <StatCard
                        icon="⌘"
                        label="Problems Solved"
                        value="24"
                        note="Your practice progress"
                        color="purple"
                    />

                    <StatCard
                        icon="◷"
                        label="Practice Hours"
                        value="18"
                        note="Keep learning"
                        color="blue"
                    />

                    <StatCard
                        icon="♨"
                        label="Day Streak"
                        value="5"
                        note="Stay consistent"
                        color="orange"
                    />

                    <StatCard
                        icon="▣"
                        label="Coding Rooms"
                        value="3"
                        note="Learn together"
                        color="green"
                    />
                </section>

                <section className="panel">
                    <h2>Welcome to YUKTI</h2>
                    <p>
                        Practice programming, collaborate with friends,
                        and prepare for technical interviews.
                    </p>
                </section>
            </div>
        </>
    )
}

export default Dashboard;