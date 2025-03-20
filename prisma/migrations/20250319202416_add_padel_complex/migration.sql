-- CreateTable
CREATE TABLE "PadelComplex" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "PadelComplex_pkey" PRIMARY KEY ("id")
);
