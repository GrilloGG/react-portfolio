import React from "react";

export default function Projects() {
  return (
    <div>
      <section id="projects">
        <h2 class="section-title projects-title">
          <span class="bright-color-text">P</span>rojects
        </h2>
        <div class="projects-section">
          <a href="https://grillogg.github.io/weathercycle/" target="_blank">
            <div class="project main-project project1">
              <div class="project-text ">
                <h3>WeatherCycle</h3>
                <p>HTML/CSS/JS</p>
              </div>
            </div>
          </a>

          <a
            href="https://grillogg.github.io/Weather-Dashboard/"
            target="_blank"
          >
            <div class="project secondary-project project2">
              <div class="project-text ">
                <h3>Weather Dashboard</h3>
                <p>HTML/CSS/JS</p>
              </div>
            </div>
          </a>

          <a href="https://github.com/GrilloGG" target="_blank">
            <div class="project secondary-project project3">
              <div class="project-text">
                <h3>Project 3</h3>
                <p>HTML/CSS</p>
              </div>
            </div>
          </a>

          <a href="https://github.com/GrilloGG" target="_blank">
            <div class="project secondary-project project4">
              <div class="project-text ">
                <h3>Project 4</h3>
                <p>HTML/CSS/JS</p>
              </div>
            </div>
          </a>

          <a href="https://github.com/GrilloGG" target="_blank">
            <div class="project secondary-project project5">
              <div class="project-text ">
                <h3>Project 5</h3>
                <p>HTML/CSS/JS</p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
