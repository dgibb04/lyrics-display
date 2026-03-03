/* Amazing Grace - Lyrics Loading */
/* Fetch and parse lyrics from lyrics.txt */

import { CONFIG, state, DOM } from './state.js';
import { displayLine } from './display.js';

/**
 * Load lyrics from the lyrics.txt file
 * Fetches the file, parses it, and initializes display
 */
async function loadLyrics() {
    try {
        const response = await fetch(CONFIG.LYRICS_FILE);
        const text = await response.text();

        // Split by newline and filter out empty lines
        state.lyrics = text.split('\n').filter(line => line.trim().length > 0);

        // Update total line count display
        DOM.totalLinesSpan.textContent = state.lyrics.length;

        // Display first line if lyrics exist
        if (state.lyrics.length > 0) {
            displayLine(0);
        }
    } catch (error) {
        // Display error message if lyrics fail to load
        DOM.lyricLine.innerHTML = '<span>Error loading lyrics. Make sure lyrics.txt is in the same directory.</span>';
        console.error('Error loading lyrics:', error);
    }
}

export { loadLyrics };
