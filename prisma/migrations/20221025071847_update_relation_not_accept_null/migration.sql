/*
  Warnings:

  - Made the column `id_fk_association` on table `images` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_images" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "path" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_fk_association" INTEGER NOT NULL,
    CONSTRAINT "images_id_fk_association_fkey" FOREIGN KEY ("id_fk_association") REFERENCES "associations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_images" ("created_at", "id", "id_fk_association", "path", "updated_at") SELECT "created_at", "id", "id_fk_association", "path", "updated_at" FROM "images";
DROP TABLE "images";
ALTER TABLE "new_images" RENAME TO "images";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
