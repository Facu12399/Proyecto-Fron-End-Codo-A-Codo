const botonEnviar = document.getElementById('btn-enviar');
const msg = document.getElementById('msg-validar');

const validarForm = () =>{

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const localidad = document.getElementById('localidad').value;
    const codigo_postal = document.getElementById('cp').value;
    const pregunta = document.querySelector('input[name=pregunta]:checked').value;

    if(nombre == '' || apellido == '' || telefono == '' || email == '' ||
        address == '' || localidad == '' || codigo_postal == ''){
            return false;
    }else{
            return true;
    }
}

validarForm();

botonEnviar.addEventListener('click', (event)=>{
    console.log(validarForm());
    if(validarForm()){
        alert('Se ha enviado el formulario');
    } else{
        event.preventDefault();
        msg.style.display = 'inline';
    }
})

