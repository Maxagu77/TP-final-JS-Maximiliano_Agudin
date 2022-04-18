console.log("TP final Entrega");


let cuadro = []

const boton = document.getElementById("boton")
     boton.addEventListener ('click', agregarProducto);

function agregarProducto (){
     let prod = document.getElementById("producto").value || alert("Ingrese un producto")  
     let pCompra = document.getElementById("pCompra").value
     let pVenta = document.getElementById("pVenta").value
     let cantComprada = document.getElementById("cantComprada").value
     let cantVendida = document.getElementById("cantVendida").value
     let pGanancia = pVenta - pCompra
     let ganancia = parseFloat (pGanancia)
     let cStock = cantComprada - cantVendida
     let stock = parseInt(cStock)
     let tGanancia = cantVendida * ganancia
     let gananciaTotal = parseFloat(tGanancia)
    
     cantVendida > cantComprada ? // Aplico Operador Ternario
     
     // Aplico Libreria

     Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'La cantidad vendida no puede superar a la cantidad que se compró!',
      footer: '<a href="">Por favor, vuelva ingresar las cantidades</a>' 
    }) :

     cuadro.push ([prod, pCompra, pVenta, ganancia, cantComprada, cantVendida, stock, gananciaTotal]);

     construirCuadro()

  }

function construirCuadro() {

  let total = 0
  let tabla = "<thead><tr><th>Producto</th><th>Precio de compra</th><th>Precio de venta</th><th>Ganancia por producto</th><th>Cantidad comprada</th><th>Cantidad vendida</th><th>Stock</th><th>Ganancia Total</th></tr></thead><tbody>"

  for (let i = 0 ; i < cuadro.length ; i++){

    tabla += `<tr><td>${cuadro[i][0]}</td><td>${cuadro[i][1]}</td><td>${cuadro[i][2]}</td><td>${cuadro[i][3]}</td><td>${cuadro[i][4]}</td><td>${cuadro[i][5]}</td><td>${cuadro[i][6]}</td><td>${cuadro[i][7]}</td></tr>`

    localStorage.setItem('valores', JSON.stringify(tabla))
    const tablaGuardada = localStorage.getItem('valores')
    
    console.log(tablaGuardada);
    const nuevoCuadro = JSON.parse(tablaGuardada)
    console.log(nuevoCuadro);
   
    total += parseFloat(cuadro[i][7])
  }

   tabla += `<tr><td></td><td></td><td></td><td></td><td></td><td></td><td>Ganancia Total</td><td>${total}</td></tr></tbody>`

   document.getElementById("tabla").innerHTML = tabla
}

   fetch('https://jsonplaceholder.typicode.com/users')

    .then(response => response.json())
    .then(datos => {
      console.log(datos)
   
       agregarATabla(datos)
       agregarPhoneTabla(datos)
    })

  function agregarATabla(datos){
    let clientes = document.getElementById("clientes")
    datos.forEach(n => {
       console.log(n.name);
    let li = document.createElement('li')
    li.innerHTML = n.name
    clientes.appendChild(li)
    });
  }
  function agregarPhoneTabla(datos){
    let telefonos = document.getElementById("telefonos")
    datos.forEach(p => {
       console.log(p.phone);
    let li = document.createElement('li')
    li.innerHTML = p.phone
    telefonos.appendChild(li)
    });
  }
   
