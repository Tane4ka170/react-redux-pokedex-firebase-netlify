import React, { Suspense, useEffect } from "react";
import Footer from "./sections/Footer";
import Background from "./components/Background";
import "./scss/index.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Search from "./pages/Search";
import MyList from "./pages/MyList";
import About from "./pages/About";
import Compare from "./pages/Compare";
import Pokemon from "./pages/Pokemon";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { clearToasts, setUserStatus } from "./app/slices/AppSlice";
import { firebaseAuth } from "./utils/firebaseConfig";
import { toast, ToastContainer, ToastOptions } from "react-toastify";
import Loader from "./components/Loader";
import Navbar from "./sections/Navbar";

export default function App() {
  const { toasts } = useAppSelector(({ app }) => app);
  const dispatch = useAppDispatch();
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        dispatch(setUserStatus({ email: currentUser.email as string }));
      }
    });
  }, [dispatch]);
  useEffect(() => {
    if (toasts.length) {
      const toastOptions: ToastOptions = {
        position: "bottom-right",
        autoClose: 2000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };
      toasts.forEach((message: string) => {
        toast(message, toastOptions);
      });
      dispatch(clearToasts());
    }
  }, [toasts, dispatch]);

  return (
    <div className="main-container">
      <Background />
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <div className="app">
            <Navbar />
            <Routes>
              <Route element={<Search />} path="/search" />
              <Route element={<MyList />} path="/list" />
              <Route element={<About />} path="/about" />
              <Route element={<Compare />} path="/compare" />
              <Route element={<Pokemon />} path="/pokemon/:id" />
              <Route element={<Navigate to="/pokemon/1" />} path="*" />
            </Routes>
            <Footer />
            <ToastContainer />
          </div>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
