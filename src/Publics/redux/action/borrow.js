import axios from 'axios';

export const postBorrow = (data) =>{
    console.log(data)
    return {        
        type:'POST_BORROW',
        payload :axios.post(`https://restapiperpus.herokuapp.com/borrow/`,data)
    }
}
export const getBorrow = (idBook) =>{
    return {
        type:'GET_BORROW',
        payload :axios.get(`https://restapiperpus.herokuapp.com/borrow/${idBook}`,)
    }
}
export const updateBorrow = (idBook,data) =>{    
    console.log(data)
    return {
        type:'UPDATE_BORROW',
        payload :axios.patch(`https://restapiperpus.herokuapp.com/borrow/${idBook}`,{penalty:data})
    }
}