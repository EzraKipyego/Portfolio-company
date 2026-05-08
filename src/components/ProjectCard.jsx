import React from "react";

const ProjectCard = ({ project, onDeleteProject }) => {

    const handleClick = (id) => {
        onDeleteProject(id);
    };

    return (
        <>
            <div className="flex items-start gap-6 mb-8 border-b pb-6">

                <img
                    src={project.image}
                    alt={project.title}
                    className="w-24 h-24 border-2 border-gray-500 rounded-lg"
                />

                <div className="grow">

                    <h2 className="text-4xl font-bold">
                        {project.title}
                    </h2>

                    <p className="text-2xl text-gray-700">
                        {project.description}
                    </p>

                </div>

                <button
                    onClick={() => handleClick(project.id)}
                    className="border-2 border-gray-500 px-4 py-2 rounded-lg hover:bg-red-100"
                >
                    Delete
                </button>

            </div>
        </>
    );
}

export default ProjectCard;