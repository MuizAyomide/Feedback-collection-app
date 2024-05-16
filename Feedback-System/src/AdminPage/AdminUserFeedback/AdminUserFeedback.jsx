import React, { useEffect, useState } from 'react';


const AdminUserFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // Fetch the feedbacks from Firestore
    const fetchFeedbacks = async () => {
      try {
        const feedbacksRef = firebase.firestore().collection('UserFeedbacks');
        const snapshot = await feedbacksRef.get();
        const fetchedFeedbacks = snapshot.docs.map(doc => doc.data());
        setFeedbacks(fetchedFeedbacks);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    // Call the fetchFeedbacks function
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
            <div className="feedback-text">{feedback.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUserFeedback;