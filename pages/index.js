import React, { useEffect, useState } from 'react';

const Main = () => {
  const [film, setFilm] = useState([]);
  const [person, setPerson] = useState([]);
  const [specie, setSpecie] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [starship, setStarship] = useState([]);

  const getFilms = (id) => {
    fetch(`https://swapi.co/api/films/${id}/`)
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('Bad response from server');
        }
        return res.json();
      })
      .then((body) => {
        setFilm(body);
      });
  };

  const getPeople = (id) => {
    fetch(`https://swapi.co/api/people/${id}/`)
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('Bad response from server');
        }
        return res.json();
      })
      .then((body) => {
        setPerson(body);
      });
  };

  const getSpecies = (id) => {
    fetch(`https://swapi.co/api/species/${id}/`)
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('Bad response from server');
        }
        return res.json();
      })
      .then((s) => {
        fetch(s.homeworld)
          .then((res) => {
            if (res.status >= 400) {
              throw new Error('Bad response from server');
            }
            return res.json();
          })
          .then((p) => {
            const body = s;
            body.homeworld = p;
            setSpecie(body);
          });
      });
  };

  const getPlanets = (id) => {
    fetch(`https://swapi.co/api/planets/${id}/`)
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('Bad response from server');
        }
        return res.json();
      })
      .then((body) => {
        setPlanet(body);
      });
  };

  const getStarships = (id) => {
    fetch('https://swapi.co/api/starships/?page=1')
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('Bad response from server');
        }
        return res.json();
      })
      .then((body) => {
        setStarship(body.results[id]);
      });
  };

  const randomHistory = () => {
    const randomFilm = Math.floor(Math.random() * 7) + 1;
    const randomPerson = Math.floor(Math.random() * 87) + 1;
    const randomSpecies = Math.floor(Math.random() * 37) + 1;
    const randomPlanets = Math.floor(Math.random() * 61) + 1;
    const randomStarships = Math.floor(Math.random() * 10) + 0;
    getPeople(randomPerson);
    getFilms(randomFilm);
    getSpecies(randomSpecies);
    getPlanets(randomPlanets);
    getStarships(randomStarships);
  };

  useEffect(() => {
    randomHistory();
  }, 1);

  return (
    <main>
      <title>Random Wars</title>
      <div className="container mt-5">
        <div className="d-flex justify-content-center mb-5">
          <button type="button" className="btn btn-primary" onClick={randomHistory}>
            Criar nova história
          </button>
        </div>
        <h1>{film.title}</h1>
        <h4>{film.director}</h4>
        <p>
          Once upon a time there was a&nbsp;
          {person.gender === 'male' ? 'man' : 'woman'}
          &nbsp;named
          {' '}
          {person.name}
, who live on a&nbsp;
          {planet.climate}
          {' '}
planet called&nbsp;
          {planet.name}
.
        </p>
        <p>
          Everyday
          {' '}
          {person.gender === 'male' ? 'he' : 'she'}
          {' '}
piloted&nbsp;
          {person.gender === 'male' ? 'his' : 'her'}
          {' '}
ship called&nbsp;
          {starship.name}
          {' '}
manufactured by&nbsp;
          {starship.manufacturer}
          {' '}
where together with the crew of&nbsp;
          {starship.crew}
          {' '}
people they would break the universe.
        </p>
        <p>
          One day,
          {' '}
          {person.gender === 'male' ? 'he' : 'she'}
          {' '}
discovered a species called
          {' '}
          {specie.name}
,
          {' '}
          {specie.skin_colors}
          -skinned and
          {' '}
          {specie.eye_colors}
          -eyed.
        </p>
        <p>
          Because of that,
          {' '}
          {person.gender === 'male' ? 'he' : 'she'}
          {' '}
created a pool of friendships with the
          {' '}
          {specie.name}
          {' '}
community.
        </p>
        <p>
          Because of this,
          {' '}
          {person.gender === 'male' ? 'he' : 'she'}
          {' '}
has now gained a new home on the
          {' '}
          {specie.name}
          {' '}
          planet.
        </p>
        <p>Until finally, they lived the rest of their lives as allies.</p>
      </div>
    </main>
    // Era uma vez _________.
    // 'Todos os dias ___________.
    // Um certo dia _________.
    // Por causa disso, ________.
    // Por causa disso___________.
    // Até que finalmente __________.
  );
};

export default Main;
