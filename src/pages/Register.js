import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const isPasswordValid = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setEmailError('');
        setPasswordError('');

        if (!validator.isEmail(email)) {
            setEmailError('Invalid email address. Please enter a valid email.');
            return;
        }

        if (!isPasswordValid(password)) {
            setPasswordError('Password must be at least 8 characters long, include uppercase and lowercase letters, numbers, and symbols.');
            return;
        }
axios.post('http://localhost:3001/register', { name, email, password })
    .then(result => {
        console.log(result);
        if (result.data === "Already registered") {
            alert("E-mail already registered! Please Login to proceed.");
            navigate('/login');
        } else {
            alert("Registered successfully! Please Login to proceed.");
            navigate('/login');
        }
    })
    .catch(err => {
        console.error(err);
        alert("Registration failed. Please try again.");
    });

    }

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundColor: "#85C6D7"}}>
                <div className="bg-white p-3 rounded" style={{ width: '40%' }}>
                    <h2 className='mb-3 text-primary'>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputName" className="form-label">
                                <strong>Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="form-control"
                                id="exampleInputName"
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail" className="form-label">
                                <strong>Email Id</strong>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="form-control"
                                id="exampleInputEmail"
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                            <p className="text-danger">{emailError}</p>
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="form-control"
                                id="exampleInputPassword"
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                            <p className="text-danger">{passwordError}</p>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>

                    <p className='container my-2'>Already have an account ?</p>
                    <Link to='/login' className="btn btn-secondary">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;
