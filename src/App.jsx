import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Row, Col, Modal } from 'react-bootstrap';

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

/* COMPONENTE App */
function App() {
  /* LISTA DE RUTINAS */
  const routines = [
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
          repetitions: "3-4 reprticiones",
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

  /* FUNCIONALIDADES PARA CARDS Y FORMULARIO */
  const [showRoutine, setShowRoutine] = useState(false);
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [filteredRoutines, setFilteredRoutines] = useState(routines);

  /* MUESTRA LAS RUTINAS COMPLETAS*/
  const handleShowRoutine = (routine) => {
    setSelectedRoutine(routine);
    setShowRoutine(true);
  };

  /* CERRAR CARD ROUTINE */
  const handleCloseRoutine = () => {
    setShowRoutine(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const exerciseType = event.target.formExerciseType.value;
    const duration = event.target.formDuration.value;

    /* FILTRADO DE RUTINAS */
    const filtered = routines.filter((routine) => {
      return (
        (exerciseType === "Todos" || routine.name.includes(exerciseType)) &&
        (duration === "Todos" || routine.duration.includes(duration))
      );
    });

    setFilteredRoutines(filtered);
  };

  const [username, setUsername] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    // Recupera los datos guardados del almacenamiento local y rellena el formulario al cargar la página
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const formData = JSON.parse(savedData);
      setUsername(formData.username);
      setNotes(formData.notes);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guarda los datos en el almacenamiento local
    const formData = {
      username,
      notes,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Datos de usuario guardados en el Almacenamiento Local', formData);
  };


  return (
    /* DISEÑO DE LA PÁGINA CON BOOSTRAP - FORMULARIO Y NOTAS DEL USUARIO */
    <div className="container d-flex flex-column justify-content-center align-items-center mt-2">
      <h1 style={{ textDecoration: "underline", fontFamily: "Vegur, 'PT Sans', Verdana, sans-serif" }}><b> TRAINING MODE</b></h1>

      <div className="row justify-content-center">
        <div className="col-lg-6 mt-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username"><b>Nombre de Usuario</b></label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username" /* required */
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="notes"><b>Escriba la(s) rutina(s) realizada(s) hoy.</b></label>
              <textarea
                className="form-control"
                id="notes"
                name="notes"
                rows="5"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>

            <button style={{ backgroundColor: 'yellowgreen', color: 'black', fontFamily: 'Rockwell' }} type="submit" className="btn btn-primary mt-3 mb-3">
              <b>Guardar</b>
            </button>


          </form>
        </div>

        <div className="col-lg-6">
          <div className="background-image">
            <div className="content-container d-flex flex-column justify-content-center align-items-center flex-grow-1 mt-2"></div>
            <div className="card bg-dark p-4 text-center mt-3" >
              <h2 className="title mb-4" style={{ fontFamily: "Vegur, 'PT Sans', Verdana, sans-serif", color: "white", fontWeight: "bold" }}><b>Busca tu Rutina de Entrenamiento</b></h2>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="formExerciseType">
                  <Form.Label style={{ color: 'yellowgreen' }}><b>Tipo de Ejercicio</b></Form.Label>
                  <Form.Control as="select">
                    <option>Todos</option>
                    <option>Cardio</option>
                    <option>Fuerza</option>
                    <option>Flexibilidad</option>
                    <option>Calorías</option>
                    <option>Resistencia</option>
                    <option>Aeróbica</option>
                    <option>Estiramiento</option>
                    <option>Equilibrio</option>
                    <option>Pilates</option>
                    <option>Boxeo</option>
                    <option>Yoga</option>
                    <option>Movilidad</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formDuration">
                  <Form.Label className='mt-2' style={{ color: 'yellowgreen' }}><b>Duración del Entrenamiento</b></Form.Label>
                  <Form.Control as="select">
                    <option>Todos</option>
                    <option>15 minutos</option>
                    <option>20 minutos</option>
                    <option>25 minutos</option>
                    <option>30 minutos</option>
                    <option>35 minutos</option>
                    <option>40 minutos</option>
                    <option>45 minutos</option>
                    <option>50 minutos</option>
                    <option>55 minutos</option>
                    <option>60 minutos</option>
                    <option>1 hora y 30 minutos</option>
                  </Form.Control>
                </Form.Group>
                <Button className="w-100 mt-3" style={{ backgroundColor: 'yellowgreen', color: 'black', fontFamily: 'Rockwell' }} variant="primary" type="submit">
                  <b>Buscar</b>
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>


      {/* RUTINAS MEDIANTE CARDS */}
      <Row className="card-container mt-4">
        {filteredRoutines.map((routine, index) => (
          <Col xs={4} sm={4} md={3} key={index} className="mb-4">
            <Card className="bg-dark h-100" style={{ width: "100%", color: 'white' }}>
              <Card.Img variant="top" src={routine.image} style={{ height: "150px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title style={{ color: 'yellowgreen' }}><b>{routine.name}</b></Card.Title>
                <Card.Text>{routine.description}</Card.Text>
                <Card.Text>Duración: {routine.duration}</Card.Text>
                <Button style={{ backgroundColor: 'yellowgreen', color: 'black', fontFamily: 'Rockwell' }} variant="primary" onClick={() => handleShowRoutine(routine)}>
                  <b>Ver Rutina </b>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* MODALS - DETALLE DE LAS RUTINAS */}
      <Modal show={showRoutine} onHide={handleCloseRoutine} centered>

        {/* HEADER DE LOS CARDS */}
        <Modal.Header className='bg-dark' style={{ color: 'white' }} closeButton>
          <Modal.Title style={{ color: 'yellowgreen' }}><b>Rutina de Ejercicios</b></Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
          {selectedRoutine && (
            <Card className='bg-dark' style={{ width: "100%", color: "white" }}>
              <Card.Img variant="top" src={selectedRoutine.image} style={{ height: "200px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title style={{ color: 'yellowgreen' }}><b>{selectedRoutine.name}</b></Card.Title>
                <Card.Text>{selectedRoutine.description}</Card.Text>
                <Card.Text>Duración: {selectedRoutine.duration}</Card.Text>
                {selectedRoutine.exercises.map((exercise, index) => (
                  <div key={index}>
                    <div>----------------------------------------------------------------</div>
                    <Card.Text>
                      <strong>Nombre:</strong> {exercise.name}
                    </Card.Text>
                    <Card.Text>
                      <strong>Repeticiones:</strong> {exercise.repetitions}
                    </Card.Text>
                    <Card.Text>
                      <strong>Series:</strong> {exercise.sets}
                    </Card.Text>
                    <Card.Text>
                      <strong>Metros:</strong> {exercise.metros}
                    </Card.Text>
                    <Card.Text>
                      <strong>Descansos Recomendados:</strong> {exercise.rest}
                    </Card.Text>
                  </div>
                ))}
              </Card.Body>
            </Card>
          )}
        </Modal.Body>

        {/* FOOTER DE LOS CARDS */}
        <Modal.Footer className='bg-dark'>
          <Button className="bg-danger" style={{ fontFamily: 'Rockwell' }} variant="secondary" onClick={handleCloseRoutine}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div >


  );
}


export default App;