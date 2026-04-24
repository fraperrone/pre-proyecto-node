// vamos a ahce r un programa para hacer consulta mediante consola a fakeapi
// para eso vamos a usar el metodo fetch, que es una funcion que nos permite hacer peticiones http desde javascript
// para usar fetch en node, tenemos que instalar la libreria node-fetch
// npm install node-fetch
import fetch from 'node-fetch'

// vamos a hacer una consulta a la api de fakeapi para obtener todos los usuarios

const method = process.argv[2]
const resource = process.argv[3]

// hacemos para title price y category
const title = process.argv[4]
const price = process.argv[5]
const category = process.argv[6]

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
    // ahora hacemos el metodo POST para crear un nuevo producto con title price y category
    else if (method === 'POST' && resource === 'products') {
      try {
        const response = await fetch(`https://fakestoreapi.com/${resource}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: title,
            price: price,
            category: category
          })
        })
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }


}

main()
