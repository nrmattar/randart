function articulo_insert() {

    let titulo_ingresado = document.getElementById("titulo").value
    let autor_ingresado = document.getElementById("autor").value
    let descripcion_ingresado = document.getElementById("descripcion").value
    let precio_ingresado = document.getElementById("precio").value
    let imagen_ingresado = document.getElementById("imagen").value

    console.log(titulo_ingresado,autor_ingresado,descripcion_ingresado,precio_ingresado,imagen_ingresado);

    let articulo_json = {
        titulo: titulo_ingresado,
        autor: autor_ingresado,
        descripcion: descripcion_ingresado,
        precio: precio_ingresado,
        imagen: imagen_ingresado        
    }
    console.log(articulo_json);
    
    let url = "http://localhost:5000/articulo_insert"
    var options = {
        body: JSON.stringify(articulo_json),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            //window.location.href = "./articulos.html";  
            
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}


function articulo_update() {
    let id = document.getElementById("id").value
    let titulo_ingresado = document.getElementById("titulo").value
    let autor_ingresado = document.getElementById("autor").value
    let descripcion_ingresado = document.getElementById("descripcion").value
    let precio_ingresado = document.getElementById("precio").value
    let imagen_ingresado = document.getElementById("imagen").value

    let articulo_json = {
        titulo: titulo_ingresado,
        autor: autor_ingresado,
        descripcion: descripcion_ingresado,
        precio: precio_ingresado,
        imagen: imagen_ingresado   
        
    }
    let url = "http://localhost:5000/articulo_update/"+id
    var options = {
        body: JSON.stringify(articulo_json),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        // el navegador seguirá automáticamente las redirecciones y
        // devolverá el recurso final al que se ha redirigido.
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")

            //Puedes utilizar window.location.href para obtener la URL actual, redirigir a otras páginas
            //window.location.href = "./articulos.html";  
          
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al articulo_update")
        })      
}


function articulo_delete(id) {
    let id = document.getElementById("id").value
   
    let url = "http://localhost:5000/articulo_delete/"+id
    var options = {
        method: 'DELETE',
        // el navegador seguirá automáticamente las redirecciones y
        // devolverá el recurso final al que se ha redirigido.
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("Eliminado")
            alert("Registro eliminado")

            //Puedes utilizar window.location.href para obtener la URL actual, redirigir a otras páginas
            //window.location.href = "./galerias.html";  
          
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al articulo_delete")
        }) 
}

//-------------------------------------------------------------------------------

function galeria_insert() {

    let razon_social_ingresado = document.getElementById("razon_social").value
    let mapa_url_ingresado = document.getElementById("mapa_url").value
    let observaciones_ingresado = document.getElementById("observaciones").value

    console.log(razon_social_ingresado,mapa_url_ingresado,observaciones_ingresado);

    let galeria_json = {
        razon_social: razon_social_ingresado,
        mapa_url: mapa_url_ingresado,
        observaciones: observaciones_ingresado        
    }
    console.log(galeria_json);
    
    let url = "http://localhost:5000/galeria_insert"
    var options = {
        body: JSON.stringify(galeria_json),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            //window.location.href = "./articulos.html";  
            
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}


function galeria_update() {
    let id = document.getElementById("id").value
    let razon_social_ingresado = document.getElementById("razon_social").value
    let mapa_url_ingresado = document.getElementById("mapa_url").value
    let observaciones_ingresado = document.getElementById("observaciones").value

    let galeria_json = {
        razon_social: razon_social_ingresado,
        mapa_url: mapa_url_ingresado,
        observaciones: observaciones_ingresado   
        
    }
    let url = "http://localhost:5000/galeria_update/"+id
    var options = {
        body: JSON.stringify(galeria_json),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        // el navegador seguirá automáticamente las redirecciones y
        // devolverá el recurso final al que se ha redirigido.
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")

            //Puedes utilizar window.location.href para obtener la URL actual, redirigir a otras páginas
            //window.location.href = "./galerias.html";  
          
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al galeria_update")
        })      
}


function galeria_delete(id) {
    let id = document.getElementById("id").value
   
    let url = "http://localhost:5000/galeria_delete/"+id
    var options = {
        method: 'DELETE',
        // el navegador seguirá automáticamente las redirecciones y
        // devolverá el recurso final al que se ha redirigido.
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("Eliminado")
            alert("Registro eliminado")

            //Puedes utilizar window.location.href para obtener la URL actual, redirigir a otras páginas
            //window.location.href = "./galerias.html";  
          
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al galeria_delete")
        }) 
}