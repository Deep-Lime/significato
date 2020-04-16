import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = (props) => {

    // Расзделение на профиль пользователя и на его посты
    return (
        <div className="content__box">

            <ProfileInfo/>
            <MyPosts PostData={props.ProfilePage.PostData}
                     NewPostText={props.ProfilePage.NewPostText}
                     Dispatch={props.Dispatch}/>

        </div>
    );
};

export default Profile;