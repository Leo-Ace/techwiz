import React from 'react';
import classNames from 'classnames/bind';
import styles from './home.module.css';

const cx = classNames.bind(styles); 

function Home(props) {
  return (
    <>
      <main>
        <div className={cx("home-component container")}>
          
        </div>
      </main>
    </>
  );
}

export default Home;