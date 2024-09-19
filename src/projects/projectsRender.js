let filteredProjects = [];

export function filterProjects(criteria = '') {
    if (criteria === 'all' || criteria === '') {
        filteredProjects = projects;
    } else {
        filteredProjects = projects.filter(project =>
            project.category === criteria || project.tools.includes(criteria)
        );
    }
    renderProjects();
}

export function initializeProjects() {
    filteredProjects = projects;
    renderProjects();
}

export function renderProjects() {
    const projectsWrapper = document.getElementById('projects-wrapper');
    const noProjectsMessage = document.getElementById('no-projects-message');

    if (!projectsWrapper) return;

    const existingSlides = document.querySelectorAll('.slide');
    existingSlides.forEach(slide => projectsWrapper.removeChild(slide));

    if (!filteredProjects.length) {
        if (noProjectsMessage) noProjectsMessage.style.display = 'block';
        projectsWrapper.style.display = 'none';
        return;
    }

    if (noProjectsMessage) noProjectsMessage.style.display = 'none';
    projectsWrapper.style.display = 'flex';

    const slidesCount = Math.ceil(filteredProjects.length / 4);
    for (let i = 0; i < slidesCount; i++) {
        const slide = document.createElement('div');
        slide.classList.add('slide');

        const projectsInThisSlide = filteredProjects.slice(i * 4, i * 4 + 4);

        projectsInThisSlide.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');

            const projectLink = document.createElement('a');
            projectLink.href = project.link || '#';
            projectLink.target = '_blank';
            projectLink.classList.add('project-link');

            const img = document.createElement('img');
            img.src = project.image || 'path/to/default/image.jpg';
            img.alt = project.title;
            img.classList.add('project-image');

            const mainTag = document.createElement('div');
            mainTag.classList.add('main-tag');
            mainTag.textContent = project.category;

            const description = document.createElement('div');
            description.classList.add('description');
            description.textContent = project.description;

            const toolTags = document.createElement('div');
            toolTags.classList.add('tool-tags');
            project.tools.forEach(tool => {
                const toolTag = document.createElement('span');
                toolTag.textContent = tool;
                toolTags.appendChild(toolTag);
            });

            projectDiv.appendChild(img);
            projectDiv.appendChild(mainTag);
            projectDiv.appendChild(description);
            projectDiv.appendChild(toolTags);

            projectLink.appendChild(projectDiv);
            slide.appendChild(projectLink);
        });

        projectsWrapper.appendChild(slide);
    }
}
