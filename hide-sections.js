// Script to hide sections from the status page
// Credit: bvenkysubbu
// Source: https://github.com/upptime/upptime/discussions/447

function contains(t, n) {
    var e = document.querySelectorAll(t);
    return Array.prototype.filter.call(e, function(t) {
        return RegExp(n).test(t.textContent)
    })
}
window.onload = function() {
    foundDivsScheduledMaintenance = contains('section', 'Past Scheduled Maintenance');
    foundDivsScheduledMaintenance[0].remove(); // Removes Active Incidents Section
    foundDivsPastIncidents = contains('section', 'Past Incidents');
    foundDivsPastIncidents[0].remove(); // Removes Past Incidents Section
}
