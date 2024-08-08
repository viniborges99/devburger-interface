import React, {createContext, useContext, useState} from "react";
import PropTypes from  'prop-types'

const UserContext = createContext({})

export const UserProvider = ({children}) =>{

    const [userData,setUserData ] = useState({})//guardar informaçoes



    const putUserData = (userInfo)=>{//função que quando for chamada vai gravar os dados do usuario
        setUserData(userInfo)
    }
    

    return (
        <UserContext.Provider value={{putUserData,userData}}>
            {children}
        </UserContext.Provider>
    )
}



export const useUser = ()=>{
    const context = useContext(UserContext)

    if(!context){
        throw new Error('useUser must be used within a UserContext')
    }

    return context;
}

UserProvider.propTypes= {
    children: PropTypes.node
}




