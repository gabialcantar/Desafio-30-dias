document.getElementById('toggleButton').addEventListener('click', function() {
    var details = document.querySelector('.profile-details');
    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
});