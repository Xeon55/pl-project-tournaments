import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-[88vh] bg-gray-900 text-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <Link
          to="/cs2"
          className="bg-gray-800 hover:bg-gray-700 text-orange-300 font-bold py-4 px-8 rounded-2xl shadow-md transition duration-300 w-60 text-center"
        >
          CS2
        </Link>
        <Link
          to="/dota2"
          className="bg-gray-800 hover:bg-gray-700 text-red-400 font-bold py-4 px-8 rounded-2xl shadow-md transition duration-300 w-60 text-center"
        >
          Dota 2
        </Link>
        <Link
          to="/lol"
          className="bg-gray-800 hover:bg-gray-700 text-purple-400 font-bold py-4 px-8 rounded-2xl shadow-md transition duration-300 w-60 text-center"
        >
          League of Legends
        </Link>
      </div>
    </div>
  );
}

export default Home;
