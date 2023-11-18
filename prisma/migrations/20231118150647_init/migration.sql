-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Facultades" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "nro_telefono" TEXT NOT NULL,
    "id_decano" TEXT NOT NULL,
    CONSTRAINT "Facultades_id_decano_fkey" FOREIGN KEY ("id_decano") REFERENCES "Empleados" ("identificacion") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Facultades" ("codigo", "id_decano", "nombre", "nro_telefono", "ubicacion") SELECT "codigo", "id_decano", "nombre", "nro_telefono", "ubicacion" FROM "Facultades";
DROP TABLE "Facultades";
ALTER TABLE "new_Facultades" RENAME TO "Facultades";
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
    CONSTRAINT "Empleados_codigo_sede_fkey" FOREIGN KEY ("codigo_sede") REFERENCES "Sedes" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Empleados_lugar_nacimiento_fkey" FOREIGN KEY ("lugar_nacimiento") REFERENCES "Ciudades" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Empleados_tipo_contratacion_fkey" FOREIGN KEY ("tipo_contratacion") REFERENCES "Tipos_contratacion" ("nombre") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Empleados_tipo_empleado_fkey" FOREIGN KEY ("tipo_empleado") REFERENCES "Tipos_empleado" ("nombre") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Empleados" ("apellidos", "cod_facultad", "codigo_sede", "email", "identificacion", "lugar_nacimiento", "nombres", "tipo_contratacion", "tipo_empleado") SELECT "apellidos", "cod_facultad", "codigo_sede", "email", "identificacion", "lugar_nacimiento", "nombres", "tipo_contratacion", "tipo_empleado" FROM "Empleados";
DROP TABLE "Empleados";
ALTER TABLE "new_Empleados" RENAME TO "Empleados";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
