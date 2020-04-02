import React from 'react';
import s from './Dialogs.module.css';
import Mail from "./Mail/Mail";
import Nick from "./Nick/Nick"


const Dialogs = (props) => {

    let NicksElements = props.state.NickData.map(NickEl => <Nick
        Name={NickEl.Name}
        Ava={NickEl.Ava}/>);
    let DialogsElements = props.state.DialogUsersData.map(MailEl => <Mail
        Avatar={MailEl.Avatar}
        UserName={MailEl.UserName}
        Mail={MailEl.Mail}/>);

    let NewDialogElement = React.createRef();

    let AddMail = () => {
        let Text = NewDialogElement.current.value;
        props.NewMassage(Text);
        NewDialogElement.current.value = '';
    };

    return (
        <div className="content">
            <div className="content__box">
                <div className={s.grid}>

                    <div className={s.mail}>
                        {DialogsElements}
                        <div className={s.posts}>
                            <textarea ref={NewDialogElement} rows="3" placeholder="Написать Сообщение...">
                            </textarea>

                            <div className={s.posts__button}>
                                <button className={s.posts__button_b} onClick={ AddMail }>
                                    <i className="fa fa-paper-plane" aria-hidden="true"></i> Отправить
                                </button>
                                <button className={s.posts__button_b} onClick={ AddMail }>
                                    <i className="fa fa-file" aria-hidden="true"></i> Прикрепить
                                </button>
                                <button className={s.posts__button_b} onClick={ AddMail }>
                                    <i className="fa fa-trash" aria-hidden="true"></i> Очистить
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={s.nickname}>
                        <div className={s.NickTittle}>
                            Диалоги
                        </div>
                        {NicksElements}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Dialogs;
