/*
  Warnings:

  - You are about to drop the column `type` on the `NodeData` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "NodeData" DROP COLUMN "type",
ADD COLUMN     "nodeType" TEXT NOT NULL DEFAULT 'text';
