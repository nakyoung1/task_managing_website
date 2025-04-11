import ThemeButton from "./ThemeButton";

function Projects({ projects, handleClick, handleHome, handleShowProject }) {
     return (
          <nav className="flex flex-col items-center gap-7 bg-yellow-200 rounded-tr-lg h-[100vh] w-[300px] m text-white  dark:bg-gray-500 ">
               <ThemeButton />
               <h3
                    onClick={handleHome}
                    className=" font-bold mt-10 text-xl text-gray-800 cursor-pointer dark:text-white"
               >
                    YOUR PROJECTS
               </h3>
               <button
                    onClick={handleClick}
                    className="bg-yellow-400 text-black font-bold p-4 rounded cursor-pointer hover:text-white dark:bg-gray-700 dark:text-white dark:hover:text-black"
               >
                    + Add Project
               </button>
               {projects.map((item) => (
                    <p
                         key={item.id}
                         onClick={() => handleShowProject(item)}
                         className="cursor-pointer text-gray-800  dark:text-white"
                    >
                         {item.title}
                    </p>
               ))}
          </nav>
     );
}
export default Projects;
