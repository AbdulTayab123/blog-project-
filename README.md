# InfoPulse - Premium Live News & Editorial Platform

A modern, high-end editorial news publication created in pure **HTML5, CSS3, and JavaScript**, matching the exact visual aesthetics, dark UI, atmospheric glows, and responsive layout of the InfoPulse design.

---

## 🌟 Key Features

### 1. 🎯 Pixel-Perfect Design Matching
- **Deep Luxury Dark Theme**: Dark slate palette (`#0d0e12`, `#14161d`, `#1a1c26`) with subtle borders and cyan/orange/purple glowing accents.
- **Atmospheric Curved Earth Hero**: Atmospheric arc of planet Earth from space with city night lights, starry sky, and glowing atmospheric gradient.
- **Hero Carousel**: 3 featured investigative stories with dynamic pill indicators and auto-slide rotation.
- **Editorial Typography**: Powered by Google's *Plus Jakarta Sans* and *Playfair Display* fonts.
- **Primary 2-Column Grid**: Left article feed with high-res thumbnails, badges, titles, and excerpts; right sidebar with search and real-time widgets.
- **Featured Posts Section**: Large featured story paired with 3 stacked compact editorial rows.
- **Latest Posts Section**: Interactive pagination controls (`01 / 03`) cycling through breaking reports.
- **Other Posts 3-Column Grid**: Shipping logistics, business operations, and financial history cards.
- **Weekly Newsletter Card**: Dark container with perk checklist, name & email fields, and animated feedback toasts.
- **Complete Footer**: Brand synopsis, navigation links, social channels, and copyright notice.

---

## 🚀 Live API Integrations

### 1. 🌦️ Live Global Weather Engine (Open-Meteo API)
- **100% Free & Keyless**: No API keys required, zero CORS constraints.
- **Real-Time Global Telemetry**: Live temperature, weather condition codes (Clear/Sunny, Overcast, Rain, Snow, Thunderstorm), precipitation %, wind speed (km/h), and relative humidity %.
- **Dynamic City Geocoding**: Search any city in the world (e.g., *London, Tokyo, New York, Paris, Dubai, Sydney, Toronto, Berlin*) with instant live weather updates.
- **One-Click GPS Auto-Detection**: Uses the browser's Geolocation API to fetch live weather at the user's exact coordinates.
- **Celsius & Fahrenheit Toggle**: Instant switch between `°C` and `°F` with persistent preferences saved to `localStorage`.

### 2. ⚡ Live Technology Wire (Hacker News Firebase API)
- Real-time connection to `https://hacker-news.firebaseio.com/v0/topstories.json`.
- Live point scores, comment counts, and humanized relative timestamps (`12m ago`, `1h ago`).
- Fallback caching ensuring the interface never displays blank boxes or broken feeds.

### 3. ⚽ Live Sports Matchdays & Telemetry
- Interactive scorecards for UEFA Champions League, Premier League, NBA, and Formula 1.
- Animated live indicators with pulsing red tags.

---

## 🧭 Multi-Page Navigation Structure

Every navigation item is fully functional and routes to its dedicated page:
- [`index.html`](file:///c:/Users/HP/OneDrive/Desktop/Internship/sample%20blog%20website%20fronted/index.html) - **Home**: Exact replica of the original design layout.
- [`technology.html`](file:///c:/Users/HP/OneDrive/Desktop/Internship/sample%20blog%20website%20fronted/technology.html) - **Technology**: Frontier intelligence, AI, quantum compute, silicon hardware.
- [`news.html`](file:///c:/Users/HP/OneDrive/Desktop/Internship/sample%20blog%20website%20fronted/news.html) - **News**: Breaking world news, international diplomacy, macroeconomics.
- [`education.html`](file:///c:/Users/HP/OneDrive/Desktop/Internship/sample%20blog%20website%20fronted/education.html) - **Education**: Cognitive science, academic innovation, open research.
- [`sports.html`](file:///c:/Users/HP/OneDrive/Desktop/Internship/sample%20blog%20website%20fronted/sports.html) - **Sports**: Live matchday results, Formula 1, World Cup schedules.
- [`article.html`](file:///c:/Users/HP/OneDrive/Desktop/Internship/sample%20blog%20website%20fronted/article.html) - **Article Reader**: Dynamic template rendering full stories, interactive likes, bookmarks, and sharing.

---

## 💻 How to Open and Run

### Option 1: Direct in Browser
Simply double-click `index.html` or open it with Google Chrome, Microsoft Edge, or Firefox.

### Option 2: Local HTTP Server (Recommended)
In this directory, run:
```bash
python -m http.server 3000
```
Then visit: `http://localhost:3000`
