import { Response } from 'express'

type DynamicContent = string | Record<string, unknown> | null | undefined

export interface IHandleNetwork {
  sendErrorResponse: (
    res: Response,
    content: DynamicContent,
    message: string | Error | undefined | null,
    status?: number
  ) => void
  sendSuccessResponse: (
    res: Response,
    content: DynamicContent,
    message: string,
    status?: number
  ) => void
}

const createHandleResponse = (): IHandleNetwork => {
  const sendErrorResponse = function (
    res: Response,
    content: DynamicContent,
    message: string | Error | undefined | null,
    status?: number
  ) {
    const data = {
      success: false,
      message:
        message && typeof message !== 'string' ? message?.message : message,
      data: content
    }

    res.status(!status ? 500 : status).json(data)
  }
  const sendSuccessResponse = function (
    res: Response,
    content: DynamicContent,
    message: string,
    status?: number
  ) {
    const data = {
      success: true,
      message,
      data: content
    }

    res.status(!status ? 200 : status).json(data)
  }

  return {
    sendErrorResponse,
    sendSuccessResponse
  }
}

export default createHandleResponse
