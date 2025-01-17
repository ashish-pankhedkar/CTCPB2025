import adim from "../images/speakers/adim.png";
import aks from "../images/speakers/aks.png";
import akt from "../images/speakers/akt.png";
import ap from "../images/speakers/ap.jpeg";
import ar from "../images/speakers/ar.jpeg";
import jg from "../images/speakers/jg.png";
import jt from "../images/speakers/jt.jpg";
import kam from "../images/speakers/kam.jpg";
import kcb from "../images/speakers/kcb.jpg";
import mp from "../images/speakers/mp.jpg";
import pka from "../images/speakers/pka.jpg";
import pkv from "../images/speakers/pkv.png";
import rc from "../images/speakers/rc.jpg";
import sd from "../images/speakers/sd.jpg";
import sg from "../images/speakers/sg.jpg";
import skm from "../images/speakers/skm.jpg";
import sks from "../images/speakers/sks.jpg";
import slsp from "../images/speakers/slsp.jpg";
import ssb from "../images/speakers/ssb.jpg";
import pd from "../images/speakers/pd.jpg";
import tr from "../images/speakers/tr.jpg";
import pkt from "../images/speakers/pkt.jpg";
import nb from "../images/speakers/nb.jpg";
import anilks from "../images/speakers/anilks.jpg";
import op from "../images/speakers/op.jpg";
import ashup from "../images/speakers/ashup.png";
import tkm from "../images/speakers/tkm.png";
import tk from "../images/speakers/tk.jpg";
import sc from "../images/speakers/sc.jpeg";
import anis from "../images/speakers/as.jpg";
import mm from "../images/speakers/mm.png";
import sm from "../images/speakers/sm.jpg";

function SpeakerLink({ link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="nopener noreferrer"
      style={{ all: "unset", cursor: "pointer" }}
    >
      <div className="boxStyleView">VIEW MORE &#160; &#x2192;</div>
    </a>
  );
}

class SpeakerHelper {
  constructor(
    speakerName, speakerImage, speakerText, speakerLink, speakerLinkStyle
  ) {
    this.speakerName = speakerName;
    this.speakerImage = speakerImage;
    this.speakerText = speakerText;
    this.SpeakerLink = speakerLink;
    this.speakerLinkStyle = speakerLinkStyle;
  }

  static speakerTextStyle = {
    marginTop: "40px",
    flexWrap: "wrap",
    textAlign: "justify",
  };

  static getKeynoteSpeakerCards(speakerList) {
    return speakerList.map(function (speaker, _) {
      return (
        <div className="speakerDiv">
          <img
            className="speakerImg"
            src={speaker.speakerImage}
            alt={speaker.speakerName}
          />
          <div className="upperDiv">
            <div className="speakerName">{speaker.speakerName}</div>
            <div className="speakerText">{speaker.speakerText}</div>
            <div style={speaker.speakerLinkStyle}>
              <SpeakerLink link={speaker.SpeakerLink} />
            </div>
          </div>
        </div>
      );
    });
  }

  static getInvitedSpeakerCards(speakerList) {
    return speakerList.map(function (speaker, _) {
      return (
        <div className="speakerDiv col-md-4 col-sm-6 col-xs-12">
          <div className="upperDiv">
            <div className="speakerName2">{speaker.speakerName}</div>
            <div className="speakerText" style={{ marginBottom: "40px" }}>
              {speaker.speakerText}
            </div>
            <div style={speaker.speakerLinkStyle}>
              <SpeakerLink link={speaker.SpeakerLink} />
            </div>
          </div>
        </div>
      );
    });
  }
};

