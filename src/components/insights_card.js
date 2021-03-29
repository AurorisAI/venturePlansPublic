import * as React from "react";

import Card from "react-bootstrap/Card";

import { FiBookmark } from 'react-icons/fi';

const InsightsCard = (props) => (
    <Card style={{ width: "18rem",boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.4)"}} className="card border-0">
      <Card.Img variant="top" src={props.image} style={{boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.4)"}}/>
      <Card.Body style={{height:'400px', position:'relative'}}>
        <Card.Title className='blueText' style={{fontWeight: 'bold'}}>{props.blueText}</Card.Title>
        <Card.Title style={{fontWeight: 'bold'}}>
          {props.boldText}
        </Card.Title>
        <Card.Title>
          {props.text}
        </Card.Title>
        <Card.Text className='blueText' style={{position:'absolute', bottom:'20px', fontSize:'20px'}}>
            read more
        </Card.Text>
        <FiBookmark style={{position:'absolute', bottom:'40px', right:'10px', fontSize:'20px'}}/>
      </Card.Body>
    </Card>
);
export default InsightsCard;
