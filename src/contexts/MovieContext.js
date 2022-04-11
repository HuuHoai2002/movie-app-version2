import { collection, getDocs, onSnapshot } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase-config";
import useLocalStorage from "../hooks/useLocalStorage";

const movieContext = createContext();

const MovieProvider = ({ children }) => {
  const navigate = useNavigate();
  const handleNavigate = (path, movieID) => {
    navigate(`/${path}${movieID ? "/" + movieID : ""}`);
  };
  const handleNavigateTV = (path, movieID, Episode) => {
    navigate(`/${path}/${movieID}/${Episode}`);
  };
  const Frame_Movie_Path = "https://www.2embed.ru/embed/tmdb/movie?id=";
  const Frame_Tivi_Path = "https://www.2embed.ru/embed/tmdb/tv?id=";

  const [loading, setLoading] = useState(true);

  const handleSetTitle = ({ title = "" }) => {
    document.title = title;
  };

  // store firebase

  //get firestore
  const colRef = collection(db, "Notification");
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      let Notifications = [];
      snapshot.docs.forEach((doc) => {
        Notifications.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setNotifications(Notifications);
    });
    // const handleGetNotification = async () => {
    //   try {
    //     const snapshot = await getDocs(colRef);
    //     let Notifications = [];
    //     snapshot.docs.forEach((doc) => {
    //       Notifications.push({
    //         id: doc.id,
    //         ...doc.data(),
    //       });
    //     });
    //     setNotifications(Notifications);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // handleGetNotification();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    handleNavigate,
    handleNavigateTV,
    useLocalStorage,
    Frame_Movie_Path,
    Frame_Tivi_Path,
    loading,
    setLoading,
    handleSetTitle,
    notifications,
  };
  return (
    <movieContext.Provider value={value}>{children}</movieContext.Provider>
  );
};

const useMovies = () => {
  const context = useContext(movieContext);
  if (typeof context === "undefined") {
    throw new Error("You count must be used within a Movies Provider");
  }
  return context;
};

export { useMovies, MovieProvider };
