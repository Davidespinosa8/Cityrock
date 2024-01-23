const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSnkHPr03d38NrR1r-PZ1W-cKkn5OkJDw_zI-y0TjIM_y0jH_ITw_y8kN40U_Am2BQPJdfZN_tFENSC/pub?output=csv";
fetch(sheetURL)
    .then(response => response.text())
    .then(data => {
        // Dividir el CSV en filas y procesar cada fila
        const rows = data.split('\n');
        rows.forEach(row => {
            const [id, precio] = row.split(',');

            // Obtener el elemento span por su ID
            const precioElement = document.getElementById(`${id}-precio`);

            // Verificar si el elemento existe antes de intentar actualizarlo
            if (precioElement) {
                // Actualizar el precio en el HTML
                precioElement.innerText = `$${precio}`;
            } else {
                console.error(`Error: Elemento con ID '${id}-precio' no encontrado`);
            }
        });
    })
    .catch(error => console.error('Error al obtener datos:', error));