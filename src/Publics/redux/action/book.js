import axios from 'axios';

export const getBook = () => {
  return {
    type: 'GET_BOOK',
    payload: axios.get(`https://restapiperpus.herokuapp.com/book`),
  };
};
export const getBookById = (bookid) => {
  return {
    type: 'GET_BOOK_ID',
    payload: axios.get(`https://restapiperpus.herokuapp.com/book/${bookid}`),
  };
};
export const postBook = (data) => {
  console.log(data)
  return {
    type: 'POST_BOOK',
    payload: axios.post(`https://restapiperpus.herokuapp.com/book`,data),
  };
};
export const editBook = (data,id) => {
  return {

    type: 'EDIT_BOOK',
    payload: axios.patch(`https://restapiperpus.herokuapp.com/book/${id}`,data,{
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
    payload: axios.delete(`https://restapiperpus.herokuapp.com/book/${bookid}`,{
      headers: {
          "authorization": "x-control-user",
          "x-access-token": `bearer: ${localStorage.jwtToken}`,
          "x-control-user": localStorage.idUser
      }
    })
  };
};