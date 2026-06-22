import { IsNotEmpty, IsNumber } from 'class-validator'

class CreateTreeNode {
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

export class CreateTreeNodesRequest {
  @IsNotEmpty()
  nodes: CreateTreeNode[]

  @IsNotEmpty()
  @IsNumber()
  applicationId: number
}
