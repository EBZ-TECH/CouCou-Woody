# Coucou Woody - Panel de Administración

## Sistema Implementado

### ✅ Base de Datos (`db.js`)
- Sistema completo de base de datos simulada usando localStorage
- Datos iniciales pre-cargados:
  - Solicitudes (3 registros iniciales)
  - Clientes (3 registros iniciales)
  - Proyectos (2 registros iniciales)
  - Inventario (5 items iniciales)
  - Cotizaciones (2 registros iniciales)
  - Cuentas de Cobro (2 registros iniciales)
  - Personal (3 empleados iniciales)
  - Pagos (1 registro inicial)
  - Auditoría (3 registros iniciales)

- **Funciones CRUD completas:**
  - `DB.get(table)` - Obtener todos los registros
  - `DB.getById(table, id)` - Obtener un registro por ID
  - `DB.create(table, item)` - Crear nuevo registro
  - `DB.update(table, id, updates)` - Actualizar registro
  - `DB.delete(table, id)` - Eliminar registro
  - `DB.logAudit(usuario, accion, modulo, detalle)` - Registrar en auditoría

### ✅ Estilos (`admin.css` + `modules.css`)
- Sistema de diseño completo basado en el proyecto React original
- Layout responsive con sidebar y content area
- Componentes: stats cards, tablas, modales, forms, badges, botones
- Colores consistentes con el sistema terracota (#8b3f2c)

### ✅ Módulos Completados

#### 1. **Dashboard** (`admin-dashboard.html`)
- 6 tarjetas de estadísticas en tiempo real:
  - Solicitudes (con contador de pendientes)
  - Clientes
  - Proyectos Activos
  - Items en Inventario
  - Cotizaciones
  - Cuentas de Cobro
- Tabla de actividad reciente (últimas 10 acciones de auditoría)
- Navegación completa en sidebar a todos los módulos

#### 2. **Solicitudes** (`admin-solicitudes.html`)
- Listado completo de solicitudes con búsqueda
- Filtrado por cliente, correo o teléfono
- Modal de detalle con información completa
- Acciones:
  - Ver detalle
  - Aceptar solicitud
  - Rechazar solicitud
- Badges de estado (pendiente, aceptada, rechazada)
- Actualización en tiempo real de la BD
- Registro automático en auditoría

#### 3. **Clientes** (`admin-clientes.html`)
- Listado completo de clientes
- Búsqueda por nombre, apellido o correo
- CRUD completo:
  - Agregar nuevo cliente
  - Editar cliente existente
  - Eliminar cliente
  - Ver detalle con historial
- Modal de detalle muestra:
  - Información del cliente
  - Historial de solicitudes
  - Historial de proyectos
  - Historial de cotizaciones
- Registro en auditoría de todas las acciones

### ✅ Todos los Módulos Implementados

4. **Proyectos** (`admin-proyectos.html`)
   - ✅ Vista Kanban con columnas: Pendiente, En Proceso, Finalizado
   - ✅ Gestión completa de proyectos (crear, editar)
   - ✅ Asignación de responsables y clientes
   - ✅ Seguimiento de progreso con barra visual
   - ✅ Cambio de estado con drag-drop simulado
   - ✅ Fechas de inicio y fin
   - ✅ Gestión de presupuestos

5. **Inventario** (`admin-inventario.html`)
   - ✅ Gestión de items del inventario (CRUD completo)
   - ✅ Control de stock y cantidades
   - ✅ Categorías de productos
   - ✅ Precios unitarios
   - ✅ Ubicaciones en bodega
   - ✅ Búsqueda por nombre o categoría

6. **Cotizaciones** (`admin-cotizaciones.html`)
   - ✅ Visualización de cotizaciones
   - ✅ Items detallados con cantidades y precios
   - ✅ Cálculo de subtotal, IVA (19%) y total
   - ✅ Estados: pendiente, aprobada, rechazada
   - ✅ Fechas de emisión y validez
   - ✅ Aprobar/rechazar cotizaciones pendientes
   - ✅ Modal de detalle completo

7. **Cuentas de Cobro** (`admin-cuentas-cobro.html`)
   - ✅ Gestión de cuentas de cobro
   - ✅ Vinculación con proyectos
   - ✅ Estados: pendiente, pagada
   - ✅ Fechas de emisión y vencimiento
   - ✅ Marcar como pagada
   - ✅ Búsqueda por cliente o proyecto

8. **Personal** (`admin-personal.html`)
   - ✅ Listado completo de empleados
   - ✅ Información de contacto
   - ✅ Cargos y salarios
   - ✅ Fechas de ingreso
   - ✅ Búsqueda por nombre o cargo

9. **Pagos** (`admin-pagos.html`)
   - ✅ Registro de pagos recibidos
   - ✅ Vinculación con cuentas de cobro
   - ✅ Métodos de pago (transferencia, efectivo, etc.)
   - ✅ Referencias y comprobantes
   - ✅ Estados de pago
   - ✅ Búsqueda por cliente o referencia

10. **Auditoría** (`admin-auditoria.html`)
    - ✅ Visualización completa del log de auditoría
    - ✅ Todos los registros de acciones del sistema
    - ✅ Filtros por búsqueda de texto
    - ✅ Información de fecha/hora, usuario, acción, módulo y detalle
    - ✅ Ordenados cronológicamente (más recientes primero)

## Sistema de Login

### Credenciales de Acceso

**Administrador:**
- Email: `admin@lourdes.com`
- Password: `admin123`
- Redirige a: `admin-dashboard.html`

**Cliente:**
- Email: `cliente@test.com`
- Password: `cliente123`
- Redirige a: `consultar-estado.html`

### Flujo de Autenticación
1. Usuario ingresa en `login.html`
2. Sistema valida credenciales
3. Guarda sesión en localStorage con rol y datos del usuario
4. Redirige según el rol:
   - Admin → Panel de administración
   - Cliente → Consultar estado de solicitudes

## Navegación del Sistema

### Para Clientes (Público)
- `index.html` - Página principal con mosaico
- `solicitar-servicio.html` - Formulario de solicitud
- `consultar-estado.html` - Consultar estado por correo
- `login.html` - Acceso al sistema

### Para Administradores
- `admin-dashboard.html` - Dashboard principal
- `admin-solicitudes.html` - Gestión de solicitudes
- `admin-clientes.html` - Gestión de clientes
- *(Próximamente: proyectos, inventario, cotizaciones, etc.)*

## Persistencia de Datos

Todos los datos se guardan en **localStorage** del navegador:
- Los cambios persisten entre sesiones
- Se inicializa automáticamente con datos de prueba
- Para resetear: limpiar localStorage o eliminar la clave `coucou_db_initialized`

## ✅ Sistema Completo Implementado

**TODOS los 10 módulos del admin están operativos y funcionales:**
1. ✅ Dashboard - Métricas y estadísticas
2. ✅ Solicitudes - CRUD completo con aceptar/rechazar
3. ✅ Clientes - CRUD completo con historial
4. ✅ Proyectos - Vista Kanban con gestión de estados
5. ✅ Inventario - CRUD completo de items
6. ✅ Cotizaciones - Visualización y aprobación
7. ✅ Cuentas de Cobro - Gestión y marcado de pagadas
8. ✅ Personal - Listado de empleados
9. ✅ Pagos - Registro de pagos recibidos
10. ✅ Auditoría - Log completo de actividades

## Notas Técnicas

- **Sin dependencias externas**: Todo en HTML/CSS/JS vanilla
- **Responsive**: Funciona en desktop, tablet y móvil
- **Modular**: Cada módulo es independiente
- **Escalable**: Fácil de agregar nuevos módulos siguiendo el patrón establecido

