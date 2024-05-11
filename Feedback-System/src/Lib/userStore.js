import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { create } from 'zustand'
import { db } from './Firebase';

export const useUserStore = create((set) => ({

  currentUser: '',
  fetchUserInfo: async (uid) =>{
    if(!uid) return set({currentUser:null});

    try{
        const docRef = doc(db, "users", uid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  set({currentUser: docSnap.data()})
} else {
    set({currentUser: null})
}

    }catch(err){
        // toast(err.message)
        console.log(err)
        return set({currentUser:null});
    }
  }
}))