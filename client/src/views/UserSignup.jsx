import React, {useState} from 'react';
import {registerWithEmailAndPassword, loginWithGoogle} from '../api/auth';
import ToastContainer from '../components/Toast';
import {toast} from "react-toastify";
import FormInput from '../components/FormInput';
import TitleBar from '../components/TitleBar';
import {useAuth} from "../context/AuthContext.jsx";
import {Navigate} from "react-router-dom";
import {createUser} from "../api/user";

const UserSignup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const {currentUser} = useAuth();

    if (currentUser) {
        return <Navigate to={'/'}/>
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerWithEmailAndPassword(formData.email, formData.password);
            const user = {
                name: formData.username,
                email: formData.email,
            };
            await createUser(user);
        } catch (error) {
            console.log('Signup error:', error.code);
            switch (error.code) {
                case 'auth/invalid-email':
                    toast.error('Email không hợp lệ');
                    break;
                case 'auth/email-already-in-use':
                    toast.error('Email đã được sử dụng');
                    break;
                case 'auth/weak-password':
                    toast.error('Mật khẩu quá yếu');
                    break;
                default:
                    toast.error('Lỗi không xác định');
            }
        }
    };

    return (
        <>
            <ToastContainer/>
            <TitleBar/>
            <div className="form-container">
                <h3 className={'text-center'}>Đăng ký</h3>
                <form onSubmit={handleSubmit}>
                    <FormInput label="Tên người dùng" type="text" name="username" value={formData.username}
                               onChange={handleChange}/>
                    <FormInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange}/>
                    <FormInput label="Mật khẩu" type="password" name="password" value={formData.password}
                               onChange={handleChange}/>
                    <button type="submit" className="btn btn-primary">Tiếp tục</button>
                    <p className={'text-center'}>Đã có tài khoản? <a href={'/login'}>Đăng nhập</a></p>
                </form>

            </div>
        </>
    );
};

export default UserSignup;
