# 🩺 Medicina Study App

Aplicación web responsive para estudiar medicina durante el internado. Incluye flashcards, resúmenes y exámenes de práctica para 5 temas principales: Pediatría, Ginecología y Obstetricia, Medicina Interna, Cirugía General y Emergencias y Trauma.

![Medicina Study App](https://img.shields.io/badge/React-18.3-blue) ![Tailwind](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8) ![Vite](https://img.shields.io/badge/Vite-5.2-646cff)

## ✨ Características

- 📚 **Flashcards interactivas** con animación de volteo
- 📖 **Resúmenes completos** de cada tema médico
- 📝 **Exámenes de opción múltiple** con resultados detallados
- 💾 **Persistencia local** del progreso (localStorage)
- 📱 **Diseño responsive** para móvil, tablet y desktop
- 🎨 **Interfaz moderna** y fácil de usar
- ⚡ **Carga rápida** y funcionamiento offline

## 🚀 Instalación y Ejecución

### Requisitos previos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio:**
```bash
cd /home/angeldev/project/internado
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Ejecutar en modo desarrollo:**
```bash
npm run dev
```

La aplicación se abrirá automáticamente en `http://localhost:3000`

4. **Construir para producción:**
```bash
npm run build
```

5. **Previsualizar build de producción:**
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
internado/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Flashcards.jsx   # Componente de tarjetas de estudio
│   │   ├── Summary.jsx      # Componente de resúmenes
│   │   └── Test.jsx         # Componente de exámenes
│   ├── data/
│   │   └── topics.js        # Datos de los 5 temas (flashcards, resúmenes, preguntas)
│   ├── pages/
│   │   ├── Dashboard.jsx    # Página principal con los 5 temas
│   │   └── TopicView.jsx    # Vista de cada tema individual
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales y Tailwind
├── index.html               # HTML principal
├── package.json             # Dependencias del proyecto
├── vite.config.js           # Configuración de Vite
├── tailwind.config.js       # Configuración de Tailwind CSS
└── README.md                # Este archivo
```

## 📚 Cómo Usar la Aplicación

### 1. Dashboard Principal
- Al abrir la app, verás 5 tarjetas con los temas principales
- Cada tarjeta muestra el número de flashcards y preguntas disponibles
- Haz clic en cualquier tema para comenzar a estudiar

### 2. Flashcards
- Haz clic en la tarjeta para voltearla y ver la respuesta
- Usa los botones "Anterior" y "Siguiente" para navegar
- Marca las tarjetas como "Dominada" para llevar tu progreso
- Tu progreso se guarda automáticamente en el navegador

### 3. Resúmenes
- Lee el contenido completo del tema
- Incluye títulos, listas y texto formateado
- Ideal para repasar antes del examen

### 4. Examen
- Responde las preguntas de opción múltiple
- Al finalizar, verás tus resultados con:
  - Porcentaje de aciertos
  - Número de respuestas correctas e incorrectas
  - Opción de revisar cada pregunta con explicaciones
- Puedes reintentar el examen cuantas veces quieras

## ➕ Cómo Agregar Nuevo Contenido

### Agregar Flashcards

Edita el archivo `src/data/topics.js` y agrega nuevas flashcards al array correspondiente:

```javascript
flashcards: [
  {
    id: 6, // ID único (siguiente número disponible)
    frente: "¿Tu pregunta aquí?",
    reverso: "La respuesta detallada aquí"
  },
  // ... más flashcards
]
```

### Agregar Preguntas de Examen

```javascript
preguntas: [
  {
    id: 6,
    pregunta: "¿Cuál es tu pregunta?",
    opciones: [
      "Opción A",
      "Opción B",
      "Opción C",
      "Opción D"
    ],
    respuestaCorrecta: 0, // Índice de la respuesta correcta (0-3)
    explicacion: "Explicación de por qué esta es la respuesta correcta"
  },
  // ... más preguntas
]
```

### Modificar Resúmenes

Los resúmenes soportan HTML básico:

```javascript
resumen: `
  <h2>Título Principal</h2>
  
  <h3>Subtítulo</h3>
  <p>Párrafo de texto normal.</p>
  
  <ul>
    <li><strong>Negrita:</strong> Texto importante</li>
    <li><em>Cursiva:</em> Énfasis</li>
  </ul>
  
  <p>Más contenido...</p>
`
```

### Agregar un Nuevo Tema (6º tema)

Para agregar un tema completamente nuevo:

1. Abre `src/data/topics.js`
2. Agrega un nuevo objeto al array `topics`:

```javascript
{
  id: 6,
  nombre: "Nombre del Tema",
  color: "#código-hex", // Color en formato hexadecimal
  icon: "🏥", // Emoji que represente el tema
  flashcards: [ /* ... */ ],
  resumen: ` /* ... */ `,
  preguntas: [ /* ... */ ]
}
```

## 🎨 Personalización

### Cambiar Colores de un Tema

Edita la propiedad `color` en `src/data/topics.js`:

```javascript
color: "#10b981" // Verde (ejemplo: Pediatría)
```

Colores sugeridos:
- Verde: `#10b981`
- Rosa: `#ec4899`
- Azul: `#3b82f6`
- Naranja: `#f59e0b`
- Rojo: `#ef4444`
- Morado: `#8b5cf6`

### Modificar Estilos Globales

Edita `src/index.css` para cambiar:
- Colores de fondo
- Tipografía
- Estilos de los resúmenes

## 🛠️ Tecnologías Utilizadas

- **React 18.3** - Framework de UI
- **Vite 5.2** - Build tool y dev server
- **React Router 6** - Navegación entre páginas
- **Tailwind CSS 3.4** - Framework de estilos
- **Lucide React** - Iconos
- **LocalStorage API** - Persistencia de datos

## 📱 Compatibilidad

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Móviles iOS y Android

## 💡 Consejos de Estudio

1. **Primero lee el resumen** para tener contexto general
2. **Practica con las flashcards** hasta dominarlas
3. **Toma el examen** para evaluar tu conocimiento
4. **Revisa las respuestas incorrectas** y vuelve al resumen
5. **Repite** hasta alcanzar 80% o más en el examen

## 🐛 Solución de Problemas

### La app no carga

```bash
# Borrar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Los estilos no se aplican

```bash
# Limpiar caché de Vite
rm -rf node_modules/.vite
npm run dev
```

### El progreso no se guarda

- Asegúrate de que las cookies/localStorage no estén bloqueadas en tu navegador
- Verifica que estés usando el mismo navegador y no estés en modo incógnito

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

## 👨‍💻 Autor

Desarrollado por **XxAngels218** para estudiantes de medicina durante el internado.

---

## 🔮 Futuras Mejoras (Opcional)

- [ ] Modo oscuro
- [ ] Exportar progreso a PDF
- [ ] Cronómetro opcional en exámenes
- [ ] Gráficos de progreso
- [ ] Compartir resultados
- [ ] Más temas médicos
- [ ] Modo de estudio espaciado (spaced repetition)

---

**¿Necesitas ayuda?** Abre un issue en el repositorio o contacta al desarrollador.

¡Éxito en tu internado! 🎓
