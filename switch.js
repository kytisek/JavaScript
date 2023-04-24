let miesiac = Math.floor(Math.random() * 15) + 1;
console.log(miesiac)
let mtext = '';

switch (miesiac) {
    case 1:
    case 2:
    case 3:
        mtext = 'I kwartał'
        break;
    case 4:
    case 5:
    case 6:
        mtext = 'II kwartał'
        break;
    case 7:
    case 8:
    case 9:
        mtext = 'III kwartał'
        break;
    case 10:
    case 11:
    case 12:
        mtext = 'IV kwartał'
        break;
    default:
        mtext = 'Błędny numer miesiaca'

}
document.getElementById('hi').innerHTML = mtext;
document.getElementById('hh').innerHTML = miesiac;
