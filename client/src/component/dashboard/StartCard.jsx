
const StatCard = ({ icon, label, value, note, color }) => {
    return (
        <div className="stat-card">
            <div className={`stat-icon ${color}`}>
                {icon}
            </div>

            <p>{label}</p>
            <h2>{value}</h2>

            {note && <span className="stat-note">{note}</span>}
        </div>
    );
}

export default StatCard;
