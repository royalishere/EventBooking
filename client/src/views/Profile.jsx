import React, {useEffect, useState} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/_profile.scss';
import logo from '../../public/events_logo.jpeg';
import {getById} from "../api/user.js";


const Profile = () => {
    const user={
        name: "Võ Minh Hiếu",
        phone: "0393587124",
        email: "mittoleo2911@gmail.com",
        dob: "29/11/2002"
    }

    const [data, setData] = useState({});

    const getProfile = async (id) => {
        try {
            const { data } = await getById(id);
            setData(data);
            console.log(data);
        }
        catch (error) {
            console.log("Error", error);
        }
    }

    useEffect(() => {
        getProfile(1);
    }, []);

  return (
    <div class="Profile">
        <Header/>
        <form class="Profile-container">
            <div class="avatar">
                <img src={logo} class="avatar-img" alt="Ảnh đại diện"/>
                <label for="img-input"><i class="bi bi-camera-fill"></i></label>
                <input id="img-input" type="file" accept="image/*"/>
            </div>
            
            <div className="Flex-column">
                <div className="Label">Họ và tên</div>
                <div className="Value">
                    <input name="name" placeholder="Nhập họ và tên" type="text"
                        maxLength="70" class="Input" value={data.name}/>
                </div>
            </div>

            <div className="Flex-column">
                <div className="Label">Số điện thoại</div>
                <div className="Value">
                    <input name="phone" placeholder="Nhập số điện thoại" type="text"
                        maxLength="70" class="Input" value={data.phone}/>
                </div>
            </div>

            <div className="Flex-column">
                <div className="Label">Email nhận vé</div>
                <div className="Value">
                    <input name="email" placeholder="Nhập email" type="text"
                        maxLength="70" class="Input" value={data.email}/>
                </div>
            </div>

            <div className="Flex-column">
                <div className="Label">Ngày tháng năm sinh</div>
                <div className="Value">
                    <input name="dob" placeholder="Nhập ngày tháng năm sinh" type="text"
                        maxLength="70" class="Input" value={data.dateOfBirth}/>
                </div>
            </div>

            <div className="profile-btn">
                <button type="submit" class="submit-btn">Hoàn thành</button>
            </div>
        </form>
        <Footer/>
    </div>
  );
}

export default Profile;