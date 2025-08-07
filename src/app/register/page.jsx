'use client';
import { useState } from 'react';
import '../style/auth.css';


export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        // Basic validation
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        const res = await fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
            setSuccess('Signup successful!');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setError('');
        } else {
            setError(data.message || 'Signup failed');
        }
    };
    return (
        <>
            <div className="login-container">
                <div className="inter-line">
                    <div className="auth-left">

                        <h1 className='auth-title'>NepArcade</h1>
                        <div className='greeting-container'>
                            <h3 className='greeting'>Create your account!</h3>
                            <span className='guide'>Enter your credentials to sign in</span>
                            {error && <p className="error">{error}</p>}
                            {success && <p className="success">{success}</p>}
                        </div>
                        <form onSubmit={handleSignup} >
                            <input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <input type="submit" value="Sign Up" className="button" />
                        </form>
                        <div className="divider">
                            <span>or</span>
                        </div>
                        <div className="direct-login">
                            <div className="service">
                                <button className="service-google" onClick={() => signIn('google', { callbackUrl: '/homepage' })}>
                                    <img src="/Google.png" alt="Google logo" className="auth-logo" />Google </button>

                                <button className="service-github" onClick={() => signIn('github', { callbackUrl: '/homepage' })}>
                                    <img src="/Github.png" alt="GitHub logo" className="auth-logo" />GitHub</button>
                            </div>
                        </div>
                        <div className="switch-auth">
                            <span>Already have an account? </span>
                            <a href="/login">Login here!</a>
                        </div>
                    </div>
                    <div className="auth-right">
                        <img src="/gameBanner.jpg" alt="gaming art" />


                    </div>
                </div>
            </div>
        </>
    );
}
