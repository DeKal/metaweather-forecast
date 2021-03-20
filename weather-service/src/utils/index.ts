import createHandleNetwork, { IHandleNetwork } from './handleNetwork'
import createHandleResult, { IHandleResult } from './handleResult'

const handleResult = createHandleResult()
const handleResponse = createHandleNetwork()

interface Utils extends IHandleResult, IHandleNetwork {}

const module: Utils = Object.freeze({
  ...handleResponse,
  ...handleResult
})

export default module
