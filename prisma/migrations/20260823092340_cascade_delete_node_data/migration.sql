-- DropForeignKey
ALTER TABLE "NodeData" DROP CONSTRAINT "NodeData_nodeId_fkey";

-- AddForeignKey
ALTER TABLE "NodeData" ADD CONSTRAINT "NodeData_nodeId_fkey" FOREIGN KEY ("nodeId") REFERENCES "NodeTree"("nodeId") ON DELETE CASCADE ON UPDATE CASCADE;
