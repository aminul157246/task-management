import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-black">
            <aside>
                <Link to={'/'} className=" text-xl font-bold uppercase hover:text-orange-400"> Taska</Link>
                <p>A task management company</p>
                <p>017617435**</p>
                <p>aminul****@gmail.com</p>
            </aside>

            <div>
                <Link className="hover:underline hover:text-orange-500"  to={'/'}><p>Home</p></Link> 
                <Link className="hover:underline hover:text-orange-500" to={'/tasks'}><p>Tasks</p></Link>   
                <Link className="hover:underline hover:text-orange-500" to={'/login'}><p>Login</p></Link>   
                <Link className="hover:underline hover:text-orange-500" to={'/register'}><p>Register</p></Link>
            </div>
            <nav>
                <header className="footer-title">Contact me with</header>
                <div className="grid grid-cols-3 items-center gap-4">
                    <a className="text-2xl" href="https://web.facebook.com/profile.php?id=100049235346943"><FaFacebook/></a>
                    <a className="text-2xl" href="https://www.linkedin.com/in/aminulislam157246/"><FaLinkedinIn/></a>
                    <a className="text-2xl" href="https://twitter.com/aminul157246"><FaTwitter/></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;