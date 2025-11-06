# 🚀 GUÍA RÁPIDA - Medicina Study App

## ⚡ Comandos Básicos

```bash
# Instalar dependencias (solo la primera vez)
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 📝 Agregar Contenido Rápidamente

### 1. Abrir archivo de datos
```bash
# Editar: src/data/topics.js
```

### 2. Estructura de una Flashcard
```javascript
{
  id: 1,
  frente: "¿Pregunta?",
  reverso: "Respuesta detallada"
}
```

### 3. Estructura de una Pregunta de Examen
```javascript
{
  id: 1,
  pregunta: "¿Cuál es...?",
  opciones: ["A", "B", "C", "D"],
  respuestaCorrecta: 0, // 0=A, 1=B, 2=C, 3=D
  explicacion: "Porque..."
}
```

### 4. Formato del Resumen (HTML básico)
```html
<h2>Título Principal</h2>
<h3>Subtítulo</h3>
<p>Párrafo normal</p>
<ul>
  <li><strong>Negrita:</strong> texto</li>
  <li><em>Cursiva:</em> texto</li>
</ul>
```

## 🎨 Códigos de Colores

```javascript
Pediatría:     "#10b981" (verde)
Ginecología:   "#ec4899" (rosa)
Med Interna:   "#3b82f6" (azul)
Cirugía:       "#f59e0b" (naranja)
Emergencias:   "#ef4444" (rojo)
Nuevo tema:    "#8b5cf6" (morado)
```

## 🔧 Solución Rápida de Problemas

### Error: Cannot find module
```bash
rm -rf node_modules package-lock.json
npm install
```

### Los cambios no se reflejan
```bash
# Ctrl+C para detener el servidor
# Luego:
npm run dev
```

### Limpiar caché
```bash
rm -rf node_modules/.vite
npm run dev
```

## 📂 Archivos Importantes

```
src/data/topics.js       ← Agregar contenido aquí
src/components/          ← Componentes React
src/pages/Dashboard.jsx  ← Página principal
src/index.css            ← Estilos globales
```

## ✅ Checklist para Agregar Nuevo Tema

- [ ] Copiar estructura de un tema existente
- [ ] Cambiar `id` (debe ser único)
- [ ] Cambiar `nombre` del tema
- [ ] Elegir `color` (formato hex)
- [ ] Elegir `icon` (emoji)
- [ ] Agregar mínimo 5 `flashcards`
- [ ] Escribir `resumen` en HTML
- [ ] Agregar mínimo 5 `preguntas`
- [ ] Verificar que `respuestaCorrecta` sea correcta (0-3)
- [ ] Guardar y recargar app

## 💡 Tips

1. **IDs únicos**: Cada flashcard/pregunta debe tener un ID único dentro de su tema
2. **Índices**: `respuestaCorrecta` usa índice 0-3 (0=primera opción, 3=cuarta opción)
3. **HTML en resumen**: Puedes usar `<strong>`, `<em>`, `<ul>`, `<ol>`, `<h2>`, `<h3>`, `<p>`
4. **Guardar progreso**: Se guarda automáticamente en el navegador (localStorage)

## 🌐 URLs

- **Desarrollo**: http://localhost:3000 (o 3001 si 3000 está ocupado)
- **Producción**: Después de `npm run build`, los archivos están en `/dist`

## 📱 Probar en Móvil (misma red WiFi)

```bash
# Iniciar con --host
npm run dev -- --host

# Luego acceder desde móvil a:
# http://[IP-DE-TU-COMPUTADORA]:3000
```

---

**¿Dudas?** Revisa el README.md completo o contacta al desarrollador.
