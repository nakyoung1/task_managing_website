function Tasks() {
     return (
          <div className="w-[100%] p-3 ">
               <header className="mb-4 border-b-2 border-gray-200">
                    <div className=" flex justify-between mb-5">
                         <section>
                              <h1 className="font-bold text-2xl">title</h1>
                              <h6 className="text-xl">date</h6>
                         </section>
                         <button>Delete</button>
                    </div>
                    <article className="mb-3 text-start">contents</article>
               </header>
               <div className="w-[100%] flex flex-col items-start gap-5">
                    <label className="w-[100%] text-start  ">Tasks</label>
                    <section className="flex w-[100%]">
                         <input
                              type="text"
                              className="w-[70%] rounded bg-gray-300 p-2 shadow-black-500"
                         />
                         <button className="w-[25%] cursor-pointer">
                              Add Task
                         </button>
                    </section>
               </div>
          </div>
     );
}
export default Tasks;
