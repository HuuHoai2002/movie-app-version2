import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase-app/firebase-config";
import { handleSetTitle } from "../../utils/index";

const NotificationPage = () => {
  React.useEffect(() => {
    handleSetTitle("Thông Báo", false);
  }, []);
  const { id } = useParams();
  const [notification, setNotification] = useState(null);
  useEffect(() => {
    const colRef = doc(db, "Notification", id.toString());
    const getData = async () => {
      const results = await getDoc(colRef);
      results && setNotification(results.data());
    };
    getData();
  }, [id]);

  console.log(notification);
  return (
    <div className="container-watch">
      {notification && (
        <div>
          <span>{notification.author}</span>
          <p>{notification.content}</p>
        </div>
      )}
    </div>
  );
};

export default NotificationPage;
