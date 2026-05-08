import React, { useState } from "react";

const ProjectForm = ({ addProject }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(title.trim() === "" || description.trim() === ""){
            alert("Please fill all fields");
            return;
        }

        addProject(title, description);

        setTitle("");
        setDescription("");
    };

    return (
        <>
            <div className="border border-gray-500 rounded-lg p-8 bg-white mt-8 mb-8">

                <h2 className="text-5xl font-bold mb-8">
                    Add Project
                </h2>

                <form onSubmit={handleSubmit}>

                    <label className="block text-3xl mb-3">
                        Title
                    </label>

                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        className="w-full border border-gray-500 rounded-lg p-4 mb-8"
                    />

                    <label className="block text-3xl mb-3">
                        Description
                    </label>

                    <textarea
                        value={description}
                        onChange={handleDescriptionChange}
                        className="w-full border border-gray-500 rounded-lg p-4 mb-8 h-40"
                    ></textarea>

                    <button className="border border-gray-600 rounded-lg w-32 h-14 text-2xl">
                        Add
                    </button>

                </form>

            </div>
        </>
    );
}

export default ProjectForm;