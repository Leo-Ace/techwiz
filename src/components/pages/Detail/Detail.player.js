import React from 'react';
import classNames from 'classnames/bind';
import styles from './Detail_member.css';

const cx = classNames.bind(styles);
function Detail_player(props) {
  return (
    <div className={cx("detail_member")}>
      <div className={cx("player")}>
        <div className={cx("container mb-4")}>
          <div className={cx("row")}>
            <div className={cx("col-lg-4")}>
              <div className={cx("product-imgs")}>
                <div className={cx("img-display")}>
                  <div className={cx("img-showcase")}>
                    <img src="/images/Detail_member/01.jpg" alt="shoe image" />
                  </div>
                </div>

              </div>
            </div>
            <div className={cx("col-lg-8")}>
              <div className={cx("product-description")}>
                <div className={cx("project-title")}>
                  <h2 className={cx("h2-lg")}>NEYMAR JR</h2>
                </div>
                <div className={cx("product-txt")}>
                  <div className={cx("product-info")}>
                    <p>Full Name: <span>Neymar da Silva Santos Júnior</span></p>
                    <p>Age: <span>1992 (31 tuổi)</span></p>
                    <p>Nationality: <span>Brazil</span></p>
                    <p>Football club: <span>Paris Saint-Germain</span></p>
                    <p>Location: <span>ST</span></p>
                    <p>Height: <span>1,75 m</span></p>
                    <p>Weight: <span>68 kg</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("statistics mt-5 wide-70 ")}>
        <div className={cx("container")}>
          <div className={cx("row")}>
            <div className={cx("col-lg-12")}>
              <div className={cx("mb-60 text-center")}>
                <h2 className={cx("h2-xl")}>Statistics</h2>
              </div>
            </div>
          </div>
          <div className={cx("row")}>
            <div className={cx("col-lg-6")}>
              <div className={cx(" achievements")}>
                <table cellspacing="0" cellpadding="0" className={cx("table tbl-data")}>
                  <thead>
                    <tr>
                      <th colspan="2" className={cx("th-name")}>Achievements</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row" className={cx("left")}>Trận</td>
                      <td>687</td>
                    </tr>
                    <tr>
                      <td scope="row" className={cx("left")}>Thẻ vàng</td>
                      <td>182</td>
                    </tr>
                    <tr>
                      <td scope="row" className={cx("left")}>Thẻ đỏ</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td scope="row" className={cx("left")}>Kiến tạo</td>
                      <td>133</td>
                    </tr>
                    <tr>
                      <td scope="row" className={cx("left")}>Bàn thắng</td>
                      <td>438</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={cx("col-lg-6")}>
              <div className={cx("stylized")}>
                <table cellspacing="0" cellpadding="0" className={cx("table tbl-data")}>
                  <thead>
                    <tr>
                      <th colspan="2" className={cx("th-name")}>Stylized</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row" className={cx("left")}>Work cup</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td scope="row" className={cx("left")}>C1</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td scope="row" className={cx("left")}>Lege 1</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td scope="row" className={cx("left")}>Copa América</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td scope="row" className={cx("left")}>Quả Bóng Vàng</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td scope="row" className={cx("left")}>Quả Bóng Vàng</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td scope="row" className={cx("left")}>Quả Bóng Vàng</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td scope="row" className={cx("left")}>Quả Bóng Vàng</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td scope="row" className={cx("left")}>Quả Bóng Vàng</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td scope="row" className={cx("left")}>Quả Bóng Vàng</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail_player;