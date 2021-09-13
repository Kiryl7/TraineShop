import express from 'express'
import { AuthUser } from './AuthUser'
export interface BaseRequest extends express.Request {
  user: AuthUser
}
