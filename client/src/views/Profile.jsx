import React, {useState} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/_profile.scss';
import logo from '../../public/events_logo.jpeg';
import {useAuth} from "../context/AuthContext.jsx";
import {Navigate} from "react-router-dom";
import FormInput from "../components/FormInput.jsx";


const Profile = () => {
    const [user, setUser] = useState({
        name: '',
        phone: '',
        email: '',
        dob: ''
    });


    const {currentUser} = useAuth();
    if (!currentUser) {
        return <Navigate to={'/login'}/>
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
    }


    return (
        <div className="Profile">
            <Header/>
            <form className="Profile-container">
                <div className="avatar">
                    <img src={logo} className="avatar-img" alt="Ảnh đại diện"/>
                    <label htmlFor="img-input"><i className="bi bi-camera-fill"></i></label>
                    <input id="img-input" type="file" accept="image/*"/>
                </div>
                <form onSubmit={handleSubmit}>
                    <FormInput label="Họ và tên" type="text" name="name" value={user.name} onChange={handleChange}/>
                    <FormInput label="Số điện thoại" type="text" name="phone" value={user.phone}
                               onChange={handleChange}/>
                    <FormInput label="Email nhận vé" type="email" name="email" value={user.email}
                               onChange={handleChange}/>
                    <FormInput label="Ngày sinh" type="date" name="dob" value={user.dob} onChange={handleChange}/>
                </form>
                <button type="submit" className="btn btn-primary">Hoàn thành</button>
            </form>
            <Footer/>
        </div>
    );
}

export default Profile;