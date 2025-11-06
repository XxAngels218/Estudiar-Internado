// topics.js - Agregador de los 4 temas del internado
import pediatria from './topics/pediatria.js';
import ginecologia from './topics/ginecologia.js';
import medicinaInterna from './topics/medicina_interna.js';
import cirugia from './topics/cirugia.js';
import temasGenerales from './topics/temas_generales.js';

const topics = [pediatria, ginecologia, medicinaInterna, cirugia, temasGenerales];

export const getTopicById = (id) => topics.find(t => t.id === parseInt(id, 10));
export const getAllTopics = () => topics;
