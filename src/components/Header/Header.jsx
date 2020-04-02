import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
      <header>
        <div className={s.header}>
            <h2>Социальная сеть типо вк</h2>
            <div className={s.search}>
                <input type="text" className={s.searchTerm} placeholder="текст поиск"/>
                <button type="submit" className={s.searchButton}>
                    <i className="fa fa-search">
                    </i>
                </button>
            </div>
        </div>
      </header>
  );
}

export default Header;
