import { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../store/auth-slice";

const Auth = (props) => {
  const dispatch = useDispatch();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const onEnteredEmailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const onEnteredPasswordHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onFormSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={onEnteredEmailHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={onEnteredPasswordHandler}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
