# HARK - Hearing Aid Relay Kit Website

This is the official website for the HARK (Hearing Aid Relay Kit) DCOM project, showcasing an innovative Android application that transforms smartphones into portable table microphones for hearing aid users.

## 🏗️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with Inter font, Font Awesome icons
- **Responsive**: Mobile-first design
- **Deployment**: Node.js with Express server

## 🚀 Features

- Professional, responsive design
- Interactive animations and smooth scrolling
- Mobile-friendly hamburger navigation
- Scroll progress indicator
- Accessibility-focused interface
- Dark/light theme sections

## 📦 Installation & Development

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## ☁️ Deployment to Render

### Prerequisites
- GitHub account
- Render account (free tier available)

### Step-by-Step Deployment

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: HARK website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/HARK-Website.git
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username.

2. **Connect to Render**
   - Go to [render.com](https://render.com) and sign in
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure the service:
     - **Name**: `hark-website` (or your preferred name)
     - **Runtime**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`

3. **Deploy**
   - Render will automatically build and deploy your application
   - Once deployed, you'll receive a public URL like `https://hark-website.onrender.com`

### Environment Variables (Optional)
Render automatically sets `PORT`, but you can add other environment variables in the Render dashboard if needed.

## 📁 Project Structure

```
├── index.html          # Main webpage
├── css/
│   └── style.css       # Stylesheets
├── js/
│   └── script.js       # JavaScript functionality
├── server.js           # Express server for deployment
├── package.json        # Node.js dependencies and scripts
└── README.md          # This file
```

## 🎯 Project Highlights

- **Problem**: Expensive proprietary table microphones for hearing aids
- **Solution**: Zero-cost smartphone-based relay using ASHA protocol
- **Impact**: Democratizing access to assistive hearing technology

## 📄 License

MIT License - see package.json for details

## 👥 About

Prepared by: Manus AI (Acting as Project Lead)  
Date: November 2024  
For: The Project Review Board  
DCOM Project Submission
