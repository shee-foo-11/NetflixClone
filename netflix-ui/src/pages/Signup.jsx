import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import React, { useState} from "react";
import styled from "styled-components";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import {firebaseAuth} from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";


//email: asdfgh@gmail.com
//password: 123456
export default function Signup(){
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const handleSignIn = async ()=> {
    try {
      const {email,password} = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch(err){
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser)=> {
    if(currentUser) navigate("/");
  });

  return (<Container showPassword= {showPassword}>
    <BackgroundImage />
    <div className="content">
      <Header login/>
      <div className="body flex column j-center a-center">
        <div className="text flex column">
          <h1>Unlimited movies, TV shows and more</h1>
          <h4>Watch anywhere. Cancel anytime</h4>
          <h6>Ready to watch? Enter your email to create or restart membership</h6>
        </div>
        <div className="form">
          <input 
            type="email" 
            placeholder="Email Address" 
            name="email" 
            value={formValues.email}
            onChange={(e)=> 
              setFormValues({
              ...formValues,
              [e.target.name]:e.target.value,
            })
          }
          />
          {showPassword? (
            <input 
            type="password"  
            placeholder="Password" 
            name="password"
            value={formValues.password}
            onChange={(e)=> 
              setFormValues({
              ...formValues,
              [e.target.name]:e.target.value,
            }
            )}
            />
            ):(<button onClick={()=> setShowPassword(true)}>Get Started</button>)}
        </div>
        {/* {showPassword && <input type="password"  placeholder="Password" name="password"/>}
          {!showPassword && <button onClick={()=> setShowPassword(true)}>Get Started</button>} */}
        <button onClick={handleSignIn}>Sign Up</button>
      </div>
    </div>
  </Container>
  );
}

const Container = styled.div`
position: relative;
.content{
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,,0.5);
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 15vh 85vh;
  .body{
    gap: 1rem;
    .text{
      gap: 1rem;
      text-align: center;
      font-size: 2rem;
      h1 {
        padding: 0 25rem;
      }
    }
    .form{
      display: grid;
      grid-template-columns: ${({showPassword})=> showPassword? "1fr 1fr" : "2fr 1fr"};
      width: 60%;
      input {
        color:black;
        border: none;
        padding: 1.5rem;
        font-size: 1.2rem;
        border: 1px solid black;
        &:focus {
          outline: none;
        }
      }
      button{
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        font-weight: bolder;
        fontsize: 1.05rem;
      }
    }
    button{
      padding: 0.5rem 1rem;
      background-color: #e50914;
      border: none;
      cursor: pointer;
      color: white;
      border-radius: 0.2rem;
      font-weight: bolder;
      fontsize: 1.05rem;
    }
  }
}
`;
