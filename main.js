import { navTemplate } from './src/nav/navTemplate.js';
import { skillThemes } from './src/about/skills.js';
import { renderSkills } from './src/about/renderSkills.js';
import { aboutTemplate } from './src/about/aboutTemplate.js';
import { renderStudies, renderWork } from './src/studies/renderStudiesWork.js';
import { studiesData, workData } from './src/studies/worksStudies.js';
import { studiesTemplate } from './src/studies/studiesTemplate.js';
import { footerTemplate } from './src/footer/footerTemplate.js';
import { projectsTemplate } from './src/projects/projectsTemplate.js';
import { projects } from './src/projects/projects.js';
import { renderProjects, renderDots, goToSlide, filterProjects } from './src/projects/projectsRender.js';
import { certificates} from './src/certificates/certificates.js';
import { renderCertificates } from './src/certificates/certificatesRender.js';

window.projects = projects;

window.filterProjects = filterProjects;

document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById('nav');
    const about = document.getElementById('about');
    const studies = document.getElementById('studies');
    const portfolio = document.getElementById('portfolio');
    const footer = document.querySelector('footer#footer');
    const certificatesSection = document.getElementById('certificates'); 

    if (!nav || !about || !studies || !portfolio || !footer || !certificatesSection) {
        console.error('One or more elements are missing in the HTML.');
        return;
    }

    nav.innerHTML = navTemplate;
    about.innerHTML = aboutTemplate;
    portfolio.innerHTML = projectsTemplate;
    studies.innerHTML = studiesTemplate;
    footer.innerHTML = footerTemplate;

    filterProjects('all');
    renderDots(Math.ceil(window.projects.length / 4));
    renderSkills(skillThemes);
    renderStudies(document.querySelector('.studies-list'), studiesData);
    renderWork(document.querySelector('.work-list'), workData);

    renderCertificates(certificates); 
});


