/**
 * INFOPULSE - MAIN INTERACTIVE LOGIC & CONTROLLER
 * Handles navigation, carousel, search, pagination, bookmarks, newsletter
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeroCarousel();
  initLiveSearch();
  initLatestPagination();
  initNewsletterForm();
  initArticleReaderPage();
});

/* ==========================================================================
   HELPER FUNCTIONS (Dynamic Date & Daily Images)
   ========================================================================== */

// 1. Date ko automatic format karne ke liye function (e.g., 22 Nov 2026)
function getCurrentFormattedDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${day} ${monthNames[today.getMonth()]} ${today.getFullYear()}`;
}

// 2. Daily Rotate hone wali images ki list
const DAILY_IMAGES = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop", // Earth
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop", // AI Neural
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop", // Tech
  "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1600&auto=format&fit=crop", // Quantum
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1600&auto=format&fit=crop"  // Space
];

/* ==========================================================================
   NAVIGATION LOGIC
   ========================================================================== */
function initNavigation() {
  const currentPath = window.location.pathname.toLowerCase();
  const navItems = document.querySelectorAll('.nav-links .nav-item');

  navItems.forEach(item => {
    const link = item.querySelector('a');
    if (!link) return;
    const href = link.getAttribute('href').toLowerCase();

    // Reset active
    item.classList.remove('active');

    if (
      (currentPath.endsWith(href) && href !== 'index.html') ||
      (currentPath.endsWith('/') && href === 'index.html') ||
      (currentPath.endsWith('index.html') && href === 'index.html')
    ) {
      item.classList.add('active');
    }
  });
}

/* ==========================================================================
   HERO CAROUSEL LOGIC
   ========================================================================== */
let heroIndex = 0;
let heroTimer = null;

const HERO_SLIDES = [
  {
    id: "hero-earth-ecosystems",
    badge: "World",
    badgeClass: "badge-purple",
    title: '"Our Precious Planet: Nurturing Earth\'s Ecosystems for a Sustainable Future"',
    excerpt: "The Earth's climate has undergone natural fluctuations over millennia, but human activities have accelerated change at an unprecedented rate.",
    // Image yahan se dynamically set hogi
    image: "" 
  },
  {
    id: "hero-ai-frontier",
    badge: "Technology",
    badgeClass: "badge-cyan",
    title: '"Frontier Intelligence: How Next-Generation Neural Architectures Are Reshaping Society"',
    excerpt: "Beyond generative chatbots, autonomous agents and neuro-symbolic algorithms are tackling biology, material science, and clean energy optimization with groundbreaking speed.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "hero-deep-space",
    badge: "Science",
    badgeClass: "badge-orange",
    title: '"Deep Horizons: Unraveling the Secrets of the Earliest Cosmic Galaxies"',
    excerpt: "New spectroscopic data from space observatories challenges existing cosmological models, revealing supermassive structures forming millions of years earlier than predicted.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1600&auto=format&fit=crop"
  }
];

// Aaj ka din nikaal kar pehli slide ki image set karein
const todayIndex = new Date().getDate() % DAILY_IMAGES.length;
HERO_SLIDES[0].image = DAILY_IMAGES[todayIndex];

function initHeroCarousel() {
  const dots = document.querySelectorAll('.hero-dot');
  if (!dots || dots.length === 0) return;

  // Initial load par pehli slide set karein
  switchHeroSlide(0);

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const idx = parseInt(e.target.getAttribute('data-index'), 10);
      switchHeroSlide(idx);
      resetHeroAutoPlay();
    });
  });

  startHeroAutoPlay();
}

function switchHeroSlide(idx) {
  heroIndex = idx % HERO_SLIDES.length;
  const slide = HERO_SLIDES[heroIndex];

  const badgeElem = document.getElementById('hero-badge');
  const dateElem = document.getElementById('hero-date');
  const titleElem = document.getElementById('hero-title-link');
  const descElem = document.getElementById('hero-desc');
  const bgImg = document.getElementById('hero-bg-img');
  const dots = document.querySelectorAll('.hero-dot');

  if (badgeElem) {
    badgeElem.textContent = slide.badge;
    badgeElem.className = `badge ${slide.badgeClass}`;
  }

  // Yahan dynamic date set ho rahi hai
  if (dateElem) {
    const dateSpan = dateElem.querySelector('#dynamic-date');
    if(dateSpan) {
      dateSpan.textContent = getCurrentFormattedDate();
    } else {
      // Fallback agar HTML update nahi hui hai
      dateElem.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;margin-right:6px;display:inline-block;vertical-align:middle;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> ${getCurrentFormattedDate()}`;
    }
  }

  if (titleElem) {
    titleElem.textContent = slide.title;
    titleElem.setAttribute('href', `article.html?id=${slide.id}`);
  }

  if (descElem) {
    descElem.textContent = slide.excerpt;
  }

  if (bgImg) {
    bgImg.style.opacity = '0.5';
    setTimeout(() => {
      bgImg.src = slide.image;
      bgImg.style.opacity = '1';
    }, 200);
  }

  dots.forEach((d, i) => {
    if (i === heroIndex) {
      d.classList.add('active');
    } else {
      d.classList.remove('active');
    }
  });
}

