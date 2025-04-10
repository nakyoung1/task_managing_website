function Projects({ projects, handleClick, handleShowProject }) {
     return (
          <nav className="flex flex-col items-center gap-7 bg-gray-700 rounded-tr-lg h-[100vh] w-1/3 max-w-[300px] m text-white  ">
               <h3 className=" font-bold mt-15 text-xl">YOUR PROJECTS</h3>
               <button
                    onClick={handleClick}
                    className="bg-gray-500 p-2 rounded cursor-pointer hover:bg-gray-200 hover:text-black"
               >
                    + Add Project
               </button>
               {projects.map((item) => (
                    <p
                         key={item.id}
                         onClick={() => handleShowProject(item)}
                         className="cursor-pointer"
                    >
                         {item.title}
                    </p>
               ))}
          </nav>
     );
}
export default Projects;
