import { Fragment, useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgetPage from "./pages/ForgetPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Layout from "./components/UI/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import CheckoutPage from "./pages/CheckoutPage";
import AuthContext from "./Store/auth-context";
import PurchaseSuccessPage from "./pages/PurchaseSuccessPage";
import { useDispatch, useSelector } from "react-redux";
import CategoryPage from "./pages/CategoryPage";
import ProfileLayout from "./components/UI/ProfileLayout";
import ManageAccountPage from "./pages/customer/ManageAccountPage";
import MyProfilePage from "./pages/customer/MyProfilePage";
import AddressBookPage from "./pages/customer/AddressBookPage";
import MyCancellationsPage from "./pages/customer/MyCancellationsPage";
import MyReturnsPage from "./pages/customer/MyReturnsPage";
import MyOrderPage from "./pages/customer/MyOrderPage";
import EditProfile from "./components/profile/pageContent/EditProfile";
import MyOrderDetailPage from "./pages/customer/MyOrderDetailPage";
import { fetchCartData } from "./Store/cart-actions";

import Shop_Products from "./components/shop_components/shop_products/Shop_All_Products";
import Shop_All_Products from "./components/shop_components/shop_products/Shop_All_Products";
import Shop_Cat_Products from "./components/shop_components/shop_products/Shop_Cat_Products";
import MyShop from "./components/shop_components/Shop_Products";
import ShopPage from "./pages/shop/ShopPage";

function App() {
  const isCartChange = useSelector((state) => state.cart.changed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [isCartChange, dispatch]);
  const checkoutItems = useSelector((state) => state.checkout.checkoutItems);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const checkoutHasItems = checkoutItems.length > 0;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop-collection/:shopNumber" element={<ShopPage />}>
          <Route index element={<Shop_All_Products />} />
          <Route path="category/:categoryName">
            <Route index element={<Shop_Cat_Products />} />
          </Route>
        </Route>
        {!isLoggedIn && <Route path="/login" element={<LoginPage />} />}
        <Route path="/login">
          <Route
            index
            element={
              <Fragment>
                {isLoggedIn && <Navigate to="/" replace={true} />}
                {!isLoggedIn && <LoginPage />}
              </Fragment>
            }
          />
        </Route>
        {!isLoggedIn && <Route path="/register" element={<RegisterPage />} />}
        <Route path="/forget" element={<ForgetPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout">
          <Route
            index
            element={
              <Fragment>
                {isLoggedIn && checkoutHasItems && <CheckoutPage />}
                {!isLoggedIn && <Navigate to="/login" replace={true} />}
                {!checkoutHasItems && <Navigate to="/" replace={true} />}
              </Fragment>
            }
          />
          <Route
            path="success_checkout"
            element={
              <Fragment>
                {isLoggedIn && <PurchaseSuccessPage />}
                {!isLoggedIn && <Navigate to="/login" replace={true} />}
              </Fragment>
            }
          />
        </Route>
        {isLoggedIn && (
          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<ManageAccountPage />} />
            <Route path="view" element={<MyProfilePage />} />
            <Route path="edit" element={<EditProfile />} />
            <Route path="address" element={<AddressBookPage />} />
            <Route path="my_orders">
              <Route index element={<MyOrderPage />} />
              <Route
                path="order_detail/:orderDetailId"
                element={<MyOrderDetailPage />}
              />
            </Route>
            <Route
              path="order_cancellations"
              element={<MyCancellationsPage />}
            />
            <Route path="order_returns" element={<MyReturnsPage />} />
          </Route>
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
