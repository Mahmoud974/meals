import React, { useState } from "react";
import { ImYoutube2 } from "react-icons/im";
import { CgList } from "react-icons/cg";

const Cards = ({ meal, index }) => {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    }
  }

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    }
  }

  return (
    <div
      key={meal.idMeal}
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
      className="block "
    >
      {console.log(meal)}
      <div
        className="card w-96 ml-4 mb-4 shadow-xl"
        style={{ background: "#fff" }}
      >
        <div className="card-body h-12">
          <div
            className="flex items-center w-full -mt-6 text-center"
            style={{ color: "#f97878" }}
          >
            <p>{meal.strMeal.slice(0, 10)}</p>
            <p className="font-bold">{meal.strArea}</p>
            <p className="text-6xl ml-2">
              <a href={meal.strYoutube}>
                <ImYoutube2 />
              </a>
            </p>
            <a href="#my-modal-2" className="text-2xl">
              <CgList />
            </a>
          </div>
        </div>
        <figure className="h-24 ">
          <img src={meal.strMealThumb} alt="Shoes" />
        </figure>
      </div>
      <div>
        <div className="flex justify-center mx-auto text-center">
          <div tabIndex={0} className="collapse">
            <h2 className="collapse-title text-xl font-medium p-0 flex items-center -mt-4">
              {meal.strMeal.slice(0, 10)}
            </h2>
          </div>
        </div>
      </div>
      <div className="modal" id="my-modal-2">
        <div className="modal-box">
          <img
            src={meal.strMealThumb}
            alt="recipe"
            className="rounded-xl w-full "
          />

          <ul>
            <li className="py-4">{ingredients}</li>
          </ul>
          <div className="modal-action">
            <a href="#closed" className="btn">
              closed
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
