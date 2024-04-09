import { Toaster } from "react-hot-toast";
import "../../../node_modules/modern-normalize/modern-normalize.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import RestrictedRoute from "../RestrictedRoute";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import Loader from "../Loader/Loader";
import PrivateRoute from "../PrivateRoute";
import css from "./App.module.css";
import Layout from "../Layout/Layout";

const Contacts = lazy(() => import("../../pages/Contacts/Contacts"));
const Login = lazy(() => import("../../pages/Login/Login"));
const Register = lazy(() => import("../../pages/Register/Register"));
const Home = lazy(() => import("../../pages/Home/Home"));

const App = () => {
  const dispatch = useDispatch();
  const refreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <div>
      <Layout>
        {refreshing ? (
          <Loader />
        ) : (
          <div className={css.main}>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/register"
                  element={<RestrictedRoute component={<Register />} />}
                  redirectTo="/contacts"
                />
                <Route
                  path="/login"
                  element={<RestrictedRoute component={<Login />} />}
                  redirectTo="/contacts"
                />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute
                      component={<Contacts />}
                      redirectTo="/login"
                    />
                  }
                />
              </Routes>
            </Suspense>
          </div>
        )}
      </Layout>
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
