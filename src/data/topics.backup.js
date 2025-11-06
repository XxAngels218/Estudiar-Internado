// Estructura de datos para los temas de medicina
// NOTA: Las preguntas se seleccionarán aleatoriamente del banco extenso

export const topics = [
  {
    id: 1,
    nombre: "Pediatría",
    color: "#10b981", // verde
    icon: "👶",
    flashcards: [
      {
        id: 1,
        frente: "¿Cuál es la definición de fiebre en pediatría?",
        reverso: "Temperatura axilar ≥37.5°C o rectal ≥38°C. En menores de 3 meses, cualquier temperatura ≥38°C requiere evaluación inmediata y estudio completo de sepsis."
      },
      {
        id: 2,
        frente: "¿Cuáles son los signos de deshidratación grave en niños?",
        reverso: "Letargia, ojos hundidos, mucosas secas, signo del pliegue positivo (>2 seg), ausencia de lágrimas, fontanela hundida (lactantes), oliguria, pulsos débiles."
      },
      {
        id: 3,
        frente: "¿Cuál es el esquema de vacunación al nacer?",
        reverso: "BCG (única dosis) y Hepatitis B (primera dosis). Ambas deben aplicarse en las primeras 12 horas de vida, BCG intradérmica en deltoides derecho."
      },
      {
        id: 4,
        frente: "¿Cómo se calcula la dosis de paracetamol en pediatría?",
        reverso: "10-15 mg/kg/dosis cada 4-6 horas VO/IV. Dosis máxima: 60 mg/kg/día sin exceder 4 gramos/día. En RN: 10 mg/kg cada 6-8 horas."
      },
      {
        id: 5,
        frente: "¿Cuáles son los criterios de hospitalización en bronquiolitis?",
        reverso: "Edad <3 meses, prematurez, SatO2 <92%, dificultad respiratoria moderada-severa, intolerancia oral, deshidratación, comorbilidades (cardiopatía, inmunodeficiencia, displasia broncopulmonar)."
      },
      {
        id: 6,
        frente: "¿Cuáles son los signos de alarma en un recién nacido?",
        reverso: "Dificultad respiratoria, cianosis, ictericia <24h o muy intensa, rechazo al alimento, hipoactividad/letargia, fiebre >38°C o hipotermia <36°C, convulsiones, vómitos biliosos, distensión abdominal."
      },
      {
        id: 7,
        frente: "¿Cuál es el manejo de crisis asmática moderada en niños?",
        reverso: "Salbutamol MDI 2-4 puff c/20min x 1h (o nebulizado 0.15mg/kg/dosis), prednisona 1-2mg/kg VO, oxígeno si SatO2 <92%. Reevaluar respuesta clínica."
      },
      {
        id: 8,
        frente: "¿Cuándo sospechar enfermedad de Kawasaki?",
        reverso: "Fiebre ≥5 días + 4/5 criterios: conjuntivitis bilateral no purulenta, cambios orolabiales (labios fisurados, lengua aframbuesada), adenopatía cervical >1.5cm, exantema polimorfo, cambios en extremidades."
      },
      {
        id: 9,
        frente: "¿Qué es el síndrome nefrótico en pediatría?",
        reverso: "Proteinuria masiva (>40mg/m²/h), hipoalbuminemia (<2.5g/dL), edema, hiperlipidemia. Causa más frecuente: cambios mínimos (90% responde a prednisona 60mg/m²/día)."
      },
      {
        id: 10,
        frente: "¿Cuál es el tratamiento de otitis media aguda en niños?",
        reverso: "Amoxicilina 80-90 mg/kg/día dividido en 2-3 dosis por 10 días (<2 años) o 5-7 días (>2 años). Si resistencia: amoxicilina-clavulánico."
      },
      {
        id: 11,
        frente: "¿Cuáles son los reflejos primitivos del RN y cuándo desaparecen?",
        reverso: "Moro (0-6m), prensión palmar (0-6m), búsqueda (0-4m), succión (0-12m), marcha automática (0-2m), Babinski (0-12m). Persistencia: daño neurológico."
      },
      {
        id: 12,
        frente: "¿Qué es el crup y su manejo?",
        reverso: "Laringotraqueobronquitis viral (parainfluenza). Clínica: tos perruna, estridor, disfonía. Manejo: dexametasona 0.6mg/kg IM/VO (única dosis), adrenalina nebulizada 1:1000 si grave."
      },
      {
        id: 13,
        frente: "¿Cuándo iniciar alimentación complementaria y cómo?",
        reverso: "A los 6 meses. Señales: sostiene cabeza, se sienta, desaparece reflejo de extrusión. Inicio: papillas de 1 ingrediente, ir aumentando textura. Continuar lactancia materna."
      },
      {
        id: 14,
        frente: "¿Cuál es el esquema de vacunación a los 2 meses?",
        reverso: "Pentavalente (DPT+HB+Hib) 1ra, Antipolio inactivada 1ra, Rotavirus 1ra, Neumococo 1ra. Aplicar en diferentes sitios, preferiblemente muslo anterolateral."
      },
      {
        id: 15,
        frente: "¿Cómo detectar displasia de cadera del desarrollo?",
        reverso: "Maniobras: Ortolani (reducción con 'clic'), Barlow (luxación). Signo de Galeazzi: asimetría de pliegues, acortamiento de muslo. Confirmar con ecografía <6m o Rx >6m."
      },
      {
        id: 16,
        frente: "¿Qué es la convulsión febril simple?",
        reverso: "Crisis convulsiva con fiebre >38°C, sin infección SNC, 6m-5 años, duración <15min, generalizada, única en 24h. Buen pronóstico, no requiere anticonvulsivantes."
      },
      {
        id: 17,
        frente: "¿Cuándo es patológica la ictericia neonatal?",
        reverso: "Patológica si: aparece <24h, bilirrubina total >12mg/dL a término o >15mg/dL pretérmino, bilirrubina directa >2mg/dL, aumento >5mg/dL/día, persiste >2 semanas."
      },
      {
        id: 18,
        frente: "¿Cuál es el Plan C de rehidratación en deshidratación grave?",
        reverso: "100ml/kg de Ringer lactato o SSN 0.9% IV. Dar: 30ml/kg en 30min (si shock), luego 70ml/kg en 2.5h. Reevaluar constantemente, pasar a VO cuando tolere."
      },
      {
        id: 19,
        frente: "¿Cómo prevenir el síndrome de muerte súbita del lactante?",
        reverso: "Dormir boca arriba, colchón firme, cuna vacía (sin almohadas/cobijas/juguetes), temperatura ambiente adecuada, evitar tabaquismo, lactancia materna, chupón al dormir."
      },
      {
        id: 20,
        frente: "¿Cuál es el tratamiento de anemia ferropénica en niños?",
        reverso: "Hierro elemental 3-6mg/kg/día VO entre comidas por 3-6 meses. Sulfato ferroso: 3mg/kg/día. Reticulocitos aumentan en 5-7 días. Hb se normaliza en 4-8 semanas."
      },
      {
        id: 21,
        frente: "¿Qué es la enfermedad de Hirschsprung?",
        reverso: "Ausencia de células ganglionares en segmento intestinal. Clínica: retraso evacuación meconio >48h, distensión abdominal, vómitos biliosos, estreñimiento crónico. Dx: enema baritado, biopsia rectal."
      },
      {
        id: 22,
        frente: "¿Cuáles son las causas de distress respiratorio en RN?",
        reverso: "Taquipnea transitoria (más frecuente en cesárea), enfermedad de membrana hialina (prematuros <34sem), síndrome de aspiración meconial, neumonía neonatal, neumotórax."
      },
      {
        id: 23,
        frente: "¿Qué es la invaginación intestinal y su manejo?",
        reverso: "Telescopaje intestinal (ileocólico más frecuente), 6m-2años. Clínica: dolor cólico intermitente, vómitos, heces 'en jalea de grosella'. Dx: ecografía (signo diana). Tx: enema hidroneumático."
      },
      {
        id: 24,
        frente: "¿Cuál es el manejo de la dermatitis del pañal?",
        reverso: "Cambios frecuentes de pañal, limpieza con agua, secar bien, óxido de zinc en cada cambio. Si candidiasis (satélites): nistatina tópica. Si severa: corticoide leve."
      },
      {
        id: 25,
        frente: "¿Qué es la púrpura de Henoch-Schönlein?",
        reverso: "Vasculitis IgA mediada. Clínica: púrpura palpable en MMII/glúteos, artritis, dolor abdominal, glomerulonefritis (hematuria/proteinuria). Mayoría autolimitada, sintomáticos."
      },
      {
        id: 26,
        frente: "¿Cuándo sospechar fibrosis quística?",
        reverso: "Infecciones respiratorias recurrentes, diarrea crónica, falla de medro, íleo meconial, test de sudor >60mEq/L (Cl y Na). Confirmar con test genético. Manejo multidisciplinario."
      },
      {
        id: 27,
        frente: "¿Qué es la bronquiolitis obliterante?",
        reverso: "Secuela post-infección respiratoria grave (adenovirus). Obstrucción bronquiolar irreversible. Clínica: sibilancias persistentes, hiperinsuflación. Rx: atrapamiento aéreo. Sin tratamiento específico."
      },
      {
        id: 28,
        frente: "¿Cuál es el manejo de epistaxis en niños?",
        reverso: "Presión digital en ala nasal 10min, inclinación anterior, compresas frías. Si persiste: taponamiento anterior con gasa vaselinada. Evaluar coagulopatías si recurrente."
      },
      {
        id: 29,
        frente: "¿Qué es la enfermedad de manos-pies-boca?",
        reverso: "Infección por Coxsackie A16. Clínica: fiebre, vesículas en manos, pies y boca (dolorosas). Autolimitada 7-10 días. Manejo sintomático, hidratación."
      },
      {
        id: 30,
        frente: "¿Cuándo derivar un soplo cardíaco en pediatría?",
        reverso: "Soplo grado ≥3/6, diastólico, holosistólico, con frémito, síntomas (cianosis, ICC, falla de medro), antecedente familiar de cardiopatía. Soplo inocente: sistólico, <3/6, sin síntomas."
      },
      {
        id: 31,
        frente: "¿Qué es la estenosis pilórica hipertrófica?",
        reverso: "Hipertrofia del píloro en lactantes 3-6 semanas. Clínica: vómitos proyectiles no biliosos post-prandiales, pérdida de peso, deshidratación alcalosis hipoclorémica. Dx: ecografía. Tx: piloromiotomía."
      },
      {
        id: 32,
        frente: "¿Cuál es el tratamiento de pediculosis capitis?",
        reverso: "Permetrina 1% tópica, aplicar en cabello seco, dejar 10min, enjuagar. Repetir en 7-10 días. Peinar con peine fino. Lavar ropa/sábanas agua caliente."
      },
      {
        id: 33,
        frente: "¿Qué es el síndrome de Reye?",
        reverso: "Encefalopatía aguda + esteatosis hepática post-infección viral (especialmente varicela/influenza) asociado a AAS. Clínica: vómitos, alteración conciencia. CONTRAINDICAR AAS <18 años."
      },
      {
        id: 34,
        frente: "¿Cuándo sospechar maltrato infantil?",
        reverso: "Lesiones incompatibles con mecanismo relatado, diferentes estadios de cicatrización, fracturas múltiples (especialmente costillas, metafisiarias), quemaduras patrón, retraso en buscar atención, cambios comportamiento."
      },
      {
        id: 35,
        frente: "¿Qué es la tortícolis muscular congénita?",
        reverso: "Contractura de esternocleidomastoideo. Clínica: inclinación cabeza hacia lado afectado, rotación al lado opuesto, masa palpable en músculo. Tx: fisioterapia precoz. Cirugía si refractaria."
      }
    ],
    resumen: `
      <h2>Pediatría - Resumen del Internado</h2>
      
      <h3>1. Evaluación del Niño Sano</h3>
      <ul>
        <li><strong>Control de crecimiento:</strong> Peso, talla, perímetro cefálico (hasta 2 años)</li>
        <li><strong>Desarrollo psicomotor:</strong> Evaluación según edad (Denver II)</li>
        <li><strong>Vacunación:</strong> Seguir esquema nacional de inmunizaciones</li>
        <li><strong>Alimentación:</strong> Lactancia materna exclusiva hasta 6 meses</li>
      </ul>

      <h3>2. Patologías Respiratorias Frecuentes</h3>
      <p><strong>Bronquiolitis:</strong> Principal causa de hospitalización en <2 años. Agente principal: VRS.</p>
      <ul>
        <li>Cuadro clínico: Rinorrea, tos, dificultad respiratoria, sibilancias</li>
        <li>Tratamiento: Soporte (oxígeno, hidratación), aspiración de secreciones</li>
        <li>NO usar broncodilatadores rutinariamente</li>
      </ul>

      <p><strong>Neumonía:</strong> Fiebre + dificultad respiratoria + evidencia radiológica.</p>
      <ul>
        <li>Ambulatorio: Amoxicilina 80-90 mg/kg/día</li>
        <li>Hospitalizado: Penicilina cristalina o ampicilina</li>
      </ul>

      <h3>3. Deshidratación</h3>
      <p><strong>Clasificación según porcentaje de pérdida de peso:</strong></p>
      <ul>
        <li>Leve: <5% (alerta, mucosas húmedas)</li>
        <li>Moderada: 5-10% (ojos hundidos, mucosas secas)</li>
        <li>Grave: >10% (letárgico, signo del pliegue +, shock)</li>
      </ul>

      <p><strong>Manejo:</strong></p>
      <ul>
        <li>Leve: Sales de rehidratación oral (SRO) 50-100 ml/kg en 4 horas</li>
        <li>Moderada-Grave: Plan C con cristaloides IV</li>
      </ul>

      <h3>4. Fiebre sin Foco</h3>
      <p>Especial atención en <strong>menores de 3 meses:</strong></p>
      <ul>
        <li>Requiere evaluación completa: hemograma, PCR, hemocultivo, urocultivo, punción lumbar</li>
        <li>Hospitalización + antibióticos empíricos</li>
        <li>Riesgo de infección bacteriana grave: 10-15%</li>
      </ul>
    `,
    preguntas: [
      {
        id: 1,
        pregunta: "Lactante de 2 meses con fiebre de 38.5°C sin foco evidente. ¿Cuál es la conducta más adecuada?",
        opciones: [
          "Observación y control ambulatorio en 24 horas",
          "Paracetamol y reevaluar si persiste fiebre",
          "Hospitalización para estudio completo de sepsis",
          "Antibiótico ambulatorio empírico"
        ],
        respuestaCorrecta: 2,
        explicacion: "En menores de 3 meses con fiebre sin foco, se debe realizar estudio completo de sepsis (hemocultivo, urocultivo, PL) con hospitalización y antibióticos empíricos debido al alto riesgo de infección bacteriana grave (10-15%)."
      },
      {
        id: 2,
        pregunta: "¿Cuál es el agente etiológico más frecuente de bronquiolitis en lactantes?",
        opciones: [
          "Streptococcus pneumoniae",
          "Virus Respiratorio Sincicial (VRS)",
          "Haemophilus influenzae",
          "Adenovirus"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Virus Respiratorio Sincicial (VRS) es responsable del 50-80% de los casos de bronquiolitis en lactantes, especialmente durante los meses de invierno. No tiene tratamiento antiviral específico."
      },
      {
        id: 3,
        pregunta: "Niño de 2 años con diarrea acuosa de 2 días. Al examen: ojos hundidos, mucosas secas, signo del pliegue +. ¿Qué grado de deshidratación presenta?",
        opciones: [
          "Sin deshidratación",
          "Deshidratación leve",
          "Deshidratación moderada",
          "Deshidratación grave"
        ],
        respuestaCorrecta: 3,
        explicacion: "La presencia de ojos hundidos, mucosas secas y signo del pliegue positivo indica deshidratación grave (>10% del peso corporal). Requiere manejo con Plan C: 100ml/kg Ringer lactato IV (30ml/kg en 30min, luego 70ml/kg en 2.5h)."
      },
      {
        id: 4,
        pregunta: "¿Cuál es la dosis correcta de paracetamol para un niño de 20 kg?",
        opciones: [
          "100 mg cada 6 horas",
          "200 mg cada 6 horas",
          "300 mg cada 6 horas",
          "400 mg cada 4 horas"
        ],
        respuestaCorrecta: 1,
        explicacion: "La dosis de paracetamol es 10-15 mg/kg/dosis. Para 20 kg: 200-300 mg/dosis cada 4-6 horas. La opción B (200 mg) está dentro del rango terapéutico seguro. Dosis máxima diaria: 60 mg/kg/día."
      },
      {
        id: 5,
        pregunta: "¿A qué edad se debe iniciar la alimentación complementaria en un lactante sano?",
        opciones: [
          "4 meses",
          "5 meses",
          "6 meses",
          "8 meses"
        ],
        respuestaCorrecta: 2,
        explicacion: "La OMS recomienda lactancia materna exclusiva hasta los 6 meses de edad, momento en el cual se debe iniciar la alimentación complementaria manteniendo la lactancia materna hasta los 2 años o más."
      },
      {
        id: 6,
        pregunta: "RN de 3 días con ictericia hasta el tórax. Bilirrubina total: 14 mg/dL. ¿Cuál es la conducta?",
        opciones: [
          "Observación, es ictericia fisiológica",
          "Fototerapia inmediata",
          "Exanguinotransfusión urgente",
          "Hidratación oral y control en 24h"
        ],
        respuestaCorrecta: 1,
        explicacion: "Con ictericia desde el 3er día y bilirrubina 14 mg/dL, requiere fototerapia. La ictericia fisiológica aparece >24h pero niveles >12-13 mg/dL en RN a término de 3 días requieren tratamiento para prevenir kernicterus."
      },
      {
        id: 7,
        pregunta: "Lactante de 6 semanas con vómitos proyectiles no biliosos postprandiales. Pérdida de peso. ¿Diagnóstico más probable?",
        opciones: [
          "Reflujo gastroesofágico",
          "Estenosis pilórica hipertrófica",
          "Invaginación intestinal",
          "Gastroenteritis viral"
        ],
        respuestaCorrecta: 1,
        explicacion: "La estenosis pilórica hipertrófica se presenta típicamente entre 3-6 semanas con vómitos proyectiles no biliosos, pérdida de peso y alcalosis hipoclorémica. Dx: ecografía (píloro >3mm grosor, >14mm longitud). Tx: piloromiotomía."
      },
      {
        id: 8,
        pregunta: "¿Cuál es el criterio para diagnosticar síndrome nefrótico en pediatría?",
        opciones: [
          "Proteinuria >1g/m²/día + hematuria",
          "Proteinuria >40mg/m²/h + hipoalbuminemia <2.5g/dL",
          "Hematuria + cilindros hemáticos + HTA",
          "Oliguria + edema + hematuria"
        ],
        respuestaCorrecta: 1,
        explicacion: "Síndrome nefrótico: proteinuria masiva (>40mg/m²/h), hipoalbuminemia (<2.5g/dL), edema, hiperlipidemia. En niños, 90% es por cambios mínimos, responde a prednisona 60mg/m²/día x 4-6 semanas."
      },
      {
        id: 9,
        pregunta: "Niño de 3 años con fiebre 6 días, conjuntivitis bilateral, labios fisurados, lengua aframbuesada, exantema y adenopatía cervical. ¿Diagnóstico?",
        opciones: [
          "Escarlatina",
          "Sarampión",
          "Enfermedad de Kawasaki",
          "Rubéola"
        ],
        respuestaCorrecta: 2,
        explicacion: "Kawasaki: fiebre ≥5 días + 4/5 criterios (conjuntivitis no purulenta, cambios orolabiales, adenopatía >1.5cm, exantema, cambios en extremidades). Complicación: aneurismas coronarios. Tx: IGIV + AAS."
      },
      {
        id: 10,
        pregunta: "¿Cuál es el tratamiento de primera línea para crisis asmática leve-moderada?",
        opciones: [
          "Corticoides inhalados",
          "Salbutamol inhalado + corticoides orales",
          "Aminofilina IV",
          "Oxígeno + antihistamínicos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Crisis leve-moderada: salbutamol MDI 2-4 puff c/20min x 1h (o nebulizado 0.15mg/kg/dosis) + prednisona 1-2mg/kg VO. Oxígeno si SatO2 <92%. Reevaluar respuesta y considerar hospitalización si no mejora."
      },
      {
        id: 11,
        pregunta: "RN con retraso en evacuación de meconio >48h, distensión abdominal y vómitos biliosos. ¿Sospecha diagnóstica?",
        opciones: [
          "Atresia intestinal",
          "Enfermedad de Hirschsprung",
          "Íleo meconial",
          "Malrotación intestinal"
        ],
        respuestaCorrecta: 1,
        explicacion: "Hirschsprung: ausencia de células ganglionares. Clínica: retraso evacuación meconio >48h, distensión, vómitos biliosos, estreñimiento crónico. Dx: enema baritado (zona de transición), biopsia rectal. Tx: cirugía."
      },
      {
        id: 12,
        pregunta: "Lactante de 8 meses con episodios de llanto intenso, palidez, masa abdominal palpable y heces 'en jalea de grosella'. ¿Diagnóstico?",
        opciones: [
          "Apendicitis aguda",
          "Invaginación intestinal",
          "Divertículo de Meckel",
          "Gastroenteritis bacteriana"
        ],
        respuestaCorrecta: 1,
        explicacion: "Invaginación intestinal (ileocólica más frecuente): dolor cólico intermitente, vómitos, heces 'jalea de grosella', masa en hemiabdomen derecho. Dx: ecografía (signo diana). Tx: enema hidroneumático (80% éxito). Cirugía si falla."
      },
      {
        id: 13,
        pregunta: "¿Cuál es la causa más frecuente de convulsión febril en niños?",
        opciones: [
          "Meningitis bacteriana",
          "Infección viral (roséola, influenza)",
          "Absceso cerebral",
          "Encefalitis herpética"
        ],
        respuestaCorrecta: 1,
        explicacion: "Convulsión febril: crisis con fiebre >38°C sin infección SNC, 6m-5 años. Causa de fiebre: infecciones virales (roséola, influenza, VRS). Simple: <15min, generalizada, única en 24h. No requiere anticonvulsivantes."
      },
      {
        id: 14,
        pregunta: "¿Cuál es el esquema de vacunación a los 2 meses de edad?",
        opciones: [
          "BCG + Hepatitis B",
          "Pentavalente + Rotavirus + Neumococo + Polio",
          "Triple viral + Varicela",
          "DPT + Hepatitis A"
        ],
        respuestaCorrecta: 1,
        explicacion: "2 meses: Pentavalente 1ra (DPT+HB+Hib), Antipolio inactivada 1ra, Rotavirus 1ra, Neumococo 1ra. Aplicar en diferentes sitios (muslo anterolateral). A los 4 y 6 meses se repiten excepto rotavirus (3 dosis según marca)."
      },
      {
        id: 15,
        pregunta: "Niño de 4 años con púrpura palpable en MMII, artritis, dolor abdominal y hematuria. ¿Diagnóstico más probable?",
        opciones: [
          "Leucemia aguda",
          "Púrpura trombocitopénica inmune",
          "Púrpura de Henoch-Schönlein",
          "Hemofilia"
        ],
        respuestaCorrecta: 2,
        explicacion: "Púrpura de Henoch-Schönlein: vasculitis IgA. Clínica: púrpura palpable MMII/glúteos, artritis, dolor abdominal (puede haber invaginación), glomerulonefritis. Mayoría autolimitada. Tx: sintomáticos, corticoides si severo."
      },
      {
        id: 16,
        pregunta: "¿Cuál es el manejo inicial de epistaxis en un niño de 5 años?",
        opciones: [
          "Taponamiento nasal posterior inmediato",
          "Presión digital ala nasal 10min + inclinación anterior",
          "Cauterización con nitrato de plata",
          "Transfusión de plaquetas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Manejo epistaxis: presión digital en ala nasal 10min, inclinación anterior (no posterior para evitar aspiración), compresas frías. Si persiste: taponamiento anterior con gasa vaselinada. Evaluar coagulopatías si recurrente."
      },
      {
        id: 17,
        pregunta: "RN prematuro de 32 semanas con dificultad respiratoria desde el nacimiento, quejido, aleteo nasal. Rx: patrón reticulogranular. ¿Diagnóstico?",
        opciones: [
          "Taquipnea transitoria del RN",
          "Enfermedad de membrana hialina",
          "Síndrome de aspiración meconial",
          "Neumonía congénita"
        ],
        respuestaCorrecta: 1,
        explicacion: "Membrana hialina (déficit surfactante): prematuros <34sem, dificultad respiratoria desde nacimiento, Rx reticulogranular + broncograma aéreo. Prevención: corticoides prenatales. Tx: surfactante exógeno, CPAP, ventilación mecánica."
      },
      {
        id: 18,
        pregunta: "¿Cuál es el tratamiento de anemia ferropénica en un niño de 18 meses?",
        opciones: [
          "Transfusión de glóbulos rojos",
          "Hierro elemental 1mg/kg/día por 1 mes",
          "Hierro elemental 3-6mg/kg/día por 3-6 meses",
          "Ácido fólico + vitamina B12"
        ],
        respuestaCorrecta: 2,
        explicacion: "Anemia ferropénica: hierro elemental 3-6mg/kg/día VO entre comidas por 3-6 meses (sulfato ferroso 3mg/kg/día). Reticulocitos ↑ en 5-7 días. Hb normaliza en 4-8 semanas. Continuar 2-3 meses más para reponer depósitos."
      },
      {
        id: 19,
        pregunta: "Niño de 2 años con tos perruna, estridor inspiratorio y disfonía. ¿Diagnóstico más probable?",
        opciones: [
          "Epiglotitis aguda",
          "Crup (laringotraqueobronquitis)",
          "Bronquiolitis",
          "Cuerpo extraño laríngeo"
        ],
        respuestaCorrecta: 1,
        explicacion: "Crup (laringotraqueobronquitis viral): parainfluenza. Clínica: tos perruna, estridor inspiratorio, disfonía, fiebre. Rx: signo del campanario. Tx: dexametasona 0.6mg/kg IM/VO dosis única, adrenalina nebulizada si grave."
      },
      {
        id: 20,
        pregunta: "¿Cuál es la maniobra para detectar displasia de cadera en un RN?",
        opciones: [
          "Maniobra de Ortolani y Barlow",
          "Reflejo de Moro",
          "Signo de Babinski",
          "Reflejo de prensión"
        ],
        respuestaCorrecta: 0,
        explicacion: "Displasia de cadera: Ortolani (reducción con 'clic' al abducir), Barlow (luxación al aducir). Galeazzi: asimetría pliegues, acortamiento muslo. Dx: ecografía <6m, Rx >6m. Tx: arnés Pavlik <6m, cirugía si tardío."
      },
      {
        id: 21,
        pregunta: "Lactante de 10 meses con infecciones respiratorias recurrentes, diarrea crónica y falla de medro. Test de sudor: Cl 68 mEq/L. ¿Diagnóstico?",
        opciones: [
          "Inmunodeficiencia primaria",
          "Fibrosis quística",
          "Reflujo gastroesofágico severo",
          "Enfermedad celíaca"
        ],
        respuestaCorrecta: 1,
        explicacion: "Fibrosis quística (FQ): mutación CFTR. Clínica: infecciones respiratorias recurrentes, diarrea crónica, falla de medro, íleo meconial. Dx: test sudor >60mEq/L (Cl y Na), test genético. Manejo multidisciplinario."
      },
      {
        id: 22,
        pregunta: "¿Cuándo está indicada la fototerapia en un RN a término de 48 horas?",
        opciones: [
          "Bilirrubina total >5 mg/dL",
          "Bilirrubina total >10 mg/dL",
          "Bilirrubina total >12-13 mg/dL",
          "Bilirrubina total >20 mg/dL"
        ],
        respuestaCorrecta: 2,
        explicacion: "Fototerapia RN término sano: >12-13 mg/dL a las 48h según nomograma de Bhutani. Si <24h de inicio: siempre patológica (investigar hemólisis). Exanguinotransfusión si >20-25 mg/dL o signos de kernicterus."
      },
      {
        id: 23,
        pregunta: "Niño de 6 años con hematuria macroscópica 2 semanas después de faringoamigdalitis. Edema, HTA. ¿Diagnóstico?",
        opciones: [
          "Síndrome nefrótico",
          "Glomerulonefritis post-estreptocócica",
          "Púrpura de Henoch-Schönlein",
          "Síndrome hemolítico urémico"
        ],
        respuestaCorrecta: 1,
        explicacion: "GNPE: 1-2 semanas post-faringoamigdalitis (Streptococcus pyogenes). Clínica: hematuria macroscópica, edema, HTA, oliguria. Lab: C3 bajo, ASTO elevado. Mayoría recuperación completa. Tx: sintomático (diuréticos, antihipertensivos)."
      },
      {
        id: 24,
        pregunta: "¿Cuál es la vacuna contraindicada en niños con inmunodeficiencia severa?",
        opciones: [
          "Hepatitis B",
          "Pentavalente (DPT+HB+Hib)",
          "BCG y vacunas vivas (rotavirus, triple viral)",
          "Neumococo conjugada"
        ],
        respuestaCorrecta: 2,
        explicacion: "Vacunas VIVAS contraindicadas en inmunodeficiencia severa: BCG, rotavirus, triple viral (sarampión-rubéola-parotiditis), varicela, fiebre amarilla. Pueden usar inactivadas: pentavalente, neumococo, hepatitis, polio inactivada."
      },
      {
        id: 25,
        pregunta: "Lactante de 4 meses con dermatitis del pañal. Eritema con lesiones satélite. ¿Tratamiento?",
        opciones: [
          "Óxido de zinc únicamente",
          "Hidrocortisona 1% tópica",
          "Nistatina tópica + óxido de zinc",
          "Antibiótico tópico"
        ],
        respuestaCorrecta: 2,
        explicacion: "Lesiones satélite sugieren candidiasis. Tx: nistatina tópica 3-4 veces/día + óxido de zinc, cambios frecuentes, secar bien. Si dermatitis simple: solo óxido de zinc. Si severa: corticoide leve + antifúngico."
      },
      {
        id: 26,
        pregunta: "¿Cuál es el antibiótico de primera línea para otitis media aguda en niño de 18 meses?",
        opciones: [
          "Ceftriaxona IM",
          "Amoxicilina 80-90 mg/kg/día",
          "Azitromicina",
          "Ciprofloxacino"
        ],
        respuestaCorrecta: 1,
        explicacion: "OMA: amoxicilina 80-90 mg/kg/día dividido en 2-3 dosis por 10 días (<2 años) o 5-7 días (>2 años). Si resistencia o falla: amoxicilina-clavulánico. Streptococcus pneumoniae causa más frecuente."
      },
      {
        id: 27,
        pregunta: "RN con signos vitales estables pero evacuación de meconio retrasada >48h. Radiografía con distensión de asas. ¿Estudio diagnóstico?",
        opciones: [
          "TAC abdominal",
          "Enema baritado + biopsia rectal",
          "Endoscopia digestiva alta",
          "Ecografía abdominal"
        ],
        respuestaCorrecta: 1,
        explicacion: "Sospecha Hirschsprung: enema baritado (zona de transición, dilatación proximal) + biopsia rectal (confirma ausencia de células ganglionares en plexo de Meissner y Auerbach). Manometría anorectal: falla relajación esfínter interno."
      },
      {
        id: 28,
        pregunta: "Niño de 3 años con fiebre, vesículas en manos, pies y boca. ¿Agente etiológico?",
        opciones: [
          "Virus varicela-zóster",
          "Coxsackie A16",
          "Virus herpes simple",
          "Parvovirus B19"
        ],
        respuestaCorrecta: 1,
        explicacion: "Enfermedad manos-pies-boca: Coxsackie A16. Clínica: fiebre, vesículas dolorosas en manos, pies y boca (paladar, lengua). Autolimitada 7-10 días. Tx: sintomático, hidratación, analgesia. Contagioso por gotitas y fecal-oral."
      },
      {
        id: 29,
        pregunta: "¿Qué porcentaje de superficie corporal quemada tiene un niño con quemaduras en tórax anterior y abdomen?",
        opciones: [
          "9%",
          "18%",
          "27%",
          "36%"
        ],
        respuestaCorrecta: 1,
        explicacion: "Regla de los 9 en niños: cabeza 18%, cada MMSS 9%, tórax anterior 18%, tórax posterior 18%, abdomen anterior 9%, abdomen posterior 9%, cada MMII 13.5%. Tórax + abdomen anterior = 18%+9% = 27%."
      },
      {
        id: 30,
        pregunta: "Lactante de 7 meses con SatO2 88%, tiraje intercostal, sibilancias difusas. Diagnóstico más probable?",
        opciones: [
          "Neumonía bacteriana",
          "Bronquiolitis",
          "Crisis asmática",
          "Insuficiencia cardíaca"
        ],
        respuestaCorrecta: 1,
        explicacion: "Bronquiolitis: <2 años (pico 6m), primer episodio de sibilancias, dificultad respiratoria. VRS causa principal. Criterios hospitalización: <3m, SatO2 <92%, dificultad respiratoria moderada-severa, intolerancia oral, prematurez, cardiopatía."
      },
      {
        id: 31,
        pregunta: "¿Cuál es la medida más efectiva para prevenir el síndrome de muerte súbita del lactante?",
        opciones: [
          "Dormir en posición supina (boca arriba)",
          "Usar almohada suave",
          "Abrigar bien al bebé",
          "Dormir con los padres"
        ],
        respuestaCorrecta: 0,
        explicacion: "Prevención SMSL: dormir BOCA ARRIBA, colchón firme, cuna VACÍA (sin almohadas/cobijas/juguetes), temperatura adecuada, NO tabaquismo, lactancia materna, chupón al dormir. 'Back to Sleep' redujo SMSL 50%."
      },
      {
        id: 32,
        pregunta: "Niño de 5 años con edema palpebral matutino, oliguria y hematuria. Proteínas en orina +++. ¿Primer diagnóstico a descartar?",
        opciones: [
          "Infección urinaria",
          "Síndrome nefrótico",
          "Glomerulonefritis aguda",
          "Diabetes mellitus"
        ],
        respuestaCorrecta: 2,
        explicacion: "Edema + oliguria + hematuria sugiere glomerulonefritis aguda. Si proteinuria masiva + edema + hipoalbuminemia sin hematuria: síndrome nefrótico. Estudiar: C3, ASTO, función renal, ecografía renal, biopsia si indicado."
      },
      {
        id: 33,
        pregunta: "RN que no evacuó meconio en 48h. Enema baritado muestra zona de transición. ¿Tratamiento definitivo?",
        opciones: [
          "Laxantes osmóticos",
          "Enemas evacuantes diarios",
          "Resección quirúrgica del segmento agangliónico",
          "Dieta rica en fibra"
        ],
        respuestaCorrecta: 2,
        explicacion: "Hirschsprung: tratamiento DEFINITIVO es quirúrgico (resección segmento agangliónico + anastomosis). Procedimientos: Soave, Duhamel, Swenson. Preoperatorio: descompresión con enemas. Pronostico excelente post-cirugía."
      },
      {
        id: 34,
        pregunta: "¿Cuál es la complicación más grave de la enfermedad de Kawasaki?",
        opciones: [
          "Artritis crónica",
          "Aneurismas coronarios",
          "Insuficiencia renal",
          "Convulsiones"
        ],
        respuestaCorrecta: 1,
        explicacion: "Kawasaki: complicación más grave = aneurismas coronarios (20-25% sin tratamiento, <5% con IGIV + AAS). Tx: IGIV 2g/kg dosis única + AAS (antiinflamatorio luego antiagregante). Ecocardiograma al diagnóstico, 2 y 6-8 semanas."
      },
      {
        id: 35,
        pregunta: "Lactante de 5 meses con crisis de apnea, cianosis y tos paroxística en accesos. ¿Diagnóstico probable?",
        opciones: [
          "Bronquiolitis",
          "Tos ferina (pertussis)",
          "Reflujo gastroesofágico",
          "Neumonía viral"
        ],
        respuestaCorrecta: 1,
        explicacion: "Tos ferina (Bordetella pertussis): tos paroxística en accesos (15-20 toses), estridor inspiratorio ('canto de gallo'), vómitos post-tusígenos, apneas en lactantes pequeños. Dx: PCR. Tx: azitromicina. Prevención: vacuna pentavalente."
      },
      {
        id: 36,
        pregunta: "Niño de 8 años con soplo sistólico 2/6 en borde esternal izquierdo, asintomático. ¿Conducta?",
        opciones: [
          "Ecocardiograma urgente",
          "Observación, probablemente soplo inocente",
          "Tratamiento con digital",
          "Restricción de actividad física"
        ],
        respuestaCorrecta: 1,
        explicacion: "Soplo inocente: sistólico, <3/6, sin síntomas, sin frémito, varía con posición. Derivar si: ≥3/6, diastólico, holosistólico, con frémito, síntomas (cianosis, ICC, falla medro), antecedente familiar cardiopatía."
      },
      {
        id: 37,
        pregunta: "¿Cuál es el tratamiento de la pediculosis capitis?",
        opciones: [
          "Ivermectina oral",
          "Permetrina 1% tópica, repetir en 7-10 días",
          "Corticoide tópico",
          "Cefalosporina oral"
        ],
        respuestaCorrecta: 1,
        explicacion: "Pediculosis: permetrina 1% tópica en cabello seco, dejar 10min, enjuagar. Repetir en 7-10 días (ciclo de vida liendre). Peinar con peine fino. Lavar ropa/sábanas agua caliente. Alternativa: ivermectina oral si resistencia."
      },
      {
        id: 38,
        pregunta: "RN con distensión abdominal progresiva, vómitos biliosos, sangre en heces. Rx: neumatosis intestinal. ¿Diagnóstico?",
        opciones: [
          "Apendicitis neonatal",
          "Enterocolitis necrotizante",
          "Invaginación intestinal",
          "Estenosis pilórica"
        ],
        respuestaCorrecta: 1,
        explicacion: "Enterocolitis necrotizante (ECN): prematuros. Clínica: distensión abdominal, vómitos biliosos, sangre en heces, inestabilidad. Rx: neumatosis intestinal, neumoperitoneo si perforación. Tx: NPT, ATB, cirugía si perforación/necrosis."
      },
      {
        id: 39,
        pregunta: "¿Cuándo sospechar maltrato infantil?",
        opciones: [
          "Fractura de clavícula en RN",
          "Hematomas en diferentes estadios de evolución + relato inconsistente",
          "Caída de la cama con fractura simple",
          "Quemadura de primer grado en mano"
        ],
        respuestaCorrecta: 1,
        explicacion: "Sospechar maltrato: lesiones incompatibles con mecanismo, diferentes estadios cicatrización, fracturas múltiples (costillas, metafisiarias, cráneo), quemaduras patrón (cigarrillo, inmersión), retraso buscar atención, cambios comportamiento. DENUNCIAR siempre."
      },
      {
        id: 40,
        pregunta: "Lactante de 3 meses con fontanela abombada, rigidez de nuca, fiebre 39°C. ¿Conducta inmediata?",
        opciones: [
          "Antibióticos orales ambulatorios",
          "Punción lumbar + antibióticos IV empíricos",
          "TAC cerebral previo a punción lumbar",
          "Observación hospitalaria 24h"
        ],
        respuestaCorrecta: 1,
        explicacion: "Sospecha meningitis bacteriana: PL URGENTE (salvo contraindicación: inestabilidad, signos focalización), iniciar ATB empírico SIN ESPERAR cultivos (cefotaxima/ceftriaxona + ampicilina en <1m). Retraso en ATB aumenta morbimortalidad."
      },
      {
        id: 41,
        pregunta: "Niño de 2 años con marcha de puntillas persistente. ¿Cuándo derivar a especialista?",
        opciones: [
          "De inmediato, puede ser parálisis cerebral",
          "Solo si persiste después de los 3 años",
          "Nunca, es normal hasta los 5 años",
          "Si se asocia a otros signos neurológicos o persiste >6 meses"
        ],
        respuestaCorrecta: 3,
        explicacion: "Marcha puntillas: normal hasta 2-3 años. Derivar si: persiste >6m observación, asimetría, hipertonía, hiperreflexia, retraso desarrollo. Descartar: parálisis cerebral, distrofia muscular, acortamiento tendón Aquiles, trastorno espectro autista."
      },
      {
        id: 42,
        pregunta: "¿Cuál es el manejo del cuerpo extraño en fosa nasal en niño de 3 años?",
        opciones: [
          "Extracción inmediata con pinza en consultorio",
          "Antibióticos profilácticos",
          "Referir a ORL para extracción bajo sedación si no coopera",
          "Observación, se eliminará espontáneamente"
        ],
        respuestaCorrecta: 2,
        explicacion: "Cuerpo extraño nasal: intentar extracción en consultorio si niño coopera y objeto visible (técnica del 'beso de la madre', pinzas). Si no coopera, objeto profundo o pila botón: referir ORL para extracción bajo sedación. Nunca empujar hacia adentro."
      },
      {
        id: 43,
        pregunta: "Lactante de 11 meses que no se sienta solo ni balbucea. ¿Conducta?",
        opciones: [
          "Observación, cada niño tiene su ritmo",
          "Evaluación completa de neurodesarrollo",
          "Iniciar estimulación temprana sin más estudios",
          "Control en 6 meses"
        ],
        respuestaCorrecta: 1,
        explicacion: "Retraso desarrollo: a los 9-10m debe sentarse solo y balbucear. Evaluar: examen neurológico, audición, visión, TSH, test desarrollo (Denver II, Bayley). Iniciar estimulación temprana mientras se estudia. Derivar a neuropediatría."
      },
      {
        id: 44,
        pregunta: "¿Cuál es la causa más frecuente de obstrucción intestinal en lactantes?",
        opciones: [
          "Hernia inguinal incarcerada",
          "Invaginación intestinal",
          "Atresia intestinal",
          "Enfermedad de Hirschsprung"
        ],
        respuestaCorrecta: 1,
        explicacion: "Invaginación intestinal: causa MÁS frecuente de obstrucción en 6m-2 años. Ileocólica 90%. Factores: hipertrofia linfoide (virus), divertículo Meckel, pólipos. Tríada: dolor cólico, vómitos, heces 'jalea grosella' (tardío)."
      },
      {
        id: 45,
        pregunta: "Niño de 6 años con dolor en cadera derecha, cojera, sin fiebre ni trauma. Rx: normal. ¿Diagnóstico probable?",
        opciones: [
          "Artritis séptica",
          "Sinovitis transitoria de cadera",
          "Enfermedad de Perthes",
          "Fractura de estrés"
        ],
        respuestaCorrecta: 1,
        explicacion: "Sinovitis transitoria (coxalgia fugaz): 3-8 años, dolor cadera/rodilla, cojera, sin fiebre (o febrícula), post-infección viral. Rx normal. Eco: derrame. Autolimitada 1-2 semanas. Tx: reposo, AINES. Diferenciar de artritis séptica (fiebre, VSG↑, leucocitosis)."
      },
      {
        id: 46,
        pregunta: "¿Cuál es el signo clínico más específico de deshidratación en lactantes?",
        opciones: [
          "Mucosas secas",
          "Fontanela hundida",
          "Taquicardia",
          "Oliguria"
        ],
        respuestaCorrecta: 1,
        explicacion: "Fontanela hundida es específica de lactantes con deshidratación moderada-grave. Otros signos: ojos hundidos, mucosas secas, signo pliegue +, letargia, oliguria. Leve: solo sed aumentada. Grave: shock (pulsos débiles, llenado capilar >3seg, alteración conciencia)."
      },
      {
        id: 47,
        pregunta: "RN con ictericia, hepatoesplenomegalia, petequias y microcefalia. ¿Sospecha etiológica?",
        opciones: [
          "Incompatibilidad ABO",
          "Infección congénita (TORCH)",
          "Ictericia fisiológica",
          "Déficit G6PD"
        ],
        respuestaCorrecta: 1,
        explicacion: "TORCH (Toxoplasma, Rubéola, CMV, Herpes): ictericia, hepatoesplenomegalia, petequias, microcefalia, calcificaciones intracraneales, coriorretinitis. Estudiar: IgM específicas, PCR, cultivos. CMV causa más frecuente. Secuelas: sordera, retraso psicomotor."
      },
      {
        id: 48,
        pregunta: "¿Cuándo indicar profilaxis de endocarditis bacteriana en niños con cardiopatía?",
        opciones: [
          "En todas las cardiopatías congénitas",
          "Solo en prótesis valvulares, cardiopatías cianóticas no corregidas, defectos corregidos con material protésico <6m",
          "Nunca en pediatría",
          "Solo en comunicación interventricular"
        ],
        respuestaCorrecta: 1,
        explicacion: "Profilaxis EB: prótesis valvulares, cardiopatías cianóticas no corregidas (o corrección paliativa), defectos corregidos con material protésico <6m, antecedente endocarditis. Usar amoxicilina 50mg/kg VO 1h antes procedimiento odontológico/respiratorio."
      },
      {
        id: 49,
        pregunta: "Lactante de 8 meses con diarrea líquida, vómitos, fiebre. Deshidratación leve. ¿Tratamiento?",
        opciones: [
          "Hidratación IV inmediata",
          "Sales de rehidratación oral (Plan B) + continuar lactancia",
          "Antibiótico oral",
          "Dieta astringente por 48h"
        ],
        respuestaCorrecta: 1,
        explicacion: "GEA deshidratación leve: Plan B (SRO 50-100ml/kg en 4h, dar sorbos frecuentes), continuar lactancia/alimentación, zinc 10mg/día x 10-14días. Signos alarma: vómitos persistentes, sangre en heces, fiebre alta, letargia. Causa viral más frecuente: rotavirus."
      },
      {
        id: 50,
        pregunta: "Niño de 4 años con fiebre, odinofagia, exudado amigdalino, adenopatía cervical dolorosa. Test rápido estreptocócico +. ¿Tratamiento?",
        opciones: [
          "Sintomáticos únicamente",
          "Penicilina benzatínica 600,000 UI IM dosis única",
          "Amoxicilina oral 10 días",
          "Corticoides orales"
        ],
        respuestaCorrecta: 2,
        explicacion: "Faringoamigdalitis estreptocócica: amoxicilina 50mg/kg/día (máx 1g/día) dividido en 2-3 dosis por 10 días. Alternativas: penicilina benzatínica 600,000 UI (<27kg) o 1'200,000 UI (>27kg) IM dosis única. Previene fiebre reumática y glomerulonefritis."
      },
      {
        id: 51,
        pregunta: "¿Cuál es el reflejo primitivo que debe desaparecer primero en el desarrollo normal?",
        opciones: [
          "Reflejo de Moro (6 meses)",
          "Marcha automática (2 meses)",
          "Prensión palmar (6 meses)",
          "Babinski (12 meses)"
        ],
        respuestaCorrecta: 1,
        explicacion: "Reflejos primitivos desaparecen en orden: marcha automática (0-2m), búsqueda (0-4m), Moro y prensión palmar (0-6m), succión (0-12m), Babinski (0-12-24m). Persistencia sugiere daño neurológico. Aparecen reflejos posturales."
      },
      {
        id: 52,
        pregunta: "Lactante de 9 meses con fiebre alta 3 días. Al 4to día aparece exantema máculo-papular tórax/cuello, fiebre cede. ¿Diagnóstico?",
        opciones: [
          "Sarampión",
          "Rubéola",
          "Roséola infantil (exantema súbito)",
          "Escarlatina"
        ],
        respuestaCorrecta: 2,
        explicacion: "Roséola (exantema súbito, 6ta enfermedad): HHV-6, 6m-2 años. Fiebre alta 3-5 días sin foco, luego exantema máculo-papular rosado en tronco/cuello al ceder fiebre. Benigna, autolimitada. Complicación: convulsión febril."
      },
      {
        id: 53,
        pregunta: "¿Cuál es la indicación de exanguinotransfusión en un RN con ictericia?",
        opciones: [
          "Bilirrubina total >10 mg/dL",
          "Bilirrubina total >15 mg/dL",
          "Bilirrubina total >20-25 mg/dL o signos de encefalopatía bilirrubínica",
          "Cualquier ictericia en las primeras 24h"
        ],
        respuestaCorrecta: 2,
        explicacion: "Exanguinotransfusión: bilirrubina >20-25 mg/dL (según edad y factores de riesgo en nomograma) o signos de kernicterus (hipotonía, letargia, llanto agudo, opistótonos). Previene daño neurológico irreversible. Hemólisis severa: indicación precoz."
      },
      {
        id: 54,
        pregunta: "Niño de 7 años con dolor abdominal periumbilical, luego fosa ilíaca derecha, fiebre, vómitos. Blumberg +. ¿Diagnóstico?",
        opciones: [
          "Gastroenteritis aguda",
          "Apendicitis aguda",
          "Adenitis mesentérica",
          "Constipación"
        ],
        respuestaCorrecta: 1,
        explicacion: "Apendicitis: dolor periumbilical migra a FID, fiebre, vómitos, anorexia. Signos: Blumberg +, McBurney +, Rovsing +. Leucocitosis con desviación izquierda. Dx: clínica + eco/TAC. Tx: apendicectomía. Complicación: perforación con peritonitis."
      },
      {
        id: 55,
        pregunta: "¿Cuál es la forma más efectiva de administrar oxígeno a un lactante con bronquiolitis?",
        opciones: [
          "Cánula nasal bajo flujo (1-2 L/min)",
          "Cánula nasal alto flujo o cámara cefálica",
          "Ventilación mecánica inmediata",
          "Nebulizaciones con oxígeno"
        ],
        respuestaCorrecta: 1,
        explicacion: "Bronquiolitis: oxígeno si SatO2 <90-92%. Cánula nasal alto flujo (CNAF) o cámara cefálica en lactantes. Hidratación, aspiración suave si secreciones. NO nebulizaciones salbutamol (inefectivas). NO antibióticos (viral). Hospitalizar según criterios."
      },
      {
        id: 56,
        pregunta: "RN con meconio espeso en cavidad oral, dificultad respiratoria desde el nacimiento. Rx: infiltrados parcheados. ¿Diagnóstico?",
        opciones: [
          "Taquipnea transitoria",
          "Membrana hialina",
          "Síndrome de aspiración meconial",
          "Neumonía congénita"
        ],
        respuestaCorrecta: 2,
        explicacion: "Aspiración meconial: RN postérmino o con sufrimiento fetal agudo. Meconio en vía aérea. Rx: infiltrados parcheados, atelectasias, hiperinsuflación. Complicaciones: neumotórax, hipertensión pulmonar. Tx: soporte respiratorio, surfactante si severo. NO succionar intratráquea rutinariamente."
      },
      {
        id: 57,
        pregunta: "¿A qué edad un niño normal debe poder subir escaleras alternando pies?",
        opciones: [
          "18 meses",
          "24 meses",
          "36 meses",
          "48 meses"
        ],
        respuestaCorrecta: 2,
        explicacion: "Desarrollo motor: 12m camina con apoyo, 15m camina solo, 18m corre, 24m sube escaleras sin alternar (pie por pie), 36m (3 años) sube alternando pies, 48m (4 años) salta en un pie. Evaluar con Denver II."
      },
      {
        id: 58,
        pregunta: "Lactante con sibilancias recurrentes >3 episodios en un año, antecedente familiar de atopia. ¿Diagnóstico probable?",
        opciones: [
          "Bronquiolitis recurrente",
          "Asma del lactante",
          "Fibrosis quística",
          "Aspiración crónica por reflujo"
        ],
        respuestaCorrecta: 1,
        explicacion: "Asma lactante: >3 episodios sibilancias/año + índice predictivo de asma + (1 criterio mayor: padre/madre con asma, dermatitis atópica; o 2 menores: eosinofilia, sibilancias sin resfriado, rinitis alérgica). Tx: preventivo si severo."
      },
      {
        id: 59,
        pregunta: "Niño de 5 años con hematomas múltiples, petequias, epistaxis. Plaquetas: 15,000/mm³. ¿Diagnóstico más probable?",
        opciones: [
          "Hemofilia A",
          "Leucemia aguda",
          "Púrpura trombocitopénica inmune (PTI)",
          "Enfermedad de von Willebrand"
        ],
        respuestaCorrecta: 2,
        explicacion: "PTI: trombocitopenia aislada severa (<20,000), petequias, equimosis, sangrado mucosas. Post-infección viral. Hemograma: solo plaquetas bajas. Dx: exclusión (no leucemia, no LES). Mayoría autolimitada 6m. Tx: observación si <10,000 o sangrado: IGIV o corticoides."
      },
      {
        id: 60,
        pregunta: "¿Cuál es el manejo inicial de una crisis convulsiva en un niño en el servicio de urgencias?",
        opciones: [
          "Administrar anticonvulsivante oral",
          "Posición lateral de seguridad + oxígeno + acceso venoso + diazepam IV/rectal si >5 min",
          "Intubación orotraqueal inmediata",
          "TAC cerebral urgente"
        ],
        respuestaCorrecta: 1,
        explicacion: "Manejo crisis convulsiva: 1)ABC, posición lateral, oxígeno, 2)Glicemia, 3)Si >5min: diazepam 0.3-0.5mg/kg IV/rectal o midazolam 0.2mg/kg IM, 4)Si persiste: fenitoína/ácido valproico, 5)Estado epiléptico refractario: fenobarbital, intubación. Buscar causa."
      }
    ]
  },
  {
    id: 2,
    nombre: "Ginecología y Obstetricia",
    color: "#ec4899", // rosa
    icon: "🤰",
    flashcards: [
      {
        id: 1,
        frente: "¿Cuál es la definición de amenorrea primaria?",
        reverso: "Ausencia de menstruación a los 16 años con características sexuales secundarias presentes, o a los 14 años sin desarrollo de características sexuales secundarias."
      },
      {
        id: 2,
        frente: "¿Cuáles son los criterios diagnósticos de preeclampsia?",
        reverso: "Presión arterial ≥140/90 mmHg después de las 20 semanas + proteinuria ≥300 mg/24h o relación proteína/creatinina ≥0.3, en mujer previamente normotensa."
      },
      {
        id: 3,
        frente: "¿Cuál es el tratamiento de primera línea para la vaginosis bacteriana?",
        reverso: "Metronidazol 500 mg VO cada 12 horas por 7 días, o gel vaginal de metronidazol 0.75% por 5 días. Alternativa: clindamicina."
      },
      {
        id: 4,
        frente: "¿Cuándo se considera un embarazo a término?",
        reverso: "Entre 37 y 42 semanas de gestación (37.0 - 41.6 semanas). Antes de 37 semanas es pretérmino, después de 42 semanas es postérmino."
      },
      {
        id: 5,
        frente: "¿Cuál es la principal causa de hemorragia posparto?",
        reverso: "Atonía uterina (70% de los casos). Otras causas: trauma del canal del parto (desgarros, rotura uterina), retención de restos placentarios, alteraciones de la coagulación."
      },
      {
        id: 6,
        frente: "¿Cuáles son los criterios de preeclampsia severa?",
        reverso: "PA ≥160/110 mmHg, proteinuria >5g/24h, oliguria <500ml/24h, edema pulmonar, alteraciones visuales/cerebrales, dolor epigástrico, trombocitopenia <100,000, elevación enzimas hepáticas."
      },
      {
        id: 7,
        frente: "¿Cuál es el manejo del trabajo de parto pretérmino?",
        reverso: "Reposo, hidratación, tocolíticos (nifedipino, atosiban) si <34sem, corticoides (betametasona 12mg IM x 2 dosis) para maduración pulmonar fetal, neuroprotección (sulfato Mg) si <32sem."
      },
      {
        id: 8,
        frente: "¿Qué es la ruptura prematura de membranas y su manejo?",
        reverso: "Ruptura de membranas antes del inicio del trabajo de parto. A término: inducción inmediata. Pretérmino: manejo expectante con antibióticos, corticoides, monitoreo de infección. Parto si corioamnionitis."
      },
      {
        id: 9,
        frente: "¿Cuáles son los criterios de Amsel para vaginosis bacteriana?",
        reverso: "3 de 4: 1)Flujo blanco-grisáceo homogéneo, 2)pH vaginal >4.5, 3)Prueba aminas positiva (olor a pescado con KOH), 4)Clue cells (células clave) en microscopía."
      },
      {
        id: 10,
        frente: "¿Cuál es el tratamiento de candidiasis vulvovaginal?",
        reverso: "Fluconazol 150mg VO dosis única, o azoles tópicos (clotrimazol, miconazol) óvulos por 3-7 días. En embarazo: solo tópicos. Recurrente: fluconazol 150mg/sem x 6 meses."
      },
      {
        id: 11,
        frente: "¿Qué es el desprendimiento prematuro de placenta (DPPNI)?",
        reverso: "Separación prematura de placenta normalmente insertada >20sem. Clínica: dolor abdominal intenso, sangrado oscuro (puede ser oculto), útero hipertónico/leñoso, sufrimiento fetal. Factores: HTA, trauma, cocaína."
      },
      {
        id: 12,
        frente: "¿Qué es placenta previa y su manejo?",
        reverso: "Implantación placentaria que cubre total/parcialmente orificio cervical interno. Clínica: sangrado rojo rutilante indoloro 3er trimestre. NO tacto vaginal. Dx: ecografía TV. Manejo: cesárea electiva 36-37sem."
      },
      {
        id: 13,
        frente: "¿Cuál es el tratamiento del embarazo ectópico?",
        reverso: "Metotrexate IM (si estable, <3.5cm, βHCG <5000, sin latido) 50mg/m² dosis única. Cirugía (salpingostomía/salpingectomía) si inestable, ruptura, contraindicación MTX, masa >3.5cm."
      },
      {
        id: 14,
        frente: "¿Cuándo usar sulfato de magnesio en obstetricia?",
        reverso: "1)Prevención/tratamiento de eclampsia en preeclampsia severa: 4-6g IV bolo, luego 1-2g/h, 2)Neuroprotección fetal si parto pretérmino <32sem: 4g IV bolo, 1g/h hasta parto. Vigilar depresión respiratoria, ROT, diuresis."
      },
      {
        id: 15,
        frente: "¿Cuáles son las indicaciones de cesárea absoluta?",
        reverso: "Placenta previa total, desproporción cefalopélvica, situación transversa, 2 o más cesáreas previas, prolapso de cordón, VIH con carga viral >1000, herpes genital activo, tumores previos obstructivos."
      },
      {
        id: 16,
        frente: "¿Qué es la mola hidatiforme y su manejo?",
        reverso: "Proliferación anormal trofoblasto. Clínica: sangrado, útero >edad gestacional, βHCG muy elevada, hiperémesis, sin feto. Dx: ecografía (imagen en tormenta de nieve). Tx: legrado por aspiración + seguimiento βHCG (riesgo coriocarcinoma)."
      },
      {
        id: 17,
        frente: "¿Cuál es el manejo activo del tercer periodo del parto?",
        reverso: "Administrar oxitocina 10 UI IM tras salida hombro anterior, pinzamiento tardío del cordón (1-3min), tracción controlada del cordón con contratracción uterina. Reduce hemorragia posparto 60%."
      },
      {
        id: 18,
        frente: "¿Qué es la corioamnionitis y su manejo?",
        reverso: "Infección de membranas/líquido amniótico. Criterios: fiebre materna >38°C + 2 de: taquicardia materna/fetal, leucocitosis >15,000, líquido fétido, dolor uterino. Tx: ATB IV (ampicilina + gentamicina) + parto."
      },
      {
        id: 19,
        frente: "¿Cuáles son los métodos anticonceptivos de larga duración?",
        reverso: "DIU cobre (10-12 años, 99.2% efectividad), DIU levonorgestrel (5-7 años, 99.8%), implante subdérmico etonogestrel (3 años, 99.95%), esterilización quirúrgica (ligadura tubaria, vasectomía, 99.5%)."
      },
      {
        id: 20,
        frente: "¿Cuáles son las contraindicaciones absolutas de ACO combinados?",
        reverso: "Embarazo, lactancia <6sem posparto, >35 años fumadora >15 cig/día, HTA ≥160/100, trombosis venosa/arterial actual, cáncer mama, migraña con aura, hepatopatía descompensada, trombofilia conocida."
      },
      {
        id: 21,
        frente: "¿Qué es la distocia de hombros y su manejo?",
        reverso: "Impactación hombro anterior tras salida de cabeza. Factores: macrosomía, diabetes, obesidad. Maniobras: McRoberts (hiperflexión muslos), presión suprapúbica, Woods (rotación), Rubin, Zavanelli (último recurso). Complicación: parálisis braquial."
      },
      {
        id: 22,
        frente: "¿Cuál es el manejo inicial de hemorragia posparto?",
        reverso: "Masaje uterino bimanual, oxitocina 20-40 UI en 1L cristaloides a chorro, metilergonovina 0.2mg IM (CI en HTA), misoprostol 800-1000 mcg rectal. Si falla: taponamiento, ligadura arterias, histerectomía."
      },
      {
        id: 23,
        frente: "¿Qué es el síndrome HELLP?",
        reverso: "Complicación severa de preeclampsia. Hemólisis (LDH >600), Elevated Liver enzymes (TGO >70), Low Platelets (<100,000). Clínica: dolor epigástrico, náuseas, malestar general. Tx: sulfato Mg, control PA, parto urgente."
      },
      {
        id: 24,
        frente: "¿Cuáles son los tipos de aborto?",
        reverso: "Amenaza (sangrado, cérvix cerrado), inevitable (cérvix abierto), incompleto (restos en útero), completo (útero vacío), diferido (muerte embrionaria sin expulsión), séptico (con infección). Manejo según tipo: expectante, misoprostol, legrado."
      },
      {
        id: 25,
        frente: "¿Qué es el prolapso de cordón y su manejo?",
        reverso: "Descenso del cordón umbilical por delante de la presentación fetal tras RPM. Emergencia obstétrica. Manejo: elevar presentación fetal manualmente, posición Trendelenburg/genupectoral, oxígeno a madre, cesárea URGENTE. Evitar compresión cordón."
      },
      {
        id: 26,
        frente: "¿Cuándo está indicada la amniocentesis?",
        reverso: "Diagnóstico prenatal de anomalías cromosómicas (edad >35 años, screening alterado, antecedente), confirmación RPM (cristalización), madurez pulmonar fetal (test Clements), polihidramnios sintomático (descompresión)."
      },
      {
        id: 27,
        frente: "¿Qué es la diabetes gestacional y su manejo?",
        reverso: "Intolerancia a carbohidratos con inicio/diagnóstico en embarazo. Dx: PTGO 75g a 24-28sem (≥92 ayuno, ≥180 1h, ≥153 2h). Manejo: dieta, ejercicio, automonitoreo glicemia. Insulina si no alcanza metas (ayuno <95, 1h PP <140)."
      },
      {
        id: 28,
        frente: "¿Cuál es el manejo del VIH en embarazo?",
        reverso: "TARV durante embarazo (objetivo carga viral <1000), AZT IV durante parto si carga >1000, cesárea electiva 38sem si carga >1000, NO lactancia materna, TARV al RN (AZT x 4-6 sem o combinada según riesgo)."
      },
      {
        id: 29,
        frente: "¿Qué es la incompetencia cervical y su manejo?",
        reverso: "Dilatación cervical indolora 2do trimestre sin contracciones. Factores: antecedente abortos 2do trim, LEEP/conización, malformaciones. Dx: ecografía TV (longitud cervical <25mm). Tx: cerclaje 12-24sem, reposo, progesterona."
      },
      {
        id: 30,
        frente: "¿Cuáles son los criterios para inducción del trabajo de parto?",
        reverso: "Embarazo ≥41sem, RPM a término, preeclampsia, diabetes, RCIU, oligohidramnios, corioamnionitis, óbito fetal. Métodos: misoprostol, oxitocina, amniotomía. Contraindicaciones: cesárea corporal previa, placenta previa, herpes activo, situación transversa."
      }
    ],
    resumen: `
      <h2>Ginecología y Obstetricia - Resumen del Internado</h2>
      
      <h3>1. Control Prenatal</h3>
      <p><strong>Objetivos:</strong> Identificar factores de riesgo, prevenir complicaciones, educar a la gestante.</p>
      <ul>
        <li><strong>Primera consulta:</strong> Antes de las 12 semanas</li>
        <li><strong>Frecuencia:</strong> Mensual hasta 28 sem, quincenal hasta 36 sem, semanal hasta parto</li>
        <li><strong>Exámenes iniciales:</strong> Grupo sanguíneo, Hb, glucosa, VDRL, VIH, Toxoplasma, ecografía</li>
        <li><strong>Suplementación:</strong> Ácido fólico 400 mcg/día, hierro 60 mg/día desde 2do trimestre</li>
      </ul>

      <h3>2. Trastornos Hipertensivos del Embarazo</h3>
      <p><strong>Preeclampsia:</strong> HTA + proteinuria después de 20 semanas.</p>
      <ul>
        <li>Criterios de severidad: PA ≥160/110, proteinuria masiva, oliguria, edema pulmonar, alteraciones visuales</li>
        <li>Manejo: Sulfato de magnesio, control de PA, terminación del embarazo si es severa</li>
        <li>Prevención: Aspirina 100 mg/día desde 12 sem en pacientes de alto riesgo</li>
      </ul>

      <p><strong>Eclampsia:</strong> Preeclampsia + convulsiones tónico-clónicas.</p>
      <ul>
        <li>Emergencia obstétrica</li>
        <li>Tratamiento: Sulfato de magnesio 4-6g IV bolo, luego 1-2g/h</li>
        <li>Terminación del embarazo una vez estabilizada</li>
      </ul>

      <h3>3. Hemorragia Obstétrica</h3>
      <p><strong>Primera mitad del embarazo:</strong></p>
      <ul>
        <li>Aborto: Pérdida antes de 22 sem o <500g</li>
        <li>Embarazo ectópico: Dolor + sangrado + masa anexial</li>
        <li>Enfermedad trofoblástica gestacional</li>
      </ul>

      <p><strong>Segunda mitad del embarazo:</strong></p>
      <ul>
        <li><strong>Placenta previa:</strong> Sangrado indoloro, rojo rutilante</li>
        <li><strong>Desprendimiento prematuro de placenta:</strong> Dolor intenso, sangrado oscuro, útero hipertónico</li>
      </ul>

      <h3>4. Infecciones Vaginales</h3>
      <p><strong>Vaginosis bacteriana:</strong></p>
      <ul>
        <li>Flujo gris, homogéneo, olor a pescado</li>
        <li>Criterios de Amsel (3/4): flujo característico, pH >4.5, cells cells, prueba de aminas +</li>
        <li>Tratamiento: Metronidazol</li>
      </ul>

      <p><strong>Candidiasis vulvovaginal:</strong></p>
      <ul>
        <li>Flujo blanco grumoso, prurito intenso</li>
        <li>Tratamiento: Fluconazol 150 mg dosis única o clotrimazol óvulos</li>
      </ul>

      <h3>5. Métodos Anticonceptivos</h3>
      <ul>
        <li><strong>Muy efectivos:</strong> DIU, implante subdérmico, esterilización</li>
        <li><strong>Efectivos:</strong> Anticonceptivos orales, inyectables, parches</li>
        <li><strong>Moderadamente efectivos:</strong> Condón, diafragma</li>
        <li><strong>Poco efectivos:</strong> Métodos naturales, coito interrumpido</li>
      </ul>
    `,
    preguntas: [
      {
        id: 1,
        pregunta: "Gestante de 32 semanas con PA 165/110 mmHg, proteinuria 4+, cefalea intensa y visión borrosa. ¿Cuál es el diagnóstico más probable?",
        opciones: [
          "Hipertensión gestacional",
          "Preeclampsia leve",
          "Preeclampsia severa",
          "Hipertensión crónica"
        ],
        respuestaCorrecta: 2,
        explicacion: "Presenta criterios de preeclampsia severa: PA ≥160/110, proteinuria masiva y síntomas de severidad (cefalea, alteraciones visuales). Requiere manejo inmediato con sulfato de magnesio y consideración de terminación del embarazo."
      },
      {
        id: 2,
        pregunta: "¿Cuál es el tratamiento definitivo de la preeclampsia?",
        opciones: [
          "Sulfato de magnesio",
          "Metildopa",
          "Reposo absoluto",
          "Terminación del embarazo"
        ],
        respuestaCorrecta: 3,
        explicacion: "El único tratamiento definitivo de la preeclampsia es la terminación del embarazo (parto). El sulfato de magnesio y los antihipertensivos son medidas de soporte, pero no curan la enfermedad."
      },
      {
        id: 3,
        pregunta: "Mujer con flujo vaginal gris, olor a pescado, pH 5.5 y clue cells al microscopio. ¿Cuál es el diagnóstico?",
        opciones: [
          "Candidiasis vulvovaginal",
          "Vaginosis bacteriana",
          "Tricomoniasis",
          "Vaginitis atrófica"
        ],
        respuestaCorrecta: 1,
        explicacion: "Cumple 3/4 criterios de Amsel para vaginosis bacteriana: flujo característico, pH >4.5, clue cells. Solo falta la prueba de aminas positiva. El tratamiento es metronidazol."
      },
      {
        id: 4,
        pregunta: "¿Cuál es la principal causa de hemorragia posparto inmediata?",
        opciones: [
          "Retención de restos placentarios",
          "Atonía uterina",
          "Desgarro del canal del parto",
          "Alteraciones de la coagulación"
        ],
        respuestaCorrecta: 1,
        explicacion: "La atonía uterina es responsable del 70% de las hemorragias posparto. Se caracteriza por un útero blando y no contraído después del alumbramiento."
      },
      {
        id: 5,
        pregunta: "¿A partir de qué edad gestacional se considera un embarazo a término?",
        opciones: [
          "34 semanas",
          "36 semanas",
          "37 semanas",
          "38 semanas"
        ],
        respuestaCorrecta: 2,
        explicacion: "Un embarazo se considera a término entre las 37 y 42 semanas de gestación. Antes de 37 semanas es pretérmino y después de 42 semanas es postérmino."
      }
    ]
  },
  {
    id: 3,
    nombre: "Medicina Interna",
    color: "#3b82f6", // azul
    icon: "🩺",
    flashcards: [
      {
        id: 1,
        frente: "¿Cuáles son los criterios diagnósticos de diabetes mellitus?",
        reverso: "Glucosa en ayunas ≥126 mg/dL, glucosa 2h postcarga ≥200 mg/dL, HbA1c ≥6.5%, o glucosa aleatoria ≥200 mg/dL con síntomas. Requiere confirmación con segunda prueba."
      },
      {
        id: 2,
        frente: "¿Cuál es la tríada de la insuficiencia cardíaca?",
        reverso: "Disnea, fatiga y retención de líquidos (edema periférico, congestión pulmonar). Causada por disfunción sistólica o diastólica del ventrículo izquierdo."
      },
      {
        id: 3,
        frente: "¿Cuáles son los criterios CURB-65 para neumonía?",
        reverso: "C: Confusión, U: Urea >40 mg/dL, R: Frecuencia Respiratoria ≥30/min, B: Blood pressure <90/60, 65: edad ≥65 años. ≥2 puntos: considerar hospitalización."
      },
      {
        id: 4,
        frente: "¿Cuál es el tratamiento inicial del infarto agudo de miocardio con elevación del ST?",
        reverso: "Aspirina 300 mg masticable, clopidogrel dosis de carga, nitroglicerina sublingual, morfina si dolor persiste, y reperfusión urgente (angioplastia primaria o fibrinólisis)."
      },
      {
        id: 5,
        frente: "¿Cuáles son las causas más frecuentes de cirrosis hepática?",
        reverso: "Alcohol (40-50%), hepatitis C (25-30%), hepatitis B (15-20%), esteatohepatitis no alcohólica (NASH), hepatitis autoinmune, cirrosis biliar."
      }
    ],
    resumen: `
      <h2>Medicina Interna - Resumen del Internado</h2>
      
      <h3>1. Diabetes Mellitus</h3>
      <p><strong>Criterios diagnósticos (cualquiera de los siguientes):</strong></p>
      <ul>
        <li>Glucosa en ayunas ≥126 mg/dL (en 2 ocasiones)</li>
        <li>HbA1c ≥6.5%</li>
        <li>Glucosa 2h post-carga ≥200 mg/dL (PTOG)</li>
        <li>Glucosa aleatoria ≥200 mg/dL + síntomas</li>
      </ul>

      <p><strong>Metas de tratamiento:</strong></p>
      <ul>
        <li>HbA1c <7% (individualizar según paciente)</li>
        <li>Glucosa preprandial 80-130 mg/dL</li>
        <li>Glucosa postprandial <180 mg/dL</li>
      </ul>

      <p><strong>Tratamiento:</strong></p>
      <ul>
        <li>Primera línea: Metformina 500-2000 mg/día</li>
        <li>Agregar segundo fármaco si HbA1c >7% después de 3 meses</li>
        <li>Considerar insulina si HbA1c >10% o glucosa >300 mg/dL</li>
      </ul>

      <h3>2. Hipertensión Arterial</h3>
      <p><strong>Clasificación:</strong></p>
      <ul>
        <li>Normal: <120/80 mmHg</li>
        <li>Elevada: 120-129/<80 mmHg</li>
        <li>HTA Grado 1: 130-139/80-89 mmHg</li>
        <li>HTA Grado 2: ≥140/90 mmHg</li>
      </ul>

      <p><strong>Tratamiento inicial:</strong></p>
      <ul>
        <li>Cambios en estilo de vida (todos los pacientes)</li>
        <li>Monoterapia: IECA, ARA-II, calcio-antagonista o tiazida</li>
        <li>Terapia dual si PA ≥140/90 o >20/10 mmHg sobre meta</li>
      </ul>

      <h3>3. Insuficiencia Cardíaca</h3>
      <p><strong>Clasificación NYHA:</strong></p>
      <ul>
        <li>I: Sin limitación, asintomático</li>
        <li>II: Síntomas con actividad moderada</li>
        <li>III: Síntomas con actividad leve</li>
        <li>IV: Síntomas en reposo</li>
      </ul>

      <p><strong>Tratamiento de IC con fracción de eyección reducida:</strong></p>
      <ul>
        <li>IECA o ARA-II</li>
        <li>Beta-bloqueador (carvedilol, metoprolol, bisoprolol)</li>
        <li>Antagonista de aldosterona (espironolactona)</li>
        <li>Diuréticos para control de volumen</li>
        <li>Considerar: ARNI, ivabradina, SGLT2i</li>
      </ul>

      <h3>4. Neumonía Adquirida en la Comunidad</h3>
      <p><strong>CURB-65 (cada criterio = 1 punto):</strong></p>
      <ul>
        <li>C: Confusión mental</li>
        <li>U: Urea >40 mg/dL (BUN >20)</li>
        <li>R: Frecuencia respiratoria ≥30/min</li>
        <li>B: Presión arterial <90/60 mmHg</li>
        <li>65: Edad ≥65 años</li>
      </ul>

      <p><strong>Manejo según puntaje:</strong></p>
      <ul>
        <li>0-1: Ambulatorio (amoxicilina o macrólido)</li>
        <li>2: Hospitalización (cefalosporina + macrólido)</li>
        <li>≥3: UCI (cefalosporina + macrólido ± vancomicina)</li>
      </ul>

      <h3>5. Enfermedad Hepática</h3>
      <p><strong>Cirrosis - Complicaciones:</strong></p>
      <ul>
        <li><strong>Ascitis:</strong> Restricción de sal, diuréticos (espironolactona + furosemida)</li>
        <li><strong>Peritonitis bacteriana espontánea:</strong> Ceftriaxona, profilaxis con norfloxacino</li>
        <li><strong>Várices esofágicas:</strong> Propranolol, ligadura endoscópica</li>
        <li><strong>Encefalopatía hepática:</strong> Lactulosa, rifaximina</li>
      </ul>
    `,
    preguntas: [
      {
        id: 1,
        pregunta: "Paciente de 55 años con glucosa en ayunas de 135 mg/dL y HbA1c de 7.2%. ¿Cuál es el diagnóstico?",
        opciones: [
          "Glucosa alterada en ayunas (prediabetes)",
          "Diabetes mellitus tipo 2",
          "Diabetes mellitus tipo 1",
          "Normal"
        ],
        respuestaCorrecta: 1,
        explicacion: "Cumple 2 criterios diagnósticos de diabetes: glucosa en ayunas ≥126 mg/dL y HbA1c ≥6.5%. El diagnóstico es diabetes mellitus tipo 2 (considerando la edad y presentación)."
      },
      {
        id: 2,
        pregunta: "¿Cuál es el fármaco de primera línea para el tratamiento de diabetes tipo 2?",
        opciones: [
          "Insulina NPH",
          "Glibenclamida",
          "Metformina",
          "Sitagliptina"
        ],
        respuestaCorrecta: 2,
        explicacion: "La metformina es el fármaco de primera línea para diabetes tipo 2, excepto en casos de contraindicación (insuficiencia renal, hepática, etc.). Reduce la glucosa sin causar hipoglucemia."
      },
      {
        id: 3,
        pregunta: "Paciente de 70 años con neumonía. Al ingreso: confuso, FR 32/min, PA 85/50, urea 55 mg/dL. ¿Cuál es su puntaje CURB-65?",
        opciones: [
          "2 puntos",
          "3 puntos",
          "4 puntos",
          "5 puntos"
        ],
        respuestaCorrecta: 3,
        explicacion: "Cumple 4 criterios: Confusión (+), Urea >40 (+), FR ≥30 (+), PA <90/60 (+), edad ≥65 (+). Total: 5 puntos. Requiere manejo en UCI."
      },
      {
        id: 4,
        pregunta: "¿Cuál de los siguientes NO es un componente del tratamiento de insuficiencia cardíaca con fracción de eyección reducida?",
        opciones: [
          "IECA o ARA-II",
          "Beta-bloqueador",
          "Calcio-antagonista dihidropiridínico",
          "Antagonista de aldosterona"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los calcio-antagonistas dihidropiridínicos (como amlodipino) NO mejoran el pronóstico en IC con FE reducida y pueden empeorarla. El tratamiento base incluye IECA/ARA-II, beta-bloqueador y espironolactona."
      },
      {
        id: 5,
        pregunta: "Paciente con cirrosis hepática y ascitis de reciente aparición. ¿Cuál es el tratamiento diurético de elección?",
        opciones: [
          "Furosemida",
          "Espironolactona",
          "Hidroclorotiazida",
          "Espironolactona + Furosemida"
        ],
        respuestaCorrecta: 3,
        explicacion: "En ascitis por cirrosis, se inicia con espironolactona (antagonista de aldosterona). Si no hay respuesta, se agrega furosemida. La combinación espironolactona + furosemida (opción D) es la más efectiva, en relación 100:40 mg."
      }
    ]
  },
  {
    id: 4,
    nombre: "Cirugía General",
    color: "#f59e0b", // naranja
    icon: "🔪",
    flashcards: [
      {
        id: 1,
        frente: "¿Cuáles son los signos de irritación peritoneal?",
        reverso: "Dolor a la descompresión (signo de Blumberg), defensa muscular voluntaria o involuntaria (vientre en tabla), ausencia de ruidos hidroaéreos, dolor a la percusión."
      },
      {
        id: 2,
        frente: "¿Cuál es el punto de McBurney?",
        reverso: "Punto situado en la unión del tercio externo con los dos tercios internos de la línea que une la espina ilíaca anterosuperior con el ombligo. Punto de máximo dolor en apendicitis aguda."
      },
      {
        id: 3,
        frente: "¿Cuál es la tríada de Charcot en colangitis aguda?",
        reverso: "Fiebre/escalofríos + ictericia + dolor en hipocondrio derecho. Si se agregan hipotensión y alteración del estado mental, se convierte en la péntada de Reynolds."
      },
      {
        id: 4,
        frente: "¿Cuáles son las causas más frecuentes de abdomen agudo quirúrgico?",
        reverso: "Apendicitis aguda (más frecuente), colecistitis aguda, obstrucción intestinal, úlcera perforada, pancreatitis aguda, embarazo ectópico roto."
      },
      {
        id: 5,
        frente: "¿Cuál es la clasificación de las hernias según su contenido?",
        reverso: "Reductible (contenido vuelve a cavidad), irreductible o incarcerada (no reduce pero viable), estrangulada (compromiso vascular, isquemia)."
      }
    ],
    resumen: `
      <h2>Cirugía General - Resumen del Internado</h2>
      
      <h3>1. Abdomen Agudo</h3>
      <p><strong>Definición:</strong> Dolor abdominal de inicio reciente (<7 días) que puede requerir cirugía urgente.</p>
      
      <p><strong>Evaluación inicial:</strong></p>
      <ul>
        <li>Historia clínica: inicio, localización, irradiación, factores que aumentan/disminuyen</li>
        <li>Examen físico: inspección, auscultación, percusión, palpación</li>
        <li>Signos de irritación peritoneal: Blumberg, defensa, vientre en tabla</li>
        <li>Laboratorio: hemograma, función renal, amilasa/lipasa, prueba de embarazo</li>
        <li>Imágenes: Rx de abdomen, ecografía, TAC según sospecha</li>
      </ul>

      <h3>2. Apendicitis Aguda</h3>
      <p><strong>Cuadro clínico:</strong></p>
      <ul>
        <li>Dolor periumbilical que migra a fosa ilíaca derecha</li>
        <li>Náuseas, vómitos, anorexia</li>
        <li>Fiebre (generalmente <38.5°C)</li>
        <li>Signo de Blumberg (+), dolor en punto de McBurney</li>
      </ul>

      <p><strong>Diagnóstico:</strong></p>
      <ul>
        <li>Clínico principalmente</li>
        <li>Leucocitosis con desviación izquierda</li>
        <li>Ecografía o TAC en casos dudosos</li>
        <li>Escala de Alvarado: ≥7 puntos sugiere apendicitis</li>
      </ul>

      <p><strong>Tratamiento:</strong></p>
      <ul>
        <li>Apendicectomía (laparoscópica preferida)</li>
        <li>Antibióticos perioperatorios</li>
      </ul>

      <h3>3. Colecistitis Aguda</h3>
      <p><strong>Cuadro clínico:</strong></p>
      <ul>
        <li>Dolor en hipocondrio derecho, continuo, >6 horas</li>
        <li>Signo de Murphy (+): inspiración profunda interrumpida por dolor</li>
        <li>Náuseas, vómitos, fiebre</li>
        <li>Ictericia leve (20% de casos)</li>
      </ul>

      <p><strong>Diagnóstico:</strong></p>
      <ul>
        <li>Ecografía: colelitiasis + pared engrosada (>4mm) + Murphy ecográfico</li>
        <li>Leucocitosis, elevación de PCR</li>
        <li>Criterios de Tokio para severidad</li>
      </ul>

      <p><strong>Tratamiento:</strong></p>
      <ul>
        <li>Ayuno, hidratación IV, analgesia, antibióticos</li>
        <li>Colecistectomía laparoscópica temprana (<72h)</li>
      </ul>

      <h3>4. Obstrucción Intestinal</h3>
      <p><strong>Causas más frecuentes:</strong></p>
      <ul>
        <li>Intestino delgado: adherencias post-quirúrgicas (60%), hernias, tumores</li>
        <li>Intestino grueso: cáncer colorrectal (60%), vólvulo, diverticulitis</li>
      </ul>

      <p><strong>Cuadro clínico (tríada clásica):</strong></p>
      <ul>
        <li>Dolor abdominal tipo cólico</li>
        <li>Vómitos (precoces en obstrucción alta, tardíos en baja)</li>
        <li>Distensión abdominal</li>
        <li>Ausencia de eliminación de gases y heces</li>
      </ul>

      <p><strong>Diagnóstico:</strong></p>
      <ul>
        <li>Rx de abdomen: niveles hidroaéreos, distensión de asas</li>
        <li>TAC abdominal: localiza nivel y causa</li>
      </ul>

      <h3>5. Hernias</h3>
      <p><strong>Tipos:</strong></p>
      <ul>
        <li><strong>Inguinal directa:</strong> A través del triángulo de Hesselbach, adultos mayores</li>
        <li><strong>Inguinal indirecta:</strong> A través del anillo inguinal interno, más frecuente</li>
        <li><strong>Femoral:</strong> Más frecuente en mujeres, alto riesgo de estrangulación</li>
        <li><strong>Umbilical:</strong> Común en niños y mujeres multíparas</li>
      </ul>

      <p><strong>Complicaciones:</strong></p>
      <ul>
        <li><strong>Incarceración:</strong> No reducible pero contenido viable</li>
        <li><strong>Estrangulación:</strong> Compromiso vascular, isquemia - EMERGENCIA QUIRÚRGICA</li>
      </ul>
    `,
    preguntas: [
      {
        id: 1,
        pregunta: "Paciente con dolor abdominal que inició periumbilical y migró a fosa ilíaca derecha, asociado a náuseas y fiebre de 37.8°C. Blumberg (+). ¿Cuál es el diagnóstico más probable?",
        opciones: [
          "Gastroenteritis aguda",
          "Apendicitis aguda",
          "Diverticulitis aguda",
          "Colecistitis aguda"
        ],
        respuestaCorrecta: 1,
        explicacion: "El cuadro clínico es característico de apendicitis aguda: dolor periumbilical que migra a FID, náuseas, fiebre baja y signo de Blumberg positivo. Requiere cirugía urgente (apendicectomía)."
      },
      {
        id: 2,
        pregunta: "¿Cuál es el signo de Murphy?",
        opciones: [
          "Dolor en FID a la palpación de FII",
          "Dolor al extender el muslo derecho",
          "Inspiración profunda interrumpida por dolor en hipocondrio derecho",
          "Dolor a la descompresión brusca"
        ],
        respuestaCorrecta: 2,
        explicacion: "El signo de Murphy es característico de colecistitis aguda: al palpar hipocondrio derecho y pedir inspiración profunda, el paciente interrumpe la inspiración por dolor cuando la vesícula inflamada contacta la mano del examinador."
      },
      {
        id: 3,
        pregunta: "¿Cuál es la tríada de Charcot en colangitis aguda?",
        opciones: [
          "Dolor + masa + ictericia",
          "Fiebre + ictericia + dolor en hipocondrio derecho",
          "Náuseas + vómitos + dolor abdominal",
          "Fiebre + leucocitosis + dolor abdominal"
        ],
        respuestaCorrecta: 1,
        explicacion: "La tríada de Charcot en colangitis aguda consiste en: fiebre/escalofríos + ictericia + dolor en hipocondrio derecho. Es causada por obstrucción e infección de la vía biliar."
      },
      {
        id: 4,
        pregunta: "¿Cuál es la causa más frecuente de obstrucción intestinal en intestino delgado?",
        opciones: [
          "Cáncer colorrectal",
          "Adherencias postquirúrgicas",
          "Vólvulo",
          "Diverticulitis"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las adherencias postquirúrgicas son la causa más frecuente de obstrucción de intestino delgado (60% de los casos), seguidas de hernias y tumores."
      },
      {
        id: 5,
        pregunta: "Paciente con hernia inguinal que súbitamente presenta dolor intenso, imposibilidad de reducción y signos de compromiso vascular. ¿Cuál es la complicación?",
        opciones: [
          "Hernia reductible",
          "Hernia irreductible",
          "Hernia incarcerada",
          "Hernia estrangulada"
        ],
        respuestaCorrecta: 3,
        explicacion: "Los signos de dolor intenso, irreductibilidad y compromiso vascular indican una hernia estrangulada, que es una emergencia quirúrgica. Requiere cirugía urgente para evitar necrosis del contenido herniario."
      }
    ]
  },
  {
    id: 5,
    nombre: "Emergencias y Trauma",
    color: "#ef4444", // rojo
    icon: "🚑",
    flashcards: [
      {
        id: 1,
        frente: "¿Cuál es la secuencia del ABC en trauma?",
        reverso: "A: Vía aérea con control cervical, B: Ventilación y respiración, C: Circulación con control de hemorragia, D: Déficit neurológico, E: Exposición con control de temperatura."
      },
      {
        id: 2,
        frente: "¿Cuáles son los signos de shock hipovolémico?",
        reverso: "Taquicardia, hipotensión, piel fría y pálida, llenado capilar >2 seg, oliguria, alteración del estado mental. Clasificación en 4 clases según pérdida de volumen."
      },
      {
        id: 3,
        frente: "¿Cuál es la tríada de Beck en taponamiento cardíaco?",
        reverso: "Hipotensión, ingurgitación yugular y ruidos cardíacos apagados. Requiere pericardiocentesis urgente."
      },
      {
        id: 4,
        frente: "¿Cuáles son los criterios para intubación en trauma?",
        reverso: "GCS ≤8, incapacidad para proteger vía aérea, hipoxemia refractaria, trauma maxilofacial severo, quemaduras de vía aérea, shock severo."
      },
      {
        id: 5,
        frente: "¿Cuál es el manejo inicial de una quemadura?",
        reverso: "Detener el proceso de quemadura, ABC, calcular extensión (regla de los 9), reanimación con cristaloides (fórmula de Parkland: 4ml x kg x % SCQ en 24h), analgesia, prevención de hipotermia."
      }
    ],
    resumen: `
      <h2>Emergencias y Trauma - Resumen del Internado</h2>
      
      <h3>1. ATLS - Evaluación Inicial del Traumatizado</h3>
      <p><strong>Revisión primaria (ABCDE):</strong></p>
      <ul>
        <li><strong>A:</strong> Vía aérea con control cervical
          <ul>
            <li>Evaluar permeabilidad, eliminar cuerpos extraños</li>
            <li>Protección cervical (collar) hasta descartar lesión</li>
            <li>Intubación si GCS ≤8 o vía aérea comprometida</li>
          </ul>
        </li>
        <li><strong>B:</strong> Ventilación y respiración
          <ul>
            <li>Oxígeno suplementario a todos</li>
            <li>Identificar: neumotórax a tensión, tórax inestable, hemotórax masivo</li>
            <li>Descompresión con aguja si neumotórax a tensión</li>
          </ul>
        </li>
        <li><strong>C:</strong> Circulación con control de hemorragia
          <ul>
            <li>2 accesos venosos periféricos (calibre grueso)</li>
            <li>Control de hemorragias externas (presión directa)</li>
            <li>Reanimación con cristaloides (Ringer lactato o sol. salina)</li>
          </ul>
        </li>
        <li><strong>D:</strong> Déficit neurológico
          <ul>
            <li>Escala de Glasgow</li>
            <li>Evaluación pupilar (tamaño, simetría, reactividad)</li>
          </ul>
        </li>
        <li><strong>E:</strong> Exposición con control de temperatura
          <ul>
            <li>Desvestir completamente al paciente</li>
            <li>Prevenir hipotermia (mantas térmicas, fluidos tibios)</li>
          </ul>
        </li>
      </ul>

      <h3>2. Shock</h3>
      <p><strong>Clasificación del shock hipovolémico:</strong></p>
      <ul>
        <li><strong>Clase I:</strong> Pérdida <15% (750ml)
          <ul><li>Signos mínimos, frecuencia cardíaca ligeramente elevada</li></ul>
        </li>
        <li><strong>Clase II:</strong> Pérdida 15-30% (750-1500ml)
          <ul><li>Taquicardia (100-120), taquipnea, PA normal, ansiedad</li></ul>
        </li>
        <li><strong>Clase III:</strong> Pérdida 30-40% (1500-2000ml)
          <ul><li>Taquicardia (120-140), hipotensión, oliguria, confusión</li></ul>
        </li>
        <li><strong>Clase IV:</strong> Pérdida >40% (>2000ml)
          <ul><li>Taquicardia >140, hipotensión severa, letargia, piel fría</li></ul>
        </li>
      </ul>

      <p><strong>Manejo:</strong></p>
      <ul>
        <li>Control de hemorragia</li>
        <li>2 vías periféricas calibre 14-16G</li>
        <li>Infusión rápida de cristaloides (1-2 litros en adultos)</li>
        <li>Transfusión si no responde o shock clase III-IV</li>
        <li>Protocolo de transfusión masiva: GR:PFC:plaquetas 1:1:1</li>
      </ul>

      <h3>3. Trauma de Tórax</h3>
      <p><strong>Lesiones que amenazan la vida inmediatamente:</strong></p>
      <ul>
        <li><strong>Neumotórax a tensión:</strong>
          <ul>
            <li>Disnea, desviación traqueal, abolición de murmullo vesicular, hipotensión</li>
            <li>Tratamiento: descompresión inmediata con aguja (2do EIC línea medioclavicular)</li>
          </ul>
        </li>
        <li><strong>Hemotórax masivo:</strong>
          <ul>
            <li>Salida de >1500ml por tubo de tórax o >200ml/h por 4 horas</li>
            <li>Tratamiento: tubo de tórax + cirugía (toracotomía)</li>
          </ul>
        </li>
        <li><strong>Taponamiento cardíaco:</strong>
          <ul>
            <li>Tríada de Beck: hipotensión, ingurgitación yugular, ruidos apagados</li>
            <li>Tratamiento: pericardiocentesis o ventana pericárdica</li>
          </ul>
        </li>
      </ul>

      <h3>4. Trauma Craneoencefálico (TCE)</h3>
      <p><strong>Escala de Glasgow (GCS):</strong></p>
      <ul>
        <li>Apertura ocular (1-4) + Respuesta verbal (1-5) + Respuesta motora (1-6)</li>
        <li>TCE leve: GCS 14-15</li>
        <li>TCE moderado: GCS 9-13</li>
        <li>TCE severo: GCS ≤8 (requiere intubación)</li>
      </ul>

      <p><strong>Manejo:</strong></p>
      <ul>
        <li>Prevenir hipoxia e hipotensión (factores de mal pronóstico)</li>
        <li>Control de PIC: cabecera 30°, manitol o solución salina hipertónica</li>
        <li>TAC cerebral en: GCS <15, focalización, fractura de cráneo, LOC >5 min</li>
      </ul>

      <h3>5. Quemaduras</h3>
      <p><strong>Regla de los 9 (adulto):</strong></p>
      <ul>
        <li>Cabeza: 9%, Tronco anterior: 18%, Tronco posterior: 18%</li>
        <li>Cada brazo: 9%, Cada pierna: 18%, Genitales: 1%</li>
      </ul>

      <p><strong>Fórmula de Parkland:</strong></p>
      <ul>
        <li>Volumen = 4 ml x kg x % superficie corporal quemada</li>
        <li>Mitad en primeras 8 horas, mitad restante en siguientes 16 horas</li>
        <li>Usar Ringer lactato</li>
      </ul>

      <p><strong>Criterios de traslado a centro de quemados:</strong></p>
      <ul>
        <li>Quemaduras de 2° >10% en niños o >20% en adultos</li>
        <li>Quemaduras de 3° >5%</li>
        <li>Quemaduras en cara, manos, pies, genitales, articulaciones</li>
        <li>Quemaduras eléctricas o químicas</li>
        <li>Lesión por inhalación</li>
      </ul>
    `,
    preguntas: [
      {
        id: 1,
        pregunta: "Paciente politraumatizado con GCS 7. ¿Cuál es la prioridad en el manejo?",
        opciones: [
          "Obtener TAC cerebral urgente",
          "Asegurar vía aérea con intubación",
          "Canalizar 2 vías periféricas",
          "Evaluar pupilas"
        ],
        respuestaCorrecta: 1,
        explicacion: "En un paciente con GCS ≤8, la prioridad es asegurar la vía aérea mediante intubación orotraqueal con protección cervical. El ABC siempre va primero antes que cualquier estudio diagnóstico."
      },
      {
        id: 2,
        pregunta: "¿Cuál es la tríada de Beck en taponamiento cardíaco?",
        opciones: [
          "Hipotensión + taquicardia + disnea",
          "Hipotensión + ingurgitación yugular + ruidos cardíacos apagados",
          "Dolor torácico + disnea + síncope",
          "Taquicardia + hipotensión + sudoración"
        ],
        respuestaCorrecta: 1,
        explicacion: "La tríada de Beck consiste en: hipotensión arterial, ingurgitación yugular (aumento de PVC) y ruidos cardíacos apagados. Es característica del taponamiento cardíaco y requiere pericardiocentesis urgente."
      },
      {
        id: 3,
        pregunta: "Paciente con trauma torácico, disnea severa, abolición del murmullo vesicular derecho, desviación traqueal a la izquierda e hipotensión. ¿Cuál es el diagnóstico?",
        opciones: [
          "Hemotórax masivo",
          "Neumotórax simple",
          "Neumotórax a tensión",
          "Contusión pulmonar"
        ],
        respuestaCorrecta: 2,
        explicacion: "El cuadro clínico (disnea, abolición de murmullo, desviación traqueal contralateral, hipotensión) es característico de neumotórax a tensión. Es una emergencia que requiere descompresión inmediata con aguja antes de la radiografía."
      },
      {
        id: 4,
        pregunta: "Paciente de 70 kg con quemaduras de 2° grado en 40% de superficie corporal. ¿Cuál es el volumen de cristaloides a administrar en las primeras 8 horas según Parkland?",
        opciones: [
          "2,800 ml",
          "5,600 ml",
          "11,200 ml",
          "8,400 ml"
        ],
        respuestaCorrecta: 1,
        explicacion: "Fórmula de Parkland: 4 x 70 kg x 40% = 11,200 ml en 24 horas. La mitad (5,600 ml) se administra en las primeras 8 horas desde la quemadura."
      },
      {
        id: 5,
        pregunta: "Paciente con trauma abdominal cerrado, taquicardia 130 lpm, PA 90/60, palidez, diaforesis. Recibe 2 litros de cristaloides sin mejoría. ¿Qué clase de shock hipovolémico presenta?",
        opciones: [
          "Clase I",
          "Clase II",
          "Clase III",
          "Clase IV"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los signos (taquicardia >120, hipotensión, mala respuesta a cristaloides) sugieren shock clase III (pérdida de 30-40% del volumen sanguíneo, 1500-2000ml). Requiere transfusión sanguínea y control quirúrgico de sangrado."
      }
    ]
  }
];

// Función helper para obtener un tema por ID
export const getTopicById = (id) => {
  return topics.find(topic => topic.id === parseInt(id));
};

// Función helper para obtener todos los temas
export const getAllTopics = () => {
  return topics;
};
