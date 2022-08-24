import { pokemonItem, IPokemonList } from "../models/interfaces";
import { Container, Row, Col } from 'react-bootstrap';
import "../assets/styles.css"

export const PokemonList: React.FC<IPokemonList> = ({pokemon}) => {
    
    return( 
    <Container fluid>
        <Row>
            {
                pokemon.map((poke:pokemonItem) => {
                    const imgSrc= "src/assets/images/"+poke.name+".png"
                    return (
                        <Col xs={4}>
                            <div className="custom-card">
                                <div className="center-img">
                                    <img src={imgSrc} className="card-img" />
                                </div>
                                {poke.name}
                            </div>
                        </Col>
                    )
                })
            }
        </Row>
    </Container>
    );
}
