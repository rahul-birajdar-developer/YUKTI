
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LoginFrom.module.css";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password.length < 8) {
            setMessage("Password must contain at least 8 characters.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }

        setMessage("Registration form validated. Backend connection is next.");
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>

                <Link to="/register" className={styles.brand}>
                    <span className={styles.brandIcon}>Y</span>
                    YUKTI
                </Link>

                <div className={styles.heading}>
                    <p className={styles.label}>JOIN YUKTI</p>
                    <h1>Create your account</h1>
                    <p className={styles.subtitle}>
                        Start learning, coding and collaborating.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Minimum 8 characters"
                            value={formData.password}
                            onChange={handleChange}
                            minLength={8}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            placeholder="Re-enter your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className={styles.button}>
                        Create Account
                    </button>

                    {message && (
                        <p className={styles.message}>{message}</p>
                    )}
                </form>

                <p className={styles.footer}>
                    Already have an account?
                    <Link to="/login"> Login</Link>
                </p>

                <p className={styles.tagline}>
                    Think. Code. Collaborate.
                </p>

            </div>
        </div>
    );
}

export default Register;
