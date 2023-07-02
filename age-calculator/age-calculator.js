function calculate() {
    setInterval(() => {
        let birthdate = new Date(document.getElementById('birthdate').value);
        let now = new Date();
        let ageInMs = now.getTime() - birthdate.getTime();

        let ageInS = ageInMs / 1000;
        let ageInMins = ageInS / 60;
        let ageInHrs = ageInMins / 60;
        let ageInDays = ageInHrs / 24;

        document.querySelector('#years').innerHTML = Math.floor(ageInDays / 365);
        document.querySelector('#months').innerHTML = Math.floor(ageInDays / 30.4375);
        document.querySelector('#days').innerHTML = Math.floor(ageInDays);
        document.querySelector('#hours').innerHTML = Math.floor(ageInHrs);
        document.querySelector('#minutes').innerHTML = Math.floor(ageInMins);
        document.querySelector('#seconds').innerHTML = Math.floor(ageInS);
        document.querySelector('#seconds').style.borderBottom = '1px grey solid';
    }, 1000);
}

function reset() {
    window.location.reload();
}
