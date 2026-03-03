/* Amazing Grace - Display & UI Updates */
/* Handles rendering lyrics, updating line numbers, and button states */

import { state, DOM } from './state.js';

/**
 * Update button disabled states based on current position and play status
 */
function updateButtonStates() {
    const isAtStart = state.currentLineIndex === 0;
    const isAtEnd = state.currentLineIndex === state.lyrics.length - 1;

    DOM.prevBtn.disabled = isAtStart || state.isPlaying;
    DOM.nextBtn.disabled = isAtEnd || state.isPlaying;
}

/**
 * Display a specific line with animation
 * @param {number} index - The line index to display (0-based)
 */
function displayLine(index) {
    // Validate index
    if (index < 0 || index >= state.lyrics.length) return;

    state.currentLineIndex = index;
    const lineNum = index + 1;

    // Update progress display (Line X of Y)
    DOM.currentLineSpan.textContent = lineNum;

    // Update line number badge
    DOM.lineNumber.textContent = lineNum;

    // Trigger scale animation on line number
    DOM.lyricContainer.classList.remove('updating');
    void DOM.lyricContainer.offsetWidth; // Trigger reflow to restart animation
    DOM.lyricContainer.classList.add('updating');

    // Trigger fade-in animation on lyric text
    DOM.lyricLine.classList.remove('fade-in');
    void DOM.lyricLine.offsetWidth; // Trigger reflow to restart animation
    DOM.lyricLine.classList.add('fade-in');

    // Update lyric text content (wrapped in span for z-index layering)
    DOM.lyricLine.innerHTML = `<span>${state.lyrics[index]}</span>`;

    // Update button states
    updateButtonStates();
}

/**
 * Move to the next line
 */
function nextLine() {
    if (state.currentLineIndex < state.lyrics.length - 1) {
        displayLine(state.currentLineIndex + 1);
    } else {
        // If at the end, stop playing
        stopPlay();
    }
}

/**
 * Move to the previous line
 */
function previousLine() {
    if (state.currentLineIndex > 0) {
        displayLine(state.currentLineIndex - 1);
    }
}

/**
 * Start auto-advancing through lyrics
 */
function startPlay() {
    state.isPlaying = true;
    DOM.playBtn.classList.add('playing');
    DOM.playBtn.textContent = 'Pause';
    updateButtonStates();

    // Calculate delay based on playback speed
    // At 1.0x speed: 2000ms, at 2.0x: 1000ms, at 0.5x: 4000ms
    const adjustedDelay = 2000 / state.playbackSpeed;

    // Advance to next line every adjustedDelay milliseconds
    state.playIntervalId = setInterval(() => {
        if (state.currentLineIndex < state.lyrics.length - 1) {
            nextLine();
        } else {
            // Stop at the end
            stopPlay();
        }
    }, adjustedDelay);
}

/**
 * Stop auto-playing
 */
function stopPlay() {
    state.isPlaying = false;
    DOM.playBtn.classList.remove('playing');
    DOM.playBtn.textContent = 'Play';

    if (state.playIntervalId !== null) {
        clearInterval(state.playIntervalId);
        state.playIntervalId = null;
    }

    // Update button states
    updateButtonStates();
}

/**
 * Toggle between play and pause
 */
function togglePlay() {
    if (state.isPlaying) {
        stopPlay();
    } else {
        startPlay();
    }
}

/**
 * Restart playback with new speed (if currently playing)
 */
function restartPlayback() {
    if (state.isPlaying) {
        stopPlay();
        startPlay();
    }
}

export {
    displayLine,
    nextLine,
    previousLine,
    startPlay,
    stopPlay,
    togglePlay,
    restartPlayback,
    updateButtonStates,
};
