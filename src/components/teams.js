import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const teamsData = [
  {
    id: 1,
    image: require('../assets/images/profile.jpg'),
    linkedinLink: 'https://www.linkedin.com/in/bmathew1/',
    name: 'Binu Mathew',
    designation: 'CEO',
    description: 'Talented and seasoned, result driven engineer with 20+ years pricing / estimating experience in myriad fields of construction ranging from schematic estimation to contract award for aviation, commercial, education, government, hospitality, industrial, infrastructure, retail, and multifamily housing projects. Expertise includes preconstruction, budgeting, establishment of GMP, GC procurement, scheduling, bid / award. Demonstrated ability to communicate effectively internally and with clients to promote services.'
  }
]
function AppTeams() {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2 style={{color: 'white'}}>Founder and CEO</h2>
        </div>
        {
          teamsData.map(teams => {
            return (
              <Row key={teams.id} className="justify-content-md-center">
                <Col sm={3} className="mb-4 mb-sm-0" ml={-5}>
                  <div className='image mx-auto'>
                    <Image className="team-image" src={teams.image} />
                    <div className='overlay'>
                      <div className='socials'>
                        <ul>
                          <li><a href={teams.linkedinLink}><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className='content'>
                    <h3>{teams.name}</h3>
                    <span className='designation'>{teams.designation}</span>
                    <p>{teams.description}</p>
                  </div>
                </Col>
              </Row>
            );
          })
        }
      </Container>
    </section>
  );
}
export default AppTeams;