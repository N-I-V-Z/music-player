import { storage } from "../config/firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const uploadMusic = (musicFile, setUploadProgress) => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `music/${musicFile.name}`);
    const metadata = {
      contentType: "audio/mpeg",
    };
    const uploadTask = uploadBytesResumable(storageRef, musicFile, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = parseInt((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setUploadProgress(progress);
      },
      (error) => {
        console.error("Upload failed:", error);
        reject("Upload failed: " + error.message);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        } catch (error) {
          console.error("Error getting download URL:", error);
          reject("Error getting download URL: " + error.message);
        }
      }
    );
  });
};
