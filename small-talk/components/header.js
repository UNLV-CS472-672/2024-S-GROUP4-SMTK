import Logo from "./logo";
import Sushi from "./sushi";
import tailwindConfig from "@/tailwind.config";
import { Tabs } from "./data";

export const Header = ({width, isOpen, setIsOpen}) => {

    const renderModal = () => {
        if (width < 1024) {
            return(
            <div className="grid grid-cols-3 w-full lg:w-[1024px]">
                <Sushi isOpen={isOpen} setIsOpen={setIsOpen}/>
                <Logo/>
            </div>
            )
        }
        
        return(                
        <div className="grid grid-cols-3 w-full lg:w-[1024px]">
            <Sushi isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className='flex justify-around items-center gap-5'>
            {Tabs.map((i, idx) => (
                <a key={idx} href={i.slug} className={`px-2 rounded w-[128px] text-center hover:bg-gradient-to-r ${i.color}`}>
                    {i.name}
                </a>
            ))}
            </div>
        </div>
        )
    }

    return (
        <div className='flex items-center justify-center w-screen h-[72px] lg:h-[48px] text-slate-50 bg-slate-700'>
            {!isOpen ? 
                <div className="grid grid-cols-3 w-full lg:w-[1024px]">
                    <Sushi isOpen={isOpen} setIsOpen={setIsOpen}/>
                    <Logo/>
                </div>
                :
                renderModal()
            

            }
        </div>
    )
}
/*
hover:bg-gradient-to-r from-cyan-500 to-blue-500
*/


export default Header;