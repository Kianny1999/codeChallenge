document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const grupo = document.getElementById("grupo").value;

    const data = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento,
        grupo: grupo
    };

    fetch("https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo275", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        alert('Enviado con éxito');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
