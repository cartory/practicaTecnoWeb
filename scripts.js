// MODAL VLADA (CHART, MUSIC)

// MODALS CONFIG
let modalCharts = [
    document.getElementById("chartModalVlada"),
    document.getElementById("chartModalCari"),
    document.getElementById("chartModalPablo"),
];

let btnCharts = [
    document.getElementById("btnChartVlada"),
    document.getElementById("btnChartCari"),
    document.getElementById("btnChartPablo"),
];


let btnDisplays = [
    document.getElementById("btnDisplayVlada"),
    document.getElementById("btnDisplayCari"),
    document.getElementById("btnDisplayPablo"),
];

let displays = [
    document.getElementById("displayVlada"),
    document.getElementById("displayCari"),
    document.getElementById("displayPablo"),
];

let span = document.getElementsByClassName("close")[0];

for (let i = 0; i < btnCharts.length; i++) {
    const btn = btnCharts[i];
    const btnDisplay = btnDisplays[i];

    if (btn) {
        btn.onclick = () => {
            modalCharts[i].style.display = "block";
        }
    }

    if (btnDisplay) {
        btnDisplay.onclick = () => {
            displays[i].style.display = "block";
        }
    }
}

span.onclick = () => {
    modalCharts.forEach(modal => {
        if (modal) {
            modal.style.display = "none";
        }
    })

    displays.forEach(modal => {
        if (modal) {
            modal.style.display = "none";
        }
    })
}

window.onclick = event => {
    modalCharts.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    });

    displays.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    })
}
