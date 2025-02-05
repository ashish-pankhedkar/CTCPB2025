import React from 'react';
import BTable from "react-bootstrap/Table";
import dbtlogo from "../images/sponslogos/dbt.png";
import nabard from "../images/sponslogos/nabard.png";
import nrf from "../images/sponslogos/anrf.png";
import biogenuixLogo from "../images/sponslogos/biogenuix.jpeg"; 
import himedia from "../images/sponslogos/himedia.png";
import icar from "../images/sponslogos/icar.png";
// import bpatelLogo from "../images/sponslogos/bpatel.png"; // Replace with the actual path

const spons_text = "Opportunities are available for companies to give advertisements in the abstract book of the symposium, which will contain messages from VIPs and articles from renowned scientists. Interested companies may contact the convener (e-mail) for giving the advertisement.";

const Sponsorship = () => {
  return (
    <div>
      <div className="container">
        <div className="titleStyle1">Sponsors</div>
        <div className="divider" style={{ marginBottom: "1px" }}></div>

        {/* Government Sponsors */}
        <div className="h2">Government Sponsors</div>
        <div className="divider" style={{ marginBottom: "10px" }}></div>
        <div className="d-flex justify-content-between align-items-center">
          <img
            src={dbtlogo}
            alt="Department of Biotechnology, Govt. of India"
            className="img-fluid"
            style={{ flex: 1, maxWidth: "30%", transform: "scale(0.8)" }}
          />
           <img
            src={icar}
            alt="Department of Biotechnology, Govt. of India"
            className="img-fluid"
            style={{ flex: 1, maxWidth: "30%", transform: "scale(0.8)" }}
          />
           <img
            src={nrf}
            alt="National Research Foundation"
            className="img-fluid"
            style={{ flex: 1, maxWidth: "30%", transform: "scale(0.9)" }}
          />
          <img
            src={nabard}
            alt="NABARD"
            className="img-fluid"
            style={{ flex: 1, maxWidth: "30%", transform: "scale(0.8)" }}
          />
        </div>

        {/* Private Sponsors */}
        <div className="divider" style={{ marginBottom: "20px", opacity: "0%" }}></div>
        <div className="h2">Private Sponsors</div>
        <div className="divider" style={{ marginBottom: "10px" }}></div>
        <div className="d-flex justify-content-between align-items-center">
          <img
            src={biogenuixLogo}
            alt="Biogenuix"
            className="img-fluid"
            style={{ flex: 1, maxWidth: "30%", transform: "scale(0.8)" }}
          />
        {/* <img
            src={bpatelLogo}
            alt="B.Patel and Sons"
            className="img-fluid"
            style={{ flex: 1, maxWidth: "45%", transform: "scale(0.6)" }}
          />  */}
          <img
            src={himedia}
            alt="HiMedia"
            className="img-fluid"
            style={{ flex: 1, maxWidth: "45%", transform: "scale(0.6)" }}
          /> 
        </div>

        {/* Sponsorship Opportunities */}
        <div className="divider" style={{ marginBottom: "30px", opacity: "0%" }}></div>
        <div className="titleStyle1">Sponsorship Opportunities</div>
        <div className="divider" style={{ marginBottom: "30px" }}></div>
        <p className="" style={{ fontWeight: "400", textAlign: "justify" }}>
          {spons_text}
        </p>
        <div className="divider" style={{ marginBottom: "10px", opacity: "0%" }}></div>
        <BTable striped bordered hover responsive>
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th>Sponsor Category</th>
              <th>Rate (INR)</th>
              <th>Privileges</th>
            </tr>
          </thead>
          <tbody style={{ alignItems: "center", justifyContent: "center" }}>
            <tr>
              <td style={{ backgroundColor: "#ffcccc", fontWeight: "bold" }}>Platinum</td>
              <td>2,00,000</td>
              <td style={{ textAlign: "justify" }}>
                Name/logo at prominent places including dias/website; Presentation opportunity; Full page advertisement in the abstract book; Area for exhibition stall; Two complementary event registrations.
              </td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#ccfff8", fontWeight: "bold" }}>Diamond</td>
              <td>1,00,000</td>
              <td style={{ textAlign: "justify" }}>
                Name/logo at prominent places including dias/website; Full page advertisement in the abstract book; Area for exhibition stall; One complementary event registration.
              </td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#ffffcc", fontWeight: "bold" }}>Gold</td>
              <td>50,000</td>
              <td style={{ textAlign: "justify" }}>
                Name/logo at prominent places including dias/website; Half page advertisement in the abstract book.
              </td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#e0e0e0", fontWeight: "bold" }}>Silver</td>
              <td>25,000</td>
              <td style={{ textAlign: "justify" }}>
                Name/logo on website; Half page advertisement in the abstract book.
              </td>
            </tr>
          </tbody>
        </BTable>
      </div>
    </div>
  );
};

export default Sponsorship;
