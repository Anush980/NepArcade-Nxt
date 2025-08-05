'use client';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Login() {
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
                        <form>
                            <input type='email' placeholder='Enter your Email' />
                            <input type='password' placeholder='Enter your password' />
                            <input type='submit' value='Sign In' className='button' />
                        </form>
                        <div className="divider">
                            <span>or</span>
                        </div>
                        <div className="direct-login">
                            <div className="service">
                                <button className="service-google" aria-label="Google">
                                    <img src="/Google.png" alt="Google logo" className="logo" />Google </button>

                                <button className="service-github" aria-label="Sign in with GitHub">
                                    <img src="/Github.png" alt="GitHub logo" className="logo" />GitHub</button>
                            </div>
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