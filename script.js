document.getElementById('additionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const a = parseFloat(document.getElementById('inputA').value);
    const b = parseFloat(document.getElementById('inputB').value);

    const c = a + b;
    document.getElementById('result').textContent = `The result of a + b is: ${c}`;
});
