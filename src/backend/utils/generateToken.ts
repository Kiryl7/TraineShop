import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../data/secret'

const generateToken = (id: string) => {
  return jwt.sign({ id }, config.secret, {
    expiresIn: '30d',
  })
}

export default generateToken
