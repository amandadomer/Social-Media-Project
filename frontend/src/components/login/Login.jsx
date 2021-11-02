import 'bootstrap/dist/css/bootstrap.css';
import { useContext, useRef } from "react";
import "./Login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";


export default function Login(){
  const email = useRef();
  const password = useRef();
  const {user, isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user)
  return (
    <form onSubmit={handleClick}>
      <div class="card">
        <label for="exampleInputEmail1" class="form-label">Email address:</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"  ref={email}  required/>
        <label for="exampleInputPassword1" class="form-label">Password:</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" ref={password}  required/>
      <button type="submit" class="btn btn-dark" className="btn">Log in</button><br></br>
      Don't have an account? Sign up here.
      </div>
    </form>
            
  )};