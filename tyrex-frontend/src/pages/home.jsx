import mechanic from "../assets/mechanic.png";
import tyres from "../assets/tyers.png";

function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-100 relative overflow-hidden">
      {/* Large watermark text in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h1 className="text-[25rem] font-black text-gray-200 opacity-30 select-none whitespace-nowrap">
          TYRE
        </h1>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="flex flex-col">
            <h1 className="text-7xl font-black text-gray-800 mb-8 leading-tight"
                style={{
                  textShadow: '3px 3px 0px rgba(255,255,255,0.8), 6px 6px 0px rgba(0,0,0,0.1)'
                }}>
              Your trusted tyre<br />store.
            </h1>
            
            <div className="mt-8">
              <img 
                src={mechanic} 
                alt="Mechanic" 
                className="w-80 h-auto object-contain" 
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-5xl font-thin text-gray-700 text-center mb-12 tracking-wider uppercase">
              We are provided the<br />all brands
            </h2>
            
            <div className="w-full flex justify-center">
              <img 
                src={tyres} 
                alt="Tyres" 
                className="w-full max-w-2xl h-auto object-contain" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;