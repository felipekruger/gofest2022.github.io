import { Button, Container, Row } from "react-bootstrap";
import { IUnownList } from "../models/interfaces";

export const UnownList: React.FC<IUnownList> = ({unownSet, toggleCatchUnown}) => {
    return (<>
         <Container fluid className="px-5">
                {unownSet.map((unown)=>{
                    return (
                        <Row onClick={ () => toggleCatchUnown(unown.letter) } className="my-3">
                            <Button variant={unown.caught ? "success" : "danger"}>{unown.letter}</Button>
                        </Row>

                    );
                })}
         </Container>
    </>)
}