import React from "react";
import classes from "./DeliveryStatus.module.css";
const DeliveryStatus = () => {
  return (
    <div className={classes.ds_wrap}>
      <div className={classes.ds_head}>
        <div className={classes.ds_title}>delivery address</div>
        <div className={classes.ds_sellerInfo}>
          <div>
            <div>Shopee Xpress (West Malaysia)</div>
            <div>SPXMY02044035775B</div>
          </div>
        </div>
      </div>
      <div className={classes.ds_body}>
        <div className={classes.ds_parcelbuyer}>
          <div className={classes.ds_buyername}>Muhammad Arsalan Ata</div>
          <div className={classes.ds_buyerdetail}>
            <span>(+60) 1123406508</span>
            <br />
            Flat: A3-09-12 , Cyberia Smart Homes Block A3, Jalan Cyberia 1,
            Cyber 11, Sepang, 63000, Selangor
          </div>
        </div>
        <div className={classes.ds_parcelstatus}>
          <ol>
            <li className={classes.active}>
              <div className={classes.timldate}>09-11-2022 09:18</div>
              <div className={classes.sent}>
                <span>Parcel has been delivered</span>
              </div>
            </li>
            <li>
              <div className={classes.timldate}>09-11-2022 06:25</div>
              <div className={classes.sent}>
                <span>Parcel is out for delivery</span>
              </div>
            </li>
            <li>
              <div className={classes.timldate}>08-11-2022 18:04</div>
              <div className={classes.sent}>
                <span>
                  Parcel has arrived at the delivery hub: Cyberjaya Hub.
                </span>
              </div>
            </li>
            <li>
              <div className={classes.timldate}>08-11-2022 16:49</div>
              <div className={classes.sent}>
                <span>Parcel has departed from sorting facility.</span>
              </div>
            </li>
            <li>
              <div className={classes.timldate}>08-11-2022 13:11</div>
              <div className={classes.sent}>
                <span>
                  Parcel has arrived at sorting facility: DDR sorting centre.
                </span>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default DeliveryStatus;
