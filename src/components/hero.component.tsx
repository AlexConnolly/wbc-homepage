export function HeroComponent() {
    return (
        <div className="pt-20 pb-20 container mx-auto bg-gray-100">
            <div className=" flex flex-row justify-center content-center items-cente">
                <div className="text-center text-6xl font-bold mt-20">
                    We build commerce <span className="bg-black text-white font-bold px-2 my-2 inline-block border-b-2">solutions</span> that <span className="bg-black text-white font-bold px-2 my-2 inline-block">rock</span>
                </div>
            </div>
            <div className="text-center mt-12 text-sm font-bold">
                We work with
            </div>
            <div className="flex flex-row mt-4 justify-center content-center items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Shopify_logo.svg" className="w-24 grayscale mr-4"></img>
                <img src="https://profitbooks.net/wp-content/uploads/2024/04/BigCommerce-Logo.png" className="w-24 grayscale mr-4"></img>
                <img src="https://verdemedia.com/wp-content/uploads/2022/06/woocommerce-logo.png" className="w-24 grayscale mr-4"></img>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtJOPnrvzxA25T_fbXrdlc-TzJj95GAOSfQ&s" className="w-24 grayscale mr-4"></img>
                <img src="https://internetretailing.net/wp-content/uploads/2021/11/linnworks2023.png" className="w-24 grayscale"></img>
            </div>
        </div>
    )
}