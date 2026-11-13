
import { useState } from "react";
import styles from "../styles/Profile.module.css";

function Profile() {
    const [profile, setProfile] = useState({
        username: "rahul_dev",
        name: "Rahul Birajadar",
        email: "rahul@example.com",
        college: "Sangameshwar College",
        skillLevel: "Beginner",
        preferredLanguages: ["JavaScript", "Python"],
        bio: "Learning, building and improving every day.",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setProfile((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleLanguageChange = (language) => {
        setProfile((prev) => ({
            ...prev,
            preferredLanguages: prev.preferredLanguages.includes(language)
                ? prev.preferredLanguages.filter((item) => item !== language)
                : [...prev.preferredLanguages, language],
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();

        // Frontend demonstration only.
        // Later, send updated profile to PUT /api/users/profile.

        setIsEditing(false);
        setMessage("Profile changes saved locally.");

        setTimeout(() => setMessage(""), 3000);
    };

    const initials = profile.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <div className={styles.profilePage}>

            <div className={styles.pageHeader}>
                <div>
                    <h1>My Profile</h1>
                    <p>Manage your personal information and coding preferences.</p>
                </div>

                <button
                    className={styles.editButton}
                    onClick={() => {
                        setIsEditing(!isEditing);
                        setMessage("");
                    }}
                >
                    {isEditing ? "Cancel" : "Edit Profile"}
                </button>
            </div>

            {message && (
                <div className={styles.successMessage}>
                    {message}
                </div>
            )}

            <form onSubmit={handleSave}>

                <section className={styles.profileCard}>
                    <div className={styles.profileTop}>
                        <div className={styles.avatar}>
                            {initials || "YU"}
                        </div>

                        <div className={styles.profileIdentity}>
                            <h2>{profile.name}</h2>
                            <p>@{profile.username}</p>
                            <span className={styles.skillBadge}>
                                {profile.skillLevel}
                            </span>
                        </div>
                    </div>

                    <div className={styles.divider}></div>

                    <h3>Personal Information</h3>

                    <div className={styles.formGrid}>

                        <div className={styles.formGroup}>
                            <label>Username</label>
                            <input
                                name="username"
                                value={profile.username}
                                onChange={handleChange}
                                disabled={!isEditing}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Full Name</label>
                            <input
                                name="name"
                                value={profile.name}
                                onChange={handleChange}
                                disabled={!isEditing}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                                disabled={!isEditing}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>College</label>
                            <input
                                name="college"
                                value={profile.college}
                                onChange={handleChange}
                                disabled={!isEditing}
                                placeholder="Enter your college"
                            />
                        </div>

                    </div>

                    <div className={styles.divider}></div>

                    <h3>About Me</h3>

                    <div className={styles.formGroup}>
                        <label>Short Bio</label>
                        <textarea
                            name="bio"
                            value={profile.bio}
                            onChange={handleChange}
                            disabled={!isEditing}
                            rows={3}
                            maxLength={250}
                            placeholder="Tell us about yourself"
                        />
                    </div>

                    <div className={styles.divider}></div>

                    <h3>Coding Preferences</h3>

                    <div className={styles.formGroup}>
                        <label>Skill Level</label>

                        <select
                            name="skillLevel"
                            value={profile.skillLevel}
                            onChange={handleChange}
                            disabled={!isEditing}
                        >
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label>Preferred Programming Languages</label>

                        <div className={styles.languageList}>
                            {["JavaScript", "Python", "Java", "C", "C++"].map(
                                (language) => (
                                    <label
                                        key={language}
                                        className={styles.languageOption}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={profile.preferredLanguages.includes(language)}
                                            disabled={!isEditing}
                                            onChange={() =>
                                                handleLanguageChange(language)
                                            }
                                        />
                                        {language}
                                    </label>
                                )
                            )}
                        </div>
                    </div>

                    {isEditing && (
                        <div className={styles.actions}>
                            <button
                                type="button"
                                className={styles.cancelButton}
                                onClick={() => setIsEditing(false)}
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className={styles.saveButton}
                            >
                                Save Changes
                            </button>
                        </div>
                    )}

                </section>
            </form>
        </div>
    );
}

export default Profile;
