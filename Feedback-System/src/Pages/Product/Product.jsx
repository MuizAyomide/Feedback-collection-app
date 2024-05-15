import React, { useEffect, useState } from "react";
import "./Product.css";
import { useUserStore } from "../../Lib/userStore";
import { onSnapshot, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../Lib/Firebase";
const Product = () => {

  const [text, setText] = useState("");
  const { currentUser } = useUserStore();
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(db, "userfeedback", currentUser.id),
      (doc) => {
        setFeedback(doc.data()?.feedbacks);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [currentUser.id]);

  const handleSend = async () => {
    if (text === "") return;

    try {
      const userRef = doc(db, "userfeedback", currentUser.id);
      await updateDoc(userRef, {
        feedbacks: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
        }),
      });

      setText("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="product">
      <div className="product-text">
      <h3>
          Welcome <span>{currentUser.username}</span>!
        </h3>
        <h1>PRODUCT FEEDBACK</h1>
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
            {feedback?.length > 0 && (
              <div className="feedback">
                {feedback.map((feed) => (
                  <div className="feeds" key={feed.createdAt}>
                    <div className="username-text">
                      {currentUser.username.slice(0, 1).toUpperCase()}
                    </div>
                    <div className="feedback-text">{feed.text}</div>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Product;
