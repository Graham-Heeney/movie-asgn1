import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../firebase';  
import backgroundImage from "../images/pexels-megha-mangal-224592-806880.jpg";



const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true); 
  const [error, setError] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();

    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(userCredential.user);
        alert("Sign-up successful! A verification email has been sent.");
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Sign-in successful!");
      }
    } catch (err) {
      setError(err.message);
    }
  };


  const backgroundStyle = {
    backgroundImage:`url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  };


  return (
    <div style={backgroundStyle}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f4f4f9",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "300px",
          textAlign: "center",
        }}
      >
        <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <form onSubmit={handleAuth}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              margin: "0.5rem 0",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              margin: "0.5rem 0",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
            required
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem",
              marginTop: "1rem",
              background: "#1976d2",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        {error && <p style={{ color: "#d32f2f", marginTop: "1rem" }}>{error}</p>}
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          style={{
            marginTop: "1rem",
            background: "none",
            border: "none",
            color: "#1976d2",
            cursor: "pointer",
          }}
        >
          {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
    </div>
  );
};

export default Signup;