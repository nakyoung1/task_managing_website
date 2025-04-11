import { useState, useEffect, useRef } from "react";
import Input from "./Components/Input";
import Projects from "./Components/Projects";
import Tasks from "./Components/Tasks";
import Home from "./Components/Home";
import ThemeButton from "./Components/ThemeButton";
import { ThemeProvider } from "./Components/ThemeProvider";

function App() {
     const [isClicked, setIsClicked] = useState(true);
     const [projects, setProjects] = useState(() => {
          const savedProjects = localStorage.getItem("projects");
          return savedProjects ? JSON.parse(savedProjects) : [];
     });
     const [selectedProject, setSelectedProject] = useState(null);

     const inputRef = useRef();

     useEffect(() => {
          localStorage.setItem("projects", JSON.stringify(projects));
     }, [projects]);

     const handleClick = () => {
          setIsClicked(false);
     };

     const handleHome = () => {
          setIsClicked(true);
     };
     const handleShowProject = (project) => {
          setIsClicked(null);
          setSelectedProject(project);
     };

     const saveProjects = () => {
          const newProject = {
               id: Math.random(),
               title: inputRef.current.titleRef.current.value,
               description: inputRef.current.contentRef.current.value,
               date: inputRef.current.dateRef.current.value,
          };
          if (newProject.title === "") {
               alert("제목을 입력해주세요.");
          } else {
               setProjects((prev) => [...prev, newProject]);
               setIsClicked(true);
          }
     };

     const deleteProject = (projectId) => {
          setProjects((prev) =>
               prev.filter((project) => project.id !== projectId)
          );
          handleHome();
     };

     return (
          <ThemeProvider>
               <div>
                    <ThemeButton />
                    <div className="flex gap-4 pt-15 dark:bg-gray-800">
                         <Projects
                              projects={projects}
                              handleHome={handleHome}
                              handleClick={handleClick}
                              handleShowProject={handleShowProject}
                         />

                         <main className="flex flex-col items-center gap-5 mt-15 w-2/3 text-center">
                              {isClicked === true && (
                                   <Home handleClick={handleClick} />
                              )}

                              {isClicked === false && (
                                   <Input
                                        handleClick={handleClick}
                                        handleHome={handleHome}
                                        ref={inputRef}
                                        saveProjects={saveProjects}
                                   />
                              )}
                              {isClicked === null && (
                                   <Tasks
                                        selectedProject={selectedProject}
                                        deleteProject={deleteProject}
                                   />
                              )}
                         </main>
                    </div>
               </div>
          </ThemeProvider>
     );
}

export default App;
