import "./portfolio.css";

import IMG1 from "../../assets/Youtube.png";
import IMG2 from "../../assets/moviesApp.jpg";
import IMG3 from "../../assets/WeatherApp.jpg";
import IMG4 from "../../assets/analog watch.jpg";
import IMG5 from "../../assets/mcq.jpg";
import IMG6 from "../../assets/stockrepo.jpg";
import React from "react";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Youtube clone",
      img: IMG1,
      description:
        "Integrate live chat for real-time interaction, debouncing for smoother UX, caching for optimized performance, and nested comments.",
      technologies: "React.js | JavaScript | Redux toolkit | Tailwind",
      link: "https://youtube-clone-wine-two.vercel.app/",
      github: "https://github.com/wasimakram97091/youtube-clone",
    },
    {
      id: 2,
      title: "Movies App",
      img: IMG2,
      description:
        "Implemented user authentication, error handling with Redux, and dynamic client-side routing for enhanced movie-watching experiences.",
      technologies: "React.js | JavaScript | Redux | Tailwind | R-router",
      link: "https://moviesapplication.onrender.com",
      github: "https://github.com/shahidahmed77489/moviesapp",
    },
    {
      id: 3,
      title: "Weather app",
      img: IMG3,
      description:
        "Developed responsive weather app with current, daily, and hourly forecasts, intuitive UI, and OpenWeatherAPI integration.",
      technologies: "React.js | JavaScript | SASS",
      link: "https://weather-4dh5.onrender.com",
      github: "https://github.com/shahidahmed77489/weatheraweb",
    },
    {
      id: 4,
      title: "Analog Watch",
      img: IMG4,
      description:
        "sIntegrating an analog watch into a React project combines classic design with modern functionality, enhancing user experience through precision and aesthetics.",
      technologies: "HTML5 | JavaScript | CSS",
      link: "https://cheery-macaron-642b37.netlify.app",
      github: "https://github.com/shahidahmed77489/analogWatches",
    },
    {
      id: 5,
      title: "MCQ Paper ",
      img: IMG5,
      description:
        "Creating a React project for an MCQ paper involves designing components for questions, choices, and interactivity, ensuring seamless user experience.",
      technologies:
        "React.js | JavaScript | Material UI  | Tailwind | Mock API",
      link: "https://glowing-kitten-58e97b.netlify.app",
      github: "https://github.com/shahidahmed77489/mcqprogramming",
    },
    {
      id: 6,
      title: "Upstox Dashboard",
      img: IMG6,
      description:
        "Upstox, a leading stock trading platform, utilizes React design for its user interface, ensuring a seamless and responsive trading experience.",
      technologies: "React.js | JavaScript | Tailwind | Mock API",
      link: "https://stock-market-with-react.netlify.app",
      github: "https://github.com/shahidahmed77489/stockrepo",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
