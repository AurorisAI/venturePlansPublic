import * as React from "react";
import { graphql } from "gatsby";
import { Card } from "react-bootstrap";
import _ from "lodash";
import ratingStar from "../images/rating-star.png";
import editReview from "../images/edit-review-icon.png";
import googleLogo from "../images/google-small-icon.png";

const ClientCard = ({ client }) => {
  const { source, rating, body, sourceImage } = client;
  let clientRating = [];
  _.times(rating, () => {
    clientRating.push(ratingStar);
  });
  return (
    <Card className="clientCard">
      <img src={sourceImage} className="avatarCorner" alt="" />
      <Card.Body>
        <div>
          <p>{body.length > 250 ? body.slice(0, 249) + "..." : body}</p>
        </div>
        <div className="mt-auto">
          <div style={{ marginBottom: "5px" }}>
            {clientRating.map((star, index) => (
              <img key={index} src={star} />
            ))}
          </div>
          <div className="d-flex">
            <div className="mt-auto p-1">{source}</div>
            <div className="ml-auto">
              <button className="client-card-icon-buttons">
                <img src={googleLogo} />
              </button>
              <button className="client-card-icon-buttons">
                <img src={editReview} />
              </button>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
export const query = graphql`
  fragment ClientInformation on GoogleReview {
    id
    date
    source
    rating
    body
    sourceImage
  }
`;

export default ClientCard;
