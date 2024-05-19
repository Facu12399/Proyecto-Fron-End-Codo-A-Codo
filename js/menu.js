const hamburguesa = document.getElementById('hamburguesa');

hamburguesa.addEventListener('click', function(){
    const despliegue = document.getElementById('despliegue');
    despliegue.style.display = (despliegue.style.display === 'block') ? 'none' : 'block';
});