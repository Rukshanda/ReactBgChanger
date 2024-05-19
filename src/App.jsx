 import "./App.css";

function App() {
  const changeBackground = (color) => {
    document.body.style.backgroundColor = color;
  };
  return (
    <div className="p-[20px] m-[20px]">
      <div className="top-bar">
        <ul className="flex justify-around">
          <li className="pt-[6px] pb-[6px] pr-[12px] pl-[12px] bg-blue-700 w-[100px] text-center rounded-[10px] font-bold cursor-pointer border-2 border-slate-950"
          onClick={() => changeBackground("#1d4ed8")}
          >Blue</li>
          <li className="pt-[6px] pb-[6px] pr-[12px] pl-[12px] bg-yellow-500 w-[100px] text-center rounded-[10px] font-bold cursor-pointer border-2 border-slate-950"
          onClick={() => changeBackground("#eab308")}>Yellow</li>
          <li className="pt-[6px] pb-[6px] pr-[12px] pl-[12px] bg-red-700 w-[100px] text-center rounded-[10px] font-bold cursor-pointer border-2 border-slate-950"
          onClick={() => changeBackground("#b91c1c")}>Red</li>
          <li className="pt-[6px] pb-[6px] pr-[12px] pl-[12px] bg-green-700 w-[100px] text-center rounded-[10px] font-bold cursor-pointer border-2 border-slate-950"
          onClick={() => changeBackground("#15803d")}>Green</li>
          <li className="pt-[6px] pb-[6px] pr-[12px] pl-[12px] bg-purple-700 w-[100px] text-center rounded-[10px] font-bold cursor-pointer border-2 border-slate-950"
          onClick={() => changeBackground("#7e22ce")}>Purple</li>
          <li className="pt-[6px] pb-[6px] pr-[12px] pl-[12px] bg-gray-600 w-[100px] text-center rounded-[10px] font-bold cursor-pointer border-2 border-slate-950"
          onClick={() => changeBackground("#4b5563")}>Gray</li>
          <li className="pt-[6px] pb-[6px] pr-[12px] pl-[12px] bg-pink-700 w-[100px] text-center rounded-[10px] font-bold cursor-pointer border-2 border-slate-950"
          onClick={()=> changeBackground("#be185d")}>Pink</li>
          <li className="pt-[6px] pb-[6px] pr-[12px] pl-[12px] bg-purple-300 w-[100px] text-center rounded-[10px] font-bold cursor-pointer border-2 border-slate-950"
          onClick={() => changeBackground("#d8b4fe")}>Lavender</li>
          <li className="pt-[6px] pb-[6px] pr-[12px] pl-[12px] bg-orange-500 w-[100px] text-center rounded-[10px] font-bold cursor-pointer border-2 border-slate-950"
          onClick={() => changeBackground("#f97316")}>Orange</li>
          <li className="pt-[6px] pb-[6px] pr-[12px] pl-[12px] bg-slate-900 w-[100px] text-center rounded-[10px] font-bold cursor-pointer border-2 border-slate-950"
          onClick={() => changeBackground("#0f172a")}>Slate</li>
          <li className="pt-[6px] pb-[6px] pr-[12px] pl-[12px] bg-cyan-400 w-[100px] text-center rounded-[10px] font-bold cursor-pointer border-2 border-slate-950"
          onClick={() => changeBackground('#22d3ee')}>Cyan</li>
          <li className="pt-[6px] pb-[6px] pr-[12px] pl-[12px] bg-emerald-500 w-[100px] text-center rounded-[10px] font-bold cursor-pointer border-2 border-slate-950" 
          onClick={() => changeBackground("#10b981")}>Emerald</li>
          <li className="pt-[6px] pb-[6px] pr-[12px] pl-[12px] bg-rose-500 w-[100px] text-center rounded-[10px] font-bold cursor-pointer border-2 border-slate-950"
          onClick={() => changeBackground("#f43f5e")}>Rose</li>
        </ul>
      </div>
      <div className="flex w-[100%] justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h1 className="text-center text-[2rem]">
        BG CHANGER
      </h1>
      </div>
    
    </div>
  );
}

export default App;
