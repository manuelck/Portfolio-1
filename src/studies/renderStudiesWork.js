export function renderData(container, data, type) {
    if (!Array.isArray(data) || data.length === 0) {
        console.error(`${type} data is invalid or empty`);
        return;
    }

    data.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.className = `${type}-item`;

        const titleElement = document.createElement('h3');
        titleElement.className = `${type}-title`;
        titleElement.textContent = item.title;

        const yearElement = document.createElement('p');
        yearElement.className = `${type}-year`;
        yearElement.textContent = `${item.startYear} - ${item.endYear}`;

        const descriptionElement = document.createElement('p');
        descriptionElement.className = `${type}-description`;
        descriptionElement.textContent = item.description;

        const typeElement = document.createElement(type === 'study' ? 'p' : 'span');
        typeElement.className = `${type}-type`;
        typeElement.textContent = item.type;

        itemContainer.appendChild(yearElement);
        itemContainer.appendChild(titleElement);
        itemContainer.appendChild(typeElement);
        itemContainer.appendChild(descriptionElement);

        container.appendChild(itemContainer);
    });
}
