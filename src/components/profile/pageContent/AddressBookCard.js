import React, {Fragment, useState} from "react";
import { Link } from "react-router-dom";
import classes from "./AddressBookCard.module.css";
import AddressBookModal from "./addressBookModal/AddressBookModal";


const AddressBookCard = (props) => {

  const [addressFormIsShow, setAddressFormIsShow] = useState(false);
  const [address, setAddress] = useState(props.address)
  
  const ShowAddressFormHandler = () => {
    //console.log('-----------show modal-----run-------');
    setAddressFormIsShow(true);
  };
  const CloseAddressFormHandler = () => {
    //console.log('-----------CloseAddressFormHandler--------addressbookcard------');
    //console.log(props.address.address);
    setAddressFormIsShow(false);
  };

  const onAddressUpdate = (updAdd) => {
    //console.log('----------update address----------------');
    //console.log(updAdd);
    setAddress(updAdd);
    //console.log('-----------upd update ------------------');
    //console.log(updAdd);
    return updAdd;
  }

  const getAddressFormat = (obj) =>{
    return {'main_address': `${obj.address1}, 
              ${obj.address2}, ${obj.stateName}, 
              ${obj.cityName}, ${obj.postCode}`, 
              'phone': `${obj.phone}`, 
              'addressId': obj.addressId,
              'addressName': obj.addressName,
              'address': obj
            };
  }

  return (
    
    <div className={classes["address-book-card"]}>
      <div className={classes["address-book-card-name"]}>
        {props.address.name}&nbsp;
        <span className="gray"> {getAddressFormat(address).addressName}|</span>&nbsp;
        <Link onClick={ShowAddressFormHandler} className={classes.link} to="#">
          Edit
        </Link>
        <Fragment>
          {addressFormIsShow && (
            <AddressBookModal 
              address={getAddressFormat(address).address} 
              onAddUpdate={onAddressUpdate} onClick={CloseAddressFormHandler} />
          )}
        </Fragment>        
      </div>
      <div className={classes["address-book-card-phone"]}>{getAddressFormat(address).phone}</div>
      <div className={classes["address-book-card-address"]}>
      {getAddressFormat(address).main_address}
      </div>
      <div className={classes["address-book-card-tags"]}>
        <small className={classes["address-book-card-tag"]}>Default</small>
        <small className={classes["address-book-card-tag-default"]}>
          Default Shipping Address
        </small>
        
      </div>
    </div>
  );
};

export default AddressBookCard;
