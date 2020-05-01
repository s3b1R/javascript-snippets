// 'use strict'  // optional, weil im Browser via <script type="module" ...> geladen

// import named export
import {Logger} from './logger.module.js'
import {PI} from './logger.module.js'
// rename import
import {PI as pii} from './logger.module.js'

let l = new Logger(console.log)
l.warn('hi')
l.log('du')
l.log([pii, PI, Logger.PI])
