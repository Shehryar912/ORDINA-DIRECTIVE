# 🗺️ SITE MAP - ORDINA DIRECTIVE

## Main Pages

### 🏠 Homepage (`/`)
**URL**: http://localhost:3000

**Features**:
- Dramatic hero section with animated symbol
- Organization tagline: "In Shadows We Trust • In Silence We Strike"
- Three core mandates: Control, Elimination, Intelligence
- Animated statistics counter (147 countries, 2847 operatives, 523 missions)
- Call-to-action buttons

**Content**: Introduction to the Ordina Directive organization

---

### 📖 About The Directive (`/about`)
**URL**: http://localhost:3000/about

**Features**:
- Classified origins story
- Organization purpose and methods
- Four core functions: Global Stability, Strategic Elimination, Information Supremacy, World Order
- Sphere of influence (mentions Trump, Putin, Xi Jinping, etc.)
- Security classification warning box

**Content**: Deep dive into the organization's history and operations

---

### 👥 Operatives Listing (`/members`)
**URL**: http://localhost:3000/members

**Features**:
- Grid of 5 member cards
- Each card shows:
  - Profile photo
  - Name and codename
  - Rank and specialization
  - Status badge (Active)
  - Mission count
  - Join year
  - "View Profile" button

**Content**: Directory of all active operatives

---

## Member Profile Pages

### 🕵️ Shehryar Aslam (`/member/shehryar-aslam`)
**URL**: http://localhost:3000/member/shehryar-aslam

**Content**:
- Full profile with photo
- Codename: "Shadow Serpent"
- Rank: Senior Operative
- Birth details: Jan 14, 2006, Liaquat Pur
- Father: Muhammad Aslam
- 4 Missions:
  1. Operation: Mountain Ghost (Kalam Valley, Pakistan)
  2. Operation: Desert Oracle (Cholistan Desert, Pakistan)
  3. Early Years: Karachi Chronicles (Karachi, Pakistan)
  4. The Lahore Protocol (Lahore, Pakistan)

---

### 🕵️ Victoria Stone (`/member/victoria-stone`)
**URL**: http://localhost:3000/member/victoria-stone

**Content**:
- Codename: "Iron Widow"
- Rank: Master Assassin
- From: London, UK
- 3 Missions:
  1. Operation: Golden Mirage (Dubai, UAE) - Trump advisors
  2. The Paris Protocol (Paris, France) - EU leadership
  3. Washington's Shadow (Washington DC, USA) - Trump administration

---

### 🕵️ Dmitri Volkov (`/member/dmitri-volkov`)
**URL**: http://localhost:3000/member/dmitri-volkov

**Content**:
- Codename: "Red Winter"
- Rank: Intelligence Director
- From: Moscow, Russia
- 3 Missions:
  1. Operation: Winter's Breath (Moscow, Russia) - Putin's oligarchs
  2. The Kiev Shadow Game (Kiev, Ukraine)
  3. Berlin Protocol (Berlin, Germany)

---

### 🕵️ Maya Nakamura (`/member/maya-nakamura`)
**URL**: http://localhost:3000/member/maya-nakamura

**Content**:
- Codename: "Silent Lotus"
- Rank: Infiltration Specialist
- From: Tokyo, Japan
- 3 Missions:
  1. Operation: Rising Sun (Tokyo, Japan) - Corporate espionage
  2. The Beijing Dragon (Beijing, China) - Xi Jinping's administration
  3. Singapore Nexus (Singapore) - Financial networks

---

### 🕵️ Carlos Mendez (`/member/carlos-mendez`)
**URL**: http://localhost:3000/member/carlos-mendez

**Content**:
- Codename: "Black Condor"
- Rank: Tactical Operations Commander
- From: Buenos Aires, Argentina
- 3 Missions:
  1. Operation: Green Hell (Amazon Rainforest, Brazil)
  2. The Cartel Protocol (Mexico City, Mexico) - Trump contacts
  3. Buenos Aires Network (Buenos Aires, Argentina)

---

## Mission Detail Pages

### 📋 Mission Pages (Dynamic)
**URL Pattern**: `/member/{member-id}/mission/{mission-id}`

**Examples**:
- http://localhost:3000/member/shehryar-aslam/mission/kalam-operation
- http://localhost:3000/member/victoria-stone/mission/dubai-summit
- http://localhost:3000/member/dmitri-volkov/mission/moscow-winter

