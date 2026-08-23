import { IsNotEmpty } from 'class-validator'

export class UpdateNodeData {
  @IsNotEmpty()
  nodeId: number
  @IsNotEmpty()
  nodeDataType: string
  @IsNotEmpty()
  nodeData: string
}
