import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = (props) => {
    return (
        <div className="content__box">

            <ProfileInfo/>
            <MyPosts PostData={props.state.PostData} NewPost={props.NewPost}/>

        </div>
    );
}

export default Profile;