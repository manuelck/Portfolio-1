let filteredProjects = [];
let currentSlide = 0;

export function renderProjects() {
    const projectsWrapper = document.getElementById('projects-wrapper');
    const noProjectsMessage = document.getElementById('no-projects-message');

    if (!projectsWrapper) return;

    const existingSlides = document.querySelectorAll('.slide');
    existingSlides.forEach(slide => projectsWrapper.removeChild(slide));

    if (!filteredProjects.length) {
        if (noProjectsMessage) noProjectsMessage.style.display = 'block';
        projectsWrapper.style.display = 'none';
        renderDots(0);
        return;
    }

    if (noProjectsMessage) noProjectsMessage.style.display = 'none';
    projectsWrapper.style.display = 'flex';

    const slides = Math.ceil(filteredProjects.length / 4);
    for (let i = 0; i < slides; i++) {
        const slide = document.createElement('div');
        slide.classList.add('slide');

        filteredProjects.slice(i * 4, i * 4 + 4).forEach(project => {
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
    renderDots(slides);
    updateSlidePosition();
}

export function goToSlide(slideIndex) {
    if (slideIndex === currentSlide) return;
    currentSlide = slideIndex;
    updateSlidePosition();
    renderDots(Math.ceil(filteredProjects.length / 4));
}

function updateSlidePosition() {
    const projectsWrapper = document.getElementById('projects-wrapper');
    if (!projectsWrapper) return;
    const slideWidth = projectsWrapper.clientWidth;
    projectsWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    projectsWrapper.style.transition = 'transform 0.5s ease-in-out';
}

export function filterProjects(category) {
    currentSlide = 0;
    if (!Array.isArray(window.projects)) {
        console.error('Projects data is not available.');
        return;
    }
    filteredProjects = category === 'all' ? window.projects : window.projects.filter(project => project.category === category);
    renderProjects();
    setTimeout(() => updateSlidePosition(), 50);
}

export function renderDots(slides) {
    const dotsContainer = document.getElementById('dots-container');
    if (!dotsContainer) return;

    dotsContainer.innerHTML = '';

    if (slides <= 1) {
        dotsContainer.style.display = 'block';
    } else {
        dotsContainer.style.display = 'block';
    }

    for (let i = 0; i < slides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === currentSlide) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentSlide = i;
            updateSlidePosition();
            renderDots(slides);
        });
        dotsContainer.appendChild(dot);
    }
}
