import { useContext } from "react";
import { AuthContext } from "../../Shared/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const GoogleLogIn = () => {

    const {signInWithGoogle} = useContext(AuthContext)


    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(res => {
            console.log(res.user);
            toast("success:Login successfully")
        })
        .catch(err => {
            console.log(err.message);
        })
    }


    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn">Google log in </button>
        </div>
    );
};

export default GoogleLogIn;