import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const [credentials, setCredentials] = useState({name:"" ,email: "", password: "", cpassword: ""}) 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      const {name,email,password,cpassword}=credentials;   
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({name,email,password})
      });
      const json = await response.json()
      console.log(json);
      
      if (json.success){
        // Save the auth token and redirect
        localStorage.setItem('token', json.authtoken); //saving the authtoken adn redirecting 
        navigate('/');
    }
    else{
        alert("User with this email already exists");
    }
  }

  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <div className="container my-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={onChange}
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="email" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={onChange}
            type="password"
            className="form-control"
            id="password"
            name="password"
            minLength={5}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            onChange={onChange}
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