**Features**:
- Full mission brief
- Operative details
- Location and date
- Status badge
- Mission outcome
- Photo gallery (3-4 images per mission)
- Classification warning notice

**Total Mission Pages**: 17 detailed missions

---

## Error Page

### ❌ 404 Not Found (`/404`)
**URL**: Shows when page doesn't exist

**Features**:
- Large 404 error code
- "ACCESS DENIED" message
- Mysterious theme: "The information you seek does not exist... or perhaps it was never meant to be found."
- Return to home button

---

## API Endpoints (for future expansion)

Currently, all data is rendered server-side, but the structure supports REST API:

```
GET /                          # Homepage
GET /about                     # About page
GET /members                   # List all members
GET /member/:id                # Single member profile
GET /member/:id/mission/:mid   # Single mission detail
```

**Future API routes** (when adding MongoDB):
```
GET /api/members               # JSON list of members
GET /api/member/:id            # JSON member data
POST /api/member               # Add new member (admin)
PUT /api/member/:id            # Update member (admin)
DELETE /api/member/:id         # Remove member (admin)
```

---

## Navigation Structure

```
Home (/)
├── About The Directive (/about)
├── Operatives (/members)
    ├── Shehryar Aslam (/member/shehryar-aslam)
    │   ├── Kalam Mission (/member/shehryar-aslam/mission/kalam-operation)
    │   ├── Cholistan Mission (/member/shehryar-aslam/mission/cholistan-mission)
    │   ├── Karachi Training (/member/shehryar-aslam/mission/karachi-assignment)
    │   └── Lahore Operations (/member/shehryar-aslam/mission/lahore-operations)
    │
    ├── Victoria Stone (/member/victoria-stone)
    │   ├── Dubai Summit (/member/victoria-stone/mission/dubai-summit)
    │   ├── Paris Protocol (/member/victoria-stone/mission/paris-protocol)
    │   └── Washington Shadow (/member/victoria-stone/mission/washington-shadow)
    │
    ├── Dmitri Volkov (/member/dmitri-volkov)
    │   ├── Moscow Winter (/member/dmitri-volkov/mission/moscow-winter)
    │   ├── Kiev Shadow (/member/dmitri-volkov/mission/kiev-shadow)
    │   └── Berlin Protocol (/member/dmitri-volkov/mission/berlin-protocol)
    │
    ├── Maya Nakamura (/member/maya-nakamura)
    │   ├── Tokyo Rising Sun (/member/maya-nakamura/mission/tokyo-corporate)
    │   ├── Beijing Dragon (/member/maya-nakamura/mission/beijing-dragon)
    │   └── Singapore Nexus (/member/maya-nakamura/mission/singapore-nexus)
    │
    └── Carlos Mendez (/member/carlos-mendez)
        ├── Amazon Green Hell (/member/carlos-mendez/mission/amazon-extraction)
        ├── Cartel Protocol (/member/carlos-mendez/mission/mexico-city-cartel)
        └── Buenos Aires Network (/member/carlos-mendez/mission/buenos-aires-network)
```

---

## Page Count Summary

- **Static Pages**: 3 (Home, About, Members)
- **Dynamic Member Pages**: 5
- **Dynamic Mission Pages**: 17
- **Error Page**: 1
- **Total Unique Pages**: 26+

---

## Interactive Features

### Animations
- Parallax scrolling on homepage
- Animated statistics counter
- Fade-in on scroll for cards
- Typing effect on hero subtitle
- Smooth hover transitions
- Custom cursor glow effect

### User Experience
- Back navigation buttons
- Responsive navigation menu
- Status badges (Active, Completed, Ongoing, Classified)
- Image galleries with overlays
- Click-to-navigate member cards
- Smooth page transitions

---

## Mobile Responsive Breakpoints

- **Desktop**: 1200px+ (Full layout)
- **Tablet**: 768px-1200px (Adapted grid)
- **Mobile**: <768px (Single column, simplified nav)

All pages are fully responsive!

---

## Current Server Status

✅ Server is running at: **http://localhost:3000**

You can navigate to any of the URLs listed above to explore the complete website!

---

**⟐ ORDINA DIRECTIVE** • 26+ Pages Ready to Explore
