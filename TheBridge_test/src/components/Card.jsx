export default function Card({title, image, price}) {
    return(
        <div className="flex flex-col gap-4">
            <img alt={title} src={image} className="w-[400px] "/>
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl text-black font-bold">{title}</h2>
                <h3 className="text-2xl text-pink-700 font-semibold">{price} Dt/Month</h3>
            </div>
        </div>
    )
}