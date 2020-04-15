import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = (props) => {
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