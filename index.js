document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    // @ts-ignore
    document.getElementById('year').textContent = currentYear;
});
