


///https://api.escuelajs.co/api/v1/users/

import axios from "../axios";

class UserApi{
    createUser(data){
        return axios.post("/users",data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
    }
    loginUser(data){}
    deleteUser(id){}
}

export default new UserApi()