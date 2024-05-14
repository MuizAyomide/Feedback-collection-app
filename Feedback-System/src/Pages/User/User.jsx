import React, { useEffect, useState } from "react";
import "./User.css";
import { useUserStore } from "../../Lib/userStore";
import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../Lib/Firebase";

const User = () => {
  const [text, setText] = useState("");

  const [feedback, setFeedback] = useState();
  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "users", currentUser.id), (doc) => {
      setFeedback(doc.data());
    });

    return () => {
      unSub();
    };
  }, [currentUser.id]);
  console.log(currentUser.id);

  const handleSend = async () => {
    if (text === "") return;

    try {
      await updateDoc(db, "userfeedback", feedback.id, {
        feedbacks: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="user">
      <div className="user-text">
        <h3>
          Welcome <span>{currentUser.username}</span>!
        </h3>
        <h1>USER FEEDBACK</h1>
        <h3>Enter your feedback...</h3>
        <div className="form">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleSend}>SEND</button>
        </div>
      </div>

      <div className="other-feedback">
        <h3>Other Feedbacks</h3>
        <div className="feedbacks">
          <div className="feedback">
            <div className="username-text">
              {currentUser.username.slice(0, 1).toUpperCase()}
            </div>
            {feedback?.feedbacks?.map((feeds) => (
              <div className="feedback-text" key={feeds?.createdAt}>
                {feeds.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
