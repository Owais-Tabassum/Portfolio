function showContent(option) {
    const splitScreen = document.getElementById('split-screen');
    const contentText = document.getElementById('content-text');
    
    // Set the content based on the clicked option
    contentText.textContent = `You selected: ${option}`;
    
    // Show the split screen
    splitScreen.classList.remove('hidden');
}

// Close the split screen on click anywhere
document.getElementById('split-screen').addEventListener('click', () => {
    document.getElementById('split-screen').classList.add('hidden');
});