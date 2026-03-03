# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**lyrics-display** is a vanilla JavaScript web application for displaying song lyrics one line at a time with playback controls. It consists of:
- Plain HTML, CSS, and JavaScript (no frameworks)
- A simple Node.js HTTP server for serving files
- Song lyrics loaded from `lyrics.txt`

## Architecture

**Frontend** (vanilla JS):
- `index.html` — Main page structure
- `style.css` — Responsive styling with animations (gradient background, fade-in effects, pulse animation on play)
- `script.js` — Application logic handling:
  - Parsing lyrics from `lyrics.txt` (filters empty lines)
  - Navigation (Next/Previous buttons)
  - Auto-playback (Play button with 2-second delay between lines)
  - Line counter display
  - Button state management (disabled at boundaries)

**Backend**:
- `server.js` — Node.js HTTP server using built-in `http` and `fs` modules (no external dependencies)

## Running the Application

```bash
node server.js
```

Then open `http://localhost:3000` in your browser.

Alternative (Python):
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`

## Key Implementation Details

- **Lyrics parsing**: Non-empty lines from `lyrics.txt` are split and displayed one at a time
- **Animation**: Fade-in effect on line change (CSS `@keyframes` with JavaScript class toggling)
- **Play logic**: Uses `setInterval()` with 2-second delay; stops automatically at end of lyrics
- **Button states**: Previous and Next buttons are disabled at boundaries; all buttons disabled during playback
- **Responsive**: Mobile-first design with media queries for screens < 480px

## Files to Know

- `index.html` — Page structure and layout
- `style.css` — All styling and animations
- `script.js` — Event listeners, state management, lyrics loading/display logic (90 lines)
- `server.js` — HTTP server for development
- `lyrics.txt` — Song lyrics (currently "Amazing Grace")
- `README.md` — User documentation
- `CLAUDE.md` — This file
