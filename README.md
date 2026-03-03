# Amazing Grace - Lyrics Display

A beautiful, interactive web application for displaying hymn lyrics one line at a time. Built with pure HTML, CSS, and JavaScript—no frameworks or dependencies.

## Overview

**Amazing Grace** is a meditative, keyboard-friendly lyrics player designed specifically for this iconic 18th-century hymn. Navigate through lyrics using buttons or keyboard shortcuts, and play through the entire hymn with automatic line progression.

## Features

✨ **Core Functionality**
- Display lyrics one line at a time from `lyrics.txt`
- Navigate with **Previous/Next buttons** or **arrow keys**
- **Play/Pause** with automatic 2-second progression or **spacebar**
- Real-time progress display (Line X of Y)
- Prominent line number badge for visual reference

🎨 **Design**
- Elegant, spiritually-inspired aesthetic tailored to "Amazing Grace"
- Warm cream and gold color palette
- Classical serif typography (Cormorant Garamond, Crimson Text, Lora)
- Smooth animations and transitions throughout
- Responsive design for desktop, tablet, and mobile devices
- Respects user's reduced-motion preferences

⌨️ **Keyboard Support**
- **Spacebar** - Play/Pause (works globally)
- **← / →** - Previous/Next line navigation
- Shortcuts work anywhere on the page
- Button tooltips show available shortcuts

## Project Structure

```
lyrics-display/
├── index.html                 # Main HTML page
├── server.js                  # Simple Node.js HTTP server
├── lyrics.txt                 # Song lyrics
├── README.md                  # This file
├── CLAUDE.md                  # Development notes
├── css/
│   ├── base.css              # Global styles & variables
│   ├── typography.css        # Font imports & text styling
│   ├── layout.css            # Container & layout structure
│   ├── components.css        # UI components (buttons, badges)
│   ├── animations.css        # Keyframes & transitions
│   └── responsive.css        # Media queries
└── js/
    ├── state.js              # App state & constants
    ├── lyrics.js             # Lyrics loading & parsing
    ├── display.js            # UI updates & line rendering
    ├── events.js             # Event listeners (buttons & keyboard)
    └── app.js                # Main initialization
```

## Getting Started

### Prerequisites
- Node.js (for the development server)
- A modern web browser

### Installation

1. **Clone or download** the repository
2. **Navigate** to the project directory
3. **Start the server:**

```bash
node server.js
```

4. **Open** http://localhost:3000 in your browser

### Alternative: Python Server

If you don't have Node.js but have Python:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000

## Usage

### Button Controls
- **Previous** - Go to the previous lyric line
- **Play** - Start auto-playback (button becomes **Pause**)
- **Next** - Go to the next lyric line

### Keyboard Controls
| Key | Action |
|-----|--------|
| Spacebar | Play/Pause |
| ← | Previous line |
| → | Next line |

### Auto-Playback
- When you click **Play**, the app automatically advances through lyrics
- Each line displays for 2 seconds before moving to the next
- Playback stops when you reach the end
- You can click **Pause** at any time to resume manual navigation

## Customization

### Using Different Lyrics

Simply replace the content of `lyrics.txt` with your own lyrics:
- Each non-empty line becomes a separate display
- Empty lines are automatically skipped
- Reload the page to load the new lyrics

### Styling

The CSS is organized into logical modules:
- **base.css** - Change color variables (--grace-dark, --grace-gold, etc.)
- **typography.css** - Adjust font sizes and styles
- **animations.css** - Modify animation speeds and effects
- **responsive.css** - Customize breakpoints and mobile layout

All styles use CSS variables defined in `base.css` for easy customization:

```css
:root {
    --grace-dark: #1a2e3a;
    --grace-gold: #c9a961;
    --grace-light: #8ba8b8;
    /* ... more variables ... */
}
```

### Timing

To change the auto-play timing, edit `state.js`:

```javascript
const PLAYBACK_DELAY = 2000; // milliseconds between lines
```

## Code Architecture

### State Management (`js/state.js`)
- Stores app state (current line, playing status)
- Maintains DOM element references
- Defines configuration constants

### Lyrics Loading (`js/lyrics.js`)
- Fetches `lyrics.txt`
- Parses lyrics into array (filters empty lines)
- Handles loading errors

### Display Logic (`js/display.js`)
- Updates line display with animations
- Manages line number badge
- Updates progress indicator
- Controls button disabled states

### Event Handling (`js/events.js`)
- Button click handlers
- Global keyboard event listeners
- Playback control logic

### Application (`js/app.js`)
- Initializes the app on page load
- Coordinates all modules

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **No external dependencies** - pure vanilla JavaScript
- **Efficient animations** - uses CSS transforms and opacity
- **GPU acceleration** - animations use `will-change` property
- **Responsive performance** - animations disabled on reduced-motion preference
- **Mobile optimized** - background animations hidden on small devices

## Accessibility

✓ Keyboard navigation (arrow keys & spacebar)
✓ Button tooltips with keyboard shortcuts
✓ Respects `prefers-reduced-motion` setting
✓ High color contrast
✓ Semantic HTML
✓ ARIA-ready button states

## Technical Highlights

### Pure Vanilla JavaScript
- No jQuery, React, Vue, or other frameworks
- ES6+ features (arrow functions, template literals, const/let)
- Modular file structure for maintainability

### Advanced CSS
- CSS variables for theming
- Cubic-bezier easing for smooth transitions
- Keyframe animations (fade-in, pulse, shimmer)
- Responsive design with mobile-first approach
- Backdrop filters and gradient backgrounds
- Will-change optimization for performance

### Responsive Design
- Desktop: Full-sized layout with larger typography
- Tablet: Optimized spacing and sizing
- Mobile: Stacked layout with touch-friendly controls
- Landscape: Compact layout for landscape phones

## File Sizes

- `index.html` - ~500 bytes
- `css/` - ~25 KB total (well-organized, readable)
- `js/` - ~4 KB total (modular, efficient)
- `server.js` - ~1 KB (minimal dependencies)

## Future Enhancements

Potential improvements for future versions:
- Multiple hymn/song support with a selection interface
- Shuffle and repeat modes
- Speed control for auto-playback
- Bookmarking favorite lines
- Dark mode toggle
- Font size adjustment
- Lyrics search functionality
- Mobile app packaging with Electron/PWA

## Contributing

This is a personal project for learning and enjoyment. Feel free to fork and customize for your own needs!

## License

Free to use, modify, and distribute.

## Credits

**Amazing Grace** - Written by John Newton (1779)

**Application** - Built with vanilla HTML, CSS, and JavaScript

## Support

For help or feedback:
- Check `CLAUDE.md` for development notes
- Review inline code comments
- Test keyboard shortcuts
- Try resizing your browser for responsive behavior

---

Enjoy reflecting on grace through this beautiful hymn. 🙏
