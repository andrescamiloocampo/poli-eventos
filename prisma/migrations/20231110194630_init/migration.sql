/*
  Warnings:

  - You are about to drop the `AREAS` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CIUDADES` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DEPARTAMENTOS` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EMPLEADOS` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FACULTADES` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PAISES` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PROGRAMAS` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SEDES` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TIPOS_CONTRATACION` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TIPOS_EMPLEADO` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AREAS";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CIUDADES";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "DEPARTAMENTOS";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "EMPLEADOS";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "FACULTADES";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PAISES";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PROGRAMAS";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "SEDES";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "TIPOS_CONTRATACION";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "TIPOS_EMPLEADO";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Facultades" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT,
    "ubicacion" TEXT,
    "nro_telefono" TEXT,
    "id_decano" TEXT NOT NULL,
    CONSTRAINT "Facultades_id_decano_fkey" FOREIGN KEY ("id_decano") REFERENCES "Empleados" ("identificacion") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Empleados" (
    "identificacion" TEXT NOT NULL PRIMARY KEY,
    "nombres" TEXT,
    "apellidos" TEXT,
    "email" TEXT,
    "tipo_contratacion" TEXT NOT NULL,
    "tipo_empleado" TEXT NOT NULL,
    "cod_facultad" INTEGER NOT NULL,
    "codigo_sede" INTEGER NOT NULL,
    "lugar_nacimiento" INTEGER NOT NULL,
    CONSTRAINT "Empleados_tipo_empleado_fkey" FOREIGN KEY ("tipo_empleado") REFERENCES "Tipos_empleado" ("nombre") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Empleados_tipo_contratacion_fkey" FOREIGN KEY ("tipo_contratacion") REFERENCES "Tipos_contratacion" ("nombre") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Empleados_lugar_nacimiento_fkey" FOREIGN KEY ("lugar_nacimiento") REFERENCES "Ciudades" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Empleados_codigo_sede_fkey" FOREIGN KEY ("codigo_sede") REFERENCES "Sedes" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Sedes" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT,
    "cod_ciudad" INTEGER NOT NULL,
    CONSTRAINT "Sedes_cod_ciudad_fkey" FOREIGN KEY ("cod_ciudad") REFERENCES "Ciudades" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ciudades" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT,
    "cod_dpto" INTEGER NOT NULL,
    CONSTRAINT "Ciudades_cod_dpto_fkey" FOREIGN KEY ("cod_dpto") REFERENCES "Departamentos" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Departamentos" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT,
    "cod_pais" INTEGER NOT NULL,
    CONSTRAINT "Departamentos_cod_pais_fkey" FOREIGN KEY ("cod_pais") REFERENCES "Paises" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Paises" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT
);

-- CreateTable
CREATE TABLE "Areas" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT,
    "FACULTADES_codigo" INTEGER NOT NULL,
    "id_coordinador" TEXT NOT NULL,
    CONSTRAINT "Areas_FACULTADES_codigo_fkey" FOREIGN KEY ("FACULTADES_codigo") REFERENCES "Facultades" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Areas_id_coordinador_fkey" FOREIGN KEY ("id_coordinador") REFERENCES "Empleados" ("identificacion") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Programas" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT,
    "AREAS_codigo" INTEGER NOT NULL,
    CONSTRAINT "Programas_AREAS_codigo_fkey" FOREIGN KEY ("AREAS_codigo") REFERENCES "Areas" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tipos_empleado" (
    "nombre" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Tipos_contratacion" (
    "nombre" TEXT NOT NULL PRIMARY KEY
);
