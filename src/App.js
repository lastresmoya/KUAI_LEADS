import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import person from './Assets/person.png'
import item1 from './Assets/item-1.png'
import item2 from './Assets/item-2.png'
import item3 from './Assets/item-3.png'
import './App.css';
import emailjs from 'emailjs-com';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  function sendEmail(e) {
    console.log(e)
    e.preventDefault();

    emailjs.sendForm('smtp_server', 'template_SGdbvoTJ', e.target, 'user_rCm9lcAQApomtmIfRLsfn')
      .then((result) => {
          console.log(result.text);
          window.location.reload(false);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="App">
      <header className="bg">
      <Container>
        <Navbar color="transparent"  className="py-5" light expand="md">
          <NavbarBrand className="text-white font-weight-bold" href="/">KUAI</NavbarBrand>
          <NavbarToggler className="text-white" onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="mr-4">
                <NavLink className="text-white" href="/">Inicio</NavLink>
              </NavItem>
              <NavItem className="mr-4">
                <NavLink className="text-white" href="#benefit">Beneficios</NavLink>
              </NavItem>
              <NavItem className="mr-4">
                <NavLink className="text-white" href="#product">Nuestro Producto</NavLink>
              </NavItem>
              <NavItem className="mr-4">
                <NavLink href="#registro" className="btn btn-primary text-white rounded-pill px-4" color="primary">Pre registro</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Row>
          <Col>
            <h1 className="text-left text-white font-weight-bold title pt-5 mt-5">KUAI es una plataforma adonde puedes gestionar</h1>
            <p className="text-left text-white font-weight-bold">todos los pedidos de tu restaurante de manera flexible y centralizada.</p>
            <div className="text-left">
              <Button className="rounded-pill mt-3 px-4 btn-lg" color="primary">Pre regÍstrate ahora</Button>
            </div>
          </Col>
          <Col>
            <img src={person} alt="personaje"/>
          </Col>
        </Row>
      </Container>
      </header>
      <section id="benefit" className="pb-5">
        <Container>
          <h2 className="text-center purple py-5">Los beneficios</h2>
          <Row>
            <Col sm="12" lg="4">
              <Card className="border-0">
                <img width="50%" className="mx-auto" src={item1} alt="beneficio" />
                <CardBody>
                  <CardTitle className="font-weight-bold purple">Gestiónalo todo de manera independiente</CardTitle>
                  <CardText className="text-secondary">
                    registra tu restaurante, personalízalo a tu gusto, gestiona el menú y los métodos de pago y entrega, sin necesidad de ponerte en contacto con nosotros y dependiendo únicamente de ti mismo.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" lg="4">
              <Card className="border-0">
                <img width="50%" className="mx-auto" src={item2} alt="beneficio" />
                <CardBody>
                  <CardTitle className="font-weight-bold purple">Obtén un enlace y un código QR únicos para tu restaurante</CardTitle>
                  <CardText className="text-secondary">
                    y compártelos por WhatsApp, Facebook, Instagram y otras redes sociales.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" lg="4">
              <Card className="border-0">
                <img width="50%" className="mx-auto" src={item3} alt="beneficio" />
                <CardBody>
                  <CardTitle className="font-weight-bold purple">Prueba nuestra plataforma de manera gratuita</CardTitle>
                  <CardText className="text-secondary">
                    por 50 ordenes o durante un mes desde que recibes tu primera orden.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-1 py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center purple">Recibe pedidos de manera automática para</h1>
              <p className="text-center purple">exprés, pick up, entrega en parqueo, servicio de habitación y en restaurante a través de la plataforma y gestiónalos todos desde tu celular o computadora, sin necesidad de instalar ninguna app.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="product" className="pb-5">
        <Container>
          <h2 className="text-center purple py-5">Nuestro Producto</h2>
          <Row>
            <Col sm="12" lg="6">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/muTv3PBoLQQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="purple pt-4">KUAI Como lo experimenta un administrador</p>
            </Col>
            <Col sm="12" lg="6">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/yC-EoCZqPUA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="purple pt-4">KUAI Como lo experimenta un cliente</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="registro" className="pb-5">
        <Container>
          <h3 className="text-left purple py-5 w-75">Pre-regístrate llenando el siguiente formulario y recibe beneficios adicionales durante el lanzamiento de KUAI:</h3>
          <Row>
            <Col>
              <Form onSubmit={sendEmail}>
                <FormGroup>
                  <Label className="text-left d-block" for="inputName">Nombre</Label>
                  <Input required type="text" name="name" id="inputName" placeholder="Nombre completo" />
                </FormGroup>
                <FormGroup>
                  <Label className="text-left d-block" for="inputRestaurant">Restaurante</Label>
                  <Input required type="text" name="restaurant" id="inputRestaurant" placeholder="Nombre del Restaurante" />
                </FormGroup>
                <FormGroup>
                  <Label className="text-left d-block" for="inputPhone">Numero de Teléfono</Label>
                  <Input required type="phone" name="phone" id="inputPhone" placeholder="Numero de Teléfono" />
                </FormGroup>
                <FormGroup>
                  <Label className="text-left d-block" for="inputEmail">Email</Label>
                  <Input required type="email" name="email" id="inputEmail" placeholder="Email" />
                </FormGroup>
                <Button type="submit" className="rounded-pill px-4" color="primary">Enviar</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;
