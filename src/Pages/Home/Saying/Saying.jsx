import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Saying = () => {
    return (
        <div>
                <h2 className="text-5xl mb-2 font-bold border-l-8 pl-4"> Hear what our user saying</h2>
                <p>Here are some testimonial from our user after TaskPlan to manage their project management</p>
                <div className="grid grid-cols-2">
                <div className="flex-1 pt-12 max-w-96 pl-8">
                <Rating className='mb-4'
      style={{ maxWidth: 180 }}
      value={4}
      readOnly
    />
                    <h2 className="text-xl font-semibold"> I often building trust with your clients is surely one of the most important things for every business. This is how they turn prospects into clients as well as keep existing clients happy and for a longer period. Here are a few tips to gain your clients trust</h2>

                </div>
                <div className="flex-1 ">
<img className='rounded-l-full w-[500px]' src="https://i.ibb.co/pyhMSrh/man4.jpg" alt="" />
                </div>
                </div>
            
           <div className='lg:pl-24'>
           <button className="btn btn-outline hover:bg-orange-300 rounded-full ">Vier more  </button>
           </div>
        </div>
    );
};

export default Saying;