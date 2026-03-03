let lyrics = [];
let currentLineIndex = 0;
let isPlaying = false;
let playIntervalId = null;

const lyricLine = document.getElementById('lyricLine');
const lineNumber = document.getElementById('lineNumber');
const lyricContainer = document.querySelector('.lyric-container');
const currentLineSpan = document.getElementById('currentLine');
const totalLinesSpan = document.getElementById('totalLines');
const prevBtn = document.getElementById('prevBtn');
const playBtn = document.getElementById('playBtn');
const nextBtn = document.getElementById('nextBtn');

// Fetch and parse lyrics
async function loadLyrics() {
    try {
        const response = await fetch('lyrics.txt');
        const text = await response.text();

        // Split by newline and filter out empty lines
        lyrics = text.split('\n').filter(line => line.trim().length > 0);

        totalLinesSpan.textContent = lyrics.length;

        if (lyrics.length > 0) {
            displayLine(0);
        }
    } catch (error) {
        lyricLine.innerHTML = '<span>Error loading lyrics. Make sure lyrics.txt is in the same directory.</span>';
        console.error('Error loading lyrics:', error);
    }
}

// Display a specific line with animation
function displayLine(index) {
    if (index < 0 || index >= lyrics.length) return;

    currentLineIndex = index;
    const lineNum = index + 1;

    // Update progress display
    currentLineSpan.textContent = lineNum;

    // Update line number display
    lineNumber.textContent = lineNum;

    // Trigger scale animation on line number
    lyricContainer.classList.remove('updating');
    void lyricContainer.offsetWidth; // Trigger reflow to restart animation
    lyricContainer.classList.add('updating');

    // Add fade-in animation to lyric text
    lyricLine.classList.remove('fade-in');
    void lyricLine.offsetWidth; // Trigger reflow to restart animation
    lyricLine.classList.add('fade-in');

    lyricLine.innerHTML = `<span>${lyrics[index]}</span>`;

    // Update button states based on position and play status
    updateButtonStates();
}

// Update button states based on position and play status
function updateButtonStates() {
    const isAtStart = currentLineIndex === 0;
    const isAtEnd = currentLineIndex === lyrics.length - 1;

    prevBtn.disabled = isAtStart || isPlaying;
    nextBtn.disabled = isAtEnd || isPlaying;
}

// Move to next line
function nextLine() {
    if (currentLineIndex < lyrics.length - 1) {
        displayLine(currentLineIndex + 1);
    } else {
        // If at the end, stop playing
        stopPlay();
    }
}

// Move to previous line
function previousLine() {
    if (currentLineIndex > 0) {
        displayLine(currentLineIndex - 1);
    }
}

// Start or stop playing
function togglePlay() {
    if (isPlaying) {
        stopPlay();
    } else {
        startPlay();
    }
}

// Start auto-advancing
function startPlay() {
    isPlaying = true;
    playBtn.classList.add('playing');
    playBtn.textContent = 'Pause';
    updateButtonStates();

    // Advance to next line immediately, then every 2 seconds
    playIntervalId = setInterval(() => {
        if (currentLineIndex < lyrics.length - 1) {
            nextLine();
        } else {
            // Stop at the end
            stopPlay();
        }
    }, 2000);
}

// Stop playing
function stopPlay() {
    isPlaying = false;
    playBtn.classList.remove('playing');
    playBtn.textContent = 'Play';

    if (playIntervalId !== null) {
        clearInterval(playIntervalId);
        playIntervalId = null;
    }

    // Update button states
    updateButtonStates();
}

// Event listeners
prevBtn.addEventListener('click', previousLine);
nextBtn.addEventListener('click', nextLine);
playBtn.addEventListener('click', togglePlay);

// Load lyrics on page load
loadLyrics();
