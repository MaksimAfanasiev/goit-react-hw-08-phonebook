import { Routes, Route } from "react-router-dom";
import { AppBar } from "components/AppBar/AppBar";
import { RegistrationForm } from "pages/RegistrationForm/RegistrationForm";
import { LoginForm } from "pages/LoginForm/LoginForm";
import { PhoneBook } from "../pages/Phonebook/PhoneBook";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from '../reduxStore/operations';
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(state => state.auth.isRefreshingUser);

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])
  
  return (
   
    !isRefreshingUser &&
      <>
        <AppBar />
        
        <Routes>
          <Route path="/" element={<PublicRoute><h1>Welcome!</h1></PublicRoute>} />
          <Route path="/register" element={<PublicRoute restricted><RegistrationForm/></PublicRoute>} />
          <Route path="/login" element={<PublicRoute restricted><LoginForm /></PublicRoute>} />

          <Route path="/contacts" element={<PrivateRoute><PhoneBook/></PrivateRoute>}/>
        </Routes>
      </>
  )
}