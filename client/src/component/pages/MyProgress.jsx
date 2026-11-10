
import StatCard from "../dashboard/StartCard";

const MyProgress = () => {

    const stats = {
        solved: 24,
        hours: 18,
        streak: 5,
    };

    const rooms = [
        { id: "YK101" },
        { id: "YK102" },
        { id: "YK103" },
    ];

    return (
        <section className="page-section">

            <h1>My Progress</h1>
            <p>Here is your current learning summary.</p>

            <section className="stats-grid">

                <StatCard
                    icon="⌘"
                    label="Problems Solved"
                    value={stats.solved}
                    color="purple"
                />

                <StatCard
                    icon="◷"
                    label="Practice Hours"
                    value={stats.hours}
                    suffix=" hrs"
                    color="blue"
                />

                <StatCard
                    icon="♨"
                    label="Day Streak"
                    value={stats.streak}
                    suffix=" days"
                    color="orange"
                />

                <StatCard
                    icon="▣"
                    label="Coding Rooms"
                    value={rooms.length}
                    color="green"
                />

            </section>

        </section>
    );
};

export default MyProgress;
