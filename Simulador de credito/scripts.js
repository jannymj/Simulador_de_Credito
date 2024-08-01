function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function calcularInteresSimple() {
    const capital = parseFloat(document.getElementById('simpleCapital').value);
    const tasa = parseFloat(document.getElementById('simpleTasa').value);
    const tiempo = parseFloat(document.getElementById('simpleTiempo').value);

    const interes = capital * tasa * tiempo;
    const montoFinal = capital + interes;

    document.getElementById('simpleResultado').innerText = `Interés: ${interes.toFixed(2)}\nMonto Final: ${montoFinal.toFixed(2)}`;
}

function calcularInteresCompuesto() {
    const capital = parseFloat(document.getElementById('compoundCapital').value);
    const tasa = parseFloat(document.getElementById('compoundTasa').value);
    const tiempo = parseFloat(document.getElementById('compoundTiempo').value);
    const n = parseFloat(document.getElementById('compoundN').value);

    let tabla = '<tr><th>Periodo</th><th>Capital Inicial</th><th>Interés Ganado</th><th>Monto Final</th></tr>';
    const periods = tiempo * n;

    for (let i = 1; i <= periods; i++) {
        const montoFinal = capital * Math.pow((1 + tasa / n), i);
        const interes = montoFinal - capital;
        tabla += `<tr>
                    <td>${i}</td>
                    <td>${capital.toFixed(2)}</td>
                    <td>${interes.toFixed(2)}</td>
                    <td>${montoFinal.toFixed(2)}</td>
                  </tr>`;
    }

    document.getElementById('compoundTabla').innerHTML = tabla;
    document.getElementById('compoundResultado').innerText = `Monto Final: ${capital * Math.pow((1 + tasa / n), periods).toFixed(2)}`;
}

function calcularValorPresente() {
    const montoFuturo = parseFloat(document.getElementById('presentFuturo').value);
    const tasa = parseFloat(document.getElementById('presentTasa').value);
    const tiempo = parseFloat(document.getElementById('presentTiempo').value);
    const n = parseFloat(document.getElementById('presentN').value);

    let tabla = '<tr><th>Periodo</th><th>Valor Presente</th><th>Interés</th><th>Monto Futuro</th></tr>';
    const periods = tiempo * n;

    for (let i = 1; i <= periods; i++) {
        const valorPresente = montoFuturo / Math.pow((1 + tasa / n), i);
        const interes = montoFuturo - valorPresente;
        tabla += `<tr>
                    <td>${i}</td>
                    <td>${valorPresente.toFixed(2)}</td>
                    <td>${interes.toFixed(2)}</td>
                    <td>${montoFuturo.toFixed(2)}</td>
                  </tr>`;
    }

    document.getElementById('presentTabla').innerHTML = tabla;
    document.getElementById('presentResultado').innerText = `Valor Presente: ${montoFuturo / Math.pow((1 + tasa / n), periods).toFixed(2)}`;
}
