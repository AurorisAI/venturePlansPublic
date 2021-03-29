import * as React from "react";
import Card from "react-bootstrap/Card";

const CoreValuesCard = (props) => (
  <Card className="card border-0">
    <Card.Header className="cardHeader" style={{backgroundColor: "#00a1f1"}}>
      <div className="row">
        <div className="col-8">
          <h5 className='cardTitle'>
            {props.cardTitle}
          </h5>
        </div>

        <div className="col-4 topPadding20px">
          <h3 className='cardNumber'>
            {props.cardNumber}
          </h3>
        </div>
      </div>
    </Card.Header>
    <div className='card-body cardTextDiv'>
      <Card.Text className='card-text' style={{color:"#00000"}}>{props.cardText}</Card.Text>
    </div>
  </Card>
);

export default CoreValuesCard;
