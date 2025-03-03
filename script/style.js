// Background Colour Change


document.addEventListener("DOMContentLoaded", function () {
    // Select the image element
    const image = document.getElementById("changeBgImage");
    
    // Function to generate a random color
    function getRandomColor() {
        return "#" + Math.floor(Math.random()*16777215).toString(16);
    }
    
    // Add click event listener
    image.addEventListener("click", function () {
        // Change background color to a random color
        document.body.style.backgroundColor = getRandomColor();
    });
});


// Function to update date dynamically
function updateCurrentDate() {
    const dateElement = document.getElementById("currentDate");

    // Get the current date
    const today = new Date();

    // Format the date (Example: "Wed, July 28 2025")
    const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    // Split the date for line break formatting
    const parts = formattedDate.split(' ');
    const finalDate = `${parts[0]} <br> ${parts[1]} ${parts[2]} ${parts[3]}`;

    // Insert into the HTML
    dateElement.innerHTML = finalDate;
}


// Call the function on page load
document.addEventListener("DOMContentLoaded", updateCurrentDate);




document.addEventListener("DOMContentLoaded", function () {
    const completeButtons = document.querySelectorAll(".bg-green-800.rounded-md.p-2.text-white");
    const assignedCountElement = document.getElementById("assignedCount");
    const completedCountElement = document.getElementById("point_increase"); 
    const activityLog = document.getElementById("activities"); // Activity Log container
    const clearHistoryButton = document.getElementById("clearHistoryButton"); // Clear History button

    let assignedCount = parseInt(assignedCountElement.textContent);
    let completedCount = parseInt(completedCountElement.textContent);

    // Function to get the current time in HH:MM AM/PM format
    function getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12; // Convert to 12-hour format
        minutes = minutes < 10 ? "0" + minutes : minutes; // Add leading zero

        return `${hours}:${minutes} ${ampm}`;
    }

    // Mark task as completed
    completeButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (assignedCount > 0) {
                assignedCount--;
                completedCount++;

                // Update task counts
                assignedCountElement.textContent = assignedCount;
                completedCountElement.textContent = completedCount;

                // Get task title
                const taskTitle = this.closest(".bg-slate-200").querySelector("h1").textContent.trim();
                const currentTime = getCurrentTime();

                // Show alert
                alert(`You have completed the task: "${taskTitle}" at ${currentTime}`);

                // Add task to Activity Log with time
                const logEntry = document.createElement("p");
                logEntry.classList.add("bg-gray-100", "p-2", "rounded-md", "shadow-md", "w-full", "text-center");
                logEntry.textContent = `✔️ Completed: ${taskTitle} at ${currentTime}`;
                activityLog.prepend(logEntry); // Add to the top of Activity Log

                // Disable button after completion
                this.textContent = "Completed ✅";
                this.disabled = true;
                this.classList.add("opacity-50", "cursor-not-allowed");
            }
        });
    });

    // Clear Activity Log
    clearHistoryButton.addEventListener("click", function () {
        activityLog.innerHTML = ""; // Clears all log entries
    });
});



document.getElementById("discover").addEventListener("click", function() {
    window.location.href = "discover.html";
});












