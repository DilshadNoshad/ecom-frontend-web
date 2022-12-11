import React from "react";
import { Fragment } from "react";
import OrderItem from "../../components/UI/order/OrderItem";
import ProfileBreadcrumbs from "../../components/UI/profileBreadcrumbs/ProfileBreadcrumbs";

const myCancleOrders = [
  {
    id: 1,
    title:
      "Keychain - Mustache Keychain Best Quality Mustache Keychain Key Ring Beard Key",
    thumbnail:
      "https://static-01.daraz.pk/p/28e40033fd82db1feeecf50c77c639fe.jpg",
    quantity: 1,
    orderStatus: "Cancelled",
    orderNumber: 177623476949385,
    requestedDate: "17 Aug 2022",
  },
];
const MyCancellationsPage = () => {
  return (
    <Fragment>
      <ProfileBreadcrumbs title="My Cancellations" />
      <div className="order-list">
        <div className="orders">
          {myCancleOrders.map((order) => (
            <OrderItem
              key={order.id}
              order={{
                title: order.title,
                thumbnail: order.thumbnail,
                quantity: order.quantity,
                orderStatus: order.orderStatus,
                orderNumber: order.orderNumber,
                requestedDate: order.requestedDate,
              }}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default MyCancellationsPage;
