function createFeedbackElement(entry) {
    const element = `<div class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <i class="fi fi-rr-trash"></i>
    <div class="text-center space-y-4">
        <blockquote>
            <p class="text-lg font-medium">"${entry.description}"</p>
        </blockquote>
        <div class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">${entry.creatorName}</div>
            <div class="text-slate-700 dark:text-slate-500">${entry.type}</div>
        </div>
    </div>
</div>`;
    return element;
}

async function loadFeedback() {
    const feedbackElement = document.getElementById('feedback-list');
    const entries = await guardian.listFeedback();
    var feedbackHTML = '';
    for (const entry of entries) {
        feedbackHTML += createFeedbackElement(entry);
    }
    feedbackElement.innerHTML = feedbackHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    loadFeedback();
});
