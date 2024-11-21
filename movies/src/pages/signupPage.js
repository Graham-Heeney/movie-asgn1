// Signup.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../firebase';  // Assuming your firebase.js file is at the same level


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true); // To toggle between SignUp and SignIn mode
  const [error, setError] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();

    try {
      if (isSignUp) {
        // Sign Up
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(userCredential.user);
        alert("Sign-up successful! A verification email has been sent.");
      } else {
        // Sign In
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Sign-in successful!");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <form onSubmit={handleAuth}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>

      {error && <p>{error}</p>}

      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default Signup;
