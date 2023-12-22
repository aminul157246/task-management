import img1 from '../../../assets/developer.png'
import img2 from '../../../assets/BANK.webp'
import img3 from '../../../assets/cooperative.png'
const Benefit = () => {
    return (
       <div className='mt-12'>
        <h2 className="text-5xl border-l-8 pl-2 text-left font-bold my-4"> Who Can Benefit </h2>
        <p>Use the Wiki as a space to share all relevant documents, what processes need to be followed etc. <br /> Everyone has access and you only have one source of information 

</p>

        <div className='grid grid-cols-3 gap-8 my-12'>


<div className="card h-[500px] bg-base-100 shadow-xl">
  <figure><img className='w-[400px] h-[400px]' src={img2} alt="Shoes" /></figure>
  <div className="card-body">
  <h2 className='text-3xl font-semibold'>Project management software for  <span className='text-orange-400'>Banking</span></h2>
    <p>Banking and insurance companies are managing projects that are process-driven and require high security.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline rounded-full hover:bg-orange-400">Details > </button>
    </div>
  </div>
</div>


<div className="card h-[500px] bg-base-100 shadow-xl">
  <figure><img className='w-[400px] h-[400px]' src={img1} alt="Shoes" /></figure>
  <div className="card-body">
  <h2 className='text-3xl font-semibold'>Project management software for  <span className='text-orange-400'> Developer</span></h2>
    <p>Banking and insurance companies are managing projects that are process-driven and require high security.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline rounded-full hover:bg-orange-400">Details > </button>
    </div>
  </div>
</div>


<div className="card h-[500px] bg-base-100 shadow-xl">
  <figure><img className='w-[400px] h-[400px]' src={img3} alt="Shoes" /></figure>
  <div className="card-body">
  <h2 className='text-3xl font-semibold'>Project management software for  <span className='text-orange-400'>corporate professionals</span></h2>
    <p>Banking and insurance companies are managing projects that are process-driven and require high security.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline rounded-full hover:bg-orange-400">Details > </button>
    </div>
  </div>
</div>
        
            
           
        </div>
       </div>
    );
};

export default Benefit;