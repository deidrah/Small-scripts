(function() {
    const button = document.getElementById("getRandomNumbers");
    const numbersOutput = document.getElementById('showRandomNumbers');

    function getRandomNumbers(min, max) {
        return Math.round(Math.random() * (max-min) + min);
    } 
    
    function showRandomNumbers() {
        const numbers = [];
        let random;

        for(let i=0; i<5; i++) {
            random = getRandomNumbers(1,100);
            while(numbers.indexOf(random) !== -1) {
                random = getRandomNumbers(1,100);
            }
            numbers.push(random);  
        }

        numbersOutput.value = numbers.join(", ");
    }
    button.onclick = showRandomNumbers;
})();