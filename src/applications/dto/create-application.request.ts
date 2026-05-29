import { IsNotEmpty, IsString } from 'class-validator'

export class CreateApplicationRequest {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  description: string
}
