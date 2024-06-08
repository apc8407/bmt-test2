import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Marquee from 'react-marquee-slider';
import times from 'lodash/times';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-drafting-compass',
    title: 'Architects',
    description: 'BMT Consulting Services offers architects a departure from traditional square foot pricing by providing real sub-contractor costs on a per-trade basis. Our approach enables architects to establish budgets at various stages of design. By aligning estimates with budgets early in the process, architects can make informed adjustments, ensuring project feasibility.'
    },
  {
    id: 2,
    icon: 'fas fa-building',
    title: 'Owners and Developers',
    description: 'Unbiased and realistic cost estimates are essential for informed decision-making. BMT Consulting Services serves as an independent advisor, offering impartial insights into project costs and approaches. Our early budget assessments empower owners to proceed confidently with construction plans, facilitating the procurement of construction loans.'
    },
  {
    id: 3,
    icon: 'fas fa-cogs',
    title: 'Engineers',
    description: 'The evolution of engineering has introduced both intricate and challenging projects, ranging from towering skyscrapers to multi-level subterranean structures. BMT Consulting Services adeptly estimates and value-engineers projects, aligning them with owners budgets before finalizing plans and initiating bids.'
    },
  {
    id: 4,
    icon: 'fas fa-hammer',
    title: 'General Contractors',
    description: 'Traditionally, generating estimates as a general contractor involved navigating a complex network of sub-contractors and laboriously soliciting bids. BMT Consulting Services revolutionizes this approach by leveraging extensive knowledge of sub-contractor pricing to provide unbiased estimates tailored to each trade.'
    },
  {
    id: 5,
    icon: 'fas fa-hard-hat',
    title: 'Sub Contractors',
    description: 'Our journey began with hardworking individuals seeking a better work-life balance. We provide meticulous project estimates, meticulously detailing labor, materials, and production times for each trade. By factoring in insurance costs, profit margins, and overheads, we ensure accurate cost projections, resulting in a higher bid success rate for our clients.'
  },
  {
    id: 6,
    icon: 'fas fa-balance-scale',
    title: 'Lawyers',
    description: 'Navigating the complexities of construction projects involves legal challenges stemming from payment disputes or unrealistic expectations. We offer expert witness services and collaborate with adjusters on insurance claims and BSA estimates. Our team assists in researching and providing critical information to support clients in legal proceedings.'
  }
]

const sectorsData = [
  { id: 1, icon: 'fas fa-building', title: 'Commercial' },
  { id: 2, icon: 'fas fa-plane', title: 'Aviation' },
  { id: 3, icon: 'fas fa-graduation-cap', title: 'Education' },
  { id: 4, icon: 'fas fa-landmark', title: 'Government' },
  { id: 5, icon: 'fas fa-road', title: 'Infrastructure' },
  { id: 6, icon: 'fas fa-bus', title: 'Transportation' },
  { id: 7, icon: 'fas fa-bed', title: 'Hospitality' },
  { id: 8, icon: 'fas fa-industry', title: 'Industrial' },
];

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our services</h2>
          <div className="subtitle">services we provide</div>
        </div>
        <Row xs={1} md={3}>
         {
            servicesData.map(services => {
              return (
                <Col className='holder card-column' xs={12} md={4} key={services.id}>
                  <div className="flip-card">
                    <div className="front">
                      <div className="card-content">
                        <div className="icon">
                          <i className={services.icon}></i>
                        </div>
                        <h3>{services.title}</h3>
                      </div>
                    </div>
                    <div className="back">
                      <p>{services.description}</p>
                    </div>
                  </div>
                </Col>
              );
            })
          }
        </Row>

        {/* new sectors section */}
        <div className="title-holder">
          <h2>Market Sectors</h2>
          <div className="subtitle">sectors we serve</div>
        </div>
        <Marquee velocity={25} scale={0.7}>
          {times(sectorsData.length, Number).map(id => (
            <Col className='holder no-padding' xs={12} md={4} key={sectorsData[id].id}>
              <div className="icon">
                <i className={sectorsData[id].icon}></i>
              </div>
              <h3>{sectorsData[id].title}</h3>
            </Col>
          ))}
        </Marquee>
      </Container>
    </section>
  );
}
export default AppServices;