import NavBar from '../Navigationbars/NavBar';
import './RegistrationPage.css';
import React from 'react';
import {useState , useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from "./RegistrationSlice";

const RegistrationPage=()=>
{
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      phone: '',
      address: '',
      password: ''
    });
    const [showMessage, setShowMessage] = useState(false); 
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const HandleRegister = async (e) => {
      e.preventDefault();
      dispatch(registerUser(formData));
      }

    const isAuthenticated = useSelector(state => state.register.success);
    const error=useSelector(state=>state.register.error);
    useEffect(() => {
        if (isAuthenticated) {
          setShowMessage(true);
          const timeoutId = setTimeout(() => {
            setShowMessage(false);
            navigate('/login');
          }, 6000);
      
          return () => clearTimeout(timeoutId); 
        }
      }, [isAuthenticated, navigate]);
      
    return (
      <div>
        <NavBar />
        <div>registerpage</div>
        <div className="registration-container">
          <h2 className="h2">Registration</h2>
          {showMessage && (
            <div>
              <h1>{isAuthenticated
                ? "Registration successful!"
                : "Registration failed!"}</h1>
            </div>
          )}
          {
            error&&(
                <div>
                    <h1>error</h1>
                </div>
            )
          }

            
          <form onSubmit={HandleRegister}>
            <div className="form-group">
              <label>firstName</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="Enter First Name"
              />
            </div>
            <div className="form-group">
              <label>lastName</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Enter Last Name"
              />
            </div>
            <div className="form-group">
              <label>UserName:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group">
              <label>phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Phone number"
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
              />
            </div>
            <br></br>
            <button type="submit" className="button">
              Register
            </button>
          </form>
        </div>
      </div>
    );
}
export default RegistrationPage;