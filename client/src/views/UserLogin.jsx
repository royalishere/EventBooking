import React, {useState} from 'react';
import FormInput from '../components/FormInput';
import Header from '../components/Header';
import {loginWithEmailAndPassword, loginWithGoogle} from '../api/auth';
import '../styles/auth.css';

const UserLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            console.log('Login successful:', response);
            // Xử lý sau khi đăng nhập thành công, như chuyển hướng đến trang khác
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <>
            <Header/>
            <div className="form-container">
                <h3 className={'text-center'}>Đăng nhập</h3>
                <form onSubmit={handleSubmit}>
                    <FormInput label="Email" type="email" name="email" value={formData.email}
                               onChange={handleChange}/>
                    <FormInput label="Mật khẩu" type="password" name="password" value={formData.password}
                               onChange={handleChange}/>
                    <button type="submit" className="btn btn-primary">Tiếp tục</button>
                </form>
            </div>
        </>
    );
};

export default UserLogin;
