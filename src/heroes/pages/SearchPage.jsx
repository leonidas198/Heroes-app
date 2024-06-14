import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components/HeroCard';
import { getHeroesByName } from '../helpers/getHeroesByName';


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );
  
  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const onSearchSubmit = ( event ) => {
    event.preventDefault();
    //if ( searchText.trim().length <= 1 ) return;
    
    navigate(`?q=${ searchText }`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text" 
              placeholder="Search hero"
              className="form-control"
              name="searchText"
              autoComplete="off" 
              value={ searchText }
              onChange={ onInputChange } 
            />

            <button className="btn btn-success mt-3">
              Search Init
            </button>

          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary animate__animated animate__fadeInRight"
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search Hero
          </div>

          <div className="alert alert-danger animate__animated animate__fadeInRight"
            style={{ display: showError ? '' : 'none' }}
          >
            Whithout results <b>{ q }</b>
          </div>

          {
            heroes.map( (hero) => (
              <HeroCard 
                key={ hero.id }
                { ...hero }
              />
            )  )
          }

          {/* <HeroCard/> */}

        </div>

      </div>

      

    </>
  )
}