function startHeroAutoPlay() {
  heroTimer = setInterval(() => {
    switchHeroSlide(heroIndex + 1);
  }, 6500);
}

function resetHeroAutoPlay() {
  clearInterval(heroTimer);
  startHeroAutoPlay();
}

/* ==========================================================================
   SEARCH SYSTEM
   ========================================================================== */
function initLiveSearch() {
  const headerSearch = document.getElementById('header-search-input');
  const sidebarSearch = document.getElementById('sidebar-search-input');

  const handleSearch = (query) => {
    const q = query.trim().toLowerCase();
    const feedCards = document.querySelectorAll('.feed-card');
    const featuredItems = document.querySelectorAll('.featured-compact-item, .latest-stack-item, .other-card');

    if (!q) {
      feedCards.forEach(c => c.style.display = 'grid');
      featuredItems.forEach(c => c.style.display = '');
      return;
    }

    // Filter feed cards
    feedCards.forEach(card => {
      const title = card.querySelector('.feed-card-title')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('.feed-card-excerpt')?.textContent.toLowerCase() || '';
      const badge = card.querySelector('.feed-card-badge')?.textContent.toLowerCase() || '';
      if (title.includes(q) || desc.includes(q) || badge.includes(q)) {
        card.style.display = 'grid';
      } else {
        card.style.display = 'none';
      }
    });

    // Filter featured & latest items
    featuredItems.forEach(item => {
      const title = item.querySelector('a')?.textContent.toLowerCase() || '';
      if (title.includes(q)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  };

  if (headerSearch) {
    headerSearch.addEventListener('input', (e) => handleSearch(e.target.value));
  }

  if (sidebarSearch) {
    sidebarSearch.addEventListener('input', (e) => handleSearch(e.target.value));
  }
}

/* ==========================================================================
   LATEST POSTS PAGINATION (01 / 03)
   ========================================================================== */
let latestPage = 1;
const maxLatestPages = 3;

const LATEST_PAGES_DATA = [
  // Page 1
  {
    main: {
      id: "latest-harnessing-data",
      title: "Harnessing data for informed decision-making",
      meta: "By John Doe • Feb 16, 2024",
      desc: "Data-driven leadership transforms operational efficiency and risk management in an increasingly volatile global economy.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
    stack: [
      { id: "latest-dark-capital", tag: "World", title: "A Capital Cloaked in Darkness", date: "Feb 14, 2024", img: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=300&auto=format&fit=crop" },
      { id: "latest-switching-tips", tag: "Technology", title: "Things to know before switching", date: "Feb 12, 2024", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=300&auto=format&fit=crop" },
      { id: "latest-world-cup", tag: "Sports", title: "Check out the full World Cup schedule", date: "Feb 10, 2024", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=300&auto=format&fit=crop" }
    ]
  },
  // Page 2
  {
    main: {
      id: "tech-quantum-computing",
      title: "Quantum Supremacy in Molecular Architecture",
      meta: "By Elena Rostova • Feb 15, 2024",
      desc: "Simulating complex crystalline lattice interactions on cryogenic quantum processors without computational bottlenecks.",
      img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop"
    },
    stack: [
      { id: "sports-f1-grand-prix", tag: "Sports", title: "Aerodynamic redesigns shaking up Grand Prix", date: "Feb 09, 2024", img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=300&auto=format&fit=crop" },
      { id: "edu-personalized-learning", tag: "Education", title: "Adaptive Curriculums in High Education", date: "Feb 08, 2024", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=300&auto=format&fit=crop" },
      { id: "other-shipping-containers", tag: "Business", title: "Global Maritime Logistics Upgrades", date: "Feb 07, 2024", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=300&auto=format&fit=crop" }
    ]
  },
  // Page 3
  {
    main: {
      id: "sports-champions-league",
      title: "Tactical Revolutions in Modern Sports Analytics",
      meta: "By Marco Valenti • Feb 14, 2024",
      desc: "How real-time wearable biometrics and predictive velocity simulations are setting new standards for athletic peak performance.",
      img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop"
    },
    stack: [
      { id: "tech-robotics-humanoid", tag: "Technology", title: "Humanoids entering industrial assembly", date: "Feb 06, 2024", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=300&auto=format&fit=crop" },
      { id: "edu-open-access", tag: "Education", title: "Open-access journals breaking paywalls", date: "Feb 04, 2024", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=300&auto=format&fit=crop" },
      { id: "other-money-facts", tag: "Finance", title: "Five unbelievable facts about money", date: "Feb 02, 2024", img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=300&auto=format&fit=crop" }
    ]
  }
];

function initLatestPagination() {
  const prevBtn = document.getElementById('latest-prev-btn');
  const nextBtn = document.getElementById('latest-next-btn');
  const indicator = document.getElementById('latest-page-indicator');

  if (!indicator) return;

  const renderPage = () => {
    const data = LATEST_PAGES_DATA[latestPage - 1];
    indicator.textContent = `0${latestPage} / 0${maxLatestPages}`;

    // Update main latest card
    const mainTitle = document.getElementById('latest-main-title');
    const mainMeta = document.getElementById('latest-main-meta');
    const mainDesc = document.getElementById('latest-main-desc');
    const mainImg = document.getElementById('latest-main-img');

    if (mainTitle) {
      mainTitle.textContent = data.main.title;
      mainTitle.setAttribute('href', `article.html?id=${data.main.id}`);
    }
    if (mainMeta) mainMeta.textContent = data.main.meta;
    if (mainDesc) mainDesc.textContent = data.main.desc;
    if (mainImg) mainImg.src = data.main.img;

    // Update stack items
    data.stack.forEach((item, idx) => {
      const tag = document.getElementById(`latest-stack-tag-${idx}`);
      const title = document.getElementById(`latest-stack-title-${idx}`);
      const date = document.getElementById(`latest-stack-date-${idx}`);
      const img = document.getElementById(`latest-stack-img-${idx}`);

      if (tag) tag.textContent = item.tag;
      if (title) {
        title.textContent = item.title;
        title.setAttribute('href', `article.html?id=${item.id}`);
      }
      if (date) date.textContent = item.date;
      if (img) img.src = item.img;
    });

    if (prevBtn) prevBtn.disabled = latestPage === 1;
    if (nextBtn) nextBtn.disabled = latestPage === maxLatestPages;
  };

  // Pehli dafa render karein
  renderPage();

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (latestPage > 1) {
        latestPage--;
        renderPage();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (latestPage < maxLatestPages) {
        latestPage++;
        renderPage();
      }
    });
  }
}

/* ==========================================================================
   WEEKLY NEWSLETTER SUBSCRIPTION
   ========================================================================== */
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  const feedback = document.getElementById('newsletter-feedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('newsletter-name');
    const emailInput = document.getElementById('newsletter-email');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';

    if (!email || !email.includes('@')) {
      if (feedback) {
        feedback.className = 'newsletter-feedback error';
        feedback.textContent = 'Please enter a valid email address.';
      }
      return;
    }

    if (feedback) {
      feedback.className = 'newsletter-feedback success';
      feedback.textContent = `Thank you, ${name || 'subscriber'}! You have been subscribed to ABNews.`;
    }

    showToast(`Subscribed successfully with ${email}`);
    form.reset();

    setTimeout(() => {
      if (feedback) feedback.style.display = 'none';
    }, 5000);
  });
}

/* ==========================================================================
   ARTICLE READER PAGE CONTROLLER
   ========================================================================== */
function initArticleReaderPage() {
  const articleContentElem = document.getElementById('dynamic-article-content');
  if (!articleContentElem) return;

  // Retrieve id from URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get('id') || 'hero-earth-ecosystems';
  const article = typeof getArticleById === 'function' ? getArticleById(articleId) : null;

  if (!article) return;

  // Update page Title and Meta
  document.title = `${article.title} - ABNews`;

  const badgeElem = document.getElementById('article-badge');
  const titleElem = document.getElementById('article-title');
  const dateElem = document.getElementById('article-date');
  const readTimeElem = document.getElementById('article-read-time');
  const authorAvatarElem = document.getElementById('article-author-avatar');
  const authorNameElem = document.getElementById('article-author-name');
  const authorRoleElem = document.getElementById('article-author-role');
  const imgElem = document.getElementById('article-hero-img');
  const bodyElem = document.getElementById('article-body');
  const likeCountElem = document.getElementById('article-likes-count');
  const likeBtn = document.getElementById('article-like-btn');
  const shareBtn = document.getElementById('article-share-btn');
  const bookmarkBtn = document.getElementById('article-bookmark-btn');

  if (badgeElem) {
    badgeElem.textContent = article.category;
    badgeElem.className = `badge ${article.categoryClass || 'badge-purple'}`;
  }

  if (titleElem) titleElem.textContent = article.title;
  
  // Article ki date bhi dynamic karein
  if (dateElem) dateElem.textContent = getCurrentFormattedDate();
  
  if (readTimeElem) readTimeElem.textContent = article.readTime || '4 Min Read';

  if (authorAvatarElem && article.author) authorAvatarElem.src = article.author.avatar;
  if (authorNameElem && article.author) authorNameElem.textContent = article.author.name;
  if (authorRoleElem && article.author) authorRoleElem.textContent = article.author.role;

  if (imgElem) imgElem.src = article.image;
  if (bodyElem) bodyElem.innerHTML = article.content;

  // Likes Counter
  let likes = article.likes || 120;
  let isLiked = localStorage.getItem(`infopulse_like_${article.id}`) === 'true';

  if (likeCountElem) likeCountElem.textContent = likes + (isLiked ? 1 : 0);
  if (likeBtn && isLiked) likeBtn.classList.add('active');

  if (likeBtn) {
    likeBtn.addEventListener('click', () => {
      isLiked = !isLiked;
      localStorage.setItem(`infopulse_like_${article.id}`, isLiked);
      likeBtn.classList.toggle('active', isLiked);
      if (likeCountElem) {
        likeCountElem.textContent = likes + (isLiked ? 1 : 0);
      }
      showToast(isLiked ? 'Article liked!' : 'Like removed');
    });
  }

  // Share Button
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
        showToast('Link copied to clipboard!');
      } else {
        showToast('Article URL: ' + window.location.href);
      }
    });
  }

  // Bookmark Button
  if (bookmarkBtn) {
    let isBookmarked = localStorage.getItem(`infopulse_bookmark_${article.id}`) === 'true';
    if (isBookmarked) bookmarkBtn.classList.add('active');

    bookmarkBtn.addEventListener('click', () => {
      isBookmarked = !isBookmarked;
      localStorage.setItem(`infopulse_bookmark_${article.id}`, isBookmarked);
      bookmarkBtn.classList.toggle('active', isBookmarked);
      showToast(isBookmarked ? 'Article bookmarked!' : 'Bookmark removed');
    });
  }
}

/* ==========================================================================
   TOAST HELPER
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('infopulse-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'infopulse-toast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}