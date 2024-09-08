export function renderStudies(container, studiesData) {
    studiesData.forEach(study => {
        const studyContainer = document.createElement('div');
        studyContainer.className = 'study-item';

        const titleElement = document.createElement('h3');
        titleElement.className = 'study-title';
        titleElement.textContent = study.title;

        const yearElement = document.createElement('p');
        yearElement.className = 'study-year';
        yearElement.textContent = `${study.startYear} - ${study.endYear}`;

        const descriptionElement = document.createElement('p');
        descriptionElement.className = 'study-description';
        descriptionElement.textContent = study.description;

        const typeElement = document.createElement('p');
        typeElement.className = 'study-type';
        typeElement.textContent = study.type;
        
        studyContainer.appendChild(yearElement);
        studyContainer.appendChild(titleElement);
        studyContainer.appendChild(typeElement);
        studyContainer.appendChild(descriptionElement);

        container.appendChild(studyContainer);
    });
}

export function renderWork(container, workData) {
    workData.forEach(work => {
        const workItemContainer = document.createElement('div');
        workItemContainer.className = 'work-item';

        const titleElement = document.createElement('h3');
        titleElement.className = 'work-title';
        titleElement.textContent = work.title;

        const yearElement = document.createElement('p');
        yearElement.className = 'work-year';
        yearElement.textContent = `${work.startYear} - ${work.endYear}`;

        const descriptionElement = document.createElement('p');
        descriptionElement.className = 'work-description';
        descriptionElement.textContent = work.description;

        const typeElement = document.createElement('span');
        typeElement.className = 'work-type';
        typeElement.textContent = work.type;

        workItemContainer.appendChild(yearElement);
        workItemContainer.appendChild(titleElement);
        workItemContainer.appendChild(typeElement);
        workItemContainer.appendChild(descriptionElement);

        container.appendChild(workItemContainer);
    });
}

