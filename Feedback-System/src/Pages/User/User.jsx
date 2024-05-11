import React, { useEffect, useState } from "react";
import "./User.css";
import { useUserStore } from "../../Lib/userStore";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Lib/Firebase";

const User = () => {
  const [feedbacks, setFeedbacks] = useState();
  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "userfeedback", currentUser.id), (doc) => {
      setFeedbacks(doc.data());
    });

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  return (
    <div className="user">
      <div className="user-text">
        <h3>
          Welcome <span>MUIZ</span>!
        </h3>
        <h1>USER FEEDBACK</h1>
        <h3>Enter your feedback...</h3>
        <form>
          <input type="text" />
          <button>SEND</button>
        </form>
      </div>
{
  feedbacks.map((feedback) =>{

      <div className="other-feedback" key={feedback.feedbac}>
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
  })}
    </div>
  );
};

export default User;
