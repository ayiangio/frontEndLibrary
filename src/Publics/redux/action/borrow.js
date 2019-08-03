import axios from 'axios';

export const postBorrow = (data) =>{
    console.log(data)
    return {        
        type:'POST_BORROW',
        payload :axios.post(`http://localhost:5000/borrow/`,data,{
            headers: {
                "authorization": "x-control-user",
                "x-access-token": `bearer: ${localStorage.jwtToken}`,
                "x-control-user": localStorage.idUser
            }
          })
    }
}
export const getBorrow = (idBook) =>{
    return {
        type:'GET_BORROW',
        payload :axios.get(`http://localhost:5000/borrow/${idBook}`,{
            headers: {
                "authorization": "x-control-user",
                "x-access-token": `bearer: ${localStorage.jwtToken}`,
                "x-control-user": localStorage.idUser
            }
          })
    }
}
export const getListBorrow = (idUser) =>{
    let id =Number(idUser)
    console.log(id)
    return {
        type:'GET_LIST_BORROW',
        payload :axios.get(`http://localhost:5000/borrow/list/${id}`,{
            headers: {
                "authorization": "x-control-user",
                "x-access-token": `bearer: ${localStorage.jwtToken}`,
                "x-control-user": localStorage.idUser
            }
          })
    }
}

export const getAllListBorrow = () =>{
    return {
        type:'GET_ALL_BORROW',
        payload :axios.get(`http://localhost:5000/borrow/`,{
            headers: {
                "authorization": "x-control-user",
                "x-access-token": `bearer: ${localStorage.jwtToken}`,
                "x-control-user": localStorage.idUser
            }
          })
    }
}


export const updateBorrow = (idBook,data) =>{    
    console.log(data)
    return {
        type:'UPDATE_BORROW',
        payload :axios.patch(`http://localhost:5000/borrow/${idBook}`,{penalty:data},{
            headers: {
                "authorization": "x-control-user",
                "x-access-token": `bearer: ${localStorage.jwtToken}`,
                "x-control-user": localStorage.idUser
            }
          })
    }
}