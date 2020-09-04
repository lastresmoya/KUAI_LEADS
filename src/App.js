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
  Input
} from 'reactstrap';
import person from './Assets/person.png'
import item1 from './Assets/item-1.png'
import item2 from './Assets/item-2.png'
import item3 from './Assets/item-3.png'
import social1 from './Assets/social-1.png'
import social2 from './Assets/social-2.png'
import social3 from './Assets/social-3.png'
import social4 from './Assets/social-4.png'
import social5 from './Assets/social-5.png'
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
                <NavLink className="text-white" href="#vender-comida-por-internet">Beneficios</NavLink>
              </NavItem>
              <NavItem className="mr-4">
                <NavLink className="text-white" href="#sistema-de-pedidos-online">Nuestro Sistema</NavLink>
              </NavItem>
              <NavItem className="mr-4">
                <NavLink href="#registro" className="btn btn-primary principal text-white rounded-pill px-4" color="primary">Pre registro</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Row>
          <Col>
            <h1 className="text-left text-white font-weight-bold title pt-5 mt-5">KUAI es un sistema de pedidos online para servicios de comida</h1>
            <p className="text-left text-white font-weight-bold">en el cual podrás gestionarlos de manera flexible, según tus reglas, bajo tu control y de manera centralizada.</p>
            <div className="text-left">
              <a href="#registro" className="btn btn-primary text-white rounded-pill principal px-4 btn-lg" color="primary">Pre regístrate ahora</a>
            </div>
          </Col>
          <Col>
            <img src={person} alt="Vender comida por internet" />
          </Col>
        </Row>
      </Container>
      </header>
      <section id="vender-comida-por-internet" className="pb-5">
        <Container>
          <h2 className="text-center purple py-5">Cómo vender comida por internet</h2>
          <Row>
            <Col sm="12" lg="4">
              <Card className="border-0">
                <img width="50%" className="mx-auto" src={item1} alt="Sistema de pedidos online" />
                <CardBody>
                  <CardTitle className="font-weight-bold purple">Tu negocio bajo tu control</CardTitle>
                  <CardText className="text-secondary">
                    registra tu restaurante, personaliza su perfil, gestiona su menú y los métodos de pago y entrega. Todo sin necesidad de ponerte en contacto con nosotros.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" lg="4">
              <Card className="border-0">
                <img width="50%" className="mx-auto" src={item2} alt="Genera un codigo QR" />
                <CardBody>
                  <CardTitle className="font-weight-bold purple">Obtén un enlace y genera un código QR únicos</CardTitle>
                  <CardText className="text-secondary">
                    para que los uses por WhatsApp, Facebook, Instagram y etc. para dirigir a tus clientes a tu menú digital y que hagan pedidos según tus reglas.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" lg="4">
              <Card className="border-0">
                <img width="50%" className="mx-auto" src={item3} alt="Prueba gratis por un mes" />
                <CardBody>
                  <CardTitle className="font-weight-bold purple pt-3">Prueba gratis KUAI por un mes</CardTitle>
                  <CardText className="text-secondary">
                    vender comida por internet no tiene que estar sujeto al uso de costosos sistemas de delivery, nosotros te dejamos probar nuestro sistema gratis durante 30 días.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="sistema-de-pedidos-online" className="bg-1 py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center purple">KUAI funciona como las aplicaciones para pedir comida</h1>
              <p className="text-center purple">pero sin necesidad de instalar una app en tu dispositivo! El sistema permite gestionar entrega en mostrador, entrega en parqueo, servicio de habitación y servicio en restaurante, todos mediante un menú digital sin contacto desde celular, tablet ó computadora.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pb-5">
        <Container>
          <h2 className="text-center purple py-5">Experimenta nuestro sistema para la gestión de tu negocio</h2>
          <Row>
            <Col sm="12" lg="6">
              <div className="iframe-container">
                <iframe title="KUAI Como lo experimenta un administrador" className="responsive-iframe" src="https://www.youtube.com/embed/muTv3PBoLQQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <p className="purple pt-4">Tu restaurante y sistema de gestión desde la perspectiva de un administrador</p>
            </Col>
            <Col sm="12" lg="6">
              <div className="iframe-container">
                <iframe title="KUAI Como lo experimenta un cliente" className="responsive-iframe" src="https://www.youtube.com/embed/yC-EoCZqPUA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <p className="purple pt-4">Tu restaurante y menú digital para vender comida por internet desde la perspectiva de un cliente</p>
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
                <Button type="submit" className="rounded-pill principal btn-lg px-4" color="primary">Enviar</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className="pb-4 bg-light">
        <Container>
          <p className="pt-5">POWERED BY PENGYI LABS</p>
            <div>
              <a href="https://www.facebook.com/PengYiLabs/" rel="noopener noreferrer" target="_blank">
                <img className="img-fluid pr-3" width="60px" src={social3} alt="Facebook Icon" />
              </a>
              <a href="https://www.instagram.com/pengyilabs/" rel="noopener noreferrer" target="_blank">
                <img className="img-fluid pr-3" width="60px" src={social4} alt="Instagram Icon" />
              </a>
              <a href="https://pengyilabs.io" rel="noopener noreferrer" target="_blank">
                <img className="img-fluid pr-3" width="60px" src={social5} alt="Pengyi Labs website" />
              </a>
              <a href="https://www.linkedin.com/company/pengyilabs/" rel="noopener noreferrer" target="_blank">
                <img className="img-fluid pr-3" width="60px" src={social2} alt="Linkedin Icon" />
              </a>
              <a href="https://twitter.com/labspengyi" rel="noopener noreferrer" target="_blank">
                <img className="img-fluid pr-3" width="60px" src={social1} alt="Twitter Icon" />
              </a>
            </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;
