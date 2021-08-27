import axios from 'axios'
const baseUrl = 'http://localhost:9000/product'
let token = null

const getAll = async () => {
    const request = await axios.get(baseUrl)
    return request.data
}

const create = async (body) => {
    const resp = await axios.post(baseUrl, body, { headers: { 'Content-Type': 'application/json' } } )
    return resp.data
}

const change = async (body) => {
    const resp = await axios.put(baseUrl + '/' + body.id, body, { headers: { 'Authorization': token, 'Content-Type': 'application/json' } } )
    return resp.data
}

const comment = async (comment, id) => {
    const resp = await axios.post(baseUrl + '/' + id + '/comments', comment, { headers: { 'Authorization': token, 'Content-Type': 'application/json' } } )
    return resp.data
}

const deleteItem = async (id) => {
    await axios.delete(baseUrl + '/' + id)
}

export default { getAll, create, change, deleteItem, comment }