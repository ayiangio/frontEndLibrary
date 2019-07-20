import axios from 'axios';

export const getBook = () => {
  return {
    type: 'GET_BOOK',
    payload: axios.get(`http://localhost:5000/book`),
  };
};
export const getBookById = (bookid) => {
  return {
    type: 'GET_BOOK_ID',
    payload: axios.get(`http://localhost:5000/book/${bookid}`),
  };
};
export const postBook = (data) => {
  return {
    type: 'POST_BOOK',
    payload: axios.post(`http://localhost:5000/book`,data),
  };
};
export const editBook = (data,id) => {
  return {

    type: 'EDIT_BOOK',
    payload: axios.patch(`http://localhost:5000/book/${id}`,data),
  };
};
export const deleteBook = (bookid) => {
  return {
    type: 'DELETE_BOOK',
    payload: axios.delete(`http://localhost:5000/book/${bookid}`),
  };
};