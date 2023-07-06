//api

import { DB_KEYS } from "../../utils/Constants"
import { dbWrite, getDBRead } from "./db"

export const apiLogin = (username, password) => {

  //get all users
  const users = JSON.parse(getDBRead(DB_KEYS.USERS) || '[]');

  let isRegistered = false;
  let uId = null;
  users.map(user => {
    if (user.username === username && user.password === password) {
      isRegistered = true;
      uId = user.id
      return;
    }
  });

  let value = {};
  //save in data if credentials match
  //checking if user is registered 
  if (isRegistered) {
    value = {
      username: username,
      password: password,
      id: uId,
    }
    dbWrite(DB_KEYS.CURRENT_USER, JSON.stringify(value));

    return {
      status: 200,
      messahe: 'Logged in successfully!'
    }
  }
  return {
    status: 400,
    message:'Unauthorized access!'
  }
}

export const apiRegister = (username,email, password) => {
  const value ={
    id:v4(),
    username:username,
    password:password,
    email:email,
  }

  const users = JSON.parse(getDBRead(DB_KEYS.USERS) || '[]');
  users.push(value);

  dbWrite(DB_KEYS.USERS,JSON.stringify(value));

  return{
    status:200,
    message:"User registered successfully!"
  }
}