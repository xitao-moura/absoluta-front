import * as https from 'https'
import path from 'path'
const fs = require('fs')

export default function ({ $axios }, inject) {
    const api = $axios.create({
        baseURL:'http://localhost:4000/'
    })
    inject('api', api)
}