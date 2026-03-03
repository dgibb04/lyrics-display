/* Amazing Grace - Event Handling */
/* Button click handlers and keyboard event listeners */

import { DOM, state } from './state.js';
import { nextLine, previousLine, togglePlay, restartPlayback } from './display.js';

/**
 * Handle speed slider changes
 * @param {Event} e - The change event
 */
function handleSpeedChange(e) {
    // Update playback speed state (convert string to number)
    state.playbackSpeed = parseFloat(e.target.value);

    // Update display
    DOM.speedValue.textContent = state.playbackSpeed.toFixed(2);

    // If currently playing, restart with new speed
    restartPlayback();
}

/**
 * Setup all event listeners for buttons and keyboard
 */
function setupEventListeners() {
    // Button click events
    DOM.prevBtn.addEventListener('click', previousLine);
    DOM.nextBtn.addEventListener('click', nextLine);
    DOM.playBtn.addEventListener('click', togglePlay);

    // Speed control slider
    DOM.speedSlider.addEventListener('change', handleSpeedChange);
    DOM.speedSlider.addEventListener('input', handleSpeedChange);

    // Global keyboard event listener
    document.addEventListener('keydown', handleKeyboardInput);
}

/**
 * Handle global keyboard input
 * @param {KeyboardEvent} e - The keyboard event
 */
function handleKeyboardInput(e) {
    // Prevent conflicts with text input fields
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }

    // Spacebar - Play/Pause
    if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
    }

    // Right arrow - Next line
    if (e.code === 'ArrowRight') {
        e.preventDefault();
        if (!DOM.nextBtn.disabled) {
            nextLine();
        }
    }

    // Left arrow - Previous line
    if (e.code === 'ArrowLeft') {
        e.preventDefault();
        if (!DOM.prevBtn.disabled) {
            previousLine();
        }
    }
}

export { setupEventListeners };
