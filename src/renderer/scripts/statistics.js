function deepDictIncrease(dict, keys, value = 1) {
    if (!(keys[0] in dict)) {
        dict[keys[0]] = {
            value: 0,
            children: {},
        }
    }
    if (keys.length === 1) {
        dict[keys[0]].value += value;
    } else {
        deepDictIncrease(dict[keys[0]].children, keys.slice(1), value);
    }
}

function groupStatistics(entries) {
    var grouped = {};
    for (const [key, value] of Object.entries(entries)) {
        deepDictIncrease(grouped, key.split('_'), value);
    }
    return grouped;
}

function statisticsHTML(grouped) {
    var html = '';
    for (const [key, value] of Object.entries(grouped)) {
        const hasChildren = Object.keys(value.children).length > 0;
        html += `<div class="${hasChildren ? "foldable " : ""}bg-slate-100 rounded-xl p-4 dark:bg-slate-800 w-auto">${key}: ${value.value}</div>`;
        if (hasChildren) {
            html += '<div class="foldable-content ml-4 space-y-2 mt-2">';
            html += statisticsHTML(value.children);
            html += '</div>';
        }
    }
    return html;
}

async function loadStatistics() {
    const statisticsElement = document.getElementById('statistics-list');
    const entries = await guardian.getStatistics();
    const grouped = groupStatistics(entries);
    statisticsElement.innerHTML = statisticsHTML(grouped);
    const foldableElements = statisticsElement.querySelectorAll('.foldable');
    foldableElements.forEach((element) => {
        handleFoldable(element);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadStatistics();
});
