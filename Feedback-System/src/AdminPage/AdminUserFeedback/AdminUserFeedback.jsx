import React, { useEffect, useState } from "react";
import "./AdminUserFeedback.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../Lib/Firebase";

const AdminUserFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const feedbacksRef = collection(db, "userfeedback");
        const snapshot = await getDocs(feedbacksRef);
        const fetchedFeedbacks = snapshot.docs.map((doc) => ({
          text: doc.data().text,
        }));
        setFeedbacks(fetchedFeedbacks);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="adminuser">
      <div className="adminuser-text">
        <h1>USER FEEDBACKS</h1>
      </div>

      <div className="other-feedback">
        {feedbacks.map((feedback, index) => (
          <div className="feedback" key={index}>
            <div className="candidatename-text">{feedback.candidateName}</div>
            <div className="feedback-text">{feedback.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUserFeedback;
