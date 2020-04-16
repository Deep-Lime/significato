import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {NewPostActionCreator, UpdatePostTextActionCreator} from "./../../../Redux/state";

const MyPosts = (props) => {

    let PostElement = props.PostData.map(p => <Post
        Title={p.Title}
        Massage={p.Massage}
        Img={p.Img}
        Likes={p.Likes}
        Comments={p.Comments}
        Reposts={p.Reposts}
        Views={p.Views}/>);

    // Для чтения значений textarea
    let NewPostElement = React.createRef();

    // Добовление Поста
    let addPost = () => {
        props.Dispatch(NewPostActionCreator());
    };

    // Обновление текста
    let onChange = () => {
        let Text = NewPostElement.current.value;
        let Action = UpdatePostTextActionCreator(Text);
        props.Dispatch(Action);
    };

    return (
        <div className={s.Main}>
            <div className={s.posts}>
                <h4>Новый Запись</h4>
                <textarea ref={NewPostElement} onChange={onChange} value={props.NewPostText} rows="6"
                          placeholder="Создать новый пост..."/>

                <div className={s.posts__button}>
                    <button className={s.posts__button_b} onClick={addPost}>
                        <i className="fa fa-paper-plane" aria-hidden="true"/> Отправить
                    </button>
                    <button className={s.posts__button_b} onClick={addPost}>
                        <i className="fa fa-file" aria-hidden="true"/> Прикрепить
                    </button>
                    <button className={s.posts__button_b} onClick={addPost}>
                        <i className="fa fa-trash" aria-hidden="true"/> Очистить
                    </button>
                </div>
            </div>

            <div className={s.MyPosts}>
                <h4>Мои Записи</h4>

                <div className={s.post}>
                    {PostElement}
                </div>
            </div>
        </div>

    )
};

export default MyPosts;