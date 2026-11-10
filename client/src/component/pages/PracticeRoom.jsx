
import { useState } from "react";

const PracticeRoom = () => {

    const [search, setSearch] = useState("");

    const problems = [
        {
            id: 1,
            title: "Two Sum",
            category: "Arrays",
            level: "Easy",
        },
        {
            id: 2,
            title: "Reverse a String",
            category: "Strings",
            level: "Easy",
        },
        {
            id: 3,
            title: "Valid Parentheses",
            category: "Stack",
            level: "Medium",
        },
        {
            id: 4,
            title: "Binary Search",
            category: "Searching",
            level: "Medium",
        },
        {
            id: 5,
            title: "Merge Sort",
            category: "Sorting",
            level: "Hard",
        },
    ];

    const filteredProblems = problems.filter((problem) =>
        problem.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="page-section">

            <div className="page-heading">
                <div>
                    <h1>Coding Practice</h1>
                    <p>Choose a problem and improve your coding skills.</p>
                </div>
            </div>

            <input
                className="search-input"
                type="text"
                placeholder="Search coding problems..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />

            <div className="panel">

                {filteredProblems.length > 0 ? (
                    filteredProblems.map((problem) => (
                        <div className="practice-item" key={problem.id}>

                            <div className="problem-info">
                                <strong>{problem.title}</strong>
                                <span>{problem.category}</span>
                            </div>

                            <span
                                className={`difficulty ${problem.level.toLowerCase()}`}
                            >
                                {problem.level}
                            </span>

                            <button className="solve-button">
                                Solve →
                            </button>

                        </div>
                    ))
                ) : (
                    <p>No matching problems found.</p>
                )}

            </div>
        </section>
    );
};

export default PracticeRoom;
