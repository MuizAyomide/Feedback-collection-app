import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { toast } from "react-toastify";
import "./Contact.css";

export default function Contact() {
  // Form handling using react-hook-form
  const { register, reset, handleSubmit } = useForm();

  // State variables
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState("");

  // Your Web3Forms access key
  const accessKey = "42b22cc2-2b5f-4564-b944-63067bae5bc0";

  // Initialize the useWeb3Forms hook
  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Feedback Collection App",
      subject: "New Contact Message from your Feedback App",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(toast.success("Sent Successfully!"));
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(toast.error("Input your Name, Mail and Messages Correctly!"));
    },
  });

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Have a question or comment? Reach out to us using the form below.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Your Name"
          {...register("name", { required: true })}
        />
        <input
          type="email"
          placeholder="Your Email"
          {...register("email", { required: true })}
        />
        <textarea
          placeholder="Your Message"
          {...register("message", { required: true })}
        />

        <button type="submit">Submit Form</button>
      </form>

      <div>{result}</div>
    </div>
  );
}
