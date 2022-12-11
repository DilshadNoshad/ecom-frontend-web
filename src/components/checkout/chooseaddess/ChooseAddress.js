import React, { Fragment, useState } from "react";
import AddressBookModal from "../../profile/pageContent/addressBookModal/AddressBookModal";
import Button from "../../UI/buttons/Button";
import classes from "./ChooseAddress.module.css";
const ChooseAddress = (props) => {
  return (
    <Fragment>
      <div className={classes.chooseaddress}>
        <div className={classes.head}>
          <div className={classes.title}>Shipping Address</div>
          <div className={classes.actionbtn}>
            <span
              onClick={props.showModal}
              className={classes["add-new-address"]}
            >
              Add new address
            </span>
          </div>
        </div>
        <div className={classes.addressbook}>
          <div className={classes["addressbook_content"]}>
            <div className={classes.leftcontent}>
              <label className={classes["form-control"]}>
                <input type="radio" name="radio" />
              </label>
            </div>
            <div className={classes.rightcontent}>
              <div className={classes["c-mob-title"]}>
                <span className={classes.title}>Muhammad Arsalan Ata</span>
                <span className={classes.mobile}>01123406508</span>
              </div>
              <div className="c-address">
                <span className={`${classes.tag} ${classes["tag-home"]}`}>
                  HOME
                </span>
                <span className={classes.addressInfo}>
                  Flat: A1-04-12, level: 04, Block A, Cyberia Smart Homes,
                  Cyberjaya, Selengor, Selangor-Cyberjaya-63000
                </span>
              </div>
              <div className={classes.postcode}>
                Postcode: Selangor - Cyberjaya - 63000
              </div>
              <div className={classes["c-address-book-default"]}>
                <span className={classes["c-address-book-tag"]}>
                  Default Shipping Address
                </span>
              </div>
            </div>
          </div>
          <div className={classes["addressbook_content"]}>
            <div className={classes.leftcontent}>
              <label className={classes["form-control"]}>
                <input type="radio" name="radio" />
              </label>
            </div>
            <div className={classes.rightcontent}>
              <div className={classes["c-mob-title"]}>
                <span className={classes.title}>Muhammad Arsalan Ata</span>
                <span className={classes.mobile}>01123406508</span>
              </div>
              <div className="c-address">
                <span className={`${classes.tag} ${classes["tag-office"]}`}>
                  OFFICE
                </span>
                <span className={classes.addressInfo}>
                  Flat: A1-04-12, level: 04, Block A, Cyberia Smart Homes,
                  Cyberjaya, Selengor, Selangor-Cyberjaya-63000
                </span>
              </div>
              <div className={classes.postcode}>
                Postcode: Selangor - Cyberjaya - 63000
              </div>
              <div className={classes["c-address-book-default"]}>
                <span className={classes["c-address-book-tag"]}>
                  Default Billing Address
                </span>
              </div>
            </div>
          </div>
          <div className={classes["addressbook_content"]}>
            <div className={classes.leftcontent}>
              <label className={classes["form-control"]}>
                <input type="radio" name="radio" />
              </label>
            </div>
            <div className={classes.rightcontent}>
              <div className={classes["c-mob-title"]}>
                <span className={classes.title}>Muhammad Arsalan Ata</span>
                <span className={classes.mobile}>01123406508</span>
              </div>
              <div className="c-address">
                <span className={`${classes.tag} ${classes["tag-office"]}`}>
                  OFFICE
                </span>
                <span className={classes.addressInfo}>
                  Flat: A1-04-12, level: 04, Block A, Cyberia Smart Homes,
                  Cyberjaya, Selengor, Selangor-Cyberjaya-63000
                </span>
              </div>
              <div className={classes.postcode}>
                Postcode: Selangor - Cyberjaya - 63000
              </div>
              <div className={classes["c-address-book-default"]}>
                <span className={classes["c-address-book-tag"]}>
                  Default Billing Address
                </span>
              </div>
            </div>
          </div>
          <div className={classes["addressbook_content"]}>
            <div className={classes.leftcontent}>
              <label className={classes["form-control"]}>
                <input type="radio" name="radio" />
              </label>
            </div>
            <div className={classes.rightcontent}>
              <div className={classes["c-mob-title"]}>
                <span className={classes.title}>Muhammad Arsalan Ata</span>
                <span className={classes.mobile}>01123406508</span>
              </div>
              <div className="c-address">
                <span className={`${classes.tag} ${classes["tag-office"]}`}>
                  OFFICE
                </span>
                <span className={classes.addressInfo}>
                  Flat: A1-04-12, level: 04, Block A, Cyberia Smart Homes,
                  Cyberjaya, Selengor, Selangor-Cyberjaya-63000
                </span>
              </div>
              <div className={classes.postcode}>
                Postcode: Selangor - Cyberjaya - 63000
              </div>
              <div className={classes["c-address-book-default"]}>
                <span className={classes["c-address-book-tag"]}>
                  Default Billing Address
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.footaction}>
          <Button
            onClick={props.onClose}
            // type="submit"
            className={classes["cancle_sm_btn"]}
          >
            Cancel
          </Button>
          <Button
            // onClick={}
            // type="submit"
            className={classes["save_sm_btn"]}
          >
            Save
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default ChooseAddress;
