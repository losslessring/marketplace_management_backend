-- CreateTable
CREATE TABLE "UiOption" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "globalBackgroundColor" TEXT NOT NULL,
    "globalFontColor" TEXT NOT NULL,

    CONSTRAINT "UiOption_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UiOption" ADD CONSTRAINT "UiOption_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
