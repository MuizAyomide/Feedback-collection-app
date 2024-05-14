import React, { useEffect, useState } from "react";
import "./User.css";
import { useUserStore } from "../../Lib/userStore";
import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../Lib/Firebase";

const User = () => {

 const MessageForm = ({ userId }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userDocRef = doc(db, "users", userId);
      await updateDoc(userDocRef, {
        messages: arrayUnion({
          text: message,
          createdAt: new Date(),
        }),
      });
      console.log("Message sent successfully!");
      setMessage(""); // Clear the input field after sending the message
    } catch (err) {
      console.error("Error sending message:", err);
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
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send Message</button>
    </form>
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
