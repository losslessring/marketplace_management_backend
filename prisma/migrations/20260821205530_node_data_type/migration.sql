/*
  Warnings:

  - You are about to drop the column `nodeType` on the `NodeData` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "NodeData" DROP COLUMN "nodeType",
ADD COLUMN     "nodeDataType" TEXT NOT NULL DEFAULT 'text';
