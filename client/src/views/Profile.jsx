import React, {useEffect, useState} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import {useAuth} from "../context/AuthContext.jsx";
import {Navigate} from "react-router-dom";
import FormInput from "../components/FormInput.jsx";
import {updateUser} from "../api/user";
import ToastContainer from "../components/Toast";
import {toast} from "react-toastify";


const Profile = () => {
    const [user, setUser] = useState({
        name: '',
        phone: '',
        email: '',
        dateOfBirth: '',
    });

    const {currentUser} = useAuth();
    useEffect(() => {
        if (!currentUser) return;
        setUser({
            name: currentUser.name,
            phone: currentUser.phone,
            email: currentUser.email,
            dateOfBirth: currentUser.dateOfBirth,
        });
    }, [currentUser]);

    if (!currentUser) {
        return <Navigate to={'/login'}/>
    }

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUser(user, currentUser.id);
            toast.success('Cập nhật thông tin thành công');
        } catch (error) {
            toast.error('Cập nhật thông tin thất bại');
        }
    }


    return (
        <>
            <ToastContainer/>
            <Header/>
            <div className="profile-container">
                <form onSubmit={handleSubmit}>
                    <div className="avatar">
                        <img src={currentUser.photoURL} className="avatar-img" alt="Ảnh đại diện"/>
                        <label htmlFor="img-input"><i className="bi bi-camera-fill"></i></label>
                        <input id="img-input" type="file" accept="image/*"/>
                    </div>
                    <FormInput label="Tên người dùng" type="text" name="name" value={user.name}
                               onChange={onChange}/>
                    <FormInput label="Số điện thoại" type="text" name="phone" value={user.phone} onChange={onChange}/>
                    <FormInput label="Email" type="email" name="email" value={user.email} onChange={onChange}/>
                    <FormInput label="Ngày sinh" type="date" name="dateOfBirth" value={user.dateOfBirth}
                               onChange={onChange}/>
                    <button type="submit" className="btn btn-primary">Hoàn thành</button>
                </form>
            </div>
            <Footer/>
        </>
    );
}

export default Profile;