import React, { useState } from "react";
import "./App.css";
import project1 from "./assets/images/project1.jpg";
import project2 from "./assets/images/project2.jpg";
import project3 from "./assets/images/project3.jpg";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import Hero from "./components/Hero";

function App() {

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Modern Homes Websites",
      description: "A modern real estate platform showcasing modern homes, property listings and contact options for potential buyers",
      image: project1
    },
    {
      id: 2,
      title: "Nature plants website",
      description: "A responsive eco-friendly website designed to display plant collections, gardening tips, and online plant shopping for nature lovers",
      image: project2
    },
    {
      id: 3,
      title: "Ai  chatbot App",
      description: "An  Articial intelligent chatbot application built to provide automated conversations, customer support, and smart user interaction",
      image: project3
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (title, description) => {

    if(title.trim() === "" || description.trim() === ""){
      alert("Please fill all fields");
      return;
    }

    const newProject = {
      id: Date.now(),
      title: title,
      description: description,
      image: project1
    };

    console.log("New Project Added", newProject);

    setProjects(prevProjects => [...prevProjects, newProject]);

   // setProjects([...projects, newProject]);
  };

  const deleteProject = (id) => {
    let newProjects = projects.filter(project => project.id != id);
    setProjects(newProjects);
  };

  const searchedProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="min-h-screen bg-gray-100">

        <NavBar />

        <div className="max-w-5xl mx-auto p-6">

          <ProjectForm addProject={addProject} />

          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <ProjectList
            projects={searchedProjects}
            onDeleteProject={deleteProject}
          />

        </div>

        <Footer />

      </div>
    </>
  );
}

export default App;