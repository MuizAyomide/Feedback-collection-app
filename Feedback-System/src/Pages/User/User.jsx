import React, { useEffect, useState } from "react";
import "./User.css";
import { useUserStore } from "../../Lib/userStore";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Lib/Firebase";

const User = () => {
  
  const [text, setText] = useState("");

  const [feedback, setFeedback] = useState();
  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "userfeedback", currentUser.id), (doc) => {
      setFeedback(doc.data());
    });

    return () => {
      unSub();
    };
  }, [currentUser.id]);


  return (
    <div className="user">
      <div className="user-text">
        <h3>
          Welcome <span>{currentUser.username}</span>!
        </h3>
        <h1>USER FEEDBACK</h1>
        <h3>Enter your feedback...</h3>
        <form>
          <input type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}/>
          <button>SEND</button>
        </form>
      </div>

      <div className="other-feedback">
        <h3>Other Feedbacks</h3>
        <div className="feedbacks">
          <div className="feedback">
            <div className="username-text">M</div>
            <div className="feedback-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              possimus quam saepe quas repellendus!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
