import "./form.css";
import { useState } from "react";
import validation from "../Utilities/validation";

const Forms = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit=(event)=>{
event.preventDefault();
   login(userData) 
  }

  return (
    <div className="formContainer">
<div className='banner'>
  <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg'></img>
</div>
     
      <form onSubmit={handleSubmit}className="formCard gradient-border ">
      <div className =" formEmail">
        <label  htmlFor="email">Email:</label>
        <input
        autoComplete="off"
          onChange={handleChange}
          value={userData.email}
          type="text"
          name="email"
        />
        {errors.e1 ? <p style={{color:"coral"}}>Enter email</p> : <p style={{color:"rgb(179, 240, 213)"}}>Enter email</p>}
        {errors.e2 ? <p style={{color:"coral"}}>The email must contain an @</p> : <p style={{color:"rgb(179, 240, 213)"}}>The email must contain an @</p>}
        {errors.e3 ? <p style={{color:"coral"}}>It cannot have more than 25 characters</p> : <p style={{color:"rgb(179, 240, 213)"}}>It cannot have more than 25 characters</p>}
      
        </div>
      
        <div className =" formPass">
        <label htmlFor="password">Password:</label>
        <input
           autoComplete="off"
          onChange={handleChange}
          value={userData.password}
          type="password"
          name="password"
        />
         {errors.p1 ? <p style={{color:"coral"}}>It must have at least one number</p> : <p style={{color:"rgb(179, 240, 213)"}}>It must have at least one number</p>}
         {errors.p2 ? <p style={{color:"coral"}}>It must have between 6 and 10 characters</p> : <p style={{color:"rgb(179, 240, 213)"}}>It must have between 6 and 10 characters</p>}
     
       
        </div>
     
        <button disabled ={errors.e1|| errors.e2||  errors.e3|| errors.p1 ||errors.p2} className='cardButton'  type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default Forms;
