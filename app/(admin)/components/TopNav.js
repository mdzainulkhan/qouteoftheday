import { useState } from "react"

export default function TopNav({ toggleSidebar }) {
    const [open, setOpen] = useState(false);
    return (
        <><div className="px-8 py-3 h-16 flex justify-between items-center shadow-sm bg-white">
            <svg className='w-[30px] h-[30px] cursor-pointer' onClick={toggleSidebar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" /></svg>

            <div className="flex items-center relative gap-4">
                <button className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                    🔔<span className="absolute font-bold text-[11px] top-[5px] text-gray-700">2</span>
                </button>

                <div className="w-10 h-10 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full font-bold cursor-pointer group relative" onClick={() => setOpen(!open)}>
                    JK
                    <span className='absolute h-3 w-3 bottom-0 right-0 bg-green-600 rounded-3xl border-[2px] border-white'></span>
                </div>
                {open && (
                    <div className="absolute top-[-10px] mt-14 right-[10px] w-48 bg-white py-2 shadow-md border border-gray-100 rounded-lg z-40">
                        <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600">Edit
                            Profile</a>
                        <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600">Account
                            Settings</a>
                        <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600">Sign
                            Out</a>
                    </div>
                )}
            </div>
        </div></>
    )
}
