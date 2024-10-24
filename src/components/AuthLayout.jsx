// A mechanism to protect pages and routes 
// So it is an proctected Container
import React from 'react'
import { useEffect , useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children , authentication =  true}) {

    const navigate = useNavigate()
    const [loader , setloader] = useState(true)  // loader is a state to check if the user is logged in or not

    const authStatus = useSelector((state) => state.auth.status)

    // useEffect  to check if the user is logged in or not
    useEffect(() => {
        if(authentication && authStatus !== authentication){
            navigate('/login')
        }else if(!authentication  && authStatus !== authentication){
            navigate('/')
        }
        setloader(false)
    }  , [authStatus , navigate , authentication]) //  this will run when the authStatus changes




    return loader ? <h1>Loading...</h1>: <>{children}</>
}
