import { Routes, Route } from "react-router-dom";
import { AppBar } from "pages/AppBar/AppBar";
import { RegistrationForm } from "pages/RegistrationForm/RegistrationForm";
import { LoginForm } from "pages/LoginForm/LoginForm";
import { PhoneBook } from "./Phonebook/PhoneBook";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from '../reduxStore/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])
  
  return (
    <>
      <AppBar/>
      <Routes>
        <Route path="/" element={<h1>Welcome!</h1>} />
        <Route path="register" element={<RegistrationForm/>} />
        <Route path="login" element={<LoginForm/>} />
        <Route path="contacts" element={<PhoneBook />} />
      </Routes>
    </>
  )
}