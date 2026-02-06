// Climbing Planner App - Enhanced Functionality

// Session Management
function saveSession(data) {
    localStorage.setItem('climbingSessions', JSON.stringify(data));
}

function loadSessions() {
    return JSON.parse(localStorage.getItem('climbingSessions')) || [];
}

// Calculate Weekly Statistics
function calculateWeeklyStats(sessions) {
    const weeklyStats = {};
    sessions.forEach(session => {
        const week = new Date(session.date).getWeek();
        weeklyStats[week] = (weeklyStats[week] || 0) + 1; // For example, counting sessions
    });
    return weeklyStats;
}

// Dynamic DOM Rendering with Animations
function renderSessions(sessions) {
    const sessionList = document.getElementById('session-list');
    sessionList.innerHTML = ''; // Clear existing entries
    sessions.forEach(session => {
        const li = document.createElement('li');
        li.textContent = `Session on: ${session.date}`;
        li.classList.add('fade-in'); // Assuming CSS for animation
        sessionList.appendChild(li);
    });
}

// Form Validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input');
    for (let input of inputs) {
        if (!input.value) { 
            alert(`Please fill out ${input.name}`);
            return false;
        }
    }
    return true;
}

// Delete Functionality
function deleteSession(index) {
    const sessions = loadSessions();
    sessions.splice(index, 1);
    saveSession(sessions);
    renderSessions(sessions);
}

// Export to PDF/Text
function exportSessions(format) {
    const sessions = loadSessions();
    let data = sessions.map(session => `Session on: ${session.date}`).join('\n');
  
    if (format === 'pdf') {
        // PDF generation code
    } else {
        // Text export code
        const blob = new Blob([data], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'sessions.txt';
        link.click();
    }
}

// Real-time UI Updates
function onSessionAdd(session) {
    const sessions = loadSessions();
    sessions.push(session);
    saveSession(sessions);
    renderSessions(sessions);
}

// Example of adding session
document.getElementById('add-session').addEventListener('click', () => {
    const session = {
        date: new Date().toISOString().split('T')[0],
    };
    if (validateForm(document.getElementById('session-form'))) {
        onSessionAdd(session);
    }
});
