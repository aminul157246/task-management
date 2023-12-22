import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const TasksData = () => {

    const tasks = useLoaderData()
    const [remainingTasks, setRemainingTasks] = useState(tasks)


   
    
    const handleDelete = (id)  => {

        fetch(`http://localhost:5000/task/${id}`, {

            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                toast('Deleted Successfully')
                if (data.deletedCount > 0) {
                    // remove all user from UI 
                    const remaining = remainingTasks.filter(task => task._id !== id)
                    setRemainingTasks(remaining)

                }
            
        }
            )
    }


    return (
        <div className="my-12">
            <h2 className="text-5xl border-l-8 pl-2 text-left font-bold my-4">  Task </h2>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-bold text-black text-xl">
                            <th>User</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Deadline</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map(task => <tr key={task._id}>

                                <td><img className="w-[80px] rounded-e-full" src={task.profile_pic} alt="" /></td>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{task.deadline}</td>
                                <td>{task.priority}</td>
                                <td>{task.status}</td>
                                <td><button onClick={ ()=> handleDelete(task._id)} className="btn">X</button></td>

                            </tr>)
                        }
                    </tbody>


                </table>
            </div>





        </div>
    );
};

export default TasksData;