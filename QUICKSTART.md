# 🚀 QUICK START - Get Your Site Running in 5 Minutes!

## Step 1: Install Dependencies (One-time)

```powershell
npm install
```

## Step 2: Start the Server

```powershell
npm start
```

## Step 3: Open Your Browser

Visit: **http://localhost:3000**

---

## 🎨 Adding Your Images

1. **Member Photos**: Save to `public/images/members/`
   - Your photo: `shehryar-aslam.jpg`
   - Others: See [IMAGE_GUIDE.md](IMAGE_GUIDE.md)

2. **Mission Photos**: Save to `public/images/missions/`
   - Example: `kalam-1.jpg`, `lahore-1.jpg`
   - All filenames listed in [IMAGE_GUIDE.md](IMAGE_GUIDE.md)

3. **Restart the server** (Ctrl+C, then `npm start`)

---

## ✏️ Editing Content

### Change Member Info

Edit: `data/members.json`

```json
{
  "name": "Your Name",
  "bio": "Your story...",
  "missions": [...]
}
```

### Add New Member

1. Add entry to `data/members.json`
2. Add their photo to `public/images/members/`
3. Add mission photos to `public/images/missions/`
4. Restart server

---

## 🐳 Using Docker (Alternative Method)

```powershell
docker-compose up -d
```

Visit: **http://localhost:3000**

Stop: `docker-compose down`

---

## 📚 More Information

- **Full Guide**: [README.md](README.md)
- **Image Details**: [IMAGE_GUIDE.md](IMAGE_GUIDE.md)
- **Deployment**: [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 🆘 Common Issues

**Port 3000 in use?**
- Change port in `server.js`: `const PORT = 3001;`

**Images not showing?**
- Check filenames match `members.json`
- Ensure images are in correct folders

**Server won't start?**
- Run `npm install` again
- Check for error messages

---

**⟐ You're ready to go!**

The website is fully functional with 5 members (including you) and 17 detailed missions across real locations worldwide. Just add your images and you're done! 🎉
