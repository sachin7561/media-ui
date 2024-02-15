import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {

  const navigate=useNavigate()
  return (
    <div>
      
      <Container>
      <Row>
        <Col className='m-5'> 
        {/* content  */}
        <h1 className='m-3'>Welcome to <span className='text-danger '>Media Player</span></h1>
        <p className='m-3' style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit facere dolorem illo voluptatibus autem minima quam, repudiandae eius unde recusandae molestiae, porro, laboriosam cumque aperiam eligendi maiores quos modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium dolor adipisci et, amet consequatur, beatae facilis sapiente ut dolores expedita aliquam cupiditate ducimus magnam optio esse ab. Numquam, velit.
        </p>
        <button className='btn btn-primary mb-4' onClick={()=>navigate('/home')} >Get Started</button>
        </Col>
        <Col style={{marginleft:'50px'}}>
        
        {/* image */}

        <img  style={{width:'600px'}} src="https://cdn.dribbble.com/users/1161517/screenshots/11465357/media/286bb09a236ca65ef4950093444c182d.gif" alt="" />
        </Col>
      </Row>


{/* Row 2 */}
        <h1 className='text-info'> Features</h1>
      <Row className='m-5'>
        <Col style={{marginleft:'100px'}}> <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">SELECT</Button>
      </Card.Body>
    </Card></Col>
    <Col style={{marginleft:'100px'}}> <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://media.tenor.com/Zf03Uu2e5kwAAAAC/kikiverse-dance.gif" />
      <Card.Body>
        <Card.Title>Category Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">SELECT</Button>
      </Card.Body>
    </Card></Col>
    <Col style={{marginleft:'100px'}}> <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" height="350px" src="https://giffiles.alphacoders.com/144/14450.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">SELECT</Button>
      </Card.Body>
    </Card></Col>
      </Row>
    {/* ROW 3 */}

      <Row className='border border-1 border-primary'>
        <Col style={{textAlign:'justify'}} >
        <h3 className='text-primary my-5'> Simple,Fast and Powerful</h3>
        <h5>Play Everything</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus impedit error minus optio asperiores obcaecati quae, vitae voluptate tempore iste? Eum, itaque. Reiciendis earum magnam minus iste illo ut!
        </p>
        <h5>Categorise Videos</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ratione ullam. Similique libero ea minus quis dolores eaque iusto laudantium molestias labore et, provident sint quisquam soluta non ipsam magnam.</p>
        <h5>Managing History</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, recusandae maiores dolorem quaerat minus, tempore eum libero, ad velit illo earum quia fugiat qui facilis ipsa aut itaque nostrum aliquam.</p>
        </Col>
        <Col>
        <iframe style={{marginTop:'10%'}} width="100%" height="80%"  src="https://www.youtube.com/embed/IqwIOlhfCak?si=6hakj1daxfK5ZAzp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       
        </Col>
      </Row>


      </Container>
      
    </div>
  )
}

export default LandingPage