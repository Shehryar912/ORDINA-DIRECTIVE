# DEPLOYMENT GUIDE - ORDINA DIRECTIVE

This guide covers multiple deployment options for your Ordina Directive website.

## 📋 Prerequisites

- Node.js 18+ installed
- Docker installed (for containerized deployment)
- Git (optional, for version control)

---

## 🖥️ Option 1: Local Development

Perfect for testing and development.

### Start the Server

```powershell
# Navigate to project directory
cd d:\WORK\SELF_HOSTING

# Install dependencies (first time only)
npm install

# Start the server
npm start
```

Visit: **http://localhost:3000**

### Development Mode (Auto-reload)

```powershell
npm run dev
```

The server will automatically restart when you change files.

### Stop the Server

Press `Ctrl + C` in the terminal.

---

## 🐳 Option 2: Docker Deployment (Recommended)

Docker makes deployment consistent and portable.

### Build and Run

```powershell
# Navigate to project directory
cd d:\WORK\SELF_HOSTING

# Build and start with Docker Compose
docker-compose up -d
```

Visit: **http://localhost:3000**

### Check Status

```powershell
# View running containers
docker-compose ps

# View logs
docker-compose logs -f ordina-directive
```

### Stop the Container

```powershell
docker-compose down
```

### Rebuild After Changes

```powershell
# Rebuild and restart
docker-compose up -d --build
```

### Update Member Data or Images

Since volumes are mounted, you can:
1. Edit `data/members.json`
2. Add images to `public/images/`
3. Restart container: `docker-compose restart`

Changes take effect immediately!

---

## 🌐 Option 3: Production Server Deployment

### On a Linux Server (Ubuntu/Debian)

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone or upload your project
cd /var/www/
sudo mkdir ordina-directive
sudo chown $USER:$USER ordina-directive
cd ordina-directive

# Copy your files here (use scp, git, or ftp)

# Install dependencies
npm ci --only=production

# Install PM2 for process management
sudo npm install -g pm2

# Start the application
pm2 start server.js --name ordina-directive

# Make it start on system boot
pm2 startup
pm2 save

# View logs
pm2 logs ordina-directive

# Check status
pm2 status
```

### Configure Nginx Reverse Proxy (Optional)

```bash
# Install Nginx
sudo apt-get install nginx

# Create configuration
sudo nano /etc/nginx/sites-available/ordina-directive
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/ordina-directive /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Add SSL with Let's Encrypt (Recommended)

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com

# Auto-renewal is configured automatically
```

---

## ☁️ Option 4: Cloud Platform Deployment

### Heroku

```powershell
# Install Heroku CLI
# Download from: https://devcenter.heroku.com/articles/heroku-cli

# Login
heroku login

# Create app
heroku create ordina-directive

# Deploy
git init
git add .
git commit -m "Initial commit"
git push heroku main

# Open app
heroku open
```

### DigitalOcean App Platform

1. Create account at DigitalOcean
2. Go to App Platform
3. Connect your GitHub repo or upload code
4. Select "Node.js" as runtime
5. Set build command: `npm install`
6. Set run command: `npm start`
7. Deploy!

### AWS (Amazon Web Services)

#### Using Elastic Beanstalk:

```powershell
# Install AWS CLI and EB CLI
pip install awsebcli

# Initialize
eb init -p node.js ordina-directive --region us-east-1

# Create environment and deploy
eb create ordina-directive-env

# Open app
eb open

# Update after changes
eb deploy
```

---

## 🔐 Environment Variables

Create a `.env` file for sensitive configuration:

```env
# Server Configuration
PORT=3000
NODE_ENV=production

# Future MongoDB Configuration
MONGODB_URI=mongodb://username:password@localhost:27017/ordina_directive
MONGODB_USER=admin
MONGODB_PASS=your_secure_password

