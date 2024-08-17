export function ContactComponent() {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-6">
                <div className="border-2 rounded px-6 py-4">
                    <div className="text-4xl font-bold text-black mb-3 inline-block">
                        Got a question or fancy a chat?
                    </div>
                    <form>
                        <label className="font-bold text-lg block py-4">
                            Service
                        </label>

                        <select className="bg-gray-100 px-6 py-4 block w-full rounded">
                            <option>Software consultation</option>
                            <option>Bespoke software</option>
                            <option>Industry consultation</option>
                            <option>Something else</option>
                        </select>

                        <label className="font-bold text-lg block py-4">
                            Your email
                        </label>
                        <input type="text" className="bg-gray-100 px-6 py-4 block w-full rounded" placeholder="steve@webuildcommerce.com"></input>

                        <label className="font-bold text-lg block py-4">
                            Your message
                        </label>
                        <textarea className="bg-gray-100 px-6 py-4 block w-full rounded" placeholder="Tell us about your project"></textarea>

                        <button className="bg-yellow-400 font-bold text-black px-6 py-2 text-xl mt-8">
                            Send it!
                        </button>
                    </form>
                </div>

                <div className="m-6 p-4 flex flex-col justify-center content-center items-center">
                    <div className="">
                        <div className="font-bold text-black text-4xl">
                            We charge <span className="bg-green-400 px-1">£49</span> per hour. No hidden costs.
                        </div>
                        <div className="mt-2">
                            Our services have a fixed hourly rate. We don't charge for initial consultations and will always agree hours beforehand.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}