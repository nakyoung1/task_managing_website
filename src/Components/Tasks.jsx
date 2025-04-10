import { useState, useRef } from "react";
import Coments from "../Components/Coments";

function Tasks({ selectedProject, deleteProject }) {
     return (
          <div className="w-[100%] max-w-[600px] p-3 ">
               <header className="mb-4 border-b-2 border-gray-200">
                    <div className=" flex justify-between mb-5">
                         <section className="flex flex-col items-start gap-3">
                              <h1 className="font-bold text-2xl">
                                   {selectedProject.title}
                              </h1>
                              <h6 className="text-xl">
                                   {selectedProject.date}
                              </h6>
                         </section>
                         <button
                              onClick={() => deleteProject(selectedProject.id)}
                              className="cursor-pointer"
                         >
                              Delete
                         </button>
                    </div>
                    <article className="mb-3 text-start">
                         {selectedProject.description}
                    </article>
               </header>
               <Coments />
          </div>
     );
}
export default Tasks;
