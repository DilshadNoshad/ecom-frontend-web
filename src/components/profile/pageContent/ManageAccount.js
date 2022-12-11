import React, {useState, useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import { getAddressList } from "../../../Services/auth";
import AuthContext from "../../../Store/auth-context";
import classes from "./ManageAccount.module.css";
import ManageAccountAddressCard from "./ManageAccountAddressCard.js";
import ManageAccountOrder from "../pageContent/ManageAccount/ManageAccountOrder";

const ManageAccount = () => {

  const authCtx = useContext(AuthContext);
  const { sendRequest, status, data: addresses, error } = useHttp(getAddressList, true);
  const [dialogClose, setDialogClose] = useState(true);
  const [addList, setAddList] = useState({});
  //console.log('-----------address modal bf effect----------------');
  useEffect(() => {
    sendRequest({'id':authCtx?.userData?.id});
    if (status === 'completed' && !error){
      setAddList(addresses);
      //console.log(addresses);
      
    }
  }, [status, error]);

  const Lst = () =>{
    addList.map((obj)=>{
      //console.log(obj.address1);
    });
  }

  return (
    <div className={classes["profInfo_wrapper"]}>
      <div className={classes["dashboard-profile"]}>
        <div className={classes["dashboard-mod-title"]}>
          Personal Profile <span>|</span>&nbsp;
          <Link to="#">EDIT</Link>
        </div>
        <div className="dashboard-info">
          <div className={classes["dashboard-info-item"]}>{authCtx?.userData?.last}</div>
          <div className={classes["dashboard-info-item"]}>
            {authCtx?.userData?.email}
          </div>
          <div className={`${classes["dashboard-info-item"]} ${classes.last}`}>
            <Link to="#">Subscribe to our Newsletter</Link>
          </div>
        </div>
      </div>
      <div className={classes["dashboard-address"]}>
        <div className={classes["dashboard-mod-title"]}>
          Address Book <span>|</span>&nbsp;
          <Link to="#">EDIT</Link>
        </div>
        <div className={classes["dashboard-address-wrap"]}>
          <ManageAccountAddressCard />
        </div>
      </div>
      <div className={classes["recent-orders"]}>
        <div className={classes["recent-orders-hd"]}>Recent Orders</div>
        <div className={classes["next-table"]}>
          <div className={classes["next-table-inner"]}>
            <div className={classes["next-table-header"]}>
              <div className="next-table-header-inner">
                <table>
                  <thead>
                    <tr>
                      <th>Order #</th>
                      <th>Placed On</th>
                      <th>Items</th>
                      <th>Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            <div className={classes["next-table-body"]}>
              
              <ManageAccountOrder />
          
            </div>
          </div>
        </div>
      </div>
        
    </div>
  );
};

export default ManageAccount;
