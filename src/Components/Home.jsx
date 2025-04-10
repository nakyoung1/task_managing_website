import note from "../assets/note.jpg";

function Home({ handleClick }) {
     return (
          <>
               <img src={note} className="w-[150px]" />
               <h3 className="font-bold text-xl">No Project Selected</h3>
               <p>Select a project or get started with a new one</p>
               <button
                    onClick={handleClick}
                    className="bg-gray-300 px-3 py-2 rounded cursor-pointer hover:bg-gray-400 hover:text-white"
               >
                    Create new project
               </button>
          </>
     );
}
export default Home;
