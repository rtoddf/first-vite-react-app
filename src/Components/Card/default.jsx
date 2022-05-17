import person from './data.json';
import './default.scss';

function Card() {
    return (
        <div className="card">
            <figure>
                <img className="round" src={person.image} alt={person.name} />
            </figure>

            <h4>{person.name}</h4>
            <h5>{person.show}</h5>

            {person.social.map((iconInfo, id) => {
                return (
                    <a key={id} href={iconInfo.link} target="_blank">
                        <i className={`${iconInfo.icon} rotate`}></i>
                    </a>
                )
            })}
        </div>
    );
}

export default Card;
