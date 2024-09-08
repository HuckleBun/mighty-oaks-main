const toggleDropdown = () => {
    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });
}

// Add event listeners to dropdown menu items
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle dropdown on click
    dropdown.addEventListener('click', function(e) {
        if (e.target === dropdown.querySelector('a')) {
            e.preventDefault();
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdownContent.style.display = 'none';
        }
    });

    // Handle dropdown item clicks
    dropdownContent.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            e.stopPropagation(); // Prevent the dropdown from toggling
            window.location.href = e.target.href;
        }
    });
});

toggleDropdown();