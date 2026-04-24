// vamos a ahce r un programa para hacer consulta mediante consola a fakeapi
// para eso vamos a usar el metodo fetch, que es una funcion que nos permite hacer peticiones http desde javascript
// para usar fetch en node, tenemos que instalar la libreria node-fetch
// npm install node-fetch
import fetch from 'node-fetch'

// vamos a hacer una consulta a la api de fakeapi para obtener todos los usuarios

const method = process.argv[2]
const resource = process.argv[3]

async function main() {
  // hacemos primero el metodo GET
  if (method === 'GET' && resource === 'products') {
    try {
      const response = await fetch(`https://fakestoreapi.com/${resource}`)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  // ahora por producto especifco  
    else if (method === 'GET' && resource.startsWith('products/')) {
      try {
        const response = await fetch(`https://fakestoreapi.com/${resource}`)
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }

}

main()
