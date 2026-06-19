import { IsNotEmpty, IsNumber } from 'class-validator'

export class CreateTreeNodeRequest {
  @IsNotEmpty()
  @IsNumber()
  positionX: number

  @IsNotEmpty()
  @IsNumber()
  positionY: number

  @IsNotEmpty()
  @IsNumber()
  nodeId: number

  @IsNotEmpty()
  @IsNumber()
  applicationId: number
}
