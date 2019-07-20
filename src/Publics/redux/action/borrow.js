import axios from 'axios';

export const postBorrow = (data) =>{
    console.log(data)
    return {        
        type:'POST_BORROW',
        payload :axios.post(`http://localhost:5000/borrow/`,data)
    }
}
export const getBorrow = (idBook) =>{
    return {
        type:'GET_BORROW',
        payload :axios.get(`http://localhost:5000/borrow/${idBook}`,)
    }
}
export const updateBorrow = (idBook,data) =>{    
    console.log(data)
    return {
        type:'UPDATE_BORROW',
        payload :axios.patch(`http://localhost:5000/borrow/${idBook}`,{penalty:data})
    }
}