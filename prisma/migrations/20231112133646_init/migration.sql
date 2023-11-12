/*
  Warnings:

  - Made the column `apellidos` on table `Empleados` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Empleados` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombres` on table `Empleados` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombre` on table `Facultades` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nro_telefono` on table `Facultades` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ubicacion` on table `Facultades` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombre` on table `Paises` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombre` on table `Areas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombre` on table `Programas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombre` on table `Sedes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombre` on table `Ciudades` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombre` on table `Departamentos` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Empleados" (
    "identificacion" TEXT NOT NULL PRIMARY KEY,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tipo_contratacion" TEXT NOT NULL,
    "tipo_empleado" TEXT NOT NULL,
    "cod_facultad" INTEGER NOT NULL,
    "codigo_sede" INTEGER NOT NULL,
    "lugar_nacimiento" INTEGER NOT NULL,
    CONSTRAINT "Empleados_cod_facultad_fkey" FOREIGN KEY ("cod_facultad") REFERENCES "Facultades" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Empleados_codigo_sede_fkey" FOREIGN KEY ("codigo_sede") REFERENCES "Sedes" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Empleados_lugar_nacimiento_fkey" FOREIGN KEY ("lugar_nacimiento") REFERENCES "Ciudades" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Empleados_tipo_contratacion_fkey" FOREIGN KEY ("tipo_contratacion") REFERENCES "Tipos_contratacion" ("nombre") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Empleados_tipo_empleado_fkey" FOREIGN KEY ("tipo_empleado") REFERENCES "Tipos_empleado" ("nombre") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Empleados" ("apellidos", "cod_facultad", "codigo_sede", "email", "identificacion", "lugar_nacimiento", "nombres", "tipo_contratacion", "tipo_empleado") SELECT "apellidos", "cod_facultad", "codigo_sede", "email", "identificacion", "lugar_nacimiento", "nombres", "tipo_contratacion", "tipo_empleado" FROM "Empleados";
DROP TABLE "Empleados";
ALTER TABLE "new_Empleados" RENAME TO "Empleados";
CREATE TABLE "new_Facultades" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "nro_telefono" TEXT NOT NULL,
    "id_decano" TEXT NOT NULL
);
INSERT INTO "new_Facultades" ("codigo", "id_decano", "nombre", "nro_telefono", "ubicacion") SELECT "codigo", "id_decano", "nombre", "nro_telefono", "ubicacion" FROM "Facultades";
DROP TABLE "Facultades";
ALTER TABLE "new_Facultades" RENAME TO "Facultades";
CREATE TABLE "new_Paises" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);
INSERT INTO "new_Paises" ("codigo", "nombre") SELECT "codigo", "nombre" FROM "Paises";
DROP TABLE "Paises";
ALTER TABLE "new_Paises" RENAME TO "Paises";
CREATE TABLE "new_Areas" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "FACULTADES_codigo" INTEGER NOT NULL,
    "id_coordinador" TEXT NOT NULL,
    CONSTRAINT "Areas_FACULTADES_codigo_fkey" FOREIGN KEY ("FACULTADES_codigo") REFERENCES "Facultades" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Areas_id_coordinador_fkey" FOREIGN KEY ("id_coordinador") REFERENCES "Empleados" ("identificacion") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Areas" ("FACULTADES_codigo", "codigo", "id_coordinador", "nombre") SELECT "FACULTADES_codigo", "codigo", "id_coordinador", "nombre" FROM "Areas";
DROP TABLE "Areas";
ALTER TABLE "new_Areas" RENAME TO "Areas";
CREATE TABLE "new_Programas" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "AREAS_codigo" INTEGER NOT NULL,
    CONSTRAINT "Programas_AREAS_codigo_fkey" FOREIGN KEY ("AREAS_codigo") REFERENCES "Areas" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Programas" ("AREAS_codigo", "codigo", "nombre") SELECT "AREAS_codigo", "codigo", "nombre" FROM "Programas";
DROP TABLE "Programas";
ALTER TABLE "new_Programas" RENAME TO "Programas";
CREATE TABLE "new_Sedes" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "cod_ciudad" INTEGER NOT NULL,
    CONSTRAINT "Sedes_cod_ciudad_fkey" FOREIGN KEY ("cod_ciudad") REFERENCES "Ciudades" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Sedes" ("cod_ciudad", "codigo", "nombre") SELECT "cod_ciudad", "codigo", "nombre" FROM "Sedes";
DROP TABLE "Sedes";
ALTER TABLE "new_Sedes" RENAME TO "Sedes";
CREATE TABLE "new_Ciudades" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "cod_dpto" INTEGER NOT NULL,
    CONSTRAINT "Ciudades_cod_dpto_fkey" FOREIGN KEY ("cod_dpto") REFERENCES "Departamentos" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Ciudades" ("cod_dpto", "codigo", "nombre") SELECT "cod_dpto", "codigo", "nombre" FROM "Ciudades";
DROP TABLE "Ciudades";
ALTER TABLE "new_Ciudades" RENAME TO "Ciudades";
CREATE TABLE "new_Departamentos" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "cod_pais" INTEGER NOT NULL,
    CONSTRAINT "Departamentos_cod_pais_fkey" FOREIGN KEY ("cod_pais") REFERENCES "Paises" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Departamentos" ("cod_pais", "codigo", "nombre") SELECT "cod_pais", "codigo", "nombre" FROM "Departamentos";
DROP TABLE "Departamentos";
ALTER TABLE "new_Departamentos" RENAME TO "Departamentos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
