import {Children, createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

//最初のユーザー状態を定義
const initialState ={
  user:JSON.parse(localStorage.getItem("user")) || null,
//     user: {
        
// _id: "680cc48a9f2b64dc47e63f7e",

// username:"ななみ",

// email:"n.suimmy@icloud.com",

// password:"nanami773",

// profilePicture:"/person/1.jpeg",

// coverPicture:"",

// followers:[],

// followings:[],

// isAdmin:false,

//     },

    isFeching: false,
    error: false,
};

//状態をグローバルに管理する
export const AuthContext = createContext (initialState);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);
    return (
     <AuthContext.Provider value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
    }}
    > 
        {children}

    </AuthContext.Provider>
);
    
};