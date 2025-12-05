function initFormHandling() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;
    
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateInput(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateInput(this);
            }
        });
    });
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        inputs.forEach(input => {
            if (!validateInput(input)) {
                isValid = false;
            }
        });
        
        if (isValid) {
            console.log('Form submitted successfully!');
            showSuccessMessage();
        } else {
            showErrorMessage();
        }
    });
}

function validateInput(input) {
    const value = input.value.trim();
    
    input.classList.remove('error');
    
    if (input.hasAttribute('required') && value === '') {
        input.classList.add('error');
        return false;
    }
    
    if (input.type === 'email' && value !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            input.classList.add('error');
            return false;
        }
    }
    
    if (input.id === 'email-confirm') {
        const emailInput = document.getElementById('email');
        if (emailInput && value !== emailInput.value) {
            input.classList.add('error');
            return false;
        }
    }
    
    if (input.type === 'tel' && value !== '') {
        const phoneRegex = /^[0-9\-]+$/;
        if (!phoneRegex.test(value)) {
            input.classList.add('error');
            return false;
        }
    }
    
    return true;
}

function showSuccessMessage() {
    const message = document.createElement('div');
    message.className = 'form-message form-message--success';
    message.textContent = 'お問い合わせありがとうございます。担当者より折り返しご連絡いたします。';
    message.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #4CAF50;
        color: white;
        padding: 20px 40px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 10000;
        animation: slideDown 0.5s ease;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'slideUp 0.5s ease';
        setTimeout(() => message.remove(), 500);
    }, 3000);
}

function showErrorMessage() {
    const message = document.createElement('div');
    message.className = 'form-message form-message--error';
    message.textContent = '入力内容に誤りがあります。赤枠の項目をご確認ください。';
    message.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #E54D42;
        color: white;
        padding: 20px 40px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 10000;
        animation: slideDown 0.5s ease;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'slideUp 0.5s ease';
        setTimeout(() => message.remove(), 500);
    }, 3000);
}

function addMessageAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
        }
        
        @keyframes slideUp {
            from {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
            to {
                opacity: 0;
                transform: translateX(-50%) translateY(-20px);
            }
        }
        
        .form__input.error,
        .form__textarea.error {
            border-color: #E54D42;
            background-color: #FFF5F5;
        }
    `;
    document.head.appendChild(style);
}


function initHeaderButtonHandler() {
    const headerButton = document.querySelector('.navbar .btn--primary');
    
    if (headerButton) {
        headerButton.addEventListener('click', function() {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

function initHeroButtonHandler() {
    const heroButton = document.querySelector('.hero__content .btn--cta');
    
    if (heroButton) {
        heroButton.addEventListener('click', function() {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}


function initBackToTop() {
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 40px;
        right: 40px;
        width: 50px;
        height: 50px;
        background-color: #E57D54;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
        z-index: 1000;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `;
    
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    backToTopButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    backToTopButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}


function updateFooterYear() {
    const yearElements = document.querySelectorAll('[data-year]');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
}

function showLoadingAnimation() {
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initFormHandling();
    addMessageAnimations();
    initHeaderButtonHandler();
    initHeroButtonHandler();
    initLazyLoading();
    initBackToTop();
    updateFooterYear();
    showLoadingAnimation();
    
    console.log('ソルクラ for 販売管理 - Website loaded successfully! 🚀');
});


const costData = [
    {
        title: "毎月手動で送っていた請求書送付を自動化",
        savings: "年100万",
        beforeLabel: "通信10時間",
        beforeWork: "作業時間<br>30時間",
        afterWork: "作業時間<br>5時間"
    },
    {
        title: "定型作業を自動化して業務効率を改善",
        savings: "年80万",
        beforeLabel: "通信8時間",
        beforeWork: "作業時間<br>20時間",
        afterWork: "作業時間<br>3時間"
    },
    {
        title: "手動報告書作成を自動生成へ",
        savings: "年120万",
        beforeLabel: "通信12時間",
        beforeWork: "作業時間<br>25時間",
        afterWork: "作業時間<br>4時間"
    },
    {
        title: "毎月の顧客管理を自動化",
        savings: "年90万",
        beforeLabel: "通信6時間",
        beforeWork: "作業時間<br>15時間",
        afterWork: "作業時間<br>2時間"
    }
];

const grid = document.getElementById("costGrid");
const template = document.getElementById("costCardTemplate");

costData.map(item => {
    const card = template.content.cloneNode(true);

    card.querySelector(".cost-card__title").innerHTML = item.title;
    card.querySelector(".cost-card__savings_number").innerHTML = item.savings;

    card.querySelector(".cost-card__label").innerHTML = item.beforeLabel;
    card.querySelector(".cost-card__before .cost-card__work").innerHTML = item.beforeWork;
    card.querySelector(".cost-card__after .cost-card__work").innerHTML = item.afterWork;

    grid.appendChild(card);
});


const featureCardsData = [
    {
        icon: "./assets/icons/featurecardicon.svg", 
        title: "帳票管理機能",
        text: "テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキスト テキス"
    },
    {
        icon: "./assets/icons/featurecardicon.svg",
        title: "販売管理機能",
        text: "テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキスト テキス"
    },
    {
        icon: "./assets/icons/featurecardicon.svg",
        title: "在庫管理機能",
        text: "テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキスト テキス"
    },
    {
        icon: "./assets/icons/featurecardicon.svg",
        title: "顧客管理機能",
        text: "テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキスト テキス"
    },
    {
        icon: "./assets/icons/featurecardicon.svg",
        title: "請求管理機能",
        text: "テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキスト テキス"
    },
    {
        icon: "./assets/icons/featurecardicon.svg",
        title: "発注管理機能",
        text: "テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキスト テキス"
    },
    {
        icon: "./assets/icons/featurecardicon.svg",
        title: "分析機能",
        text: "テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキスト テキス"
    },
    {
        icon: "./assets/icons/featurecardicon.svg",
        title: "レポート機能",
        text: "テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキスト テキス"
    },
    {
        icon: "./assets/icons/featurecardicon.svg",
        title: "連携機能",
        text: "テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキスト テキス"
    }
];

function renderFeatureCards() {
    const container = document.getElementById('feature-cards-container');
    
    const cardsHTML = featureCardsData.map(card => `
        <div class="feature-card">
            <div class="feature-card__header">
                <div class="feature-card__icon">
                    <img src="${card.icon}" alt="${card.title} icon">
                </div>
                <h3 class="feature-card__title">${card.title}</h3>
            </div>
            <div class="feature-card__body">
                <p class="feature-card__text">${card.text}</p>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = cardsHTML;
}

document.addEventListener('DOMContentLoaded', renderFeatureCards);
