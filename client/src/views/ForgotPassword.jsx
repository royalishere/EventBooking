import React from 'react';
import TitleBar from '../components/TitleBar';
import FormInput from '../components/FormInput';
import {resetPassword} from '../api/auth';
import ToastContainer from '../components/Toast';
import {toast} from 'react-toastify';

const ForgotPassword = () => {

    const [email, setEmail] = React.useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        resetPassword(email).then(() => {
            toast.success('Vui lòng kiểm tra email của bạn');
        }).catch((err) => {
            toast.error('Vui lòng kiểm tra định dạng email');
        });
    }

    return (
        <>
            <TitleBar/>
            <ToastContainer/>
            <div className="form-container">
                <h4 className={'text-center'}>Đặt lại mật khẩu</h4>
                <form onSubmit={handleSubmit}>
                    <FormInput label="Email" type="email" name="email" onChange={handleChange}/>
                    <button type="submit" className="btn btn-primary">Gửi</button>
                </form>
                <p className={'text-center'}><a href={'/'}>Về trang chủ</a></p>
            </div>
        </>
    );
};

export default ForgotPassword;