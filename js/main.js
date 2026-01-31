console.log("JS is linked!");
// ===============================
// WorkHub Shared JS
// Handles login, logout, role redirection, buttons, and empty state
// ===============================

// ----------------------------
// ROLE-BASED LOGIN
// ----------------------------
function handleLogin() {
    const role = document.getElementById("roleSelect").value;
    const email = document.getElementById("email").value;

    if (email === "") {
        alert("Please enter your email!");
        return;
    }
     localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userRole", role);

    switch(role) {
        case "Job Seeker":
            alert("Welcome Job Seeker!");
            window.location.href = "dashboard-jobseeker.html";
            break;
        case "Employer":
            alert("Welcome Employer!");
            window.location.href = "dashboard-employer.html";
            break;
        case "Admin":
            const password = prompt("Enter admin password:");
            if(password === "workhubadmin") {
                window.location.href = "dashboard-admin.html";
            } else {
                alert("Access denied!");
                window.location.href = "login.html";
            }
            break;
        default:
            alert("Select a role to continue");
    }
}

// ----------------------------
// LOGOUT BUTTON
// ----------------------------
function logout() {
    alert("You have been logged out!");
    window.location.href = "login.html"; // Redirect to login page
}

// ----------------------------
// EMPTY JOB LISTINGS ALERT
// ----------------------------
function checkJobListings() {
    const jobContainer = document.getElementById("jobContainer");
    if(!jobContainer || jobContainer.children.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent = "No jobs posted yet.";
        emptyMessage.style.fontWeight = "bold";
        emptyMessage.style.textAlign = "center";
        emptyMessage.style.color = "#555";
        jobContainer.appendChild(emptyMessage);
    }
}

// ----------------------------
// APPLY / SAVE JOB SIMULATION
// ----------------------------
function applyJob(jobTitle) {
    alert(`You have applied for the job: ${jobTitle}`);
}

function saveJob(jobTitle) {
    alert(`You have saved the job: ${jobTitle}`);
}

// ----------------------------
// GET STARTED BUTTON
// ----------------------------
function getStarted() {
    alert("Welcome to WorkHub! Start exploring jobs.");
    window.location.href = "jobs.html"; // Redirect to jobs page
}

// ----------------------------
// Example of role-based UI content (optional)
// ----------------------------
function displayUserGreeting(role, name) {
    const greeting = document.getElementById("userGreeting");
    if(greeting) {
        greeting.textContent = `Hello ${role}: ${name}`;
    }
}
