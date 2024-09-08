export const projectsTemplate = `
    <div class="section-title">
        <h1>Portfolio</h1>
        <h2>Visualizing ideas, crafting impact.</h2>
    </div>
    <div class="filter-buttons-wrapper">
        <div class="filter-buttons">
            <button onclick="filterProjects('all')">All</button>
            <button onclick="filterProjects('graphic design')">Graphic Design</button>
            <button onclick="filterProjects('coding')">Coding</button>
            <button onclick="filterProjects('video editing')">Video Editing</button>
        </div>
    </div>
    <div class="projects-container">
        <div id="no-projects-message" class="no-projects-message">No projects to display.</div>
        <div class="slider-container">
            <div class="projects-wrapper" id="projects-wrapper">
                <!-- Projects will be dynamically inserted here -->
            </div>
            <div class="dots-container" id="dots-container">
                <!-- Dots will be dynamically inserted here -->
            </div>
        </div>
    </div>
`;
