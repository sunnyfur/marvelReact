import React from "react";

import "./cardViewer.css";

function CardHero(props) {
  return (
    <div className="card">
      <h2 className="card__header">{props.hero.name}</h2>
      <div className="card__body">
        <p>
          <strong>Вселенная: </strong>
          {props.hero.universe}
        </p>
        <p>
          <strong>Альтер эго: </strong>
          {props.hero.ego}
        </p>

        <p>
          <strong>Род деятельности: </strong>
          {props.hero.description}
        </p>
        <p>
          <strong>Друзья: </strong>
          {props.hero.friends}
        </p>
        <p>
          <strong>Суперсилы: </strong>
          {props.hero.superPower}
        </p>
      </div>

      <div className="card__footer">
        <img className="card__img" src={props.hero.picture}></img>
      </div>
    </div>
  );
}

export default CardHero;
