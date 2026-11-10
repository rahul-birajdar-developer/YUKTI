
import { useState } from "react";

const CodingRoom = () => {

    const [rooms, setRooms] = useState([
        {
            id: "YK101",
            name: "JavaScript Practice",
            language: "JavaScript",
            members: 3,
            status: "Live",
        },
        {
            id: "YK102",
            name: "Python DSA Practice",
            language: "Python",
            members: 2,
            status: "Live",
        },
        {
            id: "YK103",
            name: "React Study Group",
            language: "JavaScript",
            members: 4,
            status: "Live",
        },
    ]);

    const createRoom = () => {
        const newRoom = {
            id: `YK${101 + rooms.length}`,
            name: `My Coding Room ${rooms.length + 1}`,
            language: "JavaScript",
            members: 1,
            status: "Live",
        };

        setRooms((previousRooms) => [...previousRooms, newRoom]);
    };

    return (
        <section className="page-section">
            <div className="page-heading">
                <div>
                    <h1>Coding Rooms</h1>
                    <p>
                        Create a room and collaborate with other developers.
                    </p>
                </div>

                <button
                    className="primary-button"
                    onClick={createRoom}
                >
                    ＋ Create Room
                </button>
            </div>

            <div className="panel">

                {rooms.map((room) => (
                    <div className="room-item" key={room.id}>

                        <div className="room-symbol">
                            {"</>"}
                        </div>

                        <div className="room-info">
                            <strong>{room.name}</strong>

                            <span>
                                {room.id} · {room.language} · {room.members} members
                            </span>
                        </div>

                        <span className="live-badge">
                            <span className="status-dot"></span>
                            {room.status}
                        </span>

                    </div>
                ))}

            </div>
        </section>
    );
};

export default CodingRoom;
