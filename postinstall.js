#!/usr/bin/env node
import {install } from "esinstall"
import { options, specs } from "./esinstall.js"

const logger = {
  debug() {},
  warn(...args) { console.warn(...args)},
  error(...args) { console.error(...args)}
}

async function main() {
  const { success, stats } = install(specs, {
    dest: './public/web_modules',
    logger,
    ...options
  })

  if(stats) {
    console.log(stats.direct)
  }
}

try { main() } catch (e) {throw e;}