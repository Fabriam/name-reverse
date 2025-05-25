const nameReverse = () => {
    let name = document.getElementById('name').value
    name = name.trim()
    let reversed = name.split('').reverse().join('')
    document.getElementById('result').innerHTML = reversed;
}