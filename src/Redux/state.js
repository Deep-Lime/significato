import ProfileReducer from "./profile-reducer";
import DialogsReducer from './dialogs-reducer';

let store = {
    _state: {
        ProfilePage: {
            PostData: [
                {
                    Title: "Тест №1",
                    Massage: "Тестим запись номер 1",
                    Img: "https://images.unsplash.com/photo-1583691863206-ae582f81edaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    Likes: 21,
                    Comments: 6,
                    Reposts: 2,
                    Views: 55
                },
                {
                    Title: "HackerMen",
                    Massage: "Тестим запись номер 2",
                    Img: "https://images.unsplash.com/photo-1583691863206-ae582f81edaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    Likes: 54,
                    Comments: 8,
                    Reposts: 2,
                    Views: 237
                },
                {
                    Title: "HackerMen",
                    Massage: "Тестим запись номер 3",
                    Img: "https://images.unsplash.com/photo-1583691863206-ae582f81edaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    Likes: 1,
                    Comments: 0,
                    Reposts: 0,
                    Views: 5
                },
                {
                    Title: "LOOOOOOOOOOOOL",
                    Massage: "Тестим запись номер ???",
                    Img: "https://images.unsplash.com/photo-1583691863206-ae582f81edaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    Likes: 1,
                    Comments: 999,
                    Reposts: 0,
                    Views: 1704
                },
                {
                    Title: "Когда помог донести пакеты",
                    Massage: "",
                    Img: "https://www.meme-arsenal.com/memes/de5abf868918de4198b39241937ff568.jpg",
                    Likes: 711,
                    Comments: 323,
                    Reposts: 47,
                    Views: 1204
                }
            ],
            NewPostText: ""
        },

        DialogsPage: {
            NickData: [
                {
                    Name: "HackerMen",
                    Ava: "https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                },
                {
                    Name: "Ms.Doctor",
                    Ava: "https://images.unsplash.com/photo-1581093583449-8255a7d46e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                },
                {
                    Name: "Zero Bot",
                    Ava: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                },
                {
                    Name: "Zero 2.0",
                    Ava: "https://allsoft.ua/upload/programs_pictograms/14f/14fe8d8fb660a2a0ab4f5689880b8d4b.png"
                },
                {
                    Name: "Ivan Ivanov",
                    Ava: "https://images.unsplash.com/photo-1526578410734-17a617547636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                }
            ],
            DialogUsersData: [
                {
                    UserName: "HackerMen",
                    Avatar: "https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    Mail: "Hello World!"
                },
                {
                    UserName: "Ms.Doctor",
                    Avatar: "https://images.unsplash.com/photo-1581093583449-8255a7d46e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    Mail: "Кто ты?"
                },
                {
                    UserName: "HackerMen",
                    Avatar: "https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    Mail: "Я получил доступ к твоей учетке в RAID SWADOW LEGENDS!"
                },
                {
                    UserName: "Ms.Doctor",
                    Avatar: "https://images.unsplash.com/photo-1581093583449-8255a7d46e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    Mail: "НЕЕЕЕЕЕЕЕЕЕЕЕЕТ"
                },
                {
                    UserName: "HackerMen",
                    Avatar: "https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    Mail: "Да, это точно"
                },
                {
                    UserName: "Ms.Doctor",
                    Avatar: "https://images.unsplash.com/photo-1581093583449-8255a7d46e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    Mail: "Только не моя любимая игра"
                },
                {
                    UserName: "Ms.Doctor",
                    Avatar: "https://images.unsplash.com/photo-1581093583449-8255a7d46e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    Mail: "НЕЕЕЕЕЕЕЕЕЕЕЕЕТ"
                },
                {
                    UserName: "HackerMen",
                    Avatar: "https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    Mail: "Ахаха, Смирись с этим дорогуша!"
                },
                {
                    UserName: "Ms.Doctor",
                    Avatar: "https://images.unsplash.com/photo-1581093583449-8255a7d46e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    Mail: "Лучше бы принтеры людям чинил"
                },
                {
                    UserName: "HackerMen",
                    Avatar: "https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    Mail: "* Где-то в мире плачет один айтишник *"
                }
            ],
            NewMessageText: ""
        },
    },

    // Запрет пользоваться STATE, функция посредник
    getState() {
        return this._state;
    },

    // Стартовое значение до активации слежки за RerenderDOMTree
    _callSubscriber() {
        console.log('State changed');
    },

    // Патерн Observer
    Subscribe(Observer) {
        this._callSubscriber = Observer;
    },

    // Передаёт state и Action в Reducer,
    // заменяет старый state на полученый от редьюсеров state и вызывает перересовку страницы
    Dispatch(Action) {
        this._state.profilePage = ProfileReducer(this._state.ProfilePage, Action);
        this._state.dialogsPage = DialogsReducer(this._state.DialogsPage, Action);

        this._callSubscriber(this._state);
    }

};

export default store;
window.store = store;