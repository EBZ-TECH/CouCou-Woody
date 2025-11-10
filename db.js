/**
 * Sistema de Base de Datos Simulada para Coucou Woody
 * Utiliza localStorage para persistencia
 */

// Inicializar base de datos
function initDB() {
  if (!localStorage.getItem('coucou_db_initialized')) {
    // Solicitudes
    const solicitudes = [
      {
        id: '1',
        cliente: 'Juan Pérez',
        correo: 'cliente@test.com',
        telefono: '300 123 4567',
        fecha: '15 de marzo de 2024',
        hora: '10:00',
        descripcion: 'Necesito reparación de muebles de madera en mi hogar.',
        estado: 'pendiente',
        clienteId: '1'
      },
      {
        id: '2',
        cliente: 'María García',
        correo: 'cliente@test.com',
        telefono: '300 987 6543',
        fecha: '20 de marzo de 2024',
        hora: '14:30',
        descripcion: 'Solicito cotización para diseño de muebles personalizados.',
        estado: 'aceptada',
        clienteId: '1'
      },
      {
        id: '3',
        cliente: 'Carlos López',
        correo: 'carlos@email.com',
        telefono: '310 555 1234',
        fecha: '22 de marzo de 2024',
        hora: '09:00',
        descripcion: 'Necesito restauración de mueble antiguo.',
        estado: 'pendiente',
        clienteId: '2'
      }
    ];

    // Clientes
    const clientes = [
      {
        id: '1',
        nombre: 'Juan',
        apellido: 'Pérez',
        correo: 'cliente@test.com',
        telefono: '300 123 4567',
        direccion: 'Calle 123 #45-67',
        ciudad: 'Bogotá',
        fechaRegistro: '10 de enero de 2024'
      },
      {
        id: '2',
        nombre: 'Carlos',
        apellido: 'López',
        correo: 'carlos@email.com',
        telefono: '310 555 1234',
        direccion: 'Carrera 45 #12-34',
        ciudad: 'Medellín',
        fechaRegistro: '15 de febrero de 2024'
      },
      {
        id: '3',
        nombre: 'Ana',
        apellido: 'Martínez',
        correo: 'ana@email.com',
        telefono: '320 777 8888',
        direccion: 'Avenida 68 #23-45',
        ciudad: 'Cali',
        fechaRegistro: '20 de marzo de 2024'
      }
    ];

    // Proyectos
    const proyectos = [
      {
        id: '1',
        nombre: 'Muebles de Cocina - Juan Pérez',
        cliente: 'Juan Pérez',
        clienteId: '1',
        responsable: 'Carlos Rodríguez',
        fechaInicio: '25 de marzo de 2024',
        fechaFin: '15 de abril de 2024',
        estado: 'en_proceso',
        progreso: 60,
        presupuesto: 5000000
      },
      {
        id: '2',
        nombre: 'Restauración Mueble Antiguo',
        cliente: 'Carlos López',
        clienteId: '2',
        responsable: 'María Fernández',
        fechaInicio: '1 de abril de 2024',
        fechaFin: '10 de abril de 2024',
        estado: 'pendiente',
        progreso: 0,
        presupuesto: 2000000
      }
    ];

    // Inventario
    const inventario = [
      { id: '1', nombre: 'Madera Roble', categoria: 'Madera', cantidad: 150, unidad: 'Tablas', precioUnitario: 45000, ubicacion: 'Bodega A' },
      { id: '2', nombre: 'Barniz Premium', categoria: 'Acabados', cantidad: 25, unidad: 'Litros', precioUnitario: 85000, ubicacion: 'Bodega B' },
      { id: '3', nombre: 'Tornillos 3"', categoria: 'Herrajes', cantidad: 500, unidad: 'Unidades', precioUnitario: 500, ubicacion: 'Bodega C' },
      { id: '4', nombre: 'Bisagras Premium', categoria: 'Herrajes', cantidad: 80, unidad: 'Unidades', precioUnitario: 12000, ubicacion: 'Bodega C' },
      { id: '5', nombre: 'Lija Grano 120', categoria: 'Herramientas', cantidad: 200, unidad: 'Hojas', precioUnitario: 1500, ubicacion: 'Bodega B' }
    ];

    // Cotizaciones
    const cotizaciones = [
      {
        id: '1',
        cliente: 'Juan Pérez',
        clienteId: '1',
        descripcion: 'Muebles de cocina integral',
        fecha: '20 de marzo de 2024',
        validoHasta: '20 de abril de 2024',
        items: [
          { descripcion: 'Gabinetes superiores', cantidad: 6, precioUnitario: 450000, total: 2700000 },
          { descripcion: 'Gabinetes inferiores', cantidad: 4, precioUnitario: 550000, total: 2200000 }
        ],
        subtotal: 4900000,
        iva: 931000,
        total: 5831000,
        estado: 'aprobada'
      },
      {
        id: '2',
        cliente: 'Carlos López',
        clienteId: '2',
        descripcion: 'Restauración de mueble antiguo',
        fecha: '22 de marzo de 2024',
        validoHasta: '22 de abril de 2024',
        items: [
          { descripcion: 'Restauración estructura', cantidad: 1, precioUnitario: 800000, total: 800000 },
          { descripcion: 'Acabados especiales', cantidad: 1, precioUnitario: 600000, total: 600000 }
        ],
        subtotal: 1400000,
        iva: 266000,
        total: 1666000,
        estado: 'pendiente'
      }
    ];

    // Cuentas de Cobro
    const cuentasCobro = [
      {
        id: '1',
        proyecto: 'Muebles de Cocina - Juan Pérez',
        proyectoId: '1',
        cliente: 'Juan Pérez',
        clienteId: '1',
        fecha: '1 de abril de 2024',
        vencimiento: '15 de abril de 2024',
        monto: 2500000,
        estado: 'pendiente',
        descripcion: 'Primer avance del proyecto - 50%'
      },
      {
        id: '2',
        proyecto: 'Restauración Mueble Antiguo',
        proyectoId: '2',
        cliente: 'Carlos López',
        clienteId: '2',
        fecha: '25 de marzo de 2024',
        vencimiento: '10 de abril de 2024',
        monto: 833000,
        estado: 'pagada',
        descripcion: 'Anticipo 50%'
      }
    ];

    // Personal
    const personal = [
      { id: '1', nombre: 'Carlos', apellido: 'Rodríguez', cargo: 'Carpintero Senior', telefono: '300 111 2222', correo: 'carlos.r@coucou.com', fechaIngreso: '1 de enero de 2023', salario: 2500000 },
      { id: '2', nombre: 'María', apellido: 'Fernández', cargo: 'Diseñadora', telefono: '310 222 3333', correo: 'maria.f@coucou.com', fechaIngreso: '15 de marzo de 2023', salario: 2800000 },
      { id: '3', nombre: 'Luis', apellido: 'González', cargo: 'Carpintero', telefono: '320 333 4444', correo: 'luis.g@coucou.com', fechaIngreso: '1 de junio de 2023', salario: 2000000 }
    ];

    // Pagos
    const pagos = [
      {
        id: '1',
        cuentaCobroId: '2',
        cliente: 'Carlos López',
        monto: 833000,
        fecha: '28 de marzo de 2024',
        metodoPago: 'Transferencia',
        referencia: 'TRF-001234',
        estado: 'completado'
      }
    ];

    // Auditoría
    const auditoria = [
      { id: '1', fecha: '1 de abril de 2024 10:30', usuario: 'admin@lourdes.com', accion: 'Creó solicitud', modulo: 'Solicitudes', detalle: 'Solicitud #3 creada' },
      { id: '2', fecha: '1 de abril de 2024 11:00', usuario: 'admin@lourdes.com', accion: 'Aprobó cotización', modulo: 'Cotizaciones', detalle: 'Cotización #1 aprobada' },
      { id: '3', fecha: '1 de abril de 2024 14:15', usuario: 'admin@lourdes.com', accion: 'Actualizó proyecto', modulo: 'Proyectos', detalle: 'Proyecto #1 - Progreso actualizado a 60%' }
    ];

    // Guardar todo en localStorage
    localStorage.setItem('solicitudes', JSON.stringify(solicitudes));
    localStorage.setItem('clientes', JSON.stringify(clientes));
    localStorage.setItem('proyectos', JSON.stringify(proyectos));
    localStorage.setItem('inventario', JSON.stringify(inventario));
    localStorage.setItem('cotizaciones', JSON.stringify(cotizaciones));
    localStorage.setItem('cuentasCobro', JSON.stringify(cuentasCobro));
    localStorage.setItem('personal', JSON.stringify(personal));
    localStorage.setItem('pagos', JSON.stringify(pagos));
    localStorage.setItem('auditoria', JSON.stringify(auditoria));
    localStorage.setItem('coucou_db_initialized', 'true');
  }
}

