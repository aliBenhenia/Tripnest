"use client";
import {useEffect,useState} from "react";
interface userInterface{
    full_name : string;
    username : string;
    bio : string;

}
// services : getProfile.ts
import axios, {axiosError} from "axios"
export const getProfile = ()=>{
    try
    {
        const response =  axios("/api/v1/profile");
        if (response.status == 200)
            return response.data;
    }
    catch(err:axiosError){
        if (err.response)
        {
            if (err.response.status == 404)
                window.location.href = "/login"
            else
                return err.response.error;
        }
    }
}
const Profile = ()=>{
    const [user, setUser] = useState<userInterface>();
    useEffect(()=>{
        const getuser = async()=>{
            const res = await getProfile();
            setUser(res);
        }
        getuser();
    },[])// first mount
    return(
        <>
        <h1>welcome back ! {user.full_name}</h1>
        <h2>{user.bio}</h2>
        </>
        )
}
export default Profile;