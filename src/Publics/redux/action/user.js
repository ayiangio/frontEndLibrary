import axios from 'axios';
export const addUser = (data) => {
  return {
    type: 'REGISTER',
    payload: axios.post(`https://apilib.herokuapp.com/user/register`, data)
  };
};
export const login = (data) => {
  return {
    type: 'LOGIN',
    payload: axios.post(`https://apilib.herokuapp.com/user/login`, data, 
    {
      headers: {
        "authorization": "x-control-user",
      }
    } ).then(res => {
      const token = res.data.result.token
      const idUser = res.data.result.idUser
      const fullName = res.data.result.fullName
      const email = res.data.result.email
      const status = res.data.result.status
      localStorage.setItem('idUser', idUser)
      localStorage.setItem('jwtToken', token)
      localStorage.setItem('fullName', fullName)
      localStorage.setItem('email', email)
      localStorage.setItem('status', status)
    })
  };
};
export const getUser = (idUser) => {
  console.log(idUser)
  return {
    type: 'GET_USER',
    payload: axios.get(`https://apilib.herokuapp.com/user/${idUser}`, {
      headers: {
        "authorization": "x-control-user",
        "x-access-token": `bearer: ${localStorage.jwtToken}`,
        "x-control-user": localStorage.idUser
      }
    })
  }
}

export const getAllUser = () => {
  return {
    type: 'GET_ALL_USER',
    payload: axios.get(`https://apilib.herokuapp.com/user/`, {
      headers: {
        "authorization": "x-control-user",
        "x-access-token": `bearer: ${localStorage.jwtToken}`,
        "x-control-user": localStorage.idUser
      }
    })
  }
}

export const logout = (data) => {
  return {
    payload: axios.post(`https://apilib.herokuapp.com/user/logout`, {idUser:data},{
      headers: {
        "authorization": "x-control-user",
        "x-access-token": `bearer: ${localStorage.jwtToken}`,
        "x-control-user": localStorage.idUser
      }      
    })
  };
};
export const deleteUser = (idUser) => {
  console.log(idUser)
  return {
    type: 'DELETE_USER',
    payload: axios.delete(`https://apilib.herokuapp.com/user/delete/${Number(idUser)}`,{
      headers: {
          "authorization": "x-control-user",
          "x-access-token": `bearer: ${localStorage.jwtToken}`,
          "x-control-user": localStorage.idUser
      }
    })
  };
};
export const getToken = (token) => {
  return {
    type: 'GET_TOKEN',
    payload: axios.get(`https://apilib.herokuapp.com/user/token/${token}`,{
      headers: {
        "authorization": "x-control-user",
        "x-access-token": `bearer: ${localStorage.jwtToken}`,
        "x-control-user": localStorage.idUser
      }
    })
  }
}