import { IsNotEmpty, IsString } from 'class-validator'

export class CreateUiOptionsRequest {
  @IsString()
  @IsNotEmpty()
  globalBackgroundColor: string

  @IsString()
  @IsNotEmpty()
  globalFontColor: string
}
