# 🕯️ NotGone — I'm Not Gone.

> **"In a solitary world, I want to be confirmed that I still exist."**

## 📖 Overview

**NotGone** is a life presence confirmation system designed for solo dwellers aged 25-45. It's not a cold health monitoring tool—it's a gentle social connection that allows people to feel the warmth of being seen through a simple 5-second daily "life sign" check-in.

**Creator:** Diana

**Core Mission:** The purpose of NotGone isn't to detect "if someone has died," but to gently confirm every day: **"You're still here, and the world is watching over you."**

---

## � The Problem

In modern society, millions of people live alone—by choice or circumstance. While solo living offers freedom and independence, it also creates a silent anxiety: _"If something happens to me, how long before anyone notices?"_

**Target Users:**

- **25-45 year-olds living alone** (urban professionals, remote workers, digital nomads)
- People with **weak family connections** or distant support networks
- Individuals experiencing **mental health challenges** or chronic conditions
- Those who want to maintain independence while having a **safety net**

**Market Reality:**

- 92M+ solo households in the US alone (2022)
- 1 in 7 Americans live alone
- Growing demographic in developed nations (Japan, UK, Europe, Australia)
- Existing solutions are either too clinical (medical alerts) or too intrusive (constant check-ins)

---

## 💡 The Solution

NotGone transforms safety monitoring into a **meaningful ritual** through three core innovations:

### 1. 🌡️ Life Thermometer — The Daily Check-In

Instead of a binary "alive/dead" ping, users record their **life temperature** (0-100) through an intuitive long-press interaction:

- **Visual Design:** An animated thermometer that fills with "water" as you hold it
- **Color Gradient:** From cool blue (low energy) → warm yellow → hot red (vibrant)
- **Emotional Mapping:** Numbers translate to gentle phrases:
  - 0-20: "Feeling a bit cold"
  - 20-50: "Warming up"
  - 50-80: "Feeling warm"
  - 80-100: "Burning bright"

**Technical Implementation:**

```tsx
// Smooth animation using React Native Reanimated
const animatedWaterStyle = useAnimatedStyle(() => {
  const backgroundColor = interpolateColor(
    progress.value,
    [0, 20, 50, 80, 100],
    ["#A5F3FC", "#7DD3FC", "#FDE047", "#FB923C", "#EF4444"]
  );
  return { height: `${progress.value}%`, backgroundColor };
});
```

### 2. � Watcher System — Tiered Care Network

Users can assign **3 tiers of Watchers** (friends, family, or community members):

| Tier       | Trigger Condition        | Notification Method                   |
| ---------- | ------------------------ | ------------------------------------- |
| **Tier 1** | 3 days without check-in  | Gentle email: "Just checking in..."   |
| **Tier 2** | 5 days without check-in  | More concerned email + SMS option     |
| **Tier 3** | 7+ days without check-in | Urgent alert + emergency contact info |

**Privacy-First Design:**

- Watchers only receive alerts when needed
- No access to daily mood data or personal content
- One-way notification (no surveillance)

### 3. 🔐 Zero-Login Privacy Architecture

- **No username or password** — device-based anonymous ID
- **No personal data storage** — only check-in timestamps
- **Local-first** — all sensitive data stays on device
- **Minimal backend** — only stores: `device_id`, `last_check_in_time`, `watcher_emails`

---

## 🏗️ Technical Architecture

### Frontend — React Native + Expo

```json
{
  "react-native": "0.76.5",
  "expo": "~52.0.23",
  "react-native-reanimated": "~3.16.1"
}
```

**Key Components:**

- `LifeThermometer.tsx` — Animated check-in interface with gesture handling
- Smooth color transitions using `interpolateColor`
- 5-second hold interaction for mindful engagement

### Backend — Serverless AWS Architecture

```
Mobile App (React Native)
    ↓
AWS API Gateway (REST API)
    ↓
AWS Lambda (FastAPI Python)
    ↓
├── DynamoDB (User check-ins & watcher config)
├── AWS SES (Email notifications)
└── CloudWatch (Scheduled CRON jobs for monitoring)
```

**Why Serverless?**

- **Cost-effective** for MVP stage ($5-10/month for 1000 users)
- **Auto-scaling** without infrastructure management
- **High reliability** (99.99% uptime SLA)
- **Fast iteration** for early-stage startup

### Data Schema (DynamoDB)

