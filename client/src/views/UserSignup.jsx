import React, {useState} from 'react';
import {registerWithEmailAndPassword, loginWithGoogle} from '../api/auth';
import FormInput from '../components/FormInput';
import Header from '../components/Header';
import '../styles/auth.css';

const UserSignup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerWithEmailAndPassword(formData.email, formData.password);
            console.log('Signup successful:', response);
            // Xử lý sau khi đăng ký thành công, như chuyển hướng đến trang khác
        } catch (error) {
            console.error('Signup error:', error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await loginWithGoogle();
            console.log('Google sign-in successful:', result);
            // Xử lý sau khi đăng nhập bằng Google thành công
        } catch (error) {
            console.error('Google sign-in error:', error.message);
        }
    };

    return (
        <>
            <Header/>
            <div className="form-container">
                <h3 className={'text-center'}>Đăng ký</h3>
                <form onSubmit={handleSubmit}>
                    <FormInput label="Name" type="text" name="username" value={formData.username}
                               onChange={handleChange}/>
                    <FormInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange}/>
                    <FormInput label="Mật khẩu" type="password" name="password" value={formData.password}
                               onChange={handleChange}/>
                    <button type="submit" className="btn btn-primary">Tiếp tục</button>
                </form>
                <hr/>
                <p className={'text-center'}>Hoặc đăng nhập bằng:</p>
                <button onClick={handleGoogleSignIn} className="btn btn-secondary">Google</button>
            </div>
        </>
    );
};

export default UserSignup;
