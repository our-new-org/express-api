/*
  Warnings:

  - Added the required column `facilityName` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "facilityName" TEXT NOT NULL;
