import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { auth } from "../../auth/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const SignIn = () => {
  let [email, setEmail] = useState("");
  let [confirmEmail, setConfirmEmail] = useState("");
  let [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setMessage("Password must be 6 characters");
    } else {
      setMessage("");

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage(`Welcome SignIn Successfull!`);
        setEmail("");
        setConfirmEmail("");
        setPassword("");
      } catch (error) {
        setMessage(error.message);
      }
    }
  };
  return (
    <section className="py-5">
      <div className="container">
        <div className="row mx-auto" style={{ width: "30%" }}>
          <form
            className="form bg-white p-5 pt-4 shadow-sm "
            onSubmit={handleSubmit}
          >
            <h2 className="text-center fw-bold mb-3 text-uppercase text-secondary">
              SignIn
            </h2>
            {message && (
              <div className=" text-center bg-secondary ">
                <p className="text-light fw-bold p-2">{message}</p>
              </div>
            )}
            <div className="mb-2">
              <input
                type="email"
                className="form-control rounded-0 p-2"
                placeholder="Enter Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <input
                type="email"
                className="form-control rounded-0 p-2"
                placeholder="Confirm Email"
                required
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <input
                type="password"
                className="form-control rounded-0 p-2"
                placeholder="Enter Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg w-100 rounded-0"
              >
                SignIn
              </button>
            </div>

            <p className="text-center my-2 text-muted">OR</p>
            <div className="d-flex align-items-center justify-content-center">
              <button className="btn btn-light d-flex align-items-center text-center  justify-content-center gap-2 w-100 rounded-0 p-2">
                <span className="d-flex align-items-center  justify-content-center">
                  <FcGoogle size="1.5rem" />
                </span>
                <span className="d-flex align-items-center  justify-content-center">
                  SignIn With Google
                </span>
              </button>
            </div>
            <p className="text-muted text-center mt-2">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
