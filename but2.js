// Example course content data (replace with actual data fetched from the server)
const courseContentData = [
    { section: 'Getting Started', content: 'Welcome to the course! In this section, we\'ll cover the basics of webdevelopment and set the foundation for the rest of the course.' },
    { section: 'What is Web Development?', content: 'Web development: Creating and maintaining websites or web applications.' },
    { section: 'Tags', content: 'In this section, you\'ll learn about various Tags.' },
    // Add more sections as needed
];

// Function to dynamically create content sections
function createContentSection(sectionData, index) {
    const sectionElement = document.createElement('div');
    sectionElement.classList.add('section');
    
    const sectionTitleElement = document.createElement('h2');
    sectionTitleElement.textContent = `Section ${index + 1}: ${sectionData.section}`;

    const contentElement = document.createElement('p');
    contentElement.textContent = sectionData.content;

    sectionElement.appendChild(sectionTitleElement);
    sectionElement.appendChild(contentElement);

    // Add click event listener to mark section as completed
    sectionElement.addEventListener('click', function () {
        markSectionCompleted(sectionElement, index);
    });

    document.getElementById('content').appendChild(sectionElement);
}

// Function to calculate and display progress
function displayProgress() {
    const progressElement = document.getElementById('progress');
    const completedSections = document.getElementsByClassName('completed').length;
    const totalSections = courseContentData.length;

    const progressText = `Progress: ${completedSections} out of ${totalSections} sections completed`;
    const creditsText = `Credits Earned: ${completedSections * 10} credits`;

    progressElement.innerHTML = `${progressText}<br>${creditsText}`;
}

// Function to mark a section as completed and update progress
function markSectionCompleted(sectionElement, index) {
    sectionElement.classList.add('completed');
    displayProgress();

    // Simulate saving progress on a server (replace with actual server communication)
    console.log(`Marking Section ${index + 1} as completed on the server.`);
}

// Populate content on page load
window.onload = function () {
    for (let i = 0; i < courseContentData.length; i++) {
        createContentSection(courseContentData[i], i);
    }
};
