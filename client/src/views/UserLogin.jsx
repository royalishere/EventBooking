import React, {useState} from 'react';
import FormInput from '../components/FormInput';
import TitleBar from '../components/TitleBar';
import {toast} from 'react-toastify';
import ToastContainer from '../components/Toast';
import {loginWithEmailAndPassword, loginWithGoogle} from '../api/auth';
import {useAuth} from '../context/AuthContext';
import googleIcon from '../assets/google-icon.webp'
import {Navigate} from "react-router-dom";

const UserLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const {currentUser} = useAuth();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleGoogleSignIn = async () => {
        try {
            await loginWithGoogle();
        } catch (error) {
            switch (error.code) {
                case 'auth/popup-closed-by-user':
                    toast.error('Đăng nhập bị hủy bởi người dùng');
                    break;
                default:
                    toast.error('Đăng nhập thất bại');
            }
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await loginWithEmailAndPassword(formData.email, formData.password);

        } catch (error) {
            console.error('Login error:', error.code);
            switch (error.code) {
                case 'auth/invalid-credential':
                    toast.error('Email hoặc mật khẩu không đúng');
                    break;
                case 'auth/too-many-requests':
                    toast.error('Quá nhiều yêu cầu. Vui lòng thử lại sau');
                    break;
            }
        }
    };

    return (
        <>
            {currentUser && <Navigate to={'/'}/>}
            <ToastContainer/>
            <TitleBar/>
            <div className="form-container">
                <h3 className={'text-center'}>Đăng nhập</h3>
                <form onSubmit={handleSubmit}>
                    <FormInput label="Email" type="email" name="email" value={formData.email}
                               onChange={handleChange}/>
                    <FormInput label="Mật khẩu" type="password" name="password" value={formData.password}
                               onChange={handleChange}/>
                    <p className={'text-center'}>
                        <a href={'/forgot-password'} className={'fpw-link'}>Quên mật khẩu?</a>
                    </p>
                    <button type="submit" className="btn btn-primary">Tiếp tục</button>
                    <p className={'text-center'}>Chưa có tài khoản? <a href={'/signup'}>Đăng ký ngay</a></p>
                </form>
                <hr/>
                <p className={'text-center'}>Hoặc đăng nhập bằng:</p>
                <button onClick={handleGoogleSignIn} className="google-btn">
                    <img src={googleIcon} className={'logo'}></img>
                </button>
            </div>
        </>
    );
};

export default UserLogin;
