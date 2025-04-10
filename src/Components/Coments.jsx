import { useState, useRef, useEffect } from "react";

function Coments() {
     const [coments, setComents] = useState([]);
     const comentRef = useRef(null);

     const handleAddComent = () => {
          const newComent = comentRef.current.value;
          if (newComent === "") return;
          setComents((prev) => [...prev, newComent]);
          comentRef.current.value = "";
          console.log(tasks);
     };

     const deleteComent = (comentsIndex) => {
          setComents((prev) =>
               prev.filter((item, index) => index !== comentsIndex)
          );
     };
     return (
          <div className="w-[100%] flex flex-col items-start gap-5">
               <label className="w-[100%] text-start  ">Tasks</label>
               <section className="flex flex-col w-[100%]">
                    <div className="flex justify-center items-center">
                         <input
                              ref={comentRef}
                              type="text"
                              className="w-[75%] rounded bg-gray-300 p-2 shadow-black-500"
                         />
                         <button
                              onClick={handleAddComent}
                              className="w-[25%] cursor-pointer"
                         >
                              Add Task
                         </button>
                    </div>
                    <ul>
                         {coments.map((item, index) => (
                              <li
                                   key={index}
                                   className="flex justify-between  p-4"
                              >
                                   <p className="text-start ">{item}</p>
                                   <button
                                        onClick={() => deleteComent(index)}
                                        className=" cursor-pointer border-b-1 border-gray-300 hover:border-black"
                                   >
                                        clear
                                   </button>
                              </li>
                         ))}
                    </ul>
               </section>
          </div>
     );
}

export default Coments;
