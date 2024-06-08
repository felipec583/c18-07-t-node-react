import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google"
import useUser from '../hooks/useUser';
import axios from 'axios';

const GoogleLoginButton = () => {
  const { handleGoogleLogin } = useUser();
  const login = useGoogleLogin({
    onSuccess: async (res) => {
      try {
        const response = await axios.post("/api/auth/google",
          { token: res.access_token }
        )
        handleGoogleLogin(response.data)

      } catch (error) {
        console.log(error);
      }
    },
    onError: () => {
      console.log("error al iniciar sesion con google")
    }
  })
  return (
    <div className="w-full h-[40px] my-5 px-7 py-4 bg-white rounded-lg border border-zinc-500 justify-start items-center gap-6 inline-flex">
      <button className="flex items-center justify-center text-zinc-600 text-xl font-normal font-['Inter']" onClick={() => login()}>
        <FcGoogle className="mx-4 w-5 h-5" /> Continuar con Google
      </button>
    </div>
  )
}

export default GoogleLoginButton