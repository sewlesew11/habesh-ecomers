import React, { useEffect, useState } from 'react';
import { Link, useLocation, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../action/userActions';
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";


export default function RegisterScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false); // State for the checkbox


    const location = useLocation();
    const redirect = location.search
        ? location.search.split('=')[1]
        : '/';

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;


    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Password and confirm password are not match')
        } else if (!agreeTerms) {
            alert('Please agree to the terms and regulations');
        } else {
            dispatch(register(name, email, password));
        }

    };
    useEffect(() => {
        if (userInfo) {
            window.location.href = redirect;
        }
    }, [location, redirect, userInfo]);
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1> Create Account</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter name"
                        required
                        onChange={e => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required
                        onChange={e => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        required
                        onChange={e => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Enter confirm Password"
                        required
                        onChange={e => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            required
                            checked={agreeTerms}
                            onChange={(e) => setAgreeTerms(e.target.checked)}
                        ></input>
                        <span>
                            <Link to='/terms'>I agree to the terms and regulations</Link>
                        </span>
                    </label>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Register
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        Alerady have an account? {' '}
                        <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}