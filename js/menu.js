const hamburguesa = document.getElementById('hamburguesa');

hamburguesa.addEventListener('click', () => {
    const despliegue = document.getElementById('despliegue');
    despliegue.style.display = (despliegue.style.display === 'none') ? 'block' : 'none';
});