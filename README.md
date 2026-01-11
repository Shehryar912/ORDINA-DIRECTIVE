# ORDINA DIRECTIVE - Personal Website

A dark, mysterious portfolio website for the fictional secret organization "Ordina Directive" with a modern 2026 design aesthetic.

## 🎭 About

The Ordina Directive is a shadowy organization operating globally, wielding influence over world leaders and conducting classified operations. This website serves as an internal directory of active operatives and their mission histories.

## ✨ Features

- **Modern Dark Theme** - Sleek, mysterious design with gold accents
- **Responsive Design** - Works perfectly on all devices
- **Dynamic Content** - Easy-to-update member and mission data
- **Templating System** - Add new members without touching code
- **Image Management** - Simple drag-and-drop image system
- **Fast & Lightweight** - Optimized for quick loading
- **Docker Ready** - Easy deployment with containers

## 🚀 Quick Start

### 1. Install Dependencies

```powershell
npm install
```

### 2. Add Your Images

Place images in the appropriate folders:
- Member photos: `public/images/members/`
- Mission photos: `public/images/missions/`

See [IMAGE_GUIDE.md](IMAGE_GUIDE.md) for detailed instructions.

### 3. Run the Website

```powershell
npm start
```

Visit: http://localhost:3000

### 4. Development Mode (Auto-reload)

```powershell
npm run dev
```

## 📁 Project Structure

```
SELF_HOSTING/
├── data/
│   └── members.json         # All member and mission data
├── public/
│   ├── css/
│   │   └── style.css        # All styling
│   ├── js/
│   │   └── main.js          # Interactive features
│   └── images/
│       ├── members/         # Member profile photos
│       └── missions/        # Mission photos
├── views/
│   ├── index.ejs            # Homepage
│   ├── about.ejs            # About the Directive
│   ├── members.ejs          # Member listing
│   ├── member-profile.ejs   # Individual profiles
│   ├── mission-detail.ejs   # Mission details
│   └── 404.ejs              # Error page
├── server.js                # Express server
├── package.json             # Dependencies
├── Dockerfile               # Docker configuration
├── docker-compose.yml       # Docker Compose setup
└── README.md                # This file
```

## 🎨 Customization

### Adding New Members

1. Edit `data/members.json`
2. Add member photos to `public/images/members/`
3. Add mission photos to `public/images/missions/`
4. Restart the server

**No code changes needed!** The templating system automatically generates pages.

### Changing Colors

Edit CSS variables in `public/css/style.css`:

```css
:root {
    --accent-gold: #d4af37;    /* Change primary accent color */
    --primary-bg: #0a0a0f;     /* Change background color */
    /* ... more variables ... */
}
```

### Updating Content

All text content is in:
- `data/members.json` - Member info and missions
- `views/*.ejs` - Page templates and static text

## 🐳 Docker Deployment

### Build the Docker Image

```powershell
docker build -t ordina-directive .
```

### Run with Docker Compose

```powershell
docker-compose up -d
```

Access at: http://localhost:3000

### Stop the Container

```powershell
docker-compose down
```

## 🛠️ Technology Stack

- **Backend**: Node.js + Express
- **Templating**: EJS (Embedded JavaScript)
- **Styling**: Modern CSS with CSS Grid & Flexbox
- **Fonts**: Google Fonts (Cinzel, Rajdhani)
- **Data Storage**: JSON (easily upgradable to MongoDB)
- **Containerization**: Docker

## 📝 Member Data Format

```json
{
  "id": "unique-id",
  "name": "Full Name",
  "codename": "Agent Codename",
  "rank": "Operative Rank",
  "birthDate": "January 1, 2000",
  "birthPlace": "City, Country",
  "father": "Father's Name (optional)",
  "joinDate": "2020",
  "status": "Active",
  "specialization": "Special skills...",
  "bio": "Biography text...",
  "image": "filename.jpg",
  "missions": [
    {
      "id": "mission-id",
      "name": "Operation Name",
      "location": "City, Country",
      "date": "2024",
      "status": "Completed",
      "description": "Mission description...",
      "outcome": "Results...",
      "images": ["photo1.jpg", "photo2.jpg"]
    }
  ]
}
```

## 🎯 Current Members

1. **Shehryar Aslam** (Shadow Serpent) - Senior Operative
2. **Victoria Stone** (Iron Widow) - Master Assassin
3. **Dmitri Volkov** (Red Winter) - Intelligence Director
4. **Maya Nakamura** (Silent Lotus) - Infiltration Specialist
5. **Carlos Mendez** (Black Condor) - Tactical Operations Commander

Each member has 3-4 detailed mission reports with real-world locations.

## 📸 Image Requirements

### Member Photos
- Format: JPG/PNG
- Size: 800x1000px (portrait)
- Style: Professional, dark tones

### Mission Photos
- Format: JPG/PNG
- Size: 1200x800px (landscape)
- Style: Location-appropriate, atmospheric

See [IMAGE_GUIDE.md](IMAGE_GUIDE.md) for complete details.

## 🔧 Configuration

### Change Port

Edit `server.js`:
```javascript
const PORT = process.env.PORT || 3000;
```

Or set environment variable:
```powershell
$env:PORT=8080
npm start
```

## 🌐 Deployment Options

1. **Local Development**: `npm run dev`
2. **Production Server**: `npm start`
3. **Docker**: `docker-compose up`
4. **Cloud Platforms**: Deploy to Heroku, AWS, DigitalOcean, etc.

## 📈 Future Enhancements

- [ ] MongoDB integration for scalability
- [ ] Admin panel for easy content management
- [ ] User authentication system
- [ ] Search and filter functionality
- [ ] Dark/Light theme toggle
- [ ] Animated transitions between pages
- [ ] Mission timeline visualization
- [ ] Interactive world map of operations

## 🤝 Contributing

This is a personal project, but feel free to fork and customize for your own use!

## 📄 License

ISC License - Free to use and modify.

## ⚠️ Disclaimer

This is a fictional creative project. All characters, organizations, events, and operations described are entirely fictional. Any resemblance to real persons or events is coincidental.

---

**⟐ Ordina Directive** • *In Shadows We Trust*

Built with modern web technologies for a 2026-ready experience.
