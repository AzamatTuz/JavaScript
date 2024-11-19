let a = +prompt("Cан енгыз");

function san(num) {
    if (num % 2 == 0) {
        return num + " jup san";
    } else if (num % 2 != 0) {
        return num + " tag san"
    } else {
        return "san engiz"
    }
}

alert(san(a))