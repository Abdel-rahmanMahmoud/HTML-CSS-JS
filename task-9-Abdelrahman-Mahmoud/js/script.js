const students = [
    { id: 1, name: "Ahmed Mohammed", science: 85, math: 72, computer: 91, english: 68 },
    { id: 2, name: "Youssef Ali", science: 78, math: 89, computer: 65, english: 92 },
    { id: 3, name: "Omar Hassan", science: 55, math: 64, computer: 78, english: 81 },
    { id: 4, name: "Karim Ibrahim", science: 92, math: 88, computer: 95, english: 76 },
    { id: 5, name: "Mahmoud Samir", science: 65, math: 59, computer: 72, english: 68 },
    { id: 6, name: "Tarek Waleed", science: 80, math: 75, computer: 82, english: 79 },
    { id: 7, name: "Adel Khaled", science: 40, math: 52, computer: 53, english: 54 },
    { id: 8, name: "Waleed Hossam", science: 95, math: 90, computer: 88, english: 94 }
];

function calculateAverage(student) {
    return ((student.science + student.math + student.computer + student.english) / 4).toFixed(1);
}

function getStatus(avg) {
    return avg >= 50 ? "Passed" : "Failed";
}

let showAvg = false;
let showStatus = false;

function showTable() {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = ""; // Clear previous rows

    students.forEach(student => {
        const avg = calculateAverage(student);
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.science}</td>
            <td>${student.math}</td>
            <td>${student.computer}</td>
            <td>${student.english}</td>
            <td>${showAvg ? avg : ''}</td>
            <td>${showStatus ? `<span class="${avg >= 50 ? 'passed' : 'failed'}">${getStatus(avg)}</span>` : ''}</td>
        `;

        tbody.appendChild(row);
    });
}

// Initial call to display the table
showTable();

// Event listeners for buttons
document.getElementById("calculateAvg").addEventListener("click", () => {
    showAvg = !showAvg;
    showTable();
});

// Event listener for status button
document.getElementById("checkStatus").addEventListener("click", () => {
    showStatus = !showStatus;
    showTable();
});
