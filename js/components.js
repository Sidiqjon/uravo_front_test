// Reusable Components Generator

// Feature Cards Data
const featureCardsData = [
    {
        icon: '⚙️',
        title: '帳票管理機能',
        description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
    },
    {
        icon: '⚙️',
        title: '帳票管理機能',
        description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
    },
    {
        icon: '⚙️',
        title: '帳票管理機能',
        description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
    },
    {
        icon: '⚙️',
        title: '帳票管理機能',
        description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
    },
    {
        icon: '⚙️',
        title: '帳票管理機能',
        description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
    },
    {
        icon: '⚙️',
        title: '帳票管理機能',
        description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
    },
    {
        icon: '⚙️',
        title: '帳票管理機能',
        description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
    },
    {
        icon: '⚙️',
        title: '帳票管理機能',
        description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
    },
    {
        icon: '⚙️',
        title: '帳票管理機能',
        description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
    }
];

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

// Campaign Banner Data
const campaignBannerData = {
    badge: '毎月3社限定',
    title: '初期費用無料キャンペーン実施中',
    buttonText: '資料請求・導入のご相談はこちらから',
    buttonIcon: '▶'
};

// Render Feature Cards
function renderFeatureCards() {
    const container = document.getElementById('features-grid');
    if (!container) return;

    const cardsHTML = featureCardsData.map(card => `
        <div class="feature-card">
            <div class="feature-card__icon">${card.icon}</div>
            <h3 class="feature-card__title">${card.title}</h3>
            <p class="feature-card__description">${card.description}</p>
        </div>
    `).join('');

    container.innerHTML = cardsHTML;
}

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

// Render Campaign Banners
function renderCampaignBanners() {
    const bannerIds = [
        'campaign-banner-1',
        'campaign-banner-2',
        'campaign-banner-3',
        'campaign-banner-4'
    ];

    bannerIds.forEach(bannerId => {
        const banner = document.getElementById(bannerId);
        if (!banner) return;

        banner.innerHTML = `
            <div class="campaign-banner__content">
                <div class="campaign-banner__inner">
                    <span class="campaign-banner__badge">${campaignBannerData.badge}<br>限定</span>
                    <h3 class="campaign-banner__title">${campaignBannerData.title}</h3>
                    <button class="campaign-banner__button">
                        ${campaignBannerData.buttonText}
                        <span>${campaignBannerData.buttonIcon}</span>
                    </button>
                </div>
            </div>
        `;
    });
}

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    renderFeatureCards();
    renderCaseStudyCards();
    renderCampaignBanners();
});