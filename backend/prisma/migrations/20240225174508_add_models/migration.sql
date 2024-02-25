/*
  Warnings:

  - A unique constraint covering the columns `[email,vacancy_id]` on the table `candidates` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "candidates_email_vacancy_id_key" ON "candidates"("email", "vacancy_id");
