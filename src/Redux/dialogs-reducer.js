const NewMessage = 'NewMessage';
const UpdateMassageText = 'UpdateMassageText';

const DialogsReducer = (state, Action) => {
    switch (Action.type) {

        case NewMessage:
            let AddMessage = {
                UserName: "HackerMen",
                Avatar: "https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                Mail: state.NewMessageText
            };
            state.DialogUsersData.push(AddMessage);
            state.NewMessageText = '';
            return state;

        case UpdateMassageText:
            state.NewMessageText = Action.NewText;
            return state;

        default:
            return state;
    }
};

//Dialogs Messages
export const NewMessageActionCreator = () => ({type: NewMessage});
export const UpdateMassageTextActionCreator = (Text) => ({type: UpdateMassageText, NewText: Text});

export default DialogsReducer;