import React from "react";
import { Link } from "react-router-dom";
import classes from "./Shope_Info.module.css";
function Shope_Info() {
  return (
    <div className={classes["info_wrapper"]}>
      <section>
        <div className={classes["info_overview-container"]}>
          <div className={classes["info_overview-shop"]}>
            <div
              className={classes["shop-background"]}
              style={{
                background:
                  "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.6)),url(https://cf.shopee.com.my/file/b7a9cb4585eeb95e1e46b2b9af4e51a5_tn) no-repeat center /cover",
              }}
            ></div>
            <div className={classes["about-shop-warp"]}>
              <div className={classes["about-shop-content"]}>
                <Link to="#" className={classes["about-shop-link"]}>
                  <div className={classes["shop-avatar"]}>
                    <img
                      className={classes["shopee-avatar__img"]}
                      src="https://cf.shopee.com.my/file/78dcd93abd4f9b743f7cebeea0663336_tn"
                    />
                  </div>
                  <div className={classes["shop-badge"]}>
                    <div className={classes["official_muradi-shop-badge"]}>
                      <img
                        className="official_muradi_badge"
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/shopmicrofe/483071c49603aa7163a7f51708bff61b.png"
                        loading="lazy"
                        width="64"
                        height="16"
                      />
                    </div>
                  </div>
                </Link>
                <div className={classes["about-shop-info"]}>
                  <h1 className={classes["shop-name-info"]}>
                    Machines Official Apple Reseller
                  </h1>
                  <div className={classes["shop-status"]}>
                    <div className={classes["shop-active-time"]}>
                      Active 7 minutes ago
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes["about-shop-actions"]}>
                <Link to="#" className={classes["shop-horizontal__button"]}>
                  <span className={classes["shop-horizontal__icon"]}>
                    <ion-icon name="add-outline"></ion-icon>
                  </span>
                  follow
                </Link>
                <Link to="#" className={classes["shop-horizontal__button"]}>
                  <span className={classes["shop-horizontal__icon"]}>
                    <ion-icon name="chatbubbles-outline"></ion-icon>
                  </span>
                  chat
                </Link>
              </div>
            </div>
          </div>
          <div className={classes["info_overview-shop-list"]}>
            <div className={classes["info_overview-shop-item"]}>
              <div className={classes["info_overview-shop-item_icon-wrap"]}>
                <ion-icon name="storefront-outline"></ion-icon>
              </div>
              <div className={classes["info_overview-shop-text"]}>
                <div className={classes["info_overview-shop-text-name"]}>
                  products:&nbsp;
                </div>
                <div className={classes["info_overview-shop-text-value"]}>
                  284
                </div>
              </div>
            </div>
            <div className={classes["info_overview-shop-item"]}>
              <div className={classes["info_overview-shop-item_icon-wrap"]}>
                <ion-icon name="person-add-outline"></ion-icon>
              </div>
              <div className={classes["info_overview-shop-text"]}>
                <div className={classes["info_overview-shop-text-name"]}>
                  following:&nbsp;
                </div>
                <div className={classes["info_overview-shop-text-value"]}>
                  2
                </div>
              </div>
            </div>
            <div className={classes["info_overview-shop-item"]}>
              <div className={classes["info_overview-shop-item_icon-wrap"]}>
                <ion-icon name="chatbox-ellipses-outline"></ion-icon>
              </div>
              <div className={classes["info_overview-shop-text"]}>
                <div className={classes["info_overview-shop-text-name"]}>
                  Chat Performance:&nbsp;
                </div>
                <div className={classes["info_overview-shop-text-value"]}>
                  99% (Within Hours)
                </div>
              </div>
            </div>
            <div className={classes["info_overview-shop-item"]}>
              <div className={classes["info_overview-shop-item_icon-wrap"]}>
                <ion-icon name="people-outline"></ion-icon>
              </div>
              <div className={classes["info_overview-shop-text"]}>
                <div className={classes["info_overview-shop-text-name"]}>
                  Followers:&nbsp;
                </div>
                <div className={classes["info_overview-shop-text-value"]}>
                  238.5k
                </div>
              </div>
            </div>
            <div className={classes["info_overview-shop-item"]}>
              <div className={classes["info_overview-shop-item_icon-wrap"]}>
                <ion-icon name="star-outline"></ion-icon>
              </div>
              <div className={classes["info_overview-shop-text"]}>
                <div className={classes["info_overview-shop-text-name"]}>
                  Rating:&nbsp;
                </div>
                <div className={classes["info_overview-shop-text-value"]}>
                  4.9 (66.6k rating)
                </div>
              </div>
            </div>
            <div className={classes["info_overview-shop-item"]}>
              <div className={classes["info_overview-shop-item_icon-wrap"]}>
                <ion-icon name="checkmark-circle-outline"></ion-icon>
              </div>
              <div className={classes["info_overview-shop-text"]}>
                <div className={classes["info_overview-shop-text-name"]}>
                  Joined:&nbsp;
                </div>
                <div className={classes["info_overview-shop-text-value"]}>
                  27 Months Ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shope_Info;
