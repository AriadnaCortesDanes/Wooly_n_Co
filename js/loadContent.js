document.addEventListener('DOMContentLoaded', function() {
    fetch('patterns/dinosaur.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('dinosaur-content').textContent = data;
        })
        .catch(error => {
            console.error('Error al cargar el archivo:', error);
            document.getElementById('dinosaur-content').textContent =  "no no no";
        });
});
