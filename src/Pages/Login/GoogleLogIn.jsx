import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";

const GoogleLogIn = () => {

    const {signInWithGoogle} = useContext(AuthContext)


    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(res => {
            console.log(res.user);
            swal("Good job!", "Sign in with Google done!", "success");
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