import { IsNotEmpty, IsString } from 'class-validator'

export class CreateCoreNodeRequest {
  @IsString()
  @IsNotEmpty()
  name: string
}
