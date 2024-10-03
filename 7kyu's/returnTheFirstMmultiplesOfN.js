/* Return The First M Multiples Of N */
// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.
// Ex.
// multiples(3, 5.0)
// should return
// [5.0, 10.0, 15.0]

function multiples(m, n) {
    let result = [] // create an empty arr to store multiples
    for (let i = 1; i <= m; i++) { // Initialize loop that runs from 1 to m
        result.push(i * n) // multiply loop counteer i by n and push the result into the new arr
    }
    return result // return the new arr of multiples
}