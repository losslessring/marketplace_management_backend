import { IsNotEmpty } from 'class-validator'

export class UpdateNodeData {
  @IsNotEmpty()
  nodeDataType: string
  @IsNotEmpty()
  nodeData: string
}
