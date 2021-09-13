import jwt from 'jsonwebtoken'
import User from '../models/userModel'
import { BaseRequest } from '../controllers/BaseRequest'
import { Express, Request, Response, NextFunction } from 'express';

const express = require('express');
const app: Express = express();

const asyncHandler = require('express-async-handler')

const protect = asyncHandler(async (req: BaseRequest, res: Response, next: NextFunction) => {
  let token

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, process.env.JWT_SECRET as string)

      await User.findById((<any>decoded).id).select('-password') //req.user = 

      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

const admin = asyncHandler(async (req: BaseRequest, res: Response, next: NextFunction) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as an admin')
  }
})

export { protect, admin }
