# Lyrics Display

A simple web application for displaying song lyrics one line at a time with playback controls.

## Features

- **Display lyrics line by line** from `lyrics.txt`
- **Previous button** - Go to the previous lyric line
- **Next button** - Go to the next lyric line
- **Play button** - Automatically advance through lyrics with a 2-second delay
- **Line counter** - Shows current line and total lines
- **Responsive design** - Works on desktop and mobile devices

## How to Run

### Using Node.js (Recommended)

1. Make sure you have Node.js installed (https://nodejs.org)
2. Open Command Prompt or PowerShell in the project directory
3. Run the server:
   ```
   node server.js
   ```
4. Open your browser and go to `http://localhost:3000`

### Using Python

If you don't have Node.js but have Python installed:

1. Open Command Prompt or PowerShell in the project directory
2. Run:
   ```
   python -m http.server 8000
   ```
3. Open your browser and go to `http://localhost:8000`

### Direct File Opening (Limited)

You can also open `index.html` directly in your browser by double-clicking it, but the lyrics file may not load due to browser security restrictions. The server method is recommended.

## Files

- `index.html` - Main application page
- `style.css` - Application styling
- `script.js` - Application logic
- `server.js` - Simple Node.js HTTP server
- `lyrics.txt` - The song lyrics to display

## How It Works

1. The app loads all lyrics from `lyrics.txt` when the page loads
2. Each non-empty line becomes a separate lyric display
3. Use the buttons to navigate through the lyrics
4. Click Play to automatically advance through lines (2-second delay)
5. The Play button turns red and pulses while playing
6. Playback stops when you reach the end of the lyrics

## Customization

To use different lyrics:
- Replace the content of `lyrics.txt` with your own lyrics
- Empty lines are skipped, so you can use blank lines to separate verses
- Reload the page to see the changes
