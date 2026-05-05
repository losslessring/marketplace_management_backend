import { IsEmail, IsStrongPassword } from 'class-validator'

export class CreateUserRequest {
  @IsEmail()
  email: string

  @IsStrongPassword()
  password: string
}

export class CreateUserRequestOutput {
  email: string
  id: number
}
