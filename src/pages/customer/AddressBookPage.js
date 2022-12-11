import React, { Fragment, useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import AddressBook from "../../components/profile/pageContent/AddressBook";
import AddressBookModal from "../../components/profile/pageContent/addressBookModal/AddressBookModal";
import ProfileBreadcrumbs from "../../components/UI/profileBreadcrumbs/ProfileBreadcrumbs";
import { useDispatch } from "react-redux";
import AuthContext from "../../Store/auth-context";
import { getAddressList } from "../../Services/auth";
  /*
    This page is used for loading the modal for entering new address
  */
const AddressBookPage = () => {
  const [addressFormIsShow, setAddressFormIsShow] = useState(false);
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [ addList, setAddList] = useState([]);
  const [address, setAddress] = useState({});
  const [toggle, setToggle] = useState(false);
  
  const { sendRequest, status, data: addressList, error } = useHttp(getAddressList, true);
  const [dialogClose, setDialogClose] = useState(true);
  //console.log('-----------address modal bf effect----------------');
  useEffect(() => {
    sendRequest({'id':authCtx?.userData?.id});
    //console.log(dialogClose);
    if (status === 'completed' && !error){
      //console.log('------------------address modal ---------------'+ status);
      //setAddList(optAddressList(addressList));
      setAddList(addressList);
      //console.log(addList);
    }
  }, [status, error, toggle]);

  const ShowAddressFormHandler = () => {
    //console.log('-----------show modal------------');
    setAddressFormIsShow(true);
    
  };
  const CloseAddressFormHandler = () => {
    //console.log('-----------Close Dialog address Boook Page-------------');
    setToggle(prevState => !prevState);
    setAddressFormIsShow(false);
    setDialogClose(false);
  };

  const handleAddressUpdate = (updatedAddress)=>{
    //console.log('----------updated address event-----------------');
    addList.push(updatedAddress);
  }

  return (
    <Fragment>
      <ProfileBreadcrumbs
        title="Address Book"
        button="Add New Address"
        onClick={ShowAddressFormHandler}
        btnIcon="add-outline"
      />
      {addressFormIsShow && (
        <AddressBookModal onAddUpdate={handleAddressUpdate}  onClick={CloseAddressFormHandler} />
      )}
      <AddressBook getAddressList={addList} />
    </Fragment>
  );
};

export default AddressBookPage;
