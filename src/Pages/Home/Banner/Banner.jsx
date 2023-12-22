import { AwesomeButton } from 'react-awesome-button';
import img1 from '../../../assets/banner2.jpg'
import { Link } from 'react-router-dom';



const Banner = () => {
    return (
        <div >
            <div className="carousel w-full h-[600px]">
                <div className="carousel-item relative w-full ">
                    <img  src={img1} className="w-full " />
                    <div className="absolute flex  gap-5 top-0     bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.8)]">
                        <div className='space-y-7 text-base-300 text-left  pl-36 pt-48'>
                            <h2 className='text-5xl   font-semibold'>Begin Projects with <span className='text-orange-400'>Taskgain</span> <br /> for better planning</h2>
                            <p>There are many variation of passages of available, but the majority have suffered alternative <br /> in some form the majority have suffered alternative  in some</p>
                            <div className="flex gap-4">
                            <Link className='px-4 py-2 border hover:bg-orange-400 text-white' to={'/tasks'}>Let's Explore</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
               
             
            </div>
        </div>
    );
};

export default Banner;