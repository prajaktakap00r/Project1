//Guest List

const Guest = [
    {
        Fname: 'prajakta',
        Lname: 'kapoor'
    }, {
        Fname: 'hrishabh',
        Lname: 'bharadwaj'
    }, {
        Fname: 'himanshu',
        Lname: 'sahu'
    }, {
        Fname: 'Priyansh',
        Lname: 'pal'
    }, {
        Fname: 'atharav',
        Lname: 'singh'
    }, {
        Fname: 'raktim',
        Lname: 'kalita'
    }, {
        Fname: 'khushi',
        Lname: 'kumari'
    }, {
        Fname: 'tanay',
        Lname: 'chakraborty'
    }, {
        Fname: 'bijit',
        Lname: 'talukdar'
    }, {
        Fname: 'bhumi',
        Lname: 'budhiraja'
    }, {
        Fname: 'Urvi',
        Lname: 'kotwal'
    },
];


//variables
let seatCount = 0;
let Sitting = 0;
let bttn = document.querySelector(".RegisterButton");
let First = document.querySelector(".FirstName")
let Last = document.querySelector(".LastName")
let Mobno = document.querySelector(".Mobno")
let Tbody = document.querySelector("#TableBody")
let count = 1;
let GuestsTotal = 1;
const toastAlert = document.getElementById('toastAlertSu');
const toastAlertUn = document.getElementById('toastAlertUn');
const toastAlertNg = document.getElementById('toastAlertNG');
const Message = document.querySelector("#ToastMessage")
const MessageUn = document.querySelector("#ToastMessageUn")
const MessageNg = document.querySelector("#ToastMessageNG")
var PresentGuest = [];
let countt;

//Function to check if Some First Name or last name is added
function IsFieldNotEmpty() {
    if (First.value != "" && Last.value != "" && Mobno.value != "") {
        return true
    } else {
        return false
    }
}


//Function to add present guest in an array
function ArrayOfPresentGuest() {
    PresentGuest.push(First.value)
}

//Function to check if guest is already added to the table or not
function IsAlreadyAdded() {
    countt = PresentGuest.includes(First.value)
    return countt;
}

//Function to check if guest is present in the guest list or not
function IsaGuest() {
    const check = Guest.some(e => e.Fname === First.value);
    return check;
}

//function to return seat count
function Seats() {
    seatCount = seatCount + 1
    return seatCount
}

//main function
bttn.addEventListener("click", () => {
    if (IsFieldNotEmpty() != false) {
        if (IsaGuest() == true) {
            if (IsAlreadyAdded() != true) {
                ArrayOfPresentGuest();
                let row = document.createElement("tr");
                let colum1 = document.createElement("th");
                let FIRST = document.createElement("td");
                let SECOND = document.createElement("td");
                let THIRD = document.createElement("td");
                colum1.innerText = count;
                FIRST.innerText = First.value;
                SECOND.innerText = Last.value;
                THIRD.innerText = Mobno.value;
                row.append(colum1);
                row.append(FIRST);
                row.append(SECOND);
                row.append(THIRD);
                Tbody.append(row);
                count = count + 1;
                Sitting = Seats();
                localStorage.setItem("numberLS", Sitting);
                Message.innerText = `Your entry of ${First.value} is added`
                const toast = new bootstrap.Toast(toastAlert);
                toast.show();
                First.value = null;
                Last.value = null;
                Mobno.value = null;
            } else {
                MessageUn.innerText = `Guest Already Added`
                const toast = new bootstrap.Toast(toastAlertUn);
                toast.show();
                First.value = null;
                Last.value = null;
                Mobno.value = null;
            }
        } else {
            MessageUn.innerText = `This Person is not in your guest List`
            const toast = new bootstrap.Toast(toastAlertUn);
            toast.show();
            First.value = null;
            Last.value = null;
            Mobno.value = null;
        }
    } else {
        MessageUn.innerText = `Enter a valid First and Last name`
        const toast = new bootstrap.Toast(toastAlertUn);
        toast.show();
        First.value = null;
        Last.value = null;
        Mobno.value = null;
    }
})

