// Creamos un objeto EventEmitter para gestionar eventos
class EventEmitter {
    constructor() {
      this.events = {};
    }
  
    on(event, listener) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(listener);
    }
  
    emit(event, ...args) {
      const listeners = this.events[event];
      if (listeners) {
        listeners.forEach(listener => {
          listener(...args);
        });
      }
    }
  }
  
  // Creamos una instancia de EventEmitter
  const eventEmitter = new EventEmitter();
  
  // Creamos un oyente para el evento 'saludo'
  eventEmitter.on('saludo', (nombre) => {
    alert(`Hola, ${nombre}! Bienvenido al evento de saludo.`);
  });
  
  // Obtenemos el botón y añadimos un listener para emitir el evento 'saludo'
  const emitButton = document.getElementById('emitButton');
  emitButton.addEventListener('click', () => {
    const nombre = prompt('Por favor, introduce tu nombre:');
    eventEmitter.emit('saludo', nombre);
  });
  