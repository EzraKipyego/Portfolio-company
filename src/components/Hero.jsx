import React from "react";

const Hero = () => {
    return (
        <div className="bg-white border border-gray-500 rounded-lg p-10 text-center mt-6">

            <h1 className="text-6xl font-bold mb-6">
                My Projects Portfolio
            </h1>

            <p className="text-2xl text-gray-700 mb-8">
                A collection of modern web development projects including real-world UI designs, apps, and experiments.
            </p>

            <button className="border border-gray-600 px-6 py-3 rounded-lg text-xl hover:bg-gray-100">
                View Projects
            </button>

        </div>
    );
}

export default Hero;