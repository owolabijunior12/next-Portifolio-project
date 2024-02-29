import Link from "next/link";
import { isActiveStyles, isNotActiveStyles } from "@/component/utils/index";
import { useParams } from "next/navigation";

const links= [
    {
        _id:1,
        name: "Home",
        url:"/",        
        active:false
    },
    {
        _id:2,
        name: "About",
        url:"/about",        
        active:false
    },
    {
        _id:3,
        name: "Skills",
        url:"/skills",        
        active:false
    },
    {
        _id:4,
        name: "Blog",
        url:"/blog",        
        active:false
    },
    {
        _id:5,
        name: "Contact",
        url:"/contact",        
        active:false
    },
]



export const AchorLink = () => {
  
  return (
    <div className="flex gap-3 font-semibold text-xl">
        {
            links.map((a)=>
            <div key={a._id} className="rounded-2xl p-3 w-[100px] text-center border bg-white text-black">
               <a href={a.url} >{a.name}</a>
            </div>
            )
        }
    </div>
  )
}
