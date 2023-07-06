// Local Storage database

export const dbWrite = (key, value) => {
  //localStorage variables is provide by js
  localStorage.setItem(key, value)
}

export const grtDBRead = (key) => {
  return localStorage.getItem(key);
}