# Session Secret (for future authentication)
SESSION_SECRET=your_random_secret_key_here
```

Load in `server.js`:

```javascript
require('dotenv').config();
const PORT = process.env.PORT || 3000;
```

Install dotenv:

```powershell
npm install dotenv
```

---

## 📦 Docker Compose with MongoDB (Future Enhancement)

Uncomment the MongoDB section in `docker-compose.yml`:

```yaml
services:
  ordina-directive:
    # ... existing config ...
    depends_on:
      - mongodb
    environment:
      - MONGODB_URI=mongodb://admin:ordina_secure_pass_2026@mongodb:27017/ordina_directive?authSource=admin

  mongodb:
    image: mongo:7
    container_name: ordina-mongodb
    restart: unless-stopped
    ports:
      - "27017:27017"
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=ordina_secure_pass_2026
      - MONGO_INITDB_DATABASE=ordina_directive
    volumes:
      - mongodb_data:/data/db
    networks:
      - ordina-network

volumes:
  mongodb_data:
```

Then run:

```powershell
docker-compose up -d
```

---

## 🔄 Updating the Website

### Local/Server Deployment:

```powershell
# Pull latest changes (if using git)
git pull

# Install any new dependencies
npm install

# Restart server
pm2 restart ordina-directive
# OR
npm start
```

### Docker Deployment:

```powershell
# Rebuild and restart
docker-compose up -d --build
```

---

## 🛡️ Security Best Practices

### 1. Use Environment Variables

Never commit sensitive data. Use `.env` files.

### 2. Enable HTTPS

Always use SSL certificates in production.

### 3. Set Up Firewall

```bash
# UFW on Ubuntu
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable
```

### 4. Keep Dependencies Updated

```powershell
npm update
npm audit fix
```

### 5. Use Process Manager

PM2 handles crashes and logging in production.

---

## 📊 Monitoring

### Check Application Health

```powershell
# Docker
docker-compose ps
docker-compose logs -f

# PM2
pm2 status
pm2 logs
pm2 monit
```

### View System Resources

```bash
# CPU and Memory
htop

# Disk space
df -h

# Docker stats
docker stats
```

---

## 🐛 Troubleshooting

### Port Already in Use

```powershell
# Change port in docker-compose.yml
ports:
  - "8080:3000"  # Use port 8080 instead

# Or in server.js
const PORT = process.env.PORT || 8080;
```

### Images Not Loading

1. Check files are in `public/images/members/` and `public/images/missions/`
2. Verify filenames match `members.json`
3. Restart server/container
4. Check file permissions

### Container Won't Start

```powershell
# View detailed logs
docker-compose logs ordina-directive

# Rebuild from scratch
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Performance Issues

1. Optimize images (compress to <500KB)
2. Enable Nginx caching
3. Use CDN for static assets
4. Add MongoDB for better data handling

---

## 📈 Scaling

### Horizontal Scaling

Use Docker Swarm or Kubernetes:

```bash
# Docker Swarm
docker swarm init
docker stack deploy -c docker-compose.yml ordina
```

### Load Balancer

Set up Nginx to distribute traffic:

```nginx
upstream ordina_backend {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
}

server {
    location / {
        proxy_pass http://ordina_backend;
    }
}
```

---

## 🎯 Quick Commands Reference

```powershell
# Development
npm run dev              # Start with auto-reload
npm start                # Start production server

# Docker
docker-compose up -d     # Start containers
docker-compose down      # Stop containers
docker-compose logs -f   # View logs
docker-compose restart   # Restart services

# PM2
pm2 start server.js      # Start app
pm2 restart all          # Restart all apps
pm2 logs                 # View logs
pm2 monit                # Monitor resources
pm2 stop all             # Stop all apps
pm2 delete all           # Remove all apps
```

---

## 🆘 Need Help?

- Check [README.md](README.md) for project overview
- See [IMAGE_GUIDE.md](IMAGE_GUIDE.md) for image management
- Review `data/members.json` for data structure examples

---

**⟐ Ordina Directive** • *Deployed in the Shadows*

Ready for 2026 and beyond! 🚀
