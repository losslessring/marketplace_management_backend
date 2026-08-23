import { IsNotEmpty, IsNumber } from 'class-validator'

export class DeleteTreeNodesRequest {
  @IsNotEmpty()
  @IsNumber()
  applicationId: number

  @IsNotEmpty()
  ids: number[]
}
