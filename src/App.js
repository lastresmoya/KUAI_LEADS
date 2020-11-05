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
  Card,
  CardText,
  CardBody,
  CardTitle,
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
// import emailjs from 'emailjs-com';

function App() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // function sendEmail(e) {
  //   console.log(e)
  //   e.preventDefault();

  //   emailjs.sendForm('smtp_server', 'template_SGdbvoTJ', e.target, 'user_rCm9lcAQApomtmIfRLsfn')
  //     .then((result) => {
  //         console.log(result.text);
  //         setSend(true)
  //         setTimeout(function(){ window.location.reload(false); }, 4000);

  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // }

  return (
    <div className="App">
      <header className="bg">
      <Container>
        <Navbar color="transparent"  className="py-5" light expand="md">
          <NavbarBrand className="text-white font-weight-bold" href="/">
              <svg  height="50" viewBox="0 0 2023 589" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M880.306 379.5C862.206 327.3 832.806 280.4 795.006 241.6C796.206 240.7 797.406 239.7 798.606 238.8C798.806 238.6 799.006 238.4 799.306 238.2C800.206 237.4 801.206 236.6 802.106 235.7C802.406 235.5 802.606 235.2 802.906 235C803.806 234.2 804.606 233.3 805.506 232.4C805.706 232.2 806.006 231.9 806.206 231.7C807.106 230.7 808.006 229.7 808.906 228.7C809.006 228.6 809.206 228.4 809.306 228.3C811.306 225.9 813.206 223.4 814.906 220.8C815.106 220.6 815.206 220.3 815.406 220C816.106 219 816.706 217.9 817.306 216.9C817.506 216.5 817.706 216.1 818.006 215.7C818.506 214.7 819.106 213.8 819.606 212.8C819.806 212.4 820.006 212 820.306 211.5C820.806 210.5 821.306 209.5 821.706 208.5C821.906 208.1 822.106 207.7 822.206 207.3C822.706 206.1 823.206 204.9 823.706 203.7C823.806 203.5 823.906 203.3 824.006 203C824.506 201.5 825.006 200.1 825.506 198.6C825.606 198.3 825.706 198 825.806 197.7C826.106 196.5 826.506 195.3 826.806 194.1C826.906 193.6 827.006 193.1 827.206 192.6C827.406 191.6 827.606 190.6 827.806 189.6C827.906 189 828.006 188.4 828.106 187.9C828.306 186.9 828.406 185.9 828.606 184.9C828.706 184.3 828.806 183.7 828.806 183.2C828.906 182.1 829.006 181 829.106 179.9C829.106 179.4 829.206 178.9 829.206 178.4C829.306 176.8 829.306 175.2 829.306 173.6C829.306 126.5 791.106 88.2 743.906 88.2C742.506 88.2 741.206 88.2 739.806 88.3C739.406 88.3 738.906 88.4 738.506 88.4C737.606 88.5 736.706 88.5 735.806 88.6C735.306 88.6 734.806 88.7 734.306 88.8C733.506 88.9 732.606 89 731.806 89.1C731.306 89.2 730.806 89.3 730.206 89.3C729.406 89.4 728.606 89.6 727.706 89.7C727.206 89.8 726.706 89.9 726.206 90C725.306 90.2 724.406 90.4 723.606 90.6C723.206 90.7 722.806 90.8 722.406 90.9C721.106 91.2 719.906 91.6 718.706 92C718.406 92.1 718.006 92.2 717.706 92.3C716.806 92.6 715.906 92.9 715.006 93.2C714.506 93.4 714.006 93.6 713.506 93.8C712.806 94.1 712.106 94.3 711.406 94.6C710.906 94.8 710.306 95 709.806 95.3C709.106 95.6 708.506 95.9 707.906 96.2C707.406 96.5 706.806 96.7 706.306 97C705.706 97.3 705.106 97.6 704.406 98C703.906 98.3 703.306 98.5 702.806 98.8C702.206 99.1 701.606 99.5 701.006 99.9C700.506 100.2 700.006 100.5 699.506 100.8C698.506 101.4 697.506 102.1 696.506 102.7C695.906 103.1 695.406 103.5 694.806 103.9C694.306 104.2 693.806 104.6 693.406 104.9C692.806 105.3 692.306 105.8 691.706 106.2C691.306 106.5 690.806 106.9 690.406 107.2C689.806 107.7 689.306 108.1 688.706 108.6C688.306 108.9 687.906 109.3 687.606 109.6C687.006 110.1 686.506 110.6 685.906 111.1C685.606 111.4 685.306 111.7 684.906 112C684.306 112.6 683.706 113.1 683.106 113.7C683.006 113.8 682.806 114 682.706 114.1C680.506 116.3 678.506 118.7 676.606 121.1C676.406 121.3 676.306 121.5 676.106 121.8C675.506 122.5 675.006 123.3 674.506 124C674.306 124.3 674.106 124.5 673.906 124.8C673.406 125.5 672.906 126.3 672.406 127.1C672.206 127.3 672.106 127.6 671.906 127.8C671.406 128.6 670.906 129.4 670.406 130.2C670.306 130.3 670.206 130.5 670.206 130.6C668.006 134.4 666.006 138.4 664.406 142.6C664.306 142.8 664.306 142.9 664.206 143.1C663.806 144 663.506 145 663.206 146C663.106 146.2 663.006 146.4 663.006 146.7C662.706 147.7 662.406 148.6 662.106 149.6C662.006 149.8 662.006 150 661.906 150.2C661.606 151.2 661.306 152.2 661.106 153.3C619.706 137.5 574.806 128.8 527.806 128.8C480.806 128.8 435.906 137.5 394.506 153.3C394.206 152.3 394.006 151.2 393.706 150.2C393.606 150 393.606 149.8 393.506 149.6C393.206 148.6 392.906 147.7 392.606 146.7C392.506 146.5 392.506 146.3 392.406 146C392.106 145 391.706 144.1 391.406 143.1C391.306 142.9 391.306 142.8 391.206 142.6C389.606 138.4 387.606 134.4 385.406 130.6C385.306 130.5 385.206 130.3 385.206 130.2C384.706 129.4 384.206 128.6 383.706 127.8C383.506 127.5 383.406 127.3 383.206 127C382.706 126.2 382.206 125.5 381.706 124.7C381.506 124.4 381.306 124.2 381.106 123.9C380.606 123.2 380.006 122.4 379.506 121.7C379.306 121.5 379.106 121.3 379.006 121C377.106 118.6 375.106 116.2 372.906 114C372.806 113.9 372.606 113.7 372.506 113.5C371.906 112.9 371.306 112.3 370.706 111.8C370.406 111.5 370.106 111.2 369.706 110.9C369.106 110.4 368.606 109.9 368.006 109.4C367.606 109.1 367.206 108.7 366.806 108.4C366.206 107.9 365.706 107.5 365.106 107C364.706 106.7 364.206 106.3 363.806 106C363.206 105.6 362.706 105.1 362.106 104.7C361.606 104.4 361.106 104 360.706 103.7C360.206 103.3 359.606 102.9 359.006 102.5C358.006 101.8 357.006 101.2 356.006 100.6C355.506 100.3 355.006 100 354.506 99.7C353.906 99.3 353.306 99 352.706 98.6C352.206 98.3 351.606 98 351.106 97.8C350.506 97.5 349.906 97.2 349.206 96.8C348.706 96.5 348.106 96.3 347.606 96C347.006 95.7 346.306 95.4 345.606 95.1C345.106 94.9 344.506 94.6 344.006 94.4C343.306 94.1 342.606 93.8 341.906 93.6C341.406 93.4 340.906 93.2 340.406 93C339.506 92.7 338.606 92.4 337.706 92.1C337.406 92 337.006 91.9 336.706 91.8C335.506 91.4 334.206 91.1 333.006 90.7C332.606 90.6 332.206 90.5 331.806 90.4C330.906 90.2 330.006 90 329.206 89.8C328.706 89.7 328.206 89.6 327.706 89.5C326.906 89.3 326.106 89.2 325.206 89.1C324.706 89 324.206 88.9 323.606 88.9C322.806 88.8 321.906 88.7 321.106 88.6C320.606 88.5 320.106 88.5 319.606 88.4C318.706 88.3 317.806 88.2 316.906 88.2C316.506 88.2 316.006 88.1 315.606 88.1C314.206 88 312.906 88 311.506 88C264.406 88 226.106 126.2 226.106 173.4C226.106 175 226.206 176.6 226.206 178.2C226.206 178.7 226.306 179.2 226.306 179.7C226.406 180.8 226.506 181.9 226.606 183C226.706 183.6 226.706 184.2 226.806 184.7C226.906 185.7 227.106 186.7 227.306 187.7C227.406 188.3 227.506 188.9 227.606 189.4C227.806 190.4 228.006 191.4 228.206 192.4C228.306 192.9 228.406 193.4 228.606 193.9C228.906 195.1 229.206 196.3 229.606 197.5C229.706 197.8 229.806 198.1 229.906 198.4C230.406 199.9 230.906 201.4 231.406 202.8C231.506 203 231.606 203.2 231.706 203.4C232.206 204.6 232.706 205.8 233.206 207C233.406 207.4 233.606 207.8 233.706 208.2C234.206 209.2 234.606 210.2 235.106 211.2C235.306 211.6 235.506 212.1 235.806 212.5C236.306 213.5 236.806 214.4 237.406 215.4C237.606 215.8 237.806 216.2 238.106 216.5C238.706 217.6 239.406 218.6 240.006 219.6C240.206 219.8 240.306 220.1 240.506 220.3C242.206 222.9 244.106 225.4 246.106 227.8C246.206 227.9 246.306 228.1 246.506 228.2C247.406 229.2 248.306 230.2 249.206 231.2C249.406 231.4 249.706 231.7 249.906 231.9C250.706 232.8 251.606 233.6 252.506 234.5C252.806 234.7 253.006 235 253.306 235.2C254.206 236.1 255.106 236.9 256.106 237.7C256.306 237.9 256.506 238.1 256.806 238.3C258.006 239.3 259.106 240.2 260.406 241.2C222.706 280 193.206 326.9 175.106 379.1C154.306 439.1 199.706 501.6 263.306 501.6H346.706C420.906 501.6 468.106 477.5 486.406 466.1L438.606 406.2C438.606 406.2 438.506 406.1 438.406 406.2C412.306 421.2 374.906 414.6 348.506 388.3C317.906 357.7 313.806 312.3 339.306 286.8C364.806 261.3 410.206 265.5 440.806 296C466.006 321.2 472.906 356.3 460.406 382.2C460.406 382.3 460.406 382.3 460.406 382.4L526.906 437.4C526.906 437.4 527.006 437.4 527.106 437.4L591.206 386.2C591.306 386.2 591.306 386.1 591.206 386C575.306 360.8 578.306 327.1 600.206 305.2L655.106 250.3C660.006 245.4 667.906 244.6 673.206 249C679.106 254 679.406 262.9 674.106 268.2L628.506 313.8C623.606 318.7 622.806 326.6 627.206 331.9C632.206 337.8 641.106 338.1 646.406 332.8L692.006 287.2C696.906 282.3 704.806 281.5 710.106 285.9C716.006 290.9 716.306 299.8 711.006 305.1L664.706 351.3C659.806 356.2 659.006 364.1 663.406 369.4C668.406 375.3 677.306 375.6 682.606 370.3L728.206 324.7C733.106 319.8 741.006 319 746.306 323.4C752.206 328.4 752.506 337.3 747.206 342.6L691.906 397.9C671.006 418.8 639.306 422.2 614.606 408.7C614.506 408.7 614.506 408.7 614.406 408.7L567.406 465.5C584.306 476.4 632.206 502 708.706 502H792.106C855.706 502.1 901.206 439.6 880.306 379.5ZM323.606 142.6C323.606 149.4 318.106 154.9 311.306 154.9C302.306 154.9 294.706 161.3 293.006 169.8C292.806 171 292.606 172.3 292.606 173.6C292.606 180.4 287.106 185.9 280.306 185.9C273.506 185.9 268.006 180.4 268.006 173.6C268.006 163.9 271.206 155 276.706 147.7C284.606 137.1 297.206 130.2 311.406 130.2C318.006 130.2 323.606 135.7 323.606 142.6ZM787.006 173.6C787.006 180.4 781.506 185.9 774.706 185.9C767.906 185.9 762.406 180.4 762.406 173.6C762.406 172.3 762.306 171.1 762.006 169.8C760.306 161.3 752.706 154.9 743.706 154.9C736.906 154.9 731.406 149.4 731.406 142.6C731.406 135.8 736.906 130.3 743.706 130.3C757.906 130.3 770.506 137.2 778.406 147.8C783.706 154.9 787.006 163.9 787.006 173.6Z" fill="white"/>
              <path d="M1457.11 146.5V338C1457.11 355.2 1454.31 370.4 1448.81 383.5C1443.31 396.7 1435.51 407.7 1425.41 416.6C1415.31 425.5 1403.21 432.3 1389.01 436.8C1374.81 441.4 1359.11 443.6 1341.81 443.6C1324.61 443.6 1308.91 441.3 1294.71 436.8C1280.51 432.3 1268.31 425.5 1258.21 416.6C1248.11 407.7 1240.21 396.6 1234.51 383.5C1228.91 370.3 1226.01 355.2 1226.01 338V146.5H1297.11V338C1297.11 356.1 1301.01 369.2 1308.71 377.3C1316.41 385.4 1327.51 389.4 1341.81 389.4C1356.41 389.4 1367.51 385.4 1375.01 377.3C1382.51 369.2 1386.31 356.2 1386.31 338V146.5H1457.11Z" fill="white"/>
              <path d="M1663.31 385H1566.41L1549.51 439.8H1474.01L1581.51 146.6H1647.91L1756.31 439.7H1680.41L1663.31 385ZM1583.31 330.4H1646.31L1614.71 228.7L1583.31 330.4Z" fill="white"/>
              <path d="M1209.21 146.5H1121.81L1058.61 238.5L1034.01 275.8V146.5H963.306V404.3C963.306 423.8 979.106 439.6 998.606 439.6H1033.91V362.3L1062.91 330.5L1125.31 439.6H1209.11L1110.01 276.1L1209.21 146.5Z" fill="white"/>
              <path d="M1817.71 146.5H1782.51V439.7H1853.01V179.9C1851.91 161.3 1836.61 146.5 1817.71 146.5Z" fill="white"/>
              </svg>
          </NavbarBrand>
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
