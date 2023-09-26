/*
  Warnings:

  - A unique constraint covering the columns `[usuario]` on the table `Persona` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Persona_usuario_key" ON "Persona"("usuario");
