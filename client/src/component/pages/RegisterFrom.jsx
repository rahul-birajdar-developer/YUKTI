
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/RegisterFrom.module.css";
import authImage from "../../assets/YUKTI_ Think, Code, Collaborate.png";

function RegisterForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setError("");
        setSuccess("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        // Check password length
        if (formData.password.length < 8) {
            setError("Password must contain at least 8 characters.");
            return;
        }
        // Check password confirmation
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        // Frontend testing only. Backend integration comes later.
        console.log("Registration data:", {
            name: formData.name,
            email: formData.email,
            password: formData.password,
        });
        setSuccess("Form validation successful!");
        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    };

    return (
        <div className={styles.authLayout}>

            {/* LEFT IMAGE SECTION */}
            <section className={styles.visualPanel}>
                <img
                    src={authImage}
                    alt="YUKTI coding workspace"
                    className={styles.visualImage}
                />
                <div className={styles.visualOverlay}></div>
            </section>

            {/* RIGHT REGISTER FORM */}
            <section className={styles.formPanel}>
                <div className={styles.heading}>
                    <div className={styles.mobileBrand}>
                        <span className={styles.brandIcon}>Y</span>
                        YUKTI
                    </div>
                    <h2>Create your account</h2>
                    <p className={styles.subtitle}>
                        Start your coding and learning journey today.
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Full Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            autoComplete="name"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Minimum 8 characters"
                            value={formData.password}
                            onChange={handleChange}
                            minLength={8}
                            autoComplete="new-password"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            autoComplete="new-password"
                            required
                        />
                    </div>
                    {error && (
                        <p className={styles.errorMessage}>
                            {error}
                        </p>
                    )}
                    {success && (
                        <p className={styles.successMessage}>
                            {success}
                        </p>
                    )}
                    <button
                        type="submit"
                        className={styles.button}
                    >
                        Create Account
                    </button>
                </form>
                <p className={styles.footer}>
                    Already have an account?
                    <Link to="/login"> Login</Link>
                </p>
            </section>
        </div>
    );
}

export default RegisterForm;
