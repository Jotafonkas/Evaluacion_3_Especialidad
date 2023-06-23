/* IMAGÉNES PARA LOS CARDS */
import CardioImage from './images/cardio.jpg';
import FuerzaImage from './images/fuerza.jpg'
import FlexibilidadImage from './images/flexibilidad.jpg'
import CaloríasImage from './images/calorias.png'
import ResistenciaImage from './images/resistencia.png'
import AerobicaImage from './images/aerobica.jpg'
import EstiramientoImage from './images/estiramiento.png'
import EquilibrioImage from './images/equilibrio.jpg'
import PilatesImage from './images/pilates.jpg'
import BoxeoImage from './images/boxeo.jpg'
import YogaImage from './images/yoga.jpg'
import MovilidadImage from './images/movilidad.jpg'

/* RUTINAS */
export const routines = [
    {
      name: "Rutina de Cardio + Rutina Extra",
      description: "Ejercicios de bajo impacto diseñados para mejorar tu salud cardiovascular. Esta rutina incluye movimientos aeróbicos y de resistencia para fortalecer el corazón y los pulmones.",
      duration: "30 minutos",
      image: CardioImage,
      exercises: [
        {
          name: "Saltos de Tijera",
          repetitions: "10 repeticiones",
          sets: "3 series",
          metros: "-",
          rest: "30 segundos"
        },
        {
          name: "Extra --> Carrera en el lugar",
          repetitions: "5 minutos",
          sets: "2 series",
          metros: "10 metros por repetición",
          rest: "1 minuto"
        }
      ]
    },
    {
      name: "Rutina de Fuerza + Rutina Extra",
      description: "Ejercicios de alta intensidad para tonificar los músculos y mejorar la fuerza. Esta rutina se enfoca en el levantamiento de pesas y ejercicios de resistencia para fortalecer los músculos y mejorar la postura.",
      duration: "40 minutos",
      image: FuerzaImage,
      exercises: [
        {
          name: "Sentadillas",
          repetitions: "12 repeticiones",
          sets: "4 series",
          metros: "-",
          rest: "1 minuto"
        },
        {
          name: "Extra --> Press de banca",
          repetitions: "10 repeticiones",
          sets: "3 series",
          metros: "-",
          rest: "45 segundos"
        }
      ]
    },
    {
      name: "Rutina de Flexibilidad + Rutina Extra",
      description: "Ejercicios de estiramiento para mejorar la flexibilidad y reducir la rigidez muscular. Esta rutina incluye técnicas de yoga y movimiento suave para mejorar la flexibilidad y reducir la tensión muscular.",
      duration: "20 minutos",
      image: FlexibilidadImage,
      exercises: [
        {
          name: "Estiramiento de piernas",
          repetitions: "10 repeticiones",
          sets: "3 series",
          metros: "-",
          rest: "30 segundos"
        },
        {
          name: "Extra --> Estiramiento de brazos",
          repetitions: "8 repeticiones",
          sets: "2 series",
          metros: "-",
          rest: "15 segundos"
        }
      ]
    },
    {
      name: "Rutina de Calorías + Rutina Extra",
      description: "Ejercicios de alta intensidad para quemar calorías y mejorar la resistencia cardiovascular. Esta rutina incluye movimientos aeróbicos y de resistencia para quemar calorías y mejorar la condición física.",
      duration: "60 minutos",
      image: CaloríasImage,
      exercises: [
        {
          name: "Burpees",
          repetitions: "15 repeticiones",
          sets: "4 series",
          metros: "-",
          rest: "30 segundos"
        },
        {
          name: "Extra --> Salto de cuerda",
          repetitions: "5 minutos",
          sets: "3 series",
          metros: "-",
          rest: "1 minuto"
        }
      ]
    },
    {
      name: "Rutina de Resistencia + Rutina Extra",
      description: "Ejercicios de fuerza y resistencia para mejorar el rendimiento físico y la capacidad pulmonar. Esta rutina incluye ejercicios de resistencia y movimientos cardiovasculares para mejorar la resistencia y el rendimiento físico.",
      duration: "20 minutos",
      image: ResistenciaImage,
      exercises: [
        {
          name: "Test Naveta",
          repetitions: "7-15 repeticiones",
          sets: "20 series",
          metros: "20 metros por repetición",
          rest: "de 5 a 10 segundos"
        },
        {
          name: "Extra --> Sentadillas con Barra",
          repetitions: "10-12 repeticiones",
          sets: "3-4 series",
          metros: "-",
          rest: "1-2 minutos entre series"
        }
      ]
    },
    {
      name: "Rutina de Aeróbica + Rutina Extra",
      description: "Ejercicios aeróbicos diseñados para mejorar la capacidad cardiovascular y la resistencia. Esta rutina incluye movimientos aeróbicos y de resistencia para fortalecer el corazón y los pulmones.",
      duration: "30 minutos - 1 hora y 30 minutos",
      image: AerobicaImage,
      exercises: [
        {
          name: "Trekking",
          repetitions: "1 repetición",
          sets: "1 serie",
          metros: "6.000 metros",
          rest: "10 minutos"
        },
        {
          name: "Extra --> Sprints de Alta Intensidad",
          repetitions: "8-10 repeticiones",
          sets: "1 serie",
          metros: "100 metros",
          rest: "1 minuto entre sprints"
        }
      ]
    },
    {
      name: "Rutina de Estiramiento + Rutina Extra",
      description: "Ejercicios suaves de estiramiento para reducir la tensión muscular y mejorar la flexibilidad. Esta rutina se enfoca en estiramientos de todo el cuerpo para mejorar la movilidad y reducir el dolor muscular.",
      duration: "15 minutos",
      image: EstiramientoImage,
      exercises: [
        {
          name: "Estiramiento de la Mariposa",
          repetitions: "3-4 repeticiones",
          sets: "1 serie",
          metros: "-",
          rest: "30 segundos por pierna"
        },
        {
          name: "Extra --> Estiramientos de Espalda",
          repetitions: "3-4 repeticiones",
          sets: "1 serie",
          metros: "-",
          rest: "30 segundos por lado"
        }
      ]
    },
    {
      name: "Rutina de Equilibrio + Rutina Extra",
      description: "Ejercicios para mejorar el equilibrio y la coordinación. Esta rutina incluye movimientos de equilibrio y estabilidad para mejorar la postura y reducir el riesgo de lesiones.",
      duration: "30 minutos",
      image: EquilibrioImage,
      exercises: [
        {
          name: "Sentadillas con un pie",
          repetitions: "8-10 repeticiones por pierna",
          sets: "3-4 series",
          metros: "20 metros",
          rest: "2 minutos por serie"
        },
        {
          name: "Extra -->Postura del Árbol",
          repetitions: "3-4 repeticiones",
          sets: "1 serie",
          metros: "-",
          rest: "1 minuto"
        }
      ]
    },
    {
      name: "Rutina de Pilates + Rutina Extra",
      description: "Ejercicios de bajo impacto para fortalecer los músculos centrales del cuerpo. Esta rutina incluye movimientos de Pilates para mejorar la postura y la resistencia muscular.",
      duration: "45 minutos",
      image: PilatesImage,
      exercises: [
        {
          name: "El Cien",
          repetitions: "10 repeticiones",
          sets: "3-4 series",
          metros: "-",
          rest: "30 segundos por serie "
        },
        {
          name: "Extra --> Círculos con una pierna",
          repetitions: "5 en cada dirección",
          sets: "3-4 serie",
          metros: "-",
          rest: "30 segundos por serie"
        }
      ]
    },
    {
      name: "Rutina de Boxeo + Rutina Extra",
      description: "Ejercicios de boxeo para mejorar la resistencia y la coordinación. Esta rutina incluye movimientos de boxeo y ejercicios de resistencia para mejorar la fuerza y la condición física.",
      duration: "60 minutos",
      image: BoxeoImage,
      exercises: [
        {
          name: "Golpes Rectos",
          repetitions: "20 repeticiones",
          sets: "3-4 series",
          metros: "-",
          rest: "1 minuto entre serie"
        },
        {
          name: "Extra --> Gancho de Izquierda y Derecha",
          repetitions: "10 por lado",
          sets: "3-4 serie",
          metros: "-",
          rest: "1 minuto entre series"
        }
      ]
    },
    {
      name: "Rutina de Yoga + Rutina Extra",
      description: "Ejercicios suaves de yoga para reducir el estrés y mejorar la flexibilidad. Esta rutina incluye técnicas de yoga para reducir la tensión muscular y mejorar la movilidad.",
      duration: "20 minutos",
      image: YogaImage,
      exercises: [
        {
          name: "Pinza de Pie con Piernas Extendidas",
          repetitions: "3-4 repeticiones",
          sets: "3-4 series",
          metros: "-",
          rest: "30 segundos entre series"
        },
        {
          name: "Extra --> Parada de Manos",
          repetitions: "3-4 repeticiones",
          sets: "3-4 series",
          metros: "-",
          rest: "30 segundos entre series"
        }
      ]
    },
    {
      name: "Rutina de Movilidad + Rutina Extra",
      description: "Ejercicios para mejorar la movilidad y la flexibilidad en todo el cuerpo. Esta rutina incluye movimientos suaves y lentos para mejorar la movilidad articular y reducir el dolor muscular.",
      duration: "20 minutos",
      image: MovilidadImage,
      exercises: [
        {
          name: "Paseo del Oso",
          repetitions: "6-8 repeticiones",
          sets: "3-4 series",
          metros: "20 metros",
          rest: "30 segundos entre series"
        },
        {
          name: "Extra --> Rotación de Hombros con Mancuernas",
          repetitions: "3-4 repeticiones",
          sets: "3-4 series",
          metros: "-",
          rest: " 1-2 minutos entre series"
        }
      ]
    }
  ];

  export default routines;