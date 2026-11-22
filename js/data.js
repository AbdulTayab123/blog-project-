/**
 * INFOPULSE - CENTRAL ARTICLES DATABASE & CATEGORY REPOSITORY
 * Rich, authentic editorial stories matching the design screenshot
 */

const ARTICLES_DATA = [
  // HERO SLIDES
  {
    id: "hero-earth-ecosystems",
    category: "World",
    categoryClass: "badge-purple",
    date: "21 Feb 2024",
    title: '"Our Precious Planet: Nurturing Earth\'s Ecosystems for a Sustainable Future"',
    excerpt: "The Earth's climate has undergone natural fluctuations over millennia, but human activities have accelerated change at an unprecedented rate. Discover how global conservation efforts and regenerative science are restoring balance.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    author: {
      name: "Dr. Elena Rostova",
      role: "Climate Science Fellow",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    readTime: "7 Min Read",
    likes: 342,
    content: `
      <p>The Earth's climate has undergone natural fluctuations over millennia, but modern observational data confirms that human activity is causing rapid disruptions across delicate planetary boundaries. From ocean acidification in coral reefs to shifting jet streams across continents, understanding our biosphere has never been more urgent.</p>
      
      <h2>The Fragile Equilibrium of Planetary Systems</h2>
      <p>Global environmental scientists emphasize the concept of planetary boundaries—thresholds within which humanity can safely develop and thrive. Four of nine boundaries, including biosphere integrity and climate change, have already crossed high-risk zones.</p>
      
      <blockquote>"Restoration is no longer a luxury of conservationists; it is the cornerstone of sustainable human civilization." — Dr. Elena Rostova</blockquote>
      
      <p>Satellite observation programs and ocean buoys are delivering unprecedented real-time telemetry. Collaborative treaties and clean energy transitions present viable, scalable pathways to reverse habitat loss and restore biodiversity worldwide.</p>
    `
  },
  {
    id: "hero-ai-frontier",
    category: "Technology",
    categoryClass: "badge-cyan",
    date: "20 Feb 2024",
    title: '"Frontier Intelligence: How Next-Generation Neural Architectures Are Reshaping Society"',
    excerpt: "Beyond generative chatbots, autonomous agents and neuro-symbolic algorithms are tackling biology, material science, and clean energy optimization with groundbreaking speed.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    author: {
      name: "Marcus Vance",
      role: "Lead Tech Correspondent",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    readTime: "6 Min Read",
    likes: 418,
    content: `
      <p>Artificial intelligence is experiencing a tectonic shift from statistical language modeling to autonomous reasoning systems. Emerging models are not simply mimicking human prose, but formulating testable scientific hypotheses and debugging complex software.</p>
      <h2>From Silicon to Supercomputing</h2>
      <p>With novel silicon accelerators and low-power inference hardware, computing intelligence is migrating to edge devices, empowering decentralized medical diagnostics, real-time climate monitoring, and automated smart grids.</p>
    `
  },
  {
    id: "hero-deep-space",
    category: "Science",
    categoryClass: "badge-orange",
    date: "19 Feb 2024",
    title: '"Deep Horizons: Unraveling the Secrets of the Earliest Cosmic Galaxies"',
    excerpt: "New spectroscopic data from space observatories challenges existing cosmological models, revealing supermassive structures forming millions of years earlier than predicted.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1600&auto=format&fit=crop",
    author: {
      name: "Prof. Kenneth Sterling",
      role: "Astrophysics Researcher",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    readTime: "8 Min Read",
    likes: 589,
    content: `
      <p>Deep space observatories continue to peer into cosmic dawn, capturing light that has traveled through space for over thirteen billion years. The early cosmos was far more luminous and active than previously hypothesized.</p>
      <h2>Rewriting Cosmic Chronologies</h2>
      <p>The discovery of massive galaxies existing within 300 million years of the Big Bang indicates that star formation initiated rapidly, altering our understanding of dark matter halos and galactic nurseries.</p>
    `
  },

  // FEED STREAM (LEFT COLUMN ON HOME)
  {
    id: "feed-power-of-music",
    category: "Music",
    categoryClass: "badge-cyan",
    date: "18 Feb 2024",
    title: "The Power Of Music",
    excerpt: "The beginnings of rock music were rooted by a potent mix of influences, a desire for rebellion, and a spirit of innovation that transformed modern culture across the globe.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop",
    author: {
      name: "Sonia Ray",
      role: "Culture Editor",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
    },
    readTime: "4 Min Read",
    likes: 198,
    content: `
      <p>The beginnings of rock music were rooted by a potent mix of influences, a desire for rebellion, and a spirit of innovation that transformed modern culture across the globe. From blues roots in Memphis to distortion pedals in London, sound became the universal language of social movements.</p>
      <p>Today, acoustic and electronic synthesis blend seamlessly, proving that musical harmony continues to evolve while echoing timeless human emotions.</p>
    `
  },
  {
    id: "feed-montreal-diplomacy",
    category: "Politics",
    categoryClass: "badge-orange",
    date: "17 Feb 2024",
    title: "Montreal's Diplomatic Relations",
    excerpt: "Montreal's role in international diplomacy is vital. This article explores the city's diplomatic engagements, highlighting its contributions to global justice and peacekeeping efforts.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=600&auto=format&fit=crop",
    author: {
      name: "Henri Lemaire",
      role: "Global Affairs Analyst",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop"
    },
    readTime: "5 Min Read",
    likes: 145,
    content: `
      <p>Montreal's role in international diplomacy is vital. As home to international civil aviation headquarters, international conferences, and humanitarian think-tanks, the metropolis serves as a neutral bridge between diverse geopolitical powers.</p>
      <p>Key accords signed this decade highlight its leadership in multilateral climate treaties and civil defense cooperation.</p>
    `
  },
  {
    id: "feed-new-molecules",
    category: "Science",
    categoryClass: "badge-cyan",
    date: "16 Feb 2024",
    title: "New molecules uncovered",
    excerpt: "Education tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Vivamus dapibus rhoncus and novel chemical compounds synthesized in nanotech labs.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=600&auto=format&fit=crop",
    author: {
      name: "Dr. Alistair Chen",
      role: "Biochemistry Investigator",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
    },
    readTime: "5 Min Read",
    likes: 276,
    content: `
      <p>Advanced crystallography and cryo-electron microscopy have uncovered a suite of novel organic molecules capable of self-assembling into ultra-resilient conductive lattices.</p>
      <p>These breakthroughs could revolutionize bio-compatible sensors, next-gen pharmaceutical delivery, and organic semiconductor manufacturing.</p>
    `
  },

  // FEATURED POSTS SECTION
  {
    id: "feat-crafting-success",
    category: "Business",
    categoryClass: "badge-purple",
    date: "15 Feb 2024",
    title: "Crafting Success: Business Insights",
    excerpt: "Navigating volatile macroeconomic currents requires agile leadership, diversified supply chains, and authentic consumer alignment across multiple continents.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "Claire Davenport",
      role: "Strategic Management Consultant",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    readTime: "6 Min Read",
    likes: 312,
    content: `
      <p>Enterprise agility is no longer just a buzzword—it is the prerequisite for survival. Organizations adopting decentralized cross-functional pods report 40% faster product launches and higher employee retention.</p>
    `
  },
  {
    id: "feat-into-tech",
    category: "Technology",
    categoryClass: "badge-cyan",
    date: "Feb 2 | 2 Comments",
    title: "Into the heart of technology",
    excerpt: "Exploring the sub-nanometer chips and quantum gates defining the future of compute.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=300&auto=format&fit=crop",
    author: { name: "Jason Cole", role: "Hardware Columnist", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
    readTime: "3 Min Read",
    likes: 89,
    content: `<p>A deep dive into next-generation extreme ultraviolet lithography enabling 2nm chip fabrication.</p>`
  },
  {
    id: "feat-housing-invest",
    category: "World",
    categoryClass: "badge-purple",
    date: "Feb 1 | 4 Comments",
    title: "Mayors agree: Congress should invest in affordable housing",
    excerpt: "Civic leaders call for federal funding to alleviate municipal infrastructure strains.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=300&auto=format&fit=crop",
    author: { name: "Rachel Adams", role: "Urban Policy Reporter", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" },
    readTime: "4 Min Read",
    likes: 122,
    content: `<p>Metropolitan leaders present unified proposals for green urban renewal and transit-oriented development.</p>`
  },
  {
    id: "feat-instagram-youtube",
    category: "Media",
    categoryClass: "badge-rose",
    date: "Jan 30 | 8 Comments",
    title: "Using Instagram to promote your YouTube videos",
    excerpt: "Mastering cross-platform storytelling, vertical micro-reels, and community funnels.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=300&auto=format&fit=crop",
    author: { name: "Dave Miller", role: "Digital Creator", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
    readTime: "3 Min Read",
    likes: 215,
    content: `<p>Actionable tactics for modern creators to build sustainable viewership through short-form hooks.</p>`
  },

  // LATEST POSTS SECTION
  {
    id: "latest-harnessing-data",
    category: "Technology",
    categoryClass: "badge-cyan",
    date: "By John Doe • Feb 16, 2024",
    title: "Harnessing data for informed decision-making",
    excerpt: "Understanding telemetry, real-time analytics pipelines, and executive dashboards to outpace market headwinds.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    author: { name: "John Doe", role: "Chief Data Strategist", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" },
    readTime: "5 Min Read",
    likes: 174,
    content: `<p>Modern enterprises ingest petabytes of signals daily. The differentiator lies in automated anomaly detection and proactive business intelligence.</p>`
  },
  {
    id: "latest-dark-capital",
    category: "World",
    categoryClass: "badge-orange",
    date: "Feb 14, 2024",
    title: "A Capital Cloaked in Darkness",
    excerpt: "Severe power grid disruptions prompt emergency civic resilience plans.",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=300&auto=format&fit=crop",
    author: { name: "Sarah Vance", role: "Foreign Bureau", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" },
    readTime: "4 Min Read",
    likes: 93,
    content: `<p>Emergency infrastructure teams deploy modular micro-grids after extreme storms overwhelm central transmission lines.</p>`
  },
  {
    id: "latest-switching-tips",
    category: "Technology",
    categoryClass: "badge-orange",
    date: "Feb 12, 2024",
    title: "Things to know before switching",
    excerpt: "A practical guide to migrating your enterprise workflows to cloud-native stacks.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=300&auto=format&fit=crop",
    author: { name: "Leo Martinez", role: "DevOps Architect", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
    readTime: "4 Min Read",
    likes: 130,
    content: `<p>Key considerations when switching legacy monoliths to containerized microservices without service interruption.</p>`
  },
  {
    id: "latest-world-cup",
    category: "Sports",
    categoryClass: "badge-orange",
    date: "Feb 10, 2024",
    title: "Check out the full World Cup schedule",
    excerpt: "Match timings, host stadiums, and ticket release dates for the upcoming tournament.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=300&auto=format&fit=crop",
    author: { name: "Mateo Rossi", role: "Senior Sports Writer", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop" },
    readTime: "3 Min Read",
    likes: 340,
    content: `<p>Everything fans need to know about venues, group fixtures, and broadcasting rights for the global spectacle.</p>`
  },

  // OTHER POSTS SECTION (3 CARDS)
  {
    id: "other-shipping-containers",
    category: "Business",
    categoryClass: "badge-cyan",
    date: "Feb 10 | 4 Min Read",
    title: "The City Port Shipping Container Rules",
    excerpt: "New maritime safety protocols streamline customs clearance and reduce maritime bottlenecks.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
    author: { name: "Arthur Pendelton", role: "Logistics Analyst", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" },
    readTime: "4 Min Read",
    likes: 87,
    content: `<p>Standardized digital manifests and automated container cranes are cutting turnaround times at major international ports by 35%.</p>`
  },
  {
    id: "other-ops-spreadsheet",
    category: "Business",
    categoryClass: "badge-purple",
    date: "Feb 08 | 3 Min Read",
    title: "The Ops Spreadsheet: Mastering the Art of Business",
    excerpt: "How seasoned chief operating officers model liquidity, runway, and unit economics.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
    author: { name: "Nina Kapoor", role: "Financial Strategist", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" },
    readTime: "3 Min Read",
    likes: 162,
    content: `<p>A masterclass in dynamic sensitivity modeling, scenario planning, and cash flow governance for fast-growing companies.</p>`
  },
  {
    id: "other-money-facts",
    category: "Finance",
    categoryClass: "badge-emerald",
    date: "Feb 05 | 5 Min Read",
    title: "Five unbelievable facts about money",
    excerpt: "From historical commodity currencies to cryptographic settlement networks and fractional reserves.",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=600&auto=format&fit=crop",
    author: { name: "Julian Pierce", role: "Economic Historian", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
    readTime: "5 Min Read",
    likes: 290,
    content: `<p>Tracing the evolution of value exchange: from cowrie shells and tally sticks to gold standards and decentralized ledgers.</p>`
  },

  // TECHNOLOGY CATEGORY SPECIALS
  {
    id: "tech-quantum-computing",
    category: "Technology",
    categoryClass: "badge-cyan",
    date: "20 Feb 2024",
    title: "Quantum Supremacy in Material Simulation",
    excerpt: "Researchers simulate complex crystalline lattice interactions that were once impossible on classical silicon chips.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop",
    author: { name: "Dr. Vikram Patel", role: "Quantum Research Lead", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
    readTime: "5 Min Read",
    likes: 312,
    content: `<p>Quantum processors with topological qubits are unlocking clean battery chemistries and high-temperature superconductors.</p>`
  },
  {
    id: "tech-robotics-humanoid",
    category: "Technology",
    categoryClass: "badge-cyan",
    date: "19 Feb 2024",
    title: "Humanoid Robotics Entering Assembly Lines",
    excerpt: "Bipedal robots powered by real-time vision-language-action models perform delicate logistics and manufacturing tasks.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop",
    author: { name: "Emily Watson", role: "Robotics Correspondent", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" },
    readTime: "6 Min Read",
    likes: 440,
    content: `<p>Industrial factories worldwide are launching pilot trials integrating general-purpose humanoids alongside human technicians.</p>`
  },

  // SPORTS CATEGORY SPECIALS
  {
    id: "sports-champions-league",
    category: "Sports",
    categoryClass: "badge-emerald",
    date: "19 Feb 2024",
    title: "Champions League Quarter-Final Thrillers Await",
    excerpt: "Tactical masterminds clash as Europe's top football clubs vie for continental glory in high-stakes knockouts.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop",
    author: { name: "Marco Valenti", role: "Football Columnist", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" },
    readTime: "4 Min Read",
    likes: 512,
    content: `<p>Tactical breakdown of counter-pressing schemes and dynamic transitions shaping this year's European championship race.</p>`
  },
  {
    id: "sports-f1-grand-prix",
    category: "Sports",
    categoryClass: "badge-emerald",
    date: "18 Feb 2024",
    title: "Formula 1: Aerodynamic Upgrades Revealed in Pre-Season",
    excerpt: "Sidepod innovations and ground-effect floor revisions set the tone for an intensely competitive championship campaign.",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600&auto=format&fit=crop",
    author: { name: "Lewis Campbell", role: "Motorsport Analyst", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop" },
    readTime: "5 Min Read",
    likes: 388,
    content: `<p>Telemetry data from pre-season testing highlights reduced tire degradation and razor-thin qualifying gaps across teams.</p>`
  },

  // EDUCATION CATEGORY SPECIALS
  {
    id: "edu-personalized-learning",
    category: "Education",
    categoryClass: "badge-purple",
    date: "18 Feb 2024",
    title: "Adaptive Curriculums: The Future of Personalized Education",
    excerpt: "How cognitive science and interactive simulations are transforming student engagement in STEM disciplines.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
    author: { name: "Dr. Marianne Scott", role: "Dean of Academic Innovation", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" },
    readTime: "6 Min Read",
    likes: 219,
    content: `<p>Personalized scaffolding allows students to master complex mathematical concepts at their own pace without discouragement.</p>`
  },
  {
    id: "edu-open-access",
    category: "Education",
    categoryClass: "badge-purple",
    date: "17 Feb 2024",
    title: "Global Universities Embrace Universal Open-Access Research",
    excerpt: "Breaking down paywalls: Academic consortia accelerate peer-reviewed scientific discovery for researchers in emerging nations.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
    author: { name: "Prof. Tariq Mansoor", role: "Open Science Advocate", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
    readTime: "4 Min Read",
    likes: 184,
    content: `<p>Universal preprints and transparent peer review foster rapid cross-border validation of critical pharmaceutical and climate findings.</p>`
  }
];

// Helper to look up an article by ID
function getArticleById(id) {
  if (!id) return ARTICLES_DATA[0];
  return ARTICLES_DATA.find(a => a.id === id) || ARTICLES_DATA[0];
}

// Helper to filter articles by category
function getArticlesByCategory(category) {
  if (!category || category === "All") return ARTICLES_DATA;
  return ARTICLES_DATA.filter(a => a.category.toLowerCase() === category.toLowerCase());
}
