import { Pokemon, IPokemonList } from "../models/interfaces";
import { Container, Row, Col } from 'react-bootstrap';
import "../assets/styles.css"

export const PokemonList: React.FC<IPokemonList> = ({pokemonSet, toggleCatch}) => {


    return( 
    <Container fluid>
        <Row>
            {
                pokemonSet.map((poke:Pokemon) => {
                    const imgSrc= "src/assets/images/"+poke.name+".png";
                    
                    return (
                        <Col xs={4} onClick={ () => toggleCatch(poke.number) }>
                            <div className="custom-card">
                                <div className="center-img">
                                    <img src={imgSrc} className="card-img" />
                                </div>
                                {poke.name}
                            </div>
                            {
                                poke.caught ?
                                     (<img src="src/assets/images/pokeball.png" className="pokeball-caught" />) : <></>
                            }
                            
                        </Col>
                    )
                })
            }
        </Row>
    </Container>
    );
}
