import React, { Fragment, useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import AddressBook from "../../components/profile/pageContent/AddressBook";
import AddressBookModal from "../../components/profile/pageContent/addressBookModal/AddressBookModal";
import ProfileBreadcrumbs from "../../components/UI/profileBreadcrumbs/ProfileBreadcrumbs";
import { useDispatch } from "react-redux";
import AuthContext from "../../Store/auth-context";
import { getAddressList } from "../../Services/address";
import LoadingSpinner from "../../components/UI/loadingSpinner/LoadingSpinner";

/*
    This page is used for loading the modal for entering new address
  */
const AddressBookPage = () => {
  const authCtx = useContext(AuthContext);

  const [addressFormIsShow, setAddressFormIsShow] = useState(false);

  //Destructuring UserData of useId
  const { id: userId } = authCtx?.userData;

  const {
    sendRequest,
    status,
    data: addList,
    error,
  } = useHttp(getAddressList, true);

  useEffect(() => {
    sendRequest(userId);
  }, [sendRequest, userId]);

  const ShowAddressFormHandler = () => {
    setAddressFormIsShow(true);
  };
  const CloseAddressFormHandler = () => {
    setAddressFormIsShow(false);
  };

  let addContent;

  if (status === "pending") {
    addContent = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && addList && addList.length > 0) {
    addContent = <AddressBook getAddressList={addList} />;
  }

  if (error) {
    addContent = <div className="centered focused">{error}</div>;
  }
  if (status === "completed" && (!addList || addList.length === 0)) {
    addContent = (
      <div className="centered">
        <p>no address found</p>
      </div>
    );
  }

  const handleAddressUpdate = (updatedAddress) => {
    // addList.push(updatedAddress);
  };

  console.log(addList, "-addressList in addressbookPage-");
  return (
    <Fragment>
      <ProfileBreadcrumbs
        title="Address Book"
        button="Add New Address"
        onClick={ShowAddressFormHandler}
        btnIcon="add-outline"
      />
      {addressFormIsShow && (
        <AddressBookModal
          onAddUpdate={handleAddressUpdate}
          onClick={CloseAddressFormHandler}
        />
      )}
      {addContent}
    </Fragment>
  );
};

export default AddressBookPage;
