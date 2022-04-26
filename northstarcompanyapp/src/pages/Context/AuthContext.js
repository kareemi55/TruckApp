import React, {createContext,useState,useEffect} from 'react';
import AuthService from '../services/AuthService';


export const AuthContext = createContext();

export default ({childern})=>{
    const [user,setUser] = useState(null);
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(()=>{
        AuthService.isAuthenticated().then(data=>{
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
        });
    },[]);
 
    return(
        <div>
            {!isLoaded ? <h1>loading</h1> :
            <AuthContext.Provider value={{user,setUser,isAuthenticated,setIsAuthenticated}}>
                {childern}
                </AuthContext.Provider>}
        </div>
    )
}