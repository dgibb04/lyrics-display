/* Amazing Grace - Application Entry Point */
/* Main initialization and module coordination */

import { loadLyrics } from './lyrics.js';
import { setupEventListeners } from './events.js';

/**
 * Initialize the application
 * Called when the DOM is ready
 */
function initializeApp() {
    // Setup all event listeners (buttons and keyboard)
    setupEventListeners();

    // Load lyrics from file
    loadLyrics();
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
