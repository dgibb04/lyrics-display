/* Amazing Grace - Application State */
/* Global state, constants, and DOM element references */

// Configuration constants
const CONFIG = {
    LYRICS_FILE: 'lyrics.txt',
    PLAYBACK_DELAY: 2000, // milliseconds between lines during auto-play
};

// Application state
const state = {
    lyrics: [],
    currentLineIndex: 0,
    isPlaying: false,
    playIntervalId: null,
};

// DOM element references
const DOM = {
    // Lyrics display
    lyricLine: document.getElementById('lyricLine'),
    lineNumber: document.getElementById('lineNumber'),
    lyricContainer: document.querySelector('.lyric-container'),
    currentLineSpan: document.getElementById('currentLine'),
    totalLinesSpan: document.getElementById('totalLines'),

    // Control buttons
    prevBtn: document.getElementById('prevBtn'),
    playBtn: document.getElementById('playBtn'),
    nextBtn: document.getElementById('nextBtn'),
};

// Export for use in other modules
export { CONFIG, state, DOM };
