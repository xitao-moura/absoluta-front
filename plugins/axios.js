import * as https from 'https'
import path from 'path'
const fs = require('fs')

export default function ({ $axios }, inject) {
    const api = $axios.create({
        baseURL:'https://abs-api.gnis.com.br/'
    })
    inject('api', api)
}