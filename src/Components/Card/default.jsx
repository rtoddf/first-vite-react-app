import PropTypes from 'prop-types';
import { CardStyled } from './Card.styled';

function Card({ image, name, show, social}) {
  return (
    <CardStyled>
      <figure>
        <img className="round" src={image} alt={name} />
      </figure>

      <h2>{name}</h2>
      <h3>{show}</h3>

      {/* {social && social.map((iconInfo, id) => {
        return (
          <a key={id} href={iconInfo.link} target="_blank">
            <i className={`${iconInfo.icon} rotate`}></i>
          </a>
        )
      })} */}
    </CardStyled>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  show: PropTypes.string,
  social: PropTypes.array,
}

export default Card;