const invitedSpeakers = [
  
  new SpeakerHelper(
    "Prof. Adinpunya Mitra",
    adim,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        IIT 
       <br />
        Kharagpur
      </div>
    ),
    "https://www.iitkgp.ac.in/department/AG/faculty/ag-adin"
  ),

  new SpeakerHelper(
    "Dr. Alok K. Sinha",
    aks,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        NIPGR
        <br />
        New Delhi
      </div>
    ),
    "https://nipgr.ac.in/research/dr_asinha.php"
  ),

  new SpeakerHelper(
    "Dr. Amey Redkar",
    ar,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        NCBS
        <br />
        Bangalore
      </div>
    ),
    "https://www.ncbs.res.in/faculty/aredkar"
  ),

  new SpeakerHelper(
    "Dr. Anil K. Singh",
    anilks,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        ICAR-NIPB
        <br />
        New Delhi
      </div>
    ),
    "https://nipb.icar.gov.in/node/1714"
  ),
  new SpeakerHelper(
    "Dr. Aniruddha Sane",
    anis,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        NBRI
        <br />
        Lucknow
      </div>
    ),
    "https://nbri.res.in/molecular-scientists/dr-aniruddha-p-sane/"
  ),

  new SpeakerHelper(
    "Dr. Ashutosh Pandey",
    ashup,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        NIPGR
        <br />
        Delhi
      </div>
    ),
    "https://www.nipgr.ac.in/research/dr_ashutosh.php"
  ),

  new SpeakerHelper(
    "Prof. Ashwani Pareek",
    ap,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        NABI
        <br />
        Punjab
      </div>
    ),
    "https://nabi.res.in/profile/scientists?id=MTA%3D"
  ),

  new SpeakerHelper(
    "Dr. Jitendra Giri",
    jg,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        NIPGR
        <br />
        New Delhi
      </div>
    ),
    "https://nipgr.ac.in/research/dr_jgiri.php"
  ),

  new SpeakerHelper(
    "Dr. Jitendra Thakur",
    jt,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        ICGEB
        <br />
        New Delhi
      </div>
    ),
    "https://www.icgeb.org/jitendra-thakur/"
  ),

  new SpeakerHelper(
    "Prof. K. C. Bansal",
    kcb,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        NAAS
        <br />
        New Delhi
      </div>
    ),
    "https://naas.org.in/detail.php?id=48"
  ),

  new SpeakerHelper(
    "Dr. Manoj Majee",
    mm,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        NIPGR
        <br />
        New Delhi
      </div>
    ),
  "https://www.nipgr.ac.in/research/dr_mmajee_lab.php"
  ),

  new SpeakerHelper(
    "Prof. Manoj Prasad",
    mp,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        DU South Campus 
        <br />
        New Delhi
      </div>
    ),
  "https://du.irins.org/profile/43175"
  ),

  new SpeakerHelper(
    "Prof. Om Parkash Dhankher",
    op,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        UMASS
        <br />
        Amherst
      </div>
    ),
    "https://ag.umass.edu/people/om-parkash"
  ),

  new SpeakerHelper(
    "Dr. P. K. Trivedi",
    pkt,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        CSIR - CIMAP
        <br />
        Lucknow
      </div>
    ),
    "https://nbri.res.in/molecular-scientists/dr-p-k-trivedi/"
  ),
 
  new SpeakerHelper(
    "Prof. Padmanabh Dwivedi",
    pd,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
       BHU 
        <br />
        Varanasi
      </div>
    ),
    "https://bhu.ac.in/Content/FacultyCV/pdwivedi25@rediffmail.com.pdf"
  ),

  new SpeakerHelper(
    "Dr. Pradeep K. Agarwal",
    pka,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        CSIR-CSMCRI
        <br />
        Bhavnagar
      </div>
    ),
    "https://www.csmcri.res.in/node/340"
  ),
 
  new SpeakerHelper(
    "Prof. Rakhi Chaturvedi",
    rc,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        IIT 
        <br />
        Guwahati
      </div>
    ),
    "https://fac.iitg.ac.in/rakhi_chaturvedi/profile.html"
  ),
 
  new SpeakerHelper(
    "Dr. Satendra Kumar Mangrauthia",
    skm,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        ICAR-IIRR
        <br />
        Hyderabad
      </div>
    ),
    "https://www.icar-iirr.org/index.php/en/about-iirr/staff-iirr/iirr-scientists/crop-improvement/146-dr-satendra-kumar-mangrauthia-senior-scientist"
  ),
  
  new SpeakerHelper(
    "Dr. Sharmila Chattopadhyay",
    sc,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        IICB
        <br />
        Kolkata
      </div>
    ),
    "https://scholar.google.co.in/citations?user=R71lFCgAAAAJ&hl=en"
  ),
  new SpeakerHelper(
    "Prof. Sridev Mohapatra",
    sm,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        BITS Pilani
        <br />
        Hyderabad
      </div>
    ),
    "https://www.bits-pilani.ac.in/hyderabad/sridev-mohapatra/"
  ),

  new SpeakerHelper(
    "Dr. Sneh Lata Singla-Pareek",
    slsp,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        ICGEB
        <br />
        New Delhi
      </div>
    ),
    "https://www.icgeb.org/sneh-lata-singla-pareek/"
  ),

  new SpeakerHelper(
    "Dr. Sourav Datta",
    sd,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        IISER 
        <br />
        Bhopal
      </div>
    ),
    "https://bio.iiserb.ac.in/Home/faculty_details/1367"
  ),

  new SpeakerHelper(
    "Prof. S. S. Bhojwani",
    ssb,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        DayalBagh Educational Institute
        <br />
        Agra
      </div>
    ),
    "https://www.schandpublishing.com/author-details/s-sbhojwani"
  ),
 
  new SpeakerHelper(
    "Dr. Sumit Ghosh",
    sg,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        CSIR - CIMAP
        <br />
        Lucknow
      </div>
    ),
    "https://www.cimap.res.in/EmployeeProfile/EmployeeProfile.aspx?id=661"
  ),

  new SpeakerHelper(
    "Dr. T. R. Sharma",
    tr,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        ICAR
        <br />
        New Delhi
      </div>
    ),
    "https://naas.org.in/detail.php?id=465"
  ),
  
  new SpeakerHelper(
    "Dr. Tapan K. Mondal",
    tkm,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        ICAR - NIPB
        <br />
        Delhi
      </div>
    ),
    "https://naas.org.in/detail.php?id=866"
  ),

  new SpeakerHelper(
    "Dr. Tarun Kant",
    tk,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        ICFRE - Arid Forest Research Institute
        <br />
        Jodhpur
      </div>
    ),
    "https://www.linkedin.com/in/dr-tarun-kant-9884719/?originalSubdomain=in"
  ),
];


export { invitedSpeakers, SpeakerHelper };