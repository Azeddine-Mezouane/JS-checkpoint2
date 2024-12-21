// Inverser une chaîne
function reverseString(str) {
    var characters = str.split('');
    var reversed = characters.reverse();
    return reversed.join('');
}

console.log(reverseString("hello")); // Output: "olleh"

// Compter les caractères
function countCharacters(str) {
    return str.length;
}

console.log(countCharacters("hello")); // Output: 5

// Mettre les mots en majuscule
function capitalizeWords(sentence) {
    var words = sentence.split(' ');
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.substring(1);
    }
    return words.join(' ');
}

console.log(capitalizeWords("hello world")); // Output: "Hello World"

// Rechercher le maximum dans un tableau
function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([1, 2, 3, 4, 5])); // Output: 5

// Rechercher le minimum dans un tableau
function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(findMin([1, 2, 3, 4, 5])); // Output: 1

// Somme d'un tableau
function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// Filtrer le tableau selon une condition
function filterArray(arr, condition) {
    var filtered = [];
    for (var i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

function greaterThanThree(num) {
    return num > 3;
}

console.log(filterArray([1, 2, 3, 4, 5], greaterThanThree)); // Output: [4, 5]

// Factorielle d'un nombre
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

// Vérification des nombres premiers
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false

// Générer la suite de Fibonacci
function fibonacci(n) {
    var sequence = [0, 1];
    for (var i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    if (n === 1) {
        return [0];
    }
    return sequence.slice(0, n);
}

console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
