import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(userCredential.user);
      setIsEmailSent(true);
      alert("Verification email sent. Please check your inbox.");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/setuporganisation"); // Redirect to dashboard after successful Google sign-in
    } catch (err) {
      setError(err.message);
    }
  };

  const handleVerification = async () => {
    if (auth.currentUser?.emailVerified) {
      alert("Email verified successfully!");
      navigate("/setuporganisation"); // Redirect to dashboard after verification
    } else {
      alert("Email not verified. Please check your inbox.");
    }
  };

  return (
    <div className="registration-page">
      <div className="w-100 ">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-4">
            <div className="registration-card">
              <div className="card-body">
                <h1 className="card-title text-center mb-4">
                  Create Your Account
                </h1>
                {error && <div className="alert alert-danger">{error}</div>}
                {!isEmailSent ? (
                  <form onSubmit={handleRegister}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-2"
                    >
                      Register
                    </button>
                  </form>
                ) : (
                  <div>
                    <p className="text-center mb-4">
                      Please check your email for the verification link.
                    </p>
                    <button
                      onClick={handleVerification}
                      className="btn btn-success w-100 py-2"
                    >
                      Verify Email
                    </button>
                  </div>
                )}
                <div className="text-center mt-4">
                  <p className="mb-3">Or</p>
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-google w-100 py-2"
                  >
                    <img
                      src="https://www.pngmart.com/files/23/Google-Logo-PNG-HD-1.png"
                      alt="Google Logo"
                      className="google-logo"
                    />
                    Continue with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
