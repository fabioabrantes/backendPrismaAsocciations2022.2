-- CreateTable
CREATE TABLE "associations" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "about" TEXT,
    "instructions" TEXT,
    "opening_hours" TEXT,
    "open_on_weekends" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "images" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "path" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_fk_association" INTEGER,
    CONSTRAINT "images_id_fk_association_fkey" FOREIGN KEY ("id_fk_association") REFERENCES "associations" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
