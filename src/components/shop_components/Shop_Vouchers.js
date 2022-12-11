import React from "react";
import classes from "./Shop_Vouchers.module.css";
const Shop_Vouchers = () => {
  return (
    <div className={classes.vouchers}>
      <h3 className={classes["vouchers-title"]}>Shop Vouchers</h3>
      <ul className={classes.voucherslist}>
        <li className={classes.vouchersitem}>
          <div className={classes.voucher}>
            <div className={classes.voucher_wrap}>
              <div className={classes.voucher_style}>
                <div className={classes.vs_wraX}>
                  <div className={classes.vs_wraXDh}>
                    <div className={classes.vs_wraX0J}></div>
                  </div>
                </div>
              </div>
              <div className={classes.voucher_content}>
                <div className={classes.voucher_details}>
                  <div className={classes.voucher_details_con}>
                    <div className={classes.voucher_offer}>
                      <div className={classes.voucher_offer_off}>
                        <div className={classes.voucher_offer_off_per}>
                          95% off
                        </div>
                      </div>
                      <div className={classes.voucher_offer_det}>
                        Min. Spend RM1 Capped at RM5
                      </div>
                    </div>
                    <div className={classes.voucher_offer_est}>
                      <ion-icon name="time-outline"></ion-icon>
                      <span>Use in: 1 day</span>
                    </div>
                    <div className={classes.seprator}></div>
                  </div>
                </div>
                <div className={classes.voucher_claim}>
                  <button type="button" className={classes["claim-btn"]}>
                    Claim
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className={classes.vouchersitem}>
          <div className={classes.voucher}>
            <div className={classes.voucher_wrap}>
              <div className={classes.voucher_style}>
                <div className={classes.vs_wraX}>
                  <div className={classes.vs_wraXDh}>
                    <div className={classes.vs_wraX0J}></div>
                  </div>
                </div>
              </div>
              <div className={classes.voucher_content}>
                <div className={classes.voucher_details}>
                  <div className={classes.voucher_details_con}>
                    <div className={classes.voucher_offer}>
                      <div className={classes.voucher_offer_off}>
                        <div className={classes.voucher_offer_off_per}>
                          95% off
                        </div>
                      </div>
                      <div className={classes.voucher_offer_det}>
                        Min. Spend RM1 Capped at RM5
                      </div>
                    </div>
                    <div className={classes.voucher_offer_est}>
                      <ion-icon name="time-outline"></ion-icon>
                      <span>Use in: 1 day</span>
                    </div>
                    <div className={classes.seprator}></div>
                  </div>
                </div>
                <div className={classes.voucher_claim}>
                  <button type="button" className={classes["claim-btn"]}>
                    Claim
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className={classes.vouchersitem}>
          <div className={classes.voucher}>
            <div className={classes.voucher_wrap}>
              <div className={classes.voucher_style}>
                <div className={classes.vs_wraX}>
                  <div className={classes.vs_wraXDh}>
                    <div className={classes.vs_wraX0J}></div>
                  </div>
                </div>
              </div>
              <div className={classes.voucher_content}>
                <div className={classes.voucher_details}>
                  <div className={classes.voucher_details_con}>
                    <div className={classes.voucher_offer}>
                      <div className={classes.voucher_offer_off}>
                        <div className={classes.voucher_offer_off_per}>
                          95% off
                        </div>
                      </div>
                      <div className={classes.voucher_offer_det}>
                        Min. Spend RM1 Capped at RM5
                      </div>
                    </div>
                    <div className={classes.voucher_offer_est}>
                      <ion-icon name="time-outline"></ion-icon>
                      <span>Use in: 1 day</span>
                    </div>
                    <div className={classes.seprator}></div>
                  </div>
                </div>
                <div className={classes.voucher_claim}>
                  <button type="button" className={classes["claim-btn"]}>
                    Claim
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Shop_Vouchers;
