import "./login.css";
import { useState } from "react";

export const RegistrationFormReact = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const handleFormsubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <form onSubmit={handleFormsubmit} className="form-container">
        <div className="container">
          <h1 className="form-title">Sign Up</h1>
          <p className="form-subtitle">
            Please fill in this form to create an account.
          </p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            autoComplete="off"
            placeholder="Enter First Name"
            required
            value={user.firstName}
            onChange={handleInputChange}
            className="input-field"
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            autoComplete="off"
            placeholder="Enter Last Name"
            required
            value={user.lastName}
            onChange={handleInputChange}
            className="input-field"
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            autoComplete="off"
            required
            value={user.email}
            onChange={handleInputChange}
            className="input-field"
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            autoComplete="off"
            required
            value={user.password}
            onChange={handleInputChange}
            className="input-field"
          />

          <label htmlFor="phone">
            <b>Phone Number</b>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            autoComplete="off"
            placeholder="Enter Phone Number"
            required
            value={user.phoneNumber}
            onChange={handleInputChange}
            className="input-field"
          />

          <p className="terms-text">
            By creating an account, you agree to our{" "}
            <a href="#" className="terms-link">
              Terms & Privacy
            </a>
          </p>

          <div className="clearfix">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </div>
      </form>

      <section className="summary">
        <p>
          Hello, my name is{" "}
          <span className="highlight-text">
            {user.firstName} {user.lastName}
          </span>
          . My email address is{" "}
          <span className="highlight-text">{user.email}</span> and my phone
          number is{" "}
          <span className="highlight-text">{user.phoneNumber}</span>.
        </p>
      </section>
    </>
  );
};