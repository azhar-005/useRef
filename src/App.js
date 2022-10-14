import "./styles.css";
import { useRef } from "react";

export default function App() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value
    });
  };
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <label htmlFor="Email">Email Id</label>
        <input id="email" ref={emailRef} type="email" />
        <br />
        <label htmlFor="Password">Password</label>
        <input id="password" ref={passwordRef} type="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
