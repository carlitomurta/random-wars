import React, { useEffect, useState } from 'react';

const Main = () => {
  const [film, setFilm] = useState([]);
  const [person, setPerson] = useState([]);
  const [specie, setSpecie] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [vehicle, setVehicle] = useState([]);
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
      .then((body) => {
        setSpecie(body);
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

  const getVehicles = (id) => {
    fetch('https://swapi.co/api/vehicles/?page=1')
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('Bad response from server');
        }
        return res.json();
      })
      .then((body) => {
        setVehicle(body[id]);
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
        setStarship(body[id]);
      });
  };

  const randomHistory = () => {
    const randomFilm = Math.floor(Math.random() * 7) + 1;
    const randomPerson = Math.floor(Math.random() * 87) + 1;
    const randomSpecies = Math.floor(Math.random() * 37) + 1;
    const randomPlanets = Math.floor(Math.random() * 61) + 1;
    const randomVehicles = Math.floor(Math.random() * 8) + 1;
    const randomStarships = Math.floor(Math.random() * 15) + 1;
    getPeople(randomPerson);
    getFilms(randomFilm);
    getSpecies(randomSpecies);
    getPlanets(randomPlanets);
    getVehicles(randomVehicles);
    getStarships(randomStarships);
  };

  useEffect(() => {
    randomHistory();
  }, 1);

  return (
    <main>
      <title>Random Wars</title>
      <div className="container">
        <h1>{film.title}</h1>
        <h4>{film.director}</h4>
        <p>
          Once upon a time&nbsp;a&nbsp;
          {person.gender === 'male' ? 'man' : 'woman'}
          &nbsp;called&nbsp;
          {person.name}
          .Every day&nbsp;
          {person.gender === 'male' ? 'he' : 'she'}
        </p>
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
