import React from 'react';

const Cs2 = () => {
  return (
    <div className="min-h-[88vh] bg-[#0f1218] text-white flex flex-col items-center py-6 px-4">
      <h1 className="text-4xl font-bold mb-6">CS2 TOURNAMENTS</h1>

      <div className="w-[90%] max-w-[1440px] min-h-[calc(100vh-12vh-2rem)] bg-[#1a1f2b] flex gap-8 p-8 rounded-xl">
        {/* Left Panel */}
        <div className="flex flex-col gap-8 flex-[3]">
          {/* News */}
          <div className="bg-[#232a38] p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Latest News</h2>
            <div className="mb-4">
              <img src="/cs2_images/news1.png" alt="CS2 News" className="rounded-md w-full" />
              <h3 className="text-lg font-bold mt-2">Big update is coming to CS2</h3>
              <p>Update is planned next month.</p>
            </div>
            <div>
              <img src="/cs2_images/news2.png" alt="CS2 News" className="rounded-md w-full" />
              <h3 className="text-lg font-bold mt-2">New CS2 case released</h3>
              <p>New case with weapon skins now available.</p>
            </div>
          </div>

          {/* Streams */}
          <div className="bg-[#232a38] p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Live Streams</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              {[
                { name: 'Gamer123', viewers: '12.4K', img: '/cs2_images/stream1.png' },
                { name: 'CSGOWIZARD', viewers: '5.9K', img: '/cs2_images/stream2.png' },
                { name: 'SuperCSFan', viewers: '3.1K', img: '/cs2_images/stream3.png' }
              ].map((streamer, idx) => (
                <div key={idx} className="flex-1 min-w-[100px]">
                  <img src={streamer.img} alt="Stream" className="rounded-md w-full" />
                  <p className="mt-2">{streamer.name}</p>
                  <p>{streamer.viewers} viewers</p>
                </div>
              ))}
            </div>
          </div>

          {/* Updates */}
          <div className="bg-[#232a38] p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Upcoming Updates</h2>
            <p>CS2 patch notes: April 25</p>
          </div>
        </div>

        {/* Right Panel - Tournaments (hidden on mobile) */}
        <div className="bg-[#232a38] p-4 rounded-lg flex-[1] flex-col gap-4 sticky top-[4vh] self-start h-fit hidden md:flex">
          <h2 className="text-xl font-semibold">Tournaments</h2>
          {['Counter-Strike League', 'Monthly Tournament', 'CS2 Masters', 'Summer Clash'].map((name, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <span>{name}</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-md text-sm">
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cs2;
