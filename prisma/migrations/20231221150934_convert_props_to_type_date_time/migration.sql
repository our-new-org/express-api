/*
  Warnings:

  - You are about to drop the column `closingTime` on the `Facility` table. All the data in the column will be lost.
  - You are about to drop the column `openingTime` on the `Facility` table. All the data in the column will be lost.
  - Changed the type of `startTime` on the `Booking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `endTime` on the `Booking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `date` on the `Booking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `closingHour` to the `Facility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openingHour` to the `Facility` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "startTime",
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL,
DROP COLUMN "endTime",
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
DROP COLUMN "date",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Facility" DROP COLUMN "closingTime",
DROP COLUMN "openingTime",
ADD COLUMN     "closingHour" INTEGER NOT NULL,
ADD COLUMN     "openingHour" INTEGER NOT NULL;
