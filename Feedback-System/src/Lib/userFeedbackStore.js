import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { create } from "zustand";
import { db } from "./Firebase";

export const useFeedbackStore = create((set) => ({
  feedback: "",
  fetchUserInfo: async (uid) => {
    if (!uid) return set({ feedback: null });

    try {
      const docRef = doc(db, "userfeedback", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        set({ feedback: docSnap.data() });
      } else {
        set({ feedback: null });
      }
    } catch (err) {
      // toast(err.message)
      console.log(err);
      return set({ feedback: null });
    }
  },
}));
