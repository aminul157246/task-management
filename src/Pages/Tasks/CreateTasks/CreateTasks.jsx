import Swal from 'sweetalert2';
import img from '../../../assets/man2.jpg'


const CreateTasks = () => {

 
    const handleAddProduct = (event) => {
        event.preventDefault();
        //  title , description, deadline, priority


        const form = event.target;
        const title = form.title.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        // const priority = form.priority.value;
        const createdAssignment = { title, deadline, description};
        console.log(createdAssignment);

        // send data in server from here
            fetch("http://localhost:5000/task", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(createdAssignment),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: "Success!",
                            text: "Assignment created successfully.  😻 ",
                            icon: "success",
                            confirmButtonText: "ok",
                        });
                    }
                });
    };

    return (
       <div className='flex justify-center items-center gap-6'>
        <div className='flex-1'>
        <div className=" p-8 max-w-4xl mx-auto ">
            <h2 className="text-5xl border-l-8 pl-2 text-left font-bold my-4"> Create Task </h2>

            <form onSubmit={handleAddProduct}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder=" Assignment Title"
                        className="input input-bordered"
                        name="title"
                        required
                    />
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-bold">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Task Description"
                        className="input input-bordered"
                        name="description"
                        required
                    />
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-bold">Deadline</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Assignment Deadline"
                        className="input input-bordered"
                        name="deadline"
                        required
                    />
                </div>


                <div>
                    <div>
                    <label className="label">
                        <span className="label-text font-bold">Priority</span>
                    </label>
                    </div>
                    <select className="select">
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                        
                    </select>
                   
                    
                </div>
                <div className="flex justify-center">
                    <button className="btn  mt-4">Create Task</button>
                </div>
            </form>
        </div>
        </div>
        <div className='flex-1'>
            <img className='rounded-full w-[500px]' src={img} alt="" />
        </div>
       </div>
    );
};

export default CreateTasks;