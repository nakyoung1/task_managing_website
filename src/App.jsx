import { useState, useRef } from "react";
import Input from "./Components/Input";
import Projects from "./Components/Projects";
import Tasks from "./Components/Tasks";
import note from "./assets/note.jpg";

function App() {
     const [isClicked, setIsClicked] = useState("false");
     const [isClickedProject, setisClickedProject] = useState("false");
     const [projects, setProjects] = useState([]);

     const inputRef = useRef();

     const handleClick = () => {
          setIsClicked((prev) => !prev);
          console.log(isClicked);
     };
     const handleShowProject = () => {
          setisClickedProject((prev) => !prev);
     };
     const saveProjects = () => {
          const newProject = {
               title: inputRef.current.titleRef.current.value,
               description: inputRef.current.contentRef.current.value,
               date: inputRef.current.dateRef.current.value,
          };
          setProjects((prev) => [...prev, newProject]);
          setIsClicked((prev) => !prev);
          console.log(projects);
     };

     return (
          <div className="flex gap-4 mt-9">
               <Projects
                    projects={projects}
                    handleClick={handleClick}
                    handleShowProject={handleShowProject}
               />

               <main className="flex flex-col items-center gap-5 mt-24 w-2/3 text-center">
                    {!isClicked ? (
                         isClickedProject ? (
                              <Input
                                   handleClick={handleClick}
                                   ref={inputRef}
                                   saveProjects={saveProjects}
                              />
                         ) : (
                              <Tasks />
                         )
                    ) : (
                         <>
                              <img src={note} className="w-[150px]" />
                              <h3>No Project Selected</h3>
                              <p>
                                   Select a project or get started with a new
                                   one
                              </p>
                              <button
                                   onClick={handleClick}
                                   className="bg-gray-300 px-3 py-2 rounded cursor-pointer hover:bg-gray-400 hover:text-white"
                              >
                                   Create new project
                              </button>
                         </>
                    )}
               </main>
          </div>
     );
}

export default App;
