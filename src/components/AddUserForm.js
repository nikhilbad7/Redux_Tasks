import React, { useState, useRef} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {userAdded} from '../store/user';
import {nanoid} from '@reduxjs/toolkit';
import classes from './AddUserForm.module.css';
import {useHistory} from 'react-router-dom';

export const AddUserForm = () => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const genderInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const dispatch = useDispatch();
  const history  = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    const gender = genderInputRef.current.value;
    const email = emailInputRef.current.value;
    const phoneNo = phoneInputRef.current.value;

      if(name&&age&&gender&&email&&phoneNo){
          dispatch(userAdded({
                 id: nanoid(),
                 name,
                 age,
                 gender,
                 email,
                 phoneNo
            }));
          history.push(process.env.PUBLIC_URL +'/');
          
      }
  }

  return (
    <section className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          id="userName"
          ref={nameInputRef}
          required
        />
        <label htmlFor="userAge">Age:</label>
        <input
          type="text"
          id="userAge"
          ref={ageInputRef}
          required
        />
        <label htmlFor="userGender">Gender:</label>
        <input
          type="text"
          id="userGender"
          ref={genderInputRef} 
          required
        />
        <label htmlFor="userEmail">Email:</label>
        <input
          type="text"
          id="userEmail"
          ref={emailInputRef} 
          required
        />
        <label htmlFor="userPhoneNo">Phone No:</label>
        <input
          type="text"
          id="userPhoneNo"
          ref={phoneInputRef} 
          required
        />
        <button>Add User</button>
      </form>
    </section>
  )
}

export default AddUserForm;