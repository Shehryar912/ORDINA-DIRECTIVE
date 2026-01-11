const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

// Access Control Configuration
const ACCESS_LEVELS = {
  PUBLIC: 0,      // Basic information only
  RESTRICTED: 1,  // Moderate sensitive information
  CLASSIFIED: 2   // Full access to all information
};

const ACCESS_PASSWORD = 'wewantpeace@ordina1401006';

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({
  secret: 'ordina-directive-secret-2026',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Load data
const loadData = () => {
  const dataPath = path.join(__dirname, 'data', 'members.json');
  const data = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(data);
};

// Get current access level
const getAccessLevel = (req) => {
  return req.session.accessLevel || ACCESS_LEVELS.PUBLIC;
};

// Filter data based on access level
const filterDataByAccess = (data, accessLevel) => {
  const filtered = JSON.parse(JSON.stringify(data)); // Deep clone
  
  filtered.members = filtered.members.map(member => {
    const filteredMember = { ...member };
    
    // PUBLIC: Only show codename, rank, and basic info
    if (accessLevel < ACCESS_LEVELS.RESTRICTED) {
      delete filteredMember.name;
      delete filteredMember.birthDate;
      delete filteredMember.birthPlace;
      delete filteredMember.recruitment;
      filteredMember.bio = filteredMember.bioPublic || filteredMember.bio.substring(0, 150) + '... [CLASSIFIED]';
    }
    
    // RESTRICTED: Show name but not full recruitment details
    if (accessLevel < ACCESS_LEVELS.CLASSIFIED) {
      if (filteredMember.recruitment) {
        filteredMember.recruitment = {
          date: '[CLASSIFIED]',
          details: '[CLASSIFIED - LEVEL 2 CLEARANCE REQUIRED]'
        };
      }
    }
    
    return filteredMember;
  });
  
  return filtered;
};

// Routes
app.get('/', (req, res) => {
  const accessLevel = getAccessLevel(req);
  res.render('index', { accessLevel });
});

app.get('/about', (req, res) => {
  const accessLevel = getAccessLevel(req);
  res.render('about', { accessLevel });
});

app.get('/members', (req, res) => {
  const data = loadData();
  const accessLevel = getAccessLevel(req);
  const filteredData = filterDataByAccess(data, accessLevel);
  res.render('members', { members: filteredData.members, accessLevel });
});

app.get('/member/:id', (req, res) => {
  const data = loadData();
  const accessLevel = getAccessLevel(req);
  const filteredData = filterDataByAccess(data, accessLevel);
  const member = filteredData.members.find(m => m.id === req.params.id);
  if (!member) {
    return res.status(404).render('404', { accessLevel });
  }
  res.render('member-profile', { member, accessLevel });
});

app.get('/member/:id/mission/:missionId', (req, res) => {
  const data = loadData();
  const accessLevel = getAccessLevel(req);
  const filteredData = filterDataByAccess(data, accessLevel);
  const member = filteredData.members.find(m => m.id === req.params.id);
  if (!member) {
    return res.status(404).render('404', { accessLevel });
  }
  const mission = member.missions.find(m => m.id === req.params.missionId);
  if (!mission) {
    return res.status(404).render('404', { accessLevel });
  }
  res.render('mission-detail', { member, mission, accessLevel });
});

// Authentication routes
app.get('/access', (req, res) => {
  const accessLevel = getAccessLevel(req);
  res.render('access', { accessLevel, error: null });
});

app.post('/access', (req, res) => {
  const { password } = req.body;
  
  if (password === ACCESS_PASSWORD) {
    req.session.accessLevel = ACCESS_LEVELS.CLASSIFIED;
    return res.redirect('/members');
  }
  
  res.render('access', { 
    accessLevel: getAccessLevel(req), 
    error: 'Invalid access code. Access denied.' 
  });
});

app.get('/logout', (req, res) => {
  req.session.accessLevel = ACCESS_LEVELS.PUBLIC;
  res.redirect('/');
});

app.use((req, res) => {
  const accessLevel = getAccessLevel(req);
  res.status(404).render('404', { accessLevel });
});

app.listen(PORT, () => {
  console.log(`🕶️  Ordina Directive server running on port ${PORT}`);
  console.log(`🌐 Access at: http://localhost:${PORT}`);
});
