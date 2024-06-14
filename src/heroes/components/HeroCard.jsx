import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {

    if ( alter_ego === characters ) return ( <></> );
        return  ( <p >{ characters }</p> ) 
   

}


export const HeroCard = ({ 
    id,
    superhero, 
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `/heroes/${ id }.jpg`;

    

  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">

            <div className="row no-gutters">
                <div className="col-4">
                    <img src={ heroImageUrl } alt={ superhero } className="card-img" />
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title" >{ superhero }</h5>
                        <p className="card-text">{ alter_ego }</p>

                        {/* {
                            ( alter_ego !== characters ) && (<p >{ characters }</p>)
                        } */}


                        <CharactersByHero characters={ characters } alter_ego={ alter_ego }/>

                        <p className="card-text">
                            <small className="text-muted">{ first_appearance }</small>
                        </p>

                        <Link 
                            className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"   
                            to={ `/hero/${ id }` }
                        >
                            Mas info...
                        </Link>

                        
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

/* HeroCard.propTypes = {
    id: PropTypes.string.isrequired,
    superhero: PropTypes.string.isrequired, 
    publisher: PropTypes.string.isrequired, 
    alter_ego: PropTypes.string.isrequired,
    first_appearance: PropTypes.string.isrequired,
    characters: PropTypes.string.isrequired,
}
 */