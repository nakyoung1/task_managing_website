import note from "../assets/note.png";

function Home({ handleClick }) {
     return (
          <>
               <img src={note} className="w-[150px]" />
               <h3 className="font-bold text-xl dark:text-white">
                    No Project Selected
               </h3>
               <p className="dark:text-white">
                    Select a project or get started with a new one
               </p>
               <button
                    onClick={handleClick}
                    className="bg-yellow-400 px-3 py-2 rounded cursor-pointer text-black hover:text-white dark:bg-gray-400"
               >
                    Create new project
               </button>
          </>
     );
}
export default Home;
