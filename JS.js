function checkPrime(n) {
    if (n < 2)
        return false
    for (let i = 2; i < n / 2; i++) {
        if (n % i === 0)
            return false
    }
    return true
}

let count = 0
let a = 1

function countPrime(number) {
    while (count < number) {
        if (checkPrime(a)) {
            count++;
            document.write(a + "-");
        }
        a++;
    }
}
countPrime(20)

