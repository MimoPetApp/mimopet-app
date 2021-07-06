import axios from 'axios'

const Api = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/posts' })

export default Api
/* const Api = axios.create( //baseURL: 'http://my-json-server.typicode.com/diegopinho/fakeapi-testes'
    //baseURL: 'https://makeup-api.herokuapp.com/api/v1/products.json'baseURL: 'https://jsonplaceholder.typicode.com/posts'
});
 */
