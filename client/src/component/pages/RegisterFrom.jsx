
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LoginFrom.module.css";
import authImage from "../../assets/YUKTI_ Think, Code, Collaborate.png";

function RegisterForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login form:", formData);
    };

    return (
        <div className={styles.authLayout}>

            {/* LEFT IMAGE SECTION */}
            <section className={styles.visualPanel}>
                <img
                    src={authImage}
                    alt="Students collaborating on programming"
                    className={styles.visualImage}
                />

                <div className={styles.visualOverlay}></div>

                {/* <div className={styles.visualContent}>
                    <div className={styles.brand}>
                        <span className={styles.brandIcon}>Y</span>
                        YUKTI
                    </div>

                    <div className={styles.visualText}>
                        <h1>Think. Code. Collaborate.</h1>
                        <p>
                            Improve your coding skills, solve challenging
                            problems and learn together with other students.
                            Your coding journey starts here.
                        </p>
                    </div>

                    <p className={styles.visualFooter}>
                        © 2026 YUKTI. Learn something new every day.
                    </p>
                </div> */}
            </section>

            {/* RIGHT LOGIN FORM */}
            <section className={styles.formPanel}>
                <div className={styles.heading}>
                    <p className={styles.label}>JOIN YUKTI</p>
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
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className={styles.button}>
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
