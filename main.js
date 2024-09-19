import { navTemplate } from './src/nav/navTemplate.js';
import { skillThemes } from './src/about/skills.js';
import { renderSkills } from './src/about/renderSkills.js';
import { aboutTemplate } from './src/about/aboutTemplate.js';
import { renderData } from './src/studies/renderStudiesWork.js';
import { studiesTemplate } from './src/studies/studiesTemplate.js';
import { footerTemplate } from './src/footer/footerTemplate.js';
import { projectsTemplate } from './src/projects/projectsTemplate.js';
import { projects } from './src/projects/projects.js';
import { initializeProjects, filterProjects } from './src/projects/projectsRender.js';
import { certificates } from './src/certificates/certificates.js';
import { renderCertificates } from './src/certificates/certificatesRender.js';
import { studiesData, workData } from './src/studies/worksStudies.js';

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

    initializeProjects();
    filterProjects();

    renderSkills(skillThemes);

    const studiesList = document.querySelector('.studies-list');
    const workList = document.querySelector('.work-list');

    if (!studiesList || !workList) {
        console.error('Studies or work list container is missing in the HTML.');
        return;
    }

    renderData(studiesList, studiesData, 'study');
    renderData(workList, workData, 'work');

    renderCertificates(certificates); 
});
