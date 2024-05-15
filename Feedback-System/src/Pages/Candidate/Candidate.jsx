import React, { useEffect, useState } from "react";
import "./Candidate.css";
import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../Lib/Firebase";
import { useUserStore } from "../../Lib/userStore";

const Candidate = () => {
  const [text, setText] = useState("");
  const { currentUser } = useUserStore();
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(db, "candidatefeedback", currentUser.id),
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
      const userRef = doc(db, "candidatefeedback", currentUser.id);
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
    <div className="candidate">
      <div className="candidate-text">
        <h3>
          Welcome <span>{currentUser.username}</span>!
        </h3>
        <h1>CANDIDATE FEEDBACK</h1>
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
          {feedback.map((feedback, index) => (
            <div className="feedback" key={index}>
              <div className="candidatename-text">{feedback.candidateName}</div>
              <div className="feedback-text">{feedback.message}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Candidate;
