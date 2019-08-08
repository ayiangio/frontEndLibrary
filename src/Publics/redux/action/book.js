import axios from 'axios';

export const getBook = (page) => {
  return {
    type: 'GET_BOOK',
    payload: axios.get(`https://apilib.herokuapp.com/book?page=${page}`),
  };
};
export const getBookById = (bookid) => {
  return {
    type: 'GET_BOOK_ID',
    payload: axios.get(`https://apilib.herokuapp.com/book/${bookid}`),
  };
};
export const postBook = (data) => {
  console.log(data)
  return {
    type: 'POST_BOOK',
    payload: axios.post(`https://apilib.herokuapp.com/book`,data),
  };
};
export const editBook = (data,id) => {
  return {

    type: 'EDIT_BOOK',
    payload: axios.patch(`https://apilib.herokuapp.com/book/${id}`,data,{
      headers: {
          "authorization": "x-control-user",
          "x-access-token": `bearer: ${localStorage.jwtToken}`,
          "x-control-user": localStorage.idUser
      }
    })
  };
};
export const deleteBook = (bookid) => {
  return {
    type: 'DELETE_BOOK',
    payload: axios.delete(`https://apilib.herokuapp.com/book/${bookid}`,{
      headers: {
          "authorization": "x-control-user",
          "x-access-token": `bearer: ${localStorage.jwtToken}`,
          "x-control-user": localStorage.idUser
      }
    })
  };
};