

const FAQ = () => {
    return (
        <div className="grid  grid-cols-2 my-12">
            <div className="flex-1 pt-12 space-y-2">
                <h2 className="text-4xl font-semibold border-l-8 pl-4"> Frequently Asked <br /> Question</h2>
                <p>Everything is need to here what you wanted form your client</p>
                <button className="btn btn-outline hover:bg-orange-300 rounded-full">More FAQ </button>
            </div>
            <div className="flex-1">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        What is task management software?  </div>
                    <div className="collapse-content">
                        <p>Task management software is a comprehensive suite that brings all task management functionalities to a computer or portable device. It streamlines task management, helps build collaboration, and gives you control over tasks and projects. It helps visualize performance based on various data points, thus empowering you with data-driven task management.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How do you do task management?
                    </div>
                    <div className="collapse-content">
                        <p>Depending on your requirements, you can use any task management tool, such as a simple to-do list or a spreadsheet, up to a powerful Task Management System that gives you control over all the tasks involved in the entire project.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What are the four elements of project management?
                    </div>
                    <div className="collapse-content">
                        <p>The four core elements of project management include scope, time, money, and resources.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;