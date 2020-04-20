const NewPost = 'NewPost';
const UpdatePostText = 'UpdatePostText';

const ProfileReducer = (state, Action) => {
    switch (Action.type) {

        case NewPost:
            let AddPost = {
                Title: state.NewPostText,
                Massage: "",
                Img: "https://cdn.fotosklad.ru/upload/iblock/70a/70a7a24cad78cd0f8a3e6dfc6ba9a574_thumb_c964fe4a8e60f8f.jpg",
                Likes: "0",
                Comments: "0",
                Reposts: "0",
                Views: "1"
            };
            state.PostData.push(AddPost);
            state.NewPostText = '';
            return state;

        case UpdatePostText:
            state.NewPostText = Action.NewText;
            return state;

        default:
            return state;
    }
};

//Profile Posts
export const NewPostActionCreator = () => ({type: NewPost});
export const UpdatePostTextActionCreator = (Text) => ({type: UpdatePostText, NewText: Text});

export default ProfileReducer;