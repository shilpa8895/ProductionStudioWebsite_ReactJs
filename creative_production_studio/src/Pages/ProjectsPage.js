// Projects.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/ProjectsPage.css';
import Navbar from './Navbar';
import Footer from './Footer';

const projects = [
  {
    id: 1,
    title: 'Project Title 1',
    imageUrl: 'path_to_image1.jpg', // Replace with actual path
    description: 'Description of Project 1',
    youtubeTrailer: 'https://www.youtube.com/watch?v=trailer1', // Replace with actual link
    imdbLink: 'https://www.imdb.com/title/imdb_link1', // Replace with actual link
    cast: [
      { name: 'Actor 1', profileLink: '/actor1' }, // Replace with actual links
      { name: 'Actor 2', profileLink: '/actor2' },
    ],
  },
  {
    id: 2,
    title: 'Project Title 2',
    imageUrl: 'path_to_image2.jpg',
    description: 'Description of Project 2',
    youtubeTrailer: 'https://www.youtube.com/watch?v=trailer2',
    imdbLink: 'https://www.imdb.com/title/imdb_link2',
    cast: [
      { name: 'Actor 3', profileLink: '/actor3' },
      { name: 'Actor 4', profileLink: '/actor4' },
    ],
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <div className="projects-page">
      <Navbar />
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.youtubeTrailer} target="_blank" rel="noopener noreferrer">Watch Trailer</a>
                <a href={project.imdbLink} target="_blank" rel="noopener noreferrer">IMDb</a>
              </div>
              <div className="project-cast">
                <h3>Cast:</h3>
                <ul>
                  {project.cast.map((actor, index) => (
                    <li key={index}>
                      <Link to={actor.profileLink}>{actor.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
