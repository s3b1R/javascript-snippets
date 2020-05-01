// 'use strict'  // optional, weil im Browser via <script type="module" geladen

// import default
import Logger from './logger.module.js'
// oder als named import
//import {default as Logger} from './logger.module.js'
// import explicit
import {PI as pii} from './logger.module.js'
import {PI} from './logger.module.js'

let l = new Logger(console.log)
l.warn('hi')
l.log('du')
l.log([pii, PI, Logger.PI])
