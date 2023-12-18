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
     <div className="contains">
      <form onSubmit={handleSubmit}className="formCard">
      <div className =" formEmail">
        <label  htmlFor="email"><h2 className="email">Email:</h2></label>
        <input
        placeholder="Cesar@henry.com"
        className="formInput"
        autoComplete="off"
          onChange={handleChange}
          value={userData.email}
          type="text"
          name="email"
        />
        
        <div className="emailErrors">
    
        {errors.e2 ? <p style={{color:"red"}}>The email must contain an @ ✖</p> : <p style={{color:" rgb(17, 80, 119)"}}>The email must contain an @ ✔</p>}
        {errors.e3 ? <p style={{color:"red"}}>It must have between 10 and 25 characters ✖</p> : <p style={{color:" rgb(17, 80, 119)"}}>It must have between 10 and 25 characters ✔</p>}
        </div>
        </div>
      <br></br>
        <div className =" formPass">
        <label  htmlFor="password"><h2 className="Password" >Password:</h2></label>
        <input
        placeholder="casa1234"
        className="formInput"
           autoComplete="off"
          onChange={handleChange}
          value={userData.password}
          type="password"
          name="password"
        /><div className="passErrors">
         {errors.p1 ? <p style={{color:"red"}}>The password must have at least one number ✖</p> : <p style={{color:"rgb(17, 80, 119)"}}>The password must have at least one number ✔</p>}
         {errors.p2 ? <p style={{color:"red"}}>It must have between 6 and 10 characters ✖</p> : <p style={{color:"rgb(17, 80, 119)"}}>It must have between 6 and 10 characters ✔</p>}
         </div>
       
        </div>
     
        <button disabled ={errors.e1|| errors.e2||  errors.e3|| errors.p1 ||errors.p2} className='subButton'  type="submit"><h2>submit</h2> </button>
      </form>
      </div>
    </div>
  );
};

export default Forms;
