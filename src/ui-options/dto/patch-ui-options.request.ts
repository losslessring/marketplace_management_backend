import { PartialType } from '@nestjs/mapped-types'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { CreateUiOptionsRequest } from './create-ui-options.request'

export class PatchUiOptionsRequest extends PartialType(CreateUiOptionsRequest) {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  globalBackgroundColor: string

  @IsString()
  @IsNotEmpty()
  globalFontColor: string
}
