
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LoginFrom.module.css";
import authImage from "../../assets/YUKTI_ Think, Code, Collaborate.png";

function Login() {
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
                <div className={styles.formContent}>

                    <div className={styles.mobileBrand}>
                        <span className={styles.brandIcon}>Y</span>
                        YUKTI
                    </div>

                    <div className={styles.heading}>
                        <p className={styles.label}>WELCOME BACK</p>
                        <h2>Login to your account</h2>
                        <p className={styles.subtitle}>
                            Enter your details to continue learning.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
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
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.options}>
                            <Link to="/forgot-password">
                                Forgot password?
                            </Link>
                        </div>

                        <button type="submit" className={styles.button}>
                            Login
                        </button>
                    </form>

                    <p className={styles.footer}>
                        Don't have an account?
                        <Link to="/register"> Create Account</Link>
                    </p>

                    <p className={styles.tagline}>
                        Think. Code. Collaborate.
                    </p>

                </div>
            </section>
        </div>
    );
}

export default Login;
