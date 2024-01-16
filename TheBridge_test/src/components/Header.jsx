export default function Header() {
    return (
        <header className="">
            <nav className="bg-white px-20 py-5 border-2 border-gray-200 drop-shadow-2xl">
                <img src={"/public/LogoBridge.png"} alt={"logo"} className="w-29"/>
            </nav>
            <div className="relative w-full h-[75vh] flex items-center justify-center">
      <img
        src={"/public/hands-assembling-puzzle-concept-illustration_114360-17836.jpg"}
        className="w-full h-full object-cover object-center backdrop-opacity-10"
        alt="Development header"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-40 text-black drop-shadow-2xl">
        <div className="bg-slate-50 p-9 rounded-lg backdrop-opacity-70 text-center">
          <h2 className="text-2xl font-bold mb-4 italic font-arial">
            <span className="block">Improve your skills on your own</span>
            <span className="block">To prepare for a better future</span>
          </h2>
          <button className="bg-pink-700 px-7 py-3 rounded-2xl text-white font-semibold">
            REGISTER NOW
          </button>
        </div>
      </div>
    </div>

        </header>
    )
}