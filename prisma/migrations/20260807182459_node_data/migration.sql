/*
  Warnings:

  - Added the required column `nodeData` to the `NodeData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NodeData" ADD COLUMN     "nodeData" TEXT NOT NULL;
