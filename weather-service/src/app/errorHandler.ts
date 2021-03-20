import createError from 'http-errors'
import express, { NextFunction, Request, Response } from 'express'

const createErrorHandler = (app: express.Express): void => {
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404))
  })

  // error handler
  app.use(function (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(500).send('Internal server error!')
    next()
  })
}

export default createErrorHandler
