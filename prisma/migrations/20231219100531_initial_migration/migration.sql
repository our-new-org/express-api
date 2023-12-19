-- CreateTable
CREATE TABLE "users" (
    "email" TEXT NOT NULL,
    "apartmentNumber" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "rooms" (
    "roomId" SERIAL NOT NULL,
    "roomName" TEXT NOT NULL,
    "description" TEXT,
    "capacity" INTEGER NOT NULL,
    "image" TEXT,

    CONSTRAINT "rooms_pkey" PRIMARY KEY ("roomId")
);

-- CreateTable
CREATE TABLE "bookings" (
    "bookingId" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "roomId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "startTime" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("bookingId")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "rooms"("roomId") ON DELETE RESTRICT ON UPDATE CASCADE;
