import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {

    let PostElement = props.PostData.map(p => <Post
        Title={p.Title}
        Massage={p.Massage}
        Img={p.Img}
        Likes={p.Likes}
        Comments={p.Comments}
        Reposts={p.Reposts}
        Views={p.Views}/>);

    let NewPostText = React.createRef();

    let AddPost = () => {
        let PostText = NewPostText.current.value;
        alert("Текст успешно отправлен!")
    };

    let addPost = () => {
        let text = NewPostText.current.value;
        props.NewPost(text);
        NewPostText.current.value = '';
    };

    return (
        <div className={s.Main}>
            <div className={s.posts}>
                <h4>Новый Запись</h4>
                <textarea ref={ NewPostText } rows="6" placeholder="Создать новый пост...">
                </textarea>

                <div className={s.posts__button}>
                    <button className={s.posts__button_b} onClick={ addPost }>
                        <i className="fa fa-paper-plane" aria-hidden="true"></i> Отправить
                    </button>
                    <button className={s.posts__button_b} onClick={ AddPost }>
                        <i className="fa fa-file" aria-hidden="true"></i> Прикрепить
                    </button>
                    <button className={s.posts__button_b} onClick={ AddPost }>
                        <i className="fa fa-trash" aria-hidden="true"></i> Очистить
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