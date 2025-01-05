"use client"

import React from "react";
import Link from "next/link";
import Privacy from "../../components/Privacy";
import { FileText, ShieldQuestion, SquarePen } from "lucide-react";


const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 md:px-12"
        style={{ backgroundImage: 'url("/gif.mp4")', backgroundSize: 'cover', backgroundPosition: 'center' }}
>
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">
          <span className="hover:text-pink-300"> Welcome to my 🚀</span><span className="text-pink-500">Kids Story📖 </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Here you can see the creative ideas,insightful articles and personal kids
          stories😊.
        </p>
      </div>

  

      <div className="grid gap-6 md:grid-cols-1">
        <div className=" border rounded-lg shadow-lg transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold">Create Your kids stories Blog</h2>
          <p className="mt-2">
          Welcome to your magical world of stories! <span className="inline-block">✨📖</span>  
    Here, every tale brings an adventure <span className="inline-block">🗺️</span>, a lesson <span className="inline-block">🎓</span>,  
    and lots of fun <span className="inline-block">🎉</span>. Whether you dream of castles <span className="inline-block">🏰</span>  
    or talking animals <span className="inline-block">🐾</span>, this is your space to imagine, explore, and learn!  
          </p>
          <button className="mt-4 px-4 py-2 font-medium border rounded-full transition-all hover:bg-opacity-20 hover:bg-pink-400">
            <Link href={"/input"} className="flex justify-center items-center gap-2">
            <SquarePen className="text-pink-600"/>
            <span>Create kids stories Blogs</span>
            </Link>
          </button>
        </div>

        <div className=" border rounded-lg shadow-lg transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold">Latest kids stories Blogs</h2>
          <p className="mt-2">
          Get ready for the latest and most exciting stories! <span className="inline-block">🔥📚</span>  
    From magical adventures <span className="inline-block">✨🦄</span> to mysterious lands <span className="inline-block">🌍</span>,  
    there’s always something new to discover! Explore heroes <span className="inline-block">🦸‍♂️</span>  
    and creatures <span className="inline-block">🐉</span> that make every tale unforgettable. Don’t miss out—start reading now! <span className="inline-block">📖🚀</span>  
          </p>
          <button className="mt-4 px-4 py-2 font-medium border rounded-full transition-all hover:bg-opacity-20 hover:bg-pink-400">
            <Link href="/blogs" className="flex justify-center items-center gap-2">
            <FileText className="inline text-pink-600"/>
            <span>Discover stories blog</span>
            </Link>
          </button>
        </div>

        <div className=" border rounded-lg shadow-lg transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold">About KidsBlog</h2>
          <p className="mt-2">
          Welcome to a world where stories come alive! <span className="inline-block">🌟📚</span>  
    Our blog is filled with fun tales <span className="inline-block">🎉</span>, exciting characters <span className="inline-block">🦸‍♀️</span>,  
    and adventures that teach valuable lessons <span className="inline-block">🎓</span>.  
    Every story sparks imagination <span className="inline-block">💭</span> and brings a smile to every young reader’s face. Join us and start your adventure today! <span className="inline-block">🚀🌈</span>
          </p>
          <button className="mt-4 px-4 py-2 font-medium border rounded-full transition-all hover:bg-opacity-20 hover:bg-pink-400">
            <Link href="/about" className="flex justify-center items-center gap-2">
            <ShieldQuestion className="text-pink-600" />
            <span>Know More</span>
            </Link>
          </button>
        </div>
      </div>

      <Privacy />
    </div>
  );
};

export default LandingPage;
