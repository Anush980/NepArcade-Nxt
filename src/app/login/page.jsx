'use client';
import { useState } from 'react';
import '../style/auth.css';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';


export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (res.ok) {
            alert('Login successful!');
            router.push('/homepage');
        } else {
            alert(data.message || 'Login failed');
        }
    };
    return (
        <>
            <div className="login-container">
                <div className="inter-line">
                    <div className="auth-left">

                        <h1 className='auth-title'>NepArcade</h1>
                        <div className='greeting-container'>
                            <h3 className='greeting'>Welcome Back!</h3>
                            <span className='guide'>Enter your credentials to sign in</span>
                        </div>
                        <form method='POST' onSubmit={handleSubmit} >
                            <input type='email' placeholder='Enter your Username' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input type='submit' value='Sign In' className='button' />
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
                    <span>Don't have an account? </span>
                    <a href="/register">Register here!</a>
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
