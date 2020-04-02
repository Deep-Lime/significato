import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    let AddButton = () => {
        alert("Сообщение будет Удалено позже")
    };

    return (
        <div className={s.posts}>

            <div className={s.ava}>
                <img
                    src="https://content.freelancehunt.com/profile/photo/225/SPRAER.png"
                    alt="user"/> <p>Богдан</p>
            </div>

            <div>
                <div className={s.Post}>
                    <h4>{props.Title}</h4>
                    <p className={s.comment}>
                        {props.Massage}
                    </p>
                    <img src={props.Img} alt="post"/>
                </div>

                <div className={s.posts__button_all}>
                    <div className={s.posts__button}>
                        <button className={s.posts__button_b} onClick={AddButton}>
                            <span>{props.Likes}</span> <i className="fa fa-heart" aria-hidden="true"></i>
                        </button>
                        <button className={s.posts__button_b} onClick={AddButton}>
                            <span>{props.Comments}</span> <i className="fa fa-comments" aria-hidden="true"></i>
                        </button>
                        <button className={s.posts__button_b} onClick={AddButton}>
                            <span>{props.Reposts}</span> <i className="fa fa-share-square" aria-hidden="true"></i>
                        </button>
                    </div>
                    <button className={s.posts__button_b}>
                        <span>{props.Views}</span> <i className="fa fa-eye" aria-hidden="true"></i>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Post;
