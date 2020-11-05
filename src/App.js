import React, { useState } from 'react';
import LanguageSelect from './components/languageSelect'
import { useTranslation } from "react-i18next";
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
  Alert,
  NavbarText
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
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isSend, setSend] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  function sendEmail(e) {
    console.log(e)
    e.preventDefault();

    emailjs.sendForm('smtp_server', 'template_SGdbvoTJ', e.target, 'user_rCm9lcAQApomtmIfRLsfn')
      .then((result) => {
          console.log(result.text);
          setSend(true)
          setTimeout(function(){ window.location.reload(false); }, 4000);

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
                <NavLink className="text-white" href="/">{t("menuItem_home")}</NavLink>
              </NavItem>
              <NavItem className="mr-4">
                <NavLink className="text-white" href="#vender-comida-por-internet">{t("menuItem_benefits")}</NavLink>
              </NavItem>
              <NavItem className="mr-4">
                <NavLink className="text-white" href="#sistema-de-pedidos-online">{t("menuItem_system")}</NavLink>
              </NavItem>
              <NavItem className="mr-4">
                <NavLink href="http://admin.kuai.menu/registry" className="btn btn-primary principal text-white rounded-pill px-4" color="primary">{t("menuItem_register")}</NavLink>
              </NavItem>
            </Nav>
            <NavbarText><LanguageSelect/></NavbarText>
          </Collapse>
        </Navbar>
        <Row>
          <Col sm="12" lg="6">
            <h1 className="text-left text-white font-weight-bold title pt-5 mt-5">{t("content_title")}</h1>
            <p className="text-left text-white font-weight-bold">{t("content_description")}</p>
            <div className="text-left">
              <a href="http://admin.kuai.menu/registry" className="btn btn-primary text-white rounded-pill principal px-4 btn-lg" color="primary">{t("input_submit")}</a>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <img className="img-fluid" alt={t("content_title_alt")} src={person} />
          </Col>
        </Row>
      </Container>
      </header>
      <section id="vender-comida-por-internet" className="pb-5">
        <Container>
          <h2 className="text-center purple py-5">{t("content_benefits_title")}</h2>
          <Row>
            <Col sm="12" lg="4">
              <Card className="border-0">
                <img width="50%" className="mx-auto" alt={t("content_benefits_alt_1")} src={item1}  />
                <CardBody>
                  <CardTitle className="font-weight-bold purple">{t("content_benefits_title_1")}</CardTitle>
                  <CardText className="text-secondary">
                    {t("content_benefits_content_1")}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" lg="4">
              <Card className="border-0">
                <img width="50%" className="mx-auto" alt={t("content_benefits_alt_2")} src={item2}  />
                <CardBody>
                  <CardTitle className="font-weight-bold purple">{t("content_benefits_title_2")}</CardTitle>
                  <CardText className="text-secondary">
                    {t("content_benefits_content_2")}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" lg="4">
              <Card className="border-0">
                <img width="50%" className="mx-auto" src={item3} alt={t("content_benefits_alt_3")} />
                <CardBody>
                  <CardTitle className="font-weight-bold purple pt-3">{t("content_benefits_title_3")}</CardTitle>
                  <CardText className="text-secondary">
                    {t("content_benefits_contet_3")}
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
              <h2 className="text-center h1 purple">{t("content_cta_title")}</h2>
              <p className="text-center purple">{t("content_cta_content")}</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pb-5">
        <Container>
          <h2 className="text-center purple py-5">{t("content_video_title")}</h2>
          <Row>
            <Col sm="12" lg="6">
              <div className="iframe-container">
                <iframe title="KUAI Como lo experimenta un administrador" className="responsive-iframe" src="https://www.youtube.com/embed/muTv3PBoLQQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <p className="purple pt-4">{t("content_video_content_client")}</p>
            </Col>
            <Col sm="12" lg="6">
              <div className="iframe-container">
                <iframe title="KUAI Como lo experimenta un cliente" className="responsive-iframe" src="https://www.youtube.com/embed/yC-EoCZqPUA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <p className="purple pt-4">{t("content_video_content_user")}</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="registro" className="pb-5">
        <Container>
          <Row>
            <Col>
            <h3 className="text-center  purple pb-5">{t("form_title")}</h3>
            <a href="http://admin.kuai.menu/registry" className="btn btn-primary text-white rounded-pill principal px-4 btn-lg" color="primary">{t("input_submit")}</a>
            {/* {
              isSend ?
                <Alert color="primary">
                  {t("alert")}
                </Alert>
              :''
            }
              <Form onSubmit={sendEmail}>
                <FormGroup>
                  <Label className="text-left d-block" for="inputName">{t("input_name")}</Label>
                  <Input required type="text" name="name" id="inputName" placeholder={t("input_name_placeholder")} />
                </FormGroup>
                <FormGroup>
                  <Label className="text-left d-block" for="inputRestaurant">{t("input_restaurant")}</Label>
                  <Input required type="text" name="restaurant" id="inputRestaurant" placeholder={t("input_restaurant_placeholder")} />
                </FormGroup>
                <FormGroup>
                  <Label className="text-left d-block" for="inputPhone">{t("input_phone")}</Label>
                  <Input required type="phone" name="phone" id="inputPhone" placeholder={t("input_phone_placeholder")} />
                </FormGroup>
                <FormGroup>
                  <Label className="text-left d-block" for="inputEmail">{t("input_email")}</Label>
                  <Input required type="email" name="email" id="inputEmail" placeholder={t("input_phone_email")} />
                </FormGroup>
                <Button type="submit" className="rounded-pill principal btn-lg px-4" color="primary">{t("input_submit")}</Button>
              </Form> */}
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
