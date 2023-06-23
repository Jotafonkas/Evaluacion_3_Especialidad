import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Row, Col, Modal } from 'react-bootstrap';
import routines from './rutinas';


/* COMPONENTE App */
function App() {
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