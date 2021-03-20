export interface IHandleResult {
  newServiceResponse: <T>(
    result?: T,
    error?: Error | string
  ) => IServiceRespone<T>
}

export interface IServiceRespone<T> {
  result?: T
  error?: Error | string
}

const createHandleResult = (): IHandleResult => {
  const newServiceResponse = <T>(
    result?: T,
    error?: Error | string
  ): IServiceRespone<T> => {
    return {
      result,
      error
    }
  }

  return {
    newServiceResponse
  }
}

export default createHandleResult
