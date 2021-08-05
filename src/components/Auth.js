import React, { useState, useRef } from 'react';
import classes from './Auth.module.css';
import {useDispatch,useSelector} from 'react-redux';
import  {authActions} from '../store/auth';

const Auth = () => {
  const storedUserName = useSelector(state => state.auth.username );
  const storedUserPassword = useSelector(state => state.auth.password );
  const nameInputRef = useRef();
  const passwordInputRef = useRef();

  const dispatch = useDispatch();

  const loginHandler = (event) => {
    const enteredName = nameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
      event.preventDefault();
      if(enteredName==storedUserName&&enteredPassword==storedUserPassword){
          dispatch(authActions.login());
      }
      else{
        alert("Invalid credentials");
      }
    
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' ref={nameInputRef} required/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwordInputRef} required/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
