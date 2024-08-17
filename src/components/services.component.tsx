export function ServicesComponent() {
    return (
        <div className="container mx-auto px-6 py-4">

            <div className="flex flex-row justify-center content-center items-center">
                <div className="border-b-2 w-12"></div> 
            </div>
            <div className="flex flex-row justify-center content-center items-center">



                <div className="text-xl text-gray-800 text-center mb-8 mt-8 font-bold inline-block p-4 bg-gray-10">
                    We're on a mission to build the <span className="px-1 border-b-2 border-b-purple-400">best</span> commerce experiences around - with you.
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
                <div className="bg-gray-100 p-4 border-b-4">
                    <i className='bx bx-customize text-4xl mb-2'></i>
                    <div className="font-bold text-lg">
                        Bespoke software
                    </div>
                    <div className="text-gray-600 mt-2">
                        Want to automate or smarten your process? We can plan, design and build custom software to fit to your business.
                    </div>
                </div>
                <div className="bg-gray-100 p-4 border-b-4">
                    <i className='bx bx-plug text-4xl mb-2'></i>
                    <div className="font-bold text-lg">
                        Connection software
                    </div>
                    <div className="text-gray-600 mt-2">
                        Looking to connect multiple systems? We've experience in a wide array of systems and can work with yours to connect.
                    </div>
                </div>
                <div className="bg-gray-100 p-4 border-b-4">
                    <i className='bx bx-palette text-4xl mb-2'></i>
                    <div className="font-bold text-lg">
                        Customisation software
                    </div>
                    <div className="text-gray-600 mt-2">
                        We can build custom themes, plugins and even design your site. Whatever customisation you need, we're here.
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-end content-end">
                <div className="text-xl text-gray-600 text-center mb-8 mt-8 text-white inline-block p-4 bg-black">
                    Our work
                </div>
            </div>
        </div>
    )
}