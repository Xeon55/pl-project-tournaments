import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);
  const [tournamentsOpen, setTournamentsOpen] = useState(false);
  const location = useLocation();

  const isGamePage = ['/cs2', '/dota2', '/lol'].includes(location.pathname);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setGamesOpen(false);
    setTournamentsOpen(false);
  };

  return (
    <nav className="bg-gray-800 h-[12vh] px-4 flex items-center justify-between relative z-50">
      {/* Desktop nav */}
      <div className="hidden md:flex items-center space-x-4">
        <Link
          to="/"
          className="text-white hover:text-blue-400 text-lg bg-[#232a38] rounded-lg px-3 py-1"
        >
          Home
        </Link>
        <Link
          to="/cs2"
          className="text-white hover:text-blue-400 text-lg bg-[#232a38] rounded-lg px-3 py-1"
        >
          CS2
        </Link>
        <Link
          to="/dota2"
          className="text-white hover:text-blue-400 text-lg bg-[#232a38] rounded-lg px-3 py-1"
        >
          Dota2
        </Link>
        <Link
          to="/lol"
          className="text-white hover:text-blue-400 text-lg bg-[#232a38] rounded-lg px-3 py-1"
        >
          LoL
        </Link>
      </div>

      {/* Mobile burger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-xl">
          ☰
        </button>
      </div>

      {/* Login button (always visible) */}
      <Link
        to="/login"
        className="text-white bg-green-500 px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm"
      >
        Log in / Register
      </Link>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 text-white flex flex-col p-4 gap-2 md:hidden">
          {/* Games Dropdown */}
          <div>
            <button
              onClick={() => setGamesOpen(!gamesOpen)}
              className="w-full text-left text-lg font-semibold"
            >
              Games {gamesOpen ? '▲' : '▼'}
            </button>
            {gamesOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-2">
                <Link to="/cs2" onClick={handleLinkClick} className="hover:text-blue-400">
                  CS2
                </Link>
                <Link to="/dota2" onClick={handleLinkClick} className="hover:text-blue-400">
                  Dota2
                </Link>
                <Link to="/lol" onClick={handleLinkClick} className="hover:text-blue-400">
                  LoL
                </Link>
              </div>
            )}
          </div>

          {/* Tournaments Dropdown */}
          {isGamePage && (
            <div>
              <button
                onClick={() => setTournamentsOpen(!tournamentsOpen)}
                className="w-full text-left text-lg font-semibold mt-4"
              >
                Tournaments {tournamentsOpen ? '▲' : '▼'}
              </button>
              {tournamentsOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {location.pathname === '/cs2' && (
                    <>
                      <Link to="/cs2/tournament1" onClick={handleLinkClick} className="hover:text-blue-400">
                        Counter-Strike League
                      </Link>
                      <Link to="/cs2/tournament2" onClick={handleLinkClick} className="hover:text-blue-400">
                        Monthly Tournament
                      </Link>
                      <Link to="/cs2/tournament3" onClick={handleLinkClick} className="hover:text-blue-400">
                        CS2 Masters
                      </Link>
                      <Link to="/cs2/tournament4" onClick={handleLinkClick} className="hover:text-blue-400">
                        Summer Clash
                      </Link>
                    </>
                  )}
                  {location.pathname === '/dota2' && (
                    <>
                      <Link to="/dota2/tournament1" onClick={handleLinkClick} className="hover:text-blue-400">
                        Dota2 Championship
                      </Link>
                      <Link to="/dota2/tournament2" onClick={handleLinkClick} className="hover:text-blue-400">
                        International Qualifiers
                      </Link>
                      <Link to="/dota2/tournament3" onClick={handleLinkClick} className="hover:text-blue-400">
                        Dota2 Masters
                      </Link>
                      <Link to="/dota2/tournament4" onClick={handleLinkClick} className="hover:text-blue-400">
                        Autumn Clash
                      </Link>
                    </>
                  )}
                  {location.pathname === '/lol' && (
                    <>
                      <Link to="/lol/tournament1" onClick={handleLinkClick} className="hover:text-blue-400">
                        LoL World Series
                      </Link>
                      <Link to="/lol/tournament2" onClick={handleLinkClick} className="hover:text-blue-400">
                        Monthly Showdown
                      </Link>
                      <Link to="/lol/tournament3" onClick={handleLinkClick} className="hover:text-blue-400">
                        LoL Masters
                      </Link>
                      <Link to="/lol/tournament4" onClick={handleLinkClick} className="hover:text-blue-400">
                        Spring Clash
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
