import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { googleOAuthURL } from "../utils/routes";
import { toast } from "react-toastify";

export default function GoogleAuth() {
    const handleLoginWithGoogle = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        onError: tokenResponse => console.log(tokenResponse)
    });
    return (
        <button onClick={() => handleLoginWithGoogle()} className='flex gap-3 border-2 border-orange-500 hover:border-yellow-400 px-5 py-2 rounded-full font-semibold hover:font-bold cursor-pointer'>
            <FcGoogle size={25} />
            Continue with Google
        </button>
    )
}
