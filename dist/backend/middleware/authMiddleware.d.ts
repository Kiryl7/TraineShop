import express from 'express'

declare const protect: any
declare const admin: (req: express.Request, res: express.Response, next: express.NextFunction) => void
export { protect, admin }
