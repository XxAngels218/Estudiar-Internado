# 📋 PLANTILLA PARA AGREGAR CONTENIDO DE TUS PDFs

## Cómo convertir contenido de PDF a la app

### Paso 1: Identificar información del PDF

Lee tu PDF (PEDIA INTERNADO, GINECO INTERNADO, etc.) y extrae:
- Conceptos clave para flashcards
- Resúmenes de temas
- Preguntas de examen

### Paso 2: Crear Flashcards

**Del PDF extrae:**
- Definiciones importantes
- Valores normales
- Tratamientos
- Criterios diagnósticos

**Formato:**
```javascript
{
  id: 1,
  frente: "¿[Pregunta extraída del PDF]?",
  reverso: "[Respuesta/concepto del PDF]"
}
```

**Ejemplo de Pediatría:**
```javascript
{
  id: 1,
  frente: "¿Cuál es el valor normal de frecuencia respiratoria en un recién nacido?",
  reverso: "30-60 respiraciones por minuto. En lactantes: 20-40 rpm. En niños: 15-25 rpm."
}
```

### Paso 3: Crear Resumen

**Del PDF extrae:**
- Títulos de capítulos → `<h2>`
- Subtítulos → `<h3>`
- Listas de síntomas/tratamientos → `<ul>` o `<ol>`
- Definiciones importantes → `<p>` con `<strong>`

**Formato:**
```javascript
resumen: `
  <h2>[Título del tema del PDF]</h2>
  
  <h3>[Subtema 1]</h3>
  <p>[Párrafo explicativo del PDF]</p>
  
  <ul>
    <li><strong>Punto importante:</strong> Detalle</li>
    <li>Otro punto</li>
  </ul>
  
  <h3>[Subtema 2]</h3>
  <p>[Más contenido...]</p>
`
```

### Paso 4: Crear Preguntas de Examen

**Del PDF busca:**
- Casos clínicos
- Preguntas de repaso
- Conceptos que se presten para opción múltiple

**Formato:**
```javascript
{
  id: 1,
  pregunta: "[Caso clínico o pregunta del PDF]",
  opciones: [
    "[Opción A - puede ser correcta o distractor]",
    "[Opción B - puede ser correcta o distractor]",
    "[Opción C - puede ser correcta o distractor]",
    "[Opción D - puede ser correcta o distractor]"
  ],
  respuestaCorrecta: 0, // 0=A, 1=B, 2=C, 3=D
  explicacion: "[Explicación basada en el PDF de por qué es correcta]"
}
```

---

## 🔄 PROCESO PASO A PASO

### Para cada tema de tu PDF:

1. **Lee una sección del PDF** (ej: "Neumonía en Pediatría")

2. **Identifica 3-5 conceptos clave** y conviértelos en flashcards:
```javascript
flashcards: [
  {
    id: 1,
    frente: "¿Cuál es el agente más frecuente de neumonía en <5 años?",
    reverso: "Streptococcus pneumoniae (40-50%). Otros: H. influenzae, S. aureus, virus respiratorios."
  },
  {
    id: 2,
    frente: "¿Criterios de hospitalización en neumonía pediátrica?",
    reverso: "Edad <2 meses, SatO2 <92%, dificultad respiratoria severa, deshidratación, no respuesta a ambulatorio en 48h, complicaciones."
  }
  // ... más
]
```

3. **Resume el tema completo:**
```javascript
resumen: `
  <h2>Neumonía en Pediatría</h2>
  
  <h3>Definición</h3>
  <p>Infección del parénquima pulmonar confirmada por clínica y radiología...</p>
  
  <h3>Agentes Etiológicos</h3>
  <ul>
    <li><strong>Menores de 5 años:</strong> S. pneumoniae (40-50%), H. influenzae...</li>
    <li><strong>Mayores de 5 años:</strong> Mycoplasma pneumoniae...</li>
  </ul>
  
  <h3>Tratamiento</h3>
  <p><strong>Ambulatorio:</strong></p>
  <ul>
    <li>Amoxicilina 80-90 mg/kg/día dividido en 2-3 dosis por 7-10 días</li>
  </ul>
`
```

4. **Crea preguntas tipo caso clínico:**
```javascript
preguntas: [
  {
    id: 1,
    pregunta: "Niño de 3 años con fiebre de 39°C, tos productiva y dificultad respiratoria. Rx: consolidación en lóbulo inferior derecho. ¿Tratamiento ambulatorio?",
    opciones: [
      "Amoxicilina 80 mg/kg/día por 7 días",
      "Azitromicina 10 mg/kg/día por 3 días",
      "Ceftriaxona IM por 7 días",
      "Observación sin antibiótico"
    ],
    respuestaCorrecta: 0,
    explicacion: "En neumonía adquirida en comunidad en <5 años sin complicaciones, el tratamiento de elección es amoxicilina 80-90 mg/kg/día. Cubre S. pneumoniae y H. influenzae."
  }
]
```

---

## 📝 PLANTILLA VACÍA LISTA PARA LLENAR

```javascript
{
  id: 6, // Cambiar por siguiente número
  nombre: "[NOMBRE DEL TEMA]",
  color: "#[COLOR-HEX]",
  icon: "[EMOJI]",
  
  flashcards: [
    {
      id: 1,
      frente: "",
      reverso: ""
    },
    {
      id: 2,
      frente: "",
      reverso: ""
    },
    {
      id: 3,
      frente: "",
      reverso: ""
    }
    // Agregar más...
  ],
  
  resumen: `
    <h2></h2>
    
    <h3></h3>
    <p></p>
    
    <ul>
      <li><strong></strong></li>
    </ul>
  `,
  
  preguntas: [
    {
      id: 1,
      pregunta: "",
      opciones: [
        "",
        "",
        "",
        ""
      ],
      respuestaCorrecta: 0,
      explicacion: ""
    },
    {
      id: 2,
      pregunta: "",
      opciones: [
        "",
        "",
        "",
        ""
      ],
      respuestaCorrecta: 0,
      explicacion: ""
    }
    // Agregar más...
  ]
}
```

---

## 💡 CONSEJOS

1. **No copies TODO el PDF**: Selecciona lo más importante y de alto rendimiento
2. **Flashcards cortas**: Pregunta concisa, respuesta de 1-3 líneas
3. **Resúmenes estructurados**: Usa títulos y listas, evita párrafos muy largos
4. **Preguntas realistas**: Simula casos clínicos como en exámenes reales
5. **Explicaciones breves**: 2-3 líneas máximo

## 🎯 OBJETIVO

- **20-30 flashcards** por tema (las más importantes)
- **1 resumen completo** bien estructurado
- **10-15 preguntas** tipo caso clínico

---

**¡Comienza con un tema pequeño y ve agregando gradualmente!**
