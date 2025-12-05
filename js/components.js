// Case Study Cards Data
const caseStudyCardsData = [
    {
        image: '',
        badge: 'データCC CRM',
        title: '応対品質の大幅な向上を実現',
        company: 'SBペイメントサービス様',
        description: 'コンテンツが入りますコンテンツが入りますコンテンツが入りますコンテンツが入りますコンテンツが入りますコンテンツが入りますコ'
    },
    {
        image: '',
        badge: 'データCC CRM',
        title: '応対品質の大幅な向上を実現',
        company: 'SBペイメントサービス様',
        description: 'コンテンツが入りますコンテンツが入りますコンテンツが入りますコンテンツが入りますコンテンツが入りますコンテンツが入りますコ'
    },
    {
        image: '',
        badge: 'データCC CRM',
        title: '応対品質の大幅な向上を実現',
        company: 'SBペイメントサービス様',
        description: 'コンテンツが入りますコンテンツが入りますコンテンツが入りますコンテンツが入りますコンテンツが入りますコンテンツが入りますコ'
    }
];


// Render Case Study Cards
function renderCaseStudyCards() {
    const container = document.getElementById('cases-grid');
    if (!container) return;

    const cardsHTML = caseStudyCardsData.map(card => `
        <div class="case-card">
            <img src="${card.image}" alt="${card.company}" class="case-card__image">
            <div class="case-card__content">
                <span class="case-card__badge">${card.badge}</span>
                <h3 class="case-card__title">${card.title}</h3>
                <p class="case-card__company">${card.company}</p>
                <p class="case-card__description">${card.description}</p>
            </div>
        </div>
    `).join('');

    container.innerHTML = cardsHTML;
}


// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    renderCaseStudyCards();
});