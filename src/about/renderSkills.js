export function renderSkills(skillThemes) {
    const skillsContainer = document.getElementById('skills-container');

    for (const [theme, skills] of Object.entries(skillThemes)) {
        const themeContainer = document.createElement('div');
        themeContainer.className = 'theme-container';

        const titleElement = document.createElement('h2');
        titleElement.className = 'skill-title';
        titleElement.textContent = theme;

        themeContainer.appendChild(titleElement);

        const skillsListContainer = document.createElement('div');
        skillsListContainer.className = 'skills-list-container';

        skills.forEach(skill => {
            const skillElement = document.createElement('p');
            skillElement.className = 'skill-item';
            skillElement.textContent = skill;
            skillsListContainer.appendChild(skillElement);
        });

        themeContainer.appendChild(skillsListContainer);

        skillsContainer.appendChild(themeContainer);
    }
}
