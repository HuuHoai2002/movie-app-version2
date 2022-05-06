import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
import { useState } from "react";
import { storage } from "../firebase-app/firebase-config";

export default function useFirebaseImage() {
  // progress: % tải ảnh lên
  const [progressPercent, setProgressPercent] = useState(0);
  // image preview
  const [imagePreview, setImagePreview] = useState("");

  // upload ảnh lên firestore
  const handleUploadImage = (file) => {
    if (!file) return;
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgressPercent(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            throw new Error("undefined");
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;
          case "storage/unknown":
            break;
          default:
            throw new Error("undefined");
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImagePreview(downloadURL);
          console.log("File available at", downloadURL);
        });
      }
    );
  };
  // select image: lấy ảnh
  const handleSelectImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    handleUploadImage(file);
  };
  return {
    handleSelectImage,
    progressPercent,
    imagePreview,
  };
}
