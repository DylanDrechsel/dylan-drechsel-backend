/*
  Warnings:

  - You are about to drop the `ConfigSettings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ConfigSettings";

-- CreateTable
CREATE TABLE "ConfigSetting" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "ConfigSetting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ConfigSetting_id_key" ON "ConfigSetting"("id");
