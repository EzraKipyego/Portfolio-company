import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects, onDeleteProject }) => {

    return (
        <>
            <div className="border border-gray-500 rounded-b-lg bg-white p-8">

                {projects.length > 0 ? (
                    projects.map(project =>
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onDeleteProject={onDeleteProject}
                        />
                    )
                ) : (
                    <p>No Projects Found</p>
                )}

            </div>
        </>
    );
}

export default ProjectList;