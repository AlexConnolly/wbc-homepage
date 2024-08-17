import { useState } from "react";

interface HeaderComponentState {
    menuToggle : boolean;
}

export function HeaderComponent() {

    const [state, setState] = useState<HeaderComponentState>({ menuToggle: false});

    return (
        <div className="relative bg-white">
            <div className="flex flex-row container mx-auto">
                <div className="px-6 py-4 font-bold text-2xl opacity-60 hover:opacity-100">
                    <span className="hidden sm:inline-block">
                        webuild<span className="bg-black text-white px-1 ml-1">commerce</span>
                    </span>
                    <span className="inline-block sm:hidden">
                        webuild<span className="bg-black text-white px-1 ml-1">commerce</span>
                    </span>
                </div>
                <div className="block sm:hidden flex-grow flex flex-row items-center justify-end content-end">
                    <div className="font-bold text-lg mr-2 px-6 py-3 inline-block bg-yellow-400 text-gray-800 hover:text-gray-900 hover:underline pointer cursor-pointer" onClick={() => {
                        setState({
                            menuToggle: true
                        })
                    }}>
                        Menu
                    </div>
                </div>
                <div className="grow flex-grow flex flex-row hidden sm:flex">
                    <div className="flex grow flex-grow items-center content-center justify-center">
                        <div className="px-6 py-4 inline-block text-gray-500 hover:text-black hover:underline pointer cursor-pointer">
                            Services
                        </div>
                        <div className="px-6 py-4 inline-block text-gray-500 hover:text-black hover:underline pointer cursor-pointer">
                            Our work
                        </div>
                        <div className="px-6 py-4 inline-block text-gray-500 hover:text-black hover:underline pointer cursor-pointer">
                            Contact us 
                        </div>
                    </div>
                    <div className="flex flex-row justify-center content-center items-center">

                    <div className="scroll-button relative inline-block mr-6">
                        <button className="px-6 py-2 bg-yellow-400 text-black font-bold border-2 border-yellow-400 hover:border-yellow-600 cursor-pointer pointer">Let's chat</button>
                        <div className="absolute inset-0 bg-orange-200 opacity-20 cursor-pointer pointer"></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className={"z-10 px-6 py-4 text-gray-700 flex flex-col text-3xl absolute top-0 left-0 w-screen h-screen bg-gray-100 text-right " + ((state.menuToggle) ? "block" : "hidden") }>       
                <div className="flex-grow">
                    <div className="p-4">
                        Services
                    </div>
                    <div className="p-4">
                        Our work
                    </div>
                    <div className="p-4">
                        Contact us
                    </div>
                </div>
                <div className="p-4 text-gray-400" onClick={() => {
                    setState({
                        menuToggle: false
                    });
                }}>
                    Close
                </div>
            </div>
        </div>
    )
}