import express from 'express';
declare const notFound: (req: express.Request, res: express.Response, next: express.NextFunction) => void;
declare const errorHandler: (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => void;
export { notFound, errorHandler };
