import { IsNotEmpty, IsNumber } from 'class-validator'

export class TreeNode {
  @IsNotEmpty()
  @IsNumber()
  positionX: number

  @IsNotEmpty()
  @IsNumber()
  positionY: number

  @IsNotEmpty()
  @IsNumber()
  nodeId: number
}
