import { useState } from "react";

export default function RegisterForm() {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isValid, setIsValid] = useState(false);

  const handleFirstNameInput = (event) => {
    setValue({ ...value, firstName: event.target.value });
  };

  const handleLastNameInput = (event) => {
    setValue({ ...value, lastName: event.target.value });
  };

  const handleEmailInput = (event) => {
    setValue({ ...value, email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(isSubmitted);
    setIsSubmitted(true);
  };

  const checkValid = () => {
    if (value.email !== "" && value.firstName !== "" && value.lastName !== "") {
      setIsValid(true);
    }
  };

  function ErrorMessage({ fieldName }) {
    return <span className="error-message">Please enter your {fieldName}</span>;
  }

  return (
    <div className="register-form">
      <h3>Basic Registration</h3>
      <form onSubmit={handleSubmit}>
        {isSubmitted && isValid ? (
          <div className="success-message">
            You have successfully registered!{" "}
          </div>
        ) : null}
        <input
          onChange={handleFirstNameInput}
          className="reginput"
          type="text"
          placeholder="First name"
          value={value.firstName}
        />
        {isSubmitted && !value.firstName ? (
          <ErrorMessage fieldName="first name" />
        ) : null}
        <input
          onChange={handleLastNameInput}
          className="reginput"
          type="text"
          placeholder="Last name"
          value={value.lastName}
        />
        {isSubmitted && !value.lastName ? (
          <ErrorMessage fieldName="last name" />
        ) : null}
        <input
          onChange={handleEmailInput}
          className="reginput"
          type="email"
          placeholder="Email address"
          value={value.email}
        />
        {isSubmitted && !value.email ? (
          <ErrorMessage fieldName="email" />
        ) : null}
        <button className="submit" type="submit" onClick={checkValid}>
          Register
        </button>
      </form>
    </div>
  );
}
