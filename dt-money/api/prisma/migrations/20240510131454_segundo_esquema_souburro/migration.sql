/*
  Warnings:

  - You are about to drop the column `createdt` on the `Transactions` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transactions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "category" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL
);
INSERT INTO "new_Transactions" ("amount", "category", "id", "title", "type") SELECT "amount", "category", "id", "title", "type" FROM "Transactions";
DROP TABLE "Transactions";
ALTER TABLE "new_Transactions" RENAME TO "Transactions";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
