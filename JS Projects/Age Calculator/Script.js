let userInput = document.getElementById("date")
userInput.max = new Date().toISOString().split("T")[0]

function calculateAge() {
    let birthDate = new Date(userInput.value)

    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth() + 1;
    let birthDay = birthDate.getDate();

    let todayDate = new Date;

    let todayYear = todayDate.getFullYear();
    let todayMonth = todayDate.getMonth() + 1;
    let todayDay = todayDate.getDate();


    let ageInYear = (todayYear - birthYear);


    let ageInMonth;

    if (birthMonth > todayMonth) {
        ageInMonth = (12 + todayMonth) - birthMonth;
    }
    else (ageInMonth = todayMonth - birthMonth)



    let ageInDay;
    if (todayDay >= birthDay) {
        ageInDay = todayDay - birthDay
    }
    else {
        ageInMonth--;
        ageInDay = exactDay(birthYear, birthMonth) + todayDay - birthDay;
    }

    if (ageInMonth > 0) {
        ageInMonth + 11;
        ageInYear--;
    }


    function exactDay(year, month) {
        return new Date(year, month, 0).getDate();
    }

    // console.log(ageInDay + " day");
    // console.log(ageInMonth + " Month");
    // console.log(ageInYear + " Year");

    let result = document.getElementById("result");
    result.innerHTML = (`"You are ${ageInYear} Years ${ageInMonth} Months ${ageInDay} days Old"`);
}

