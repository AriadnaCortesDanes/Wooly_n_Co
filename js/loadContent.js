document.addEventListener('DOMContentLoaded', function() {
    fetch('patterns/dinosaur.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo.');
            }
            return response.text();
        })
        .then(data => {
            // Reemplazar los saltos de línea con <br> para que se visualicen correctamente en HTML
            const formattedData = data.replace(/\n/g, '<br>');
            document.getElementById('dinosaur-content').innerHTML = formattedData;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('dinosaur-content').textContent = 'No se pudo cargar el archivo.';
        });
});

