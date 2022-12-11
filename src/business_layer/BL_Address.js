import React, { Fragment, useState, useContext, useEffect } from "react";
import useHttp from "../hooks/use-http";

import { getAddressList } from "../Services/auth";
import AuthContext from "../Store/auth-context";

const BL_Address = () =>{
    const authCtx = useContext(AuthContext);
  const [addList, setAddList] = useState({});
  const { sendRequest, status, data: addressList, error } = useHttp(getAddressList, true);

//console.log('-----------address modal bf effect----------------');
    useEffect(() => {
      sendRequest();
    //sendRequest({'id':authCtx?.userData?.id});
    //console.log(status);
    if (status === 'completed' && !error){
        //console.log('------------------address modal ---------------'+ status);
        //setAddList(addressList);
        //return optAddressList(addressList);
        
    
    //const optAddressList = (addressList)=> {
    setAddList( addressList.map((obj)=> {
        return {'main_address': `${obj.address1}, 
                ${obj.address2}, ${obj.stateName}, 
                ${obj.cityName}, ${obj.postCode}`, 
                'phone': `${obj.phone}`, 
                'name' : authCtx?.userData?.id,
                'addressId': obj.addressId,
                'address': obj
        }
    //return addlst;
    }));
}
}, [status, error]);

return addList;
}

export default BL_Address
  