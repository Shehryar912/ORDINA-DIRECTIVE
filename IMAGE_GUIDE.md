# IMAGE PLACEMENT GUIDE - ORDINA DIRECTIVE

This document explains where to place your images so they automatically appear on the website.

## Directory Structure

```
public/
  └── images/
      ├── members/          # Member profile photos
      └── missions/         # Mission-specific photos
```

## Member Profile Images

Place member profile photos in: `public/images/members/`

### Required Member Images:
- **shehryar-aslam.jpg** - Your profile photo (recommended: 800x1000px portrait)
- **victoria-stone.jpg** - Victoria Stone's profile photo
- **dmitri-volkov.jpg** - Dmitri Volkov's profile photo
- **maya-nakamura.jpg** - Maya Nakamura's profile photo
- **carlos-mendez.jpg** - Carlos Mendez's profile photo

**Recommended specs:**
- Format: JPG or PNG
- Dimensions: 800x1000px (portrait orientation)
- Style: Professional, dark/mysterious tones preferred
- File size: Under 500KB for optimal loading

---

## Mission Images

Place mission photos in: `public/images/missions/`

### Shehryar Aslam's Missions:
- **kalam-1.jpg** - Kalam Valley operation photo 1
- **kalam-2.jpg** - Kalam Valley operation photo 2
- **kalam-3.jpg** - Kalam Valley operation photo 3
- **cholistan-1.jpg** - Cholistan Desert mission photo 1
- **cholistan-2.jpg** - Cholistan Desert mission photo 2
- **karachi-1.jpg** - Karachi training years photo 1
- **karachi-2.jpg** - Karachi training years photo 2
- **lahore-1.jpg** - Lahore operations photo 1
- **lahore-2.jpg** - Lahore operations photo 2
- **lahore-3.jpg** - Lahore operations photo 3

### Victoria Stone's Missions:
- **dubai-1.jpg** - Dubai summit photo 1
- **dubai-2.jpg** - Dubai summit photo 2
- **paris-1.jpg** - Paris protocol photo 1
- **paris-2.jpg** - Paris protocol photo 2
- **paris-3.jpg** - Paris protocol photo 3
- **washington-1.jpg** - Washington DC operation photo 1
- **washington-2.jpg** - Washington DC operation photo 2

### Dmitri Volkov's Missions:
- **moscow-1.jpg** - Moscow operation photo 1
- **moscow-2.jpg** - Moscow operation photo 2
- **kiev-1.jpg** - Kiev shadow game photo 1
- **kiev-2.jpg** - Kiev shadow game photo 2
- **kiev-3.jpg** - Kiev shadow game photo 3
- **berlin-1.jpg** - Berlin protocol photo 1
- **berlin-2.jpg** - Berlin protocol photo 2

### Maya Nakamura's Missions:
- **tokyo-1.jpg** - Tokyo rising sun photo 1
- **tokyo-2.jpg** - Tokyo rising sun photo 2
- **beijing-1.jpg** - Beijing dragon operation photo 1
- **beijing-2.jpg** - Beijing dragon operation photo 2
- **beijing-3.jpg** - Beijing dragon operation photo 3
- **singapore-1.jpg** - Singapore nexus photo 1
- **singapore-2.jpg** - Singapore nexus photo 2

### Carlos Mendez's Missions:
- **amazon-1.jpg** - Amazon extraction photo 1
- **amazon-2.jpg** - Amazon extraction photo 2
- **mexico-1.jpg** - Mexico City cartel photo 1
- **mexico-2.jpg** - Mexico City cartel photo 2
- **mexico-3.jpg** - Mexico City cartel photo 3
- **buenos-aires-1.jpg** - Buenos Aires network photo 1
- **buenos-aires-2.jpg** - Buenos Aires network photo 2

**Recommended specs:**
- Format: JPG or PNG
- Dimensions: 1200x800px (landscape orientation)
- Style: Match location themes (cityscapes, landscapes, atmospheric shots)
- File size: Under 400KB each

---

## How to Add New Members

To add a new member to the website:

1. **Add member data** to `data/members.json`:
   ```json
   {
     "id": "member-name",
     "name": "Full Name",
     "codename": "Their Codename",
     "rank": "Their Rank",
     "birthDate": "Date",
     "birthPlace": "Location",
     "joinDate": "Year",
     "status": "Active",
     "specialization": "Their specialty",
     "bio": "Biography text...",
     "image": "filename.jpg",
     "missions": [
       {
         "id": "mission-id",
         "name": "Mission Name",
         "location": "Real Location",
         "date": "Year",
         "status": "Completed",
         "description": "Mission description...",
         "outcome": "What happened...",
         "images": ["mission-1.jpg", "mission-2.jpg"]
       }
     ]
   }
   ```

2. **Add their profile photo** to `public/images/members/filename.jpg`

3. **Add mission photos** to `public/images/missions/`

4. **Restart the server** - changes will appear automatically!

---

## Tips for Best Results

### For Member Photos:
- Use high-quality images with dramatic lighting
- Dark backgrounds work best with the theme
- Professional or cinematic style preferred
- Ensure face is clearly visible

### For Mission Photos:
- Use actual location photos for authenticity
- Add filters/editing for mysterious atmosphere
- Landscape photos work best for cityscapes
- Action or surveillance-style shots enhance the theme

### Image Sources:
- Personal photos from your travels (Kalam, Cholistan, Karachi, Lahore)
- Stock photo sites (Unsplash, Pexels) for international locations
- AI-generated images (Midjourney, DALL-E) for creative shots
- Screenshot from Google Maps Street View for authentic locations

---

## Current Placeholder Behavior

Until you add actual images, the website will:
- Show broken image icons with alt text
- Still display all text content correctly
- Maintain proper layout structure

Simply add images with the correct filenames and they'll appear automatically!

---

## Need to Change Image Names?

Edit the `data/members.json` file and update the `"image"` fields to match your new filenames.

Example:
```json
"image": "your-new-filename.jpg"
```

No code changes needed - just update the JSON and place the file in the correct folder!
