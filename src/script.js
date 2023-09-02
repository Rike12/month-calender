// To get the month to display in htag
const monthE1 = document.querySelector (".date h1");
// To get the date to display in ptag
const fullDateE1 = document.querySelector (".date p");

// to get the days element 

const daysE1 = document.querySelector(".days")
// To get new month
const monthInx = new Date().getMonth();

// to get the last day of the month,
//the 0 means the last day = 30 or 31
// monthInx + 1 means the next months
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;



const months = [
    "January",
    "Febraury",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    
];

// to let the month to show in h1
monthE1.innerText = months[monthInx];

// for th date to display in ptag
fullDateE1.innerText = new Date ().toDateString();


//to get the dates of months dynamically

let days = "";

//To get the two empty days
for(let i = firstDay; i > 0; i--) {
    days += `<div class="empty"></div>`;
}
for (let i = 1; i <= lastDay; i++){
if (i === new Date().getDate()){
    days += `<div class="today">${i}</div>`;
} else{
    days += `<div>${i}</div>`;
}
}

daysE1.innerHTML = days;