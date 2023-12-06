// MembersCard.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Container, Image, LinkedinButton} from "./styled";

const MembersCard = ({ name, description, linkedinLink, imageSrc }) => {
  return (
    <Container>
      <Image style={{backgroundImage: `url(${imageSrc})`  }}></Image>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="medias">
        <LinkedinButton href={linkedinLink}>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </LinkedinButton>
      </div>
    </Container>
  );
};

export default MembersCard;
