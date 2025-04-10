import { useRef, forwardRef, useImperativeHandle } from "react";

const Input = forwardRef(({ handleClick, handleHome, saveProjects }, ref) => {
     const titleRef = useRef(null);
     const contentRef = useRef(null);
     const dateRef = useRef(null);

     useImperativeHandle(ref, () => ({
          titleRef,
          contentRef,
          dateRef,
     }));

     return (
          <div className="w-[90%] max-w-[600px] ">
               <div className="flex justify-end gap-4">
                    <button
                         onClick={handleHome}
                         className="cursor-pointer dark:text-white"
                    >
                         Cancel
                    </button>
                    <button
                         onClick={saveProjects}
                         className="cursor-pointer bg-gray-700 px-3 py-1 rounded text-white hover:bg-black"
                    >
                         Save
                    </button>
               </div>
               <div className="flex flex-col gap-5 items-start">
                    <label className="font-bold text-gray-700 dark:text-white">
                         Title
                    </label>
                    <input
                         ref={titleRef}
                         type="text"
                         className="w-[100%] bg-gray-300 p-2 shadow-black-500"
                    />
                    <label className="font-bold text-gray-700 dark:text-white">
                         Description
                    </label>
                    <textarea
                         ref={contentRef}
                         type="text"
                         className="w-[100%] bg-gray-300 p-2 shadow-black-500"
                    />
                    <label className="font-bold text-gray-700 dark:text-white">
                         Due Date
                    </label>
                    <input
                         ref={dateRef}
                         type="date"
                         className="w-[100%] bg-gray-300 p-2 shadow-black-500"
                    />
               </div>
          </div>
     );
});

export default Input;
