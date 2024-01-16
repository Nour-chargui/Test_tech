export default function Contact() {
    return (
        <div className="bg-amber-400 lg:w-[60%] w-[90%] self-center flex flex-col items-center gap-4 py-10 rounded-3xl">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <form className="flex flex-col gap-4 lg:w-[50%] w-[70%]">
                <div className="flex flex-col font-bold">
                    <label>NAME</label>
                    <input className="bg-amber-100 px-5 py-3 rounded-xl focus:outline-none" placeholder="Write your name"/>
                </div>
                <div className="flex flex-col font-bold">
                    <label>EMAIL</label>
                    <input className="bg-amber-100 px-5 py-3 rounded-xl focus:outline-none" placeholder="Write your email"/>
                </div>
                <div className="flex flex-col font-bold">
                    <label>MESSAGE</label>
                    <textarea className="bg-amber-100 px-5 py-3 rounded-xl resize-none focus:outline-none" rows={5} placeholder="Write your message"/>
                </div>
                <button className="w-[70%] self-center bg-pink-700 px-6 py-2 rounded-2xl text-white font-semibold">Send the message</button>
            </form>
        </div>
    )
}