import { IsNotEmpty, IsNumber } from 'class-validator'
import { Connection } from './connection'

export class FullUpdateConnections {
  @IsNotEmpty()
  connections: Connection[]

  @IsNotEmpty()
  @IsNumber()
  applicationId: number
}
