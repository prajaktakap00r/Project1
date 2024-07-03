var value = localStorage.getItem("numberLS");
var result = Number(value);
const seatsInfo = document.querySelector("p")
const TotalSeats = 82;
const refreshBtn = document.querySelector(".refreshBtn")


//fucntion for selecting seats 
refreshBtn.addEventListener("click", () => {
    seatsInfo.innerText = `Total seats left: ${TotalSeats - result}`
    document.querySelectorAll(".seats").forEach(function (value, i) {
        if(i<=result-1){
            value.style.backgroundColor = 'green';
        }
    });
})

