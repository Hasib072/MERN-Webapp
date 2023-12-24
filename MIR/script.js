document.addEventListener("DOMContentLoaded", function () {
    const donutCharts = document.querySelectorAll('.main-div-container-academichistory-donut-chart');

    donutCharts.forEach(chart => {
        const percentage = parseInt(chart.dataset.percent, 10);
        const angle = (percentage / 100) * 360;


        chart.style.backgroundImage = `conic-gradient(#9894CF 0deg, #9894CF ${angle}deg,  ${angle}deg, #D9D9D9 360deg)`;

    });
});

function togglePopup() {
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
}

function togglePopup1() {
    const overlay = document.getElementById('overlay-new');
    const popup = document.getElementById('popup-new');
    overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
}

function saveDetails() {
    const name = document.querySelector('.popup input:nth-child(1)').value;
    const email = document.querySelector('.popup input:nth-child(2)').value;
    alert(`Details Saved!\nName: ${name}\nEmail: ${email}`);
    togglePopup()
}

function saveChanges() {
    var newDetail1 = document.getElementById("edit-detail-1").value || "Details";
    var newDetail2 = document.getElementById("edit-detail-2").value || "Details";
    var newDetail3 = document.getElementById("edit-detail-3").value || "Details";
    var newDetail4 = document.getElementById("edit-detail-4").value || "Details";
    var newDetail5 = document.getElementById("edit-detail-5").value || "Details";

    document.getElementById("readonly-detail-1").value = newDetail1;
    document.getElementById("readonly-detail-2").value = newDetail2;
    document.getElementById("readonly-detail-3").value = newDetail3;
    document.getElementById("readonly-detail-4").value = newDetail4;
    document.getElementById("readonly-detail-5").value = newDetail5;

    togglePopup2();
}