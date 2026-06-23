import { IsNotEmpty, IsNumber } from 'class-validator'
import { TreeNode } from './tree-node'

export class FullUpdateTreeNodes {
  @IsNotEmpty()
  nodes: TreeNode[]

  @IsNotEmpty()
  @IsNumber()
  applicationId: number
}
