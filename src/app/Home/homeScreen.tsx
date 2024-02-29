import Image from "next/image"


export const HomeScreen = () => {
  return (
    <div className="flex text-black justify-evenly items-center w-full min-h-[80vh]">
         {/* gif  */}
          <div className=" h-[600px] relative rounded-full border-black border-[4px]  bg-black w-[500px]">
      <Image
         src={"/profile.png"}
         alt="Logo"         
         className="rounded-full"
        fill
        / >
          </div>
        {/* text  */}
          <div className="flex justify-center items-center flex-col">
             <h1 className="text-4xl  m-4 font-bold">Owolabi Destiny Oluwanifemi</h1>
             <p className="font-semibold m-4 text-xl">Full Stack Developer </p>
             {/* Button */}
             <div className="flex gap-4">
                <button type="button" className="border p-3 rounded-xl text-slate-200 font-mono font-semibold bg-slate-800">Download Cv</button>
            <button type="button" className="border-2 p-3 rounded-xl  ">Contact Me</button>
             </div>
          </div>
         
    </div>
  )
}