```python
User {
  device_id: str (PK)
  last_check_in: timestamp
  life_score_history: List[int]  # Last 30 days
  watchers: {
    tier1: [email1, email2],
    tier2: [email3],
    tier3: [email4]
  }
}
```

---

## ✨ Key Features

### ✅ MVP (Current Implementation)

- [x] Life Thermometer check-in UI with smooth animations
- [x] Color-coded emotional states (cold → warm → hot)
- [x] React Native app with Expo development workflow
- [x] TypeScript for type-safe development

### 🚧 In Progress

- [ ] Backend API (FastAPI + AWS Lambda)
- [ ] DynamoDB integration for check-in persistence
- [ ] Watcher email configuration UI
- [ ] AWS SES email notification system
- [ ] CRON job for daily check-in monitoring

### 🔮 Roadmap (Next 3-6 Months)

- **Week 1-2:** Backend deployment + API integration
- **Week 3-4:** Watcher system + email alerts
- **Week 5-6:** Beta testing with 50 users
- **Month 2:** iOS/Android app store submission
- **Month 3:** Community features (opt-in mutual support groups)
- **Month 4-6:** AI-powered wellness insights (if user consents)

---

## 🎨 Design Philosophy

**NotGone follows these core principles:**

1. **Warmth Over Efficiency** — Every interaction feels human, not robotic
2. **Ritual Over Task** — The check-in is a mindful moment, not a chore
3. **Connection Over Surveillance** — We confirm presence, not monitor behavior
4. **Privacy Over Data** — We collect the minimum needed, nothing more

**Visual Language:**

- Soft, warm color palette (#FAF9F6 background)
- Smooth animations (not jarring)
- No harsh red alerts (even critical notifications are gentle)
- No numbers shown to user (only emotional states)

---

## 🚀 Getting Started (Developers)

### Prerequisites

- Node.js 18+
- Expo CLI
- iOS Simulator (macOS) or Android Studio

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/notgone-app.git
cd notgone-app/mobile

# Install dependencies
npm install

# Start development server
npm start
```

### Run on Device

```bash
# iOS
npm run ios

# Android
npm run android

# Web (for testing)
npm run web
```

---

## 🌍 Social Impact

**NotGone addresses a real crisis:**

- In Japan, 4,000+ people die alone annually ("kodokushi")
- In the UK, 200,000+ seniors have not had a conversation in over a month
- Mental health isolation increased 30% post-pandemic (WHO, 2023)

**Our Approach:**

- Makes safety monitoring feel **caring, not clinical**
- Empowers users to **stay independent** while having support
- Creates **meaningful micro-connections** in a disconnected world
- Scalable to 100M+ solo dwellers globally

---

## 👥 Team & Vision

**Diana** (Founder/Developer) — Building NotGone to create a more connected world, one check-in at a time.

**Why Antler/EF?**

- Need mentorship on **go-to-market strategy** for sensitive social products
- Seeking **design partner to refine UX** for emotional resonance
- Looking for **technical advisor** on scaling serverless architecture
- Access to **angel network** for pre-seed funding ($150K target)

---

## � Business Model (Freemium)

| Tier             | Price       | Features                                                    |
| ---------------- | ----------- | ----------------------------------------------------------- |
| **Free**         | $0/month    | 1 check-in/day, 2 Watchers (Tier 1 only)                    |
| **Plus**         | $4.99/month | Unlimited check-ins, 5 Watchers (all tiers), History export |
| **Community**    | $9.99/month | Plus + Access to vetted mutual support groups               |
| **B2B (Future)** | Custom      | Corporate wellness programs for remote workers              |

**Revenue Projections (Year 1):**

- Month 6: 500 users → $500 MRR (5% conversion)
- Month 12: 5,000 users → $7,500 MRR (10% conversion)

---

## 🤝 Contributing

We welcome contributors who share our vision of making technology more human. See `CONTRIBUTING.md` for guidelines.

---

## 📄 License

This project is currently **proprietary** (pre-investment). License will be determined with founding team advisors.

---

## 💌 Contact

- **Diana** — [Your Email/LinkedIn]
- **Project Status:** Pre-seed MVP
- **Looking For:** Co-founder (Product/Growth), Design Partner, Seed Funding

---

**Made with ❤️ for those who wander but are not lost.**

> "The opposite of loneliness isn't constant company—it's knowing someone would notice if you were gone."
