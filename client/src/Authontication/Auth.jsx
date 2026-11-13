
import { useState } from "react";
import styles from "./Auth.module.css";

function Auth() {
    const [activeTab, setActiveTab] = useState("login");
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const isLogin = activeTab === "login";

    const handleSubmit = (e) => {
        e.preventDefault();

        // Backend authentication will be connected here.
        const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegx.test(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (!isLogin && formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        if (!isLogin && !formData.fullName) {
            alert("Please enter your full name.");
            return;
        }
        if (!isLogin && !formData.username) {
            alert("Please enter a username.");
            return;
        }
        if (!isLogin && !formData.password) {
            alert("Please enter a password.");
            return;
        }
        console.log(isLogin ? "Login submitted" : "Signup submitted");
    };

    return (
        <div className={styles.authPage}>
            {/* LEFT SIDE */}
            <section className={styles.leftPanel}>
                <div className={styles.brand}>
                    <span className={styles.brandIcon}>&lt;/&gt;</span>
                    <span>YUKTI <span className={styles.hindi}>(युक्ति)</span></span>
                </div>

                <p className={styles.tagline}>
                    Collaborative Coding &amp; Practice Platform
                    <br />
                    for College Students
                </p>

                {/* Coding illustration built with CSS */}
                <div className={styles.illustration}>
                    <div className={styles.windowGlow}></div>

                    <div className={styles.codeWindow}>
                        <div className={styles.windowDots}>
                            <i></i><i></i><i></i>
                        </div>
                        <p className={styles.codePurple}>function solveProblem() {"{"}</p>
                        <p className={styles.codeBlue}> const ideas = "YUKTI";</p>
                        <p className={styles.codePink}> return success;</p>
                        <p className={styles.codePurple}>{"}"}</p>
                    </div>

                    <div className={styles.student}>
                        <div className={styles.headphones}>🎧</div>
                        <div className={styles.studentEmoji}>👨🏻‍💻</div>
                        <div className={styles.studentLabel}>YUKTI CODER</div>
                    </div>

                    <div className={styles.floatingCard}>
                        <span>👥</span>
                        <small>Collaborate</small>
                    </div>

                    <div className={styles.chartCard}>
                        <span>↗</span>
                        <div className={styles.chartBars}>
                            <i></i><i></i><i></i><i></i><i></i>
                        </div>
                    </div>

                    <div className={styles.laptop}>
                        <span>&lt;/&gt;</span>
                        <small>YUKTI Workspace</small>
                    </div>

                    <div className={styles.books}>
                        <span>DSA</span>
                        <span>WEB DEV</span>
                        <span>CODING</span>
                    </div>

                    <div className={styles.plant}>🪴</div>
                </div>

                {/* Features */}
                <div className={styles.features}>
                    <div className={styles.feature}>
                        <span>♧</span>
                        <strong>Coding Rooms</strong>
                        <small>Real-time Collaboration</small>
                    </div>

                    <div className={styles.feature}>
                        <span>&lt;/&gt;</span>
                        <strong>Practice</strong>
                        <small>Solve &amp; Submit</small>
                    </div>

                    <div className={styles.feature}>
                        <span>♙</span>
                        <strong>Mock Interviews</strong>
                        <small>Technical Prep</small>
                    </div>

                    <div className={styles.feature}>
                        <span>↗</span>
                        <strong>Progress Tracking</strong>
                        <small>Stats, Streak &amp; Analytics</small>
                    </div>
                </div>
            </section>

            {/* RIGHT SIDE */}
            <section className={styles.rightPanel}>
                <div className={styles.authCard}>
                    <div className={styles.tabs}>

                        <button
                            type="button"
                            className={!isLogin ? styles.activeTab : ""}
                            onClick={() => setActiveTab("signup")}
                        >
                            Sign Up
                        </button>

                        <button
                            type="button"
                            className={isLogin ? styles.activeTab : ""}
                            onClick={() => setActiveTab("login")}
                        >
                            Login
                        </button>
                    </div>

                    <div className={styles.heading}>
                        <h1>
                            {isLogin ? "Welcome Back to YUKTI 👋" : "Join YUKTI Today 🚀"}
                        </h1>
                        <p>
                            {isLogin
                                ? "Continue your coding journey with your account"
                                : "Create your account and start your coding journey"}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        {!isLogin && (
                            <>
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    autoComplete="name"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    required
                                />

                                <label>Username</label>
                                <input
                                    type="text"
                                    placeholder="Choose a username"
                                    autoComplete="username"
                                    value={formData.username}
                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                    required
                                />
                            </>
                        )}

                        <label>Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />

                        <label>Password</label>
                        <div className={styles.passwordField}>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                autoComplete={isLogin ? "current-password" : "new-password"}
                                minLength={8}
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? "🙈" : "👁"}
                            </button>
                        </div>

                        {!isLogin && (
                            <>
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder="Confirm your password"
                                    autoComplete="new-password"
                                    minLength={8}
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    required
                                />
                            </>
                        )}

                        {isLogin && (
                            <div className={styles.formOptions}>
                                <label className={styles.remember}>
                                    <input type="checkbox" />
                                    Remember me
                                </label>
                                <button type="button" className={styles.forgotButton}>
                                    Forgot password?
                                </button>
                            </div>
                        )}

                        <button type="submit" className={styles.submitButton}>
                            {isLogin ? "Login" : "Create Account"}
                            <span>→</span>
                        </button>
                    </form>

                    <div className={styles.divider}>
                        <span></span>
                        <p>or continue with</p>
                        <span></span>
                    </div>

                    <div className={styles.socialButtons}>
                        <button type="button">
                            <strong className={styles.googleIcon}>G</strong>
                            Continue with Google
                        </button>

                        <button type="button">
                            <strong className={styles.githubIcon}>●</strong>
                            Continue with GitHub
                        </button>
                    </div>

                    <p className={styles.switchText}>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <button
                            type="button"
                            onClick={() => setActiveTab(isLogin ? "signup" : "login")}
                        >
                            {isLogin ? "Sign Up" : "Login"}
                        </button>
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Auth;