// Funciones CRUD genéricas
const DB = {
  // GET
  get: (table) => {
    const data = localStorage.getItem(table);
    return data ? JSON.parse(data) : [];
  },

  // GET BY ID
  getById: (table, id) => {
    const data = DB.get(table);
    return data.find(item => item.id === id);
  },

  // CREATE
  create: (table, item) => {
    const data = DB.get(table);
    const newItem = { ...item, id: String(Date.now()) };
    data.push(newItem);
    localStorage.setItem(table, JSON.stringify(data));
    return newItem;
  },

  // UPDATE
  update: (table, id, updates) => {
    const data = DB.get(table);
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
      data[index] = { ...data[index], ...updates };
      localStorage.setItem(table, JSON.stringify(data));
      return data[index];
    }
    return null;
  },

  // DELETE
  delete: (table, id) => {
    const data = DB.get(table);
    const filtered = data.filter(item => item.id !== id);
    localStorage.setItem(table, JSON.stringify(filtered));
    return filtered.length < data.length;
  },

  // LOG AUDITORIA
  logAudit: (usuario, accion, modulo, detalle) => {
    const audit = {
      id: String(Date.now()),
      fecha: new Date().toLocaleString('es-ES'),
      usuario,
      accion,
      modulo,
      detalle
    };
    const auditoria = DB.get('auditoria');
    auditoria.unshift(audit);
    localStorage.setItem('auditoria', JSON.stringify(auditoria));
  }
};

// Inicializar DB al cargar
if (typeof window !== 'undefined') {
  initDB();
}

