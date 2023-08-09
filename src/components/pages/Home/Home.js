import React from 'react';
import classNames from 'classnames/bind';
import styles from './home.module.css';

const cx = classNames.bind(styles); 

function Home(props) {
  return (
    <>
      <main className={cx("")}>
        <div className={cx("home-component container")}>
          <div className={cx("banner")}>

          </div>
        </div>
      </main>
    </>
  );
}

export default Home;