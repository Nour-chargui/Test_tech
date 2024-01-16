import Header from "./components/Header.jsx";
import Courses from "./components/Courses.jsx";
import Contact from "./components/Contact.jsx";

function App() {

    return (
        <main className="flex flex-col gap-20 pb-10">
            <Header/>
            <Courses/>
            <Contact/>
        </main>
    )
}

export default App
