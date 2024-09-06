
function toggleDetails(event, id) {
    const popup = document.getElementById(id);
    const isDisplayed = popup.style.display === "flex";
    // Hide any other open popups
    document.querySelectorAll('.details-popup-service').forEach(el => el.style.display = 'none');
    // Toggle the clicked popup
    popup.style.display = isDisplayed ? "none" : "flex";
    event.stopPropagation(); // Prevent the event from bubbling up
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

// Close popup if clicked outside
document.addEventListener('click', function (event) {
    const popups = document.querySelectorAll('.details-popup-service');
    popups.forEach(popup => {
        if (!popup.contains(event.target)) {
            popup.style.display = 'none';
        }
    });
});
// Optional: Custom smooth scrolling with JavaScript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Optional: Close popup if clicking outside of the content
window.onclick = function (event) {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }
}
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
