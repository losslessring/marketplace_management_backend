import { IsNotEmpty, IsNumber } from 'class-validator'

export class Connection {
  @IsNotEmpty()
  @IsNumber()
  fromId: number

  @IsNotEmpty()
  @IsNumber()
  toId: number

  @IsNotEmpty()
  @IsNumber()
  applicationId: number
}
