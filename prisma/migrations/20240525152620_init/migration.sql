-- CreateTable
CREATE TABLE "WaterIntakeEntry" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WaterIntakeEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyGoal" (
    "id" SERIAL NOT NULL,
    "goal" INTEGER NOT NULL,

    CONSTRAINT "DailyGoal_pkey" PRIMARY KEY ("id")
);
