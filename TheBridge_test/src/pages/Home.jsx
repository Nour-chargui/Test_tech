import React from 'react';
import Courses from '../components/Courses';
export default function Home(){

    return (
        <main className="flex flex-col gap-20 pb-10">
            <Header/>
            <Courses/>
            <Contact/>
        </main>
    )
}