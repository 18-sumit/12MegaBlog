import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
// login can be also written as authLogin after this import { login as authLogin} from '../store/authSlice'
import {Buttonn  , Input , Logo } from './index'
import authService from '../appwrite/auth'
import  { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'






function Login() {
    return (
        <div>Login</div>
    )
}

export default Login