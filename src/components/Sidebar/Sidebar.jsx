import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <div className={s.sidebar__box}>
                <img src="https://content.freelancehunt.com/profile/photo/225/SPRAER.png" alt="user_foto"
                     className={s.head__foto}/>
                <div className={s.UserName}>
                    <i className="fa fa-user" aria-hidden="true"/>
                    <h3>Гоголев Богдан</h3>
                </div>

                <NavLink to="/Profile" activeClassName={s.active}>
                    <i className="fa fa-home" aria-hidden="true"/>
                    <span>На главную</span>
                </NavLink>
                <NavLink to="#">
                    <i className="fa fa-newspaper-o" aria-hidden="true"/>
                    <span>Новости</span>
                </NavLink>
                <NavLink to="/Dialogs" activeClassName={s.active}>
                    <i className="fa fa-comments" aria-hidden="true"/>
                    <span>Сообщения</span>
                </NavLink>
                <NavLink to="#">
                    <i className="fa fa-users" aria-hidden="true"/>
                    <span>Друзья</span>
                </NavLink>
                <NavLink to="#">
                    <i className="fa fa-camera" aria-hidden="true"/>
                    <span>Фотографии</span>
                </NavLink>
                <NavLink to="#">
                    <i className="fa fa-music" aria-hidden="true"/>
                    <span>Музыка</span>
                </NavLink>
                <NavLink to="#">
                    <i className="fa fa-film" aria-hidden="true"/>
                    <span>Видео</span>
                </NavLink>
                <NavLink to="#"><i className="fa fa-gamepad" aria-hidden="true"/>
                    <span>Игры</span>
                </NavLink>

                <NavLink to="#" className={s.flex__sidebar1}>
                    <i className="fa fa-cog" aria-hidden="true"/>
                    <span>Настройки</span>
                </NavLink>
                <NavLink to="#" className={s.flex__sidebar2}>
                    <i className="fa fa-sign-out" aria-hidden="true"/>
                    <span>Выйти</span>
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
