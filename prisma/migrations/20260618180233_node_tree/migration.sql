-- CreateTable
CREATE TABLE "NodeTree" (
    "id" SERIAL NOT NULL,
    "positionX" INTEGER NOT NULL,
    "positionY" INTEGER NOT NULL,
    "nodeId" INTEGER NOT NULL,

    CONSTRAINT "NodeTree_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NodeTree" ADD CONSTRAINT "NodeTree_nodeId_fkey" FOREIGN KEY ("nodeId") REFERENCES "CoreNode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
