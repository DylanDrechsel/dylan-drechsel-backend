-- CreateTable
CREATE TABLE "ConfigSettings" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "ConfigSettings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ConfigSettings_id_key" ON "ConfigSettings"("id");
