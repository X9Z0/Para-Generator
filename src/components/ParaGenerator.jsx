import React from "react";
import { useState } from "react";
import "./ParaGenerator.css";

// List of random words
const randomWords = [
  "apple",
  "banana",
  "orange",
  "grape",
  "strawberry",
  "kiwi",
  "watermelon",
  "pineapple",
  "blueberry",
  "mango",
  "peach",
  "pear",
  "cherry",
  "plum",
  "lemon",
  "lime",
  "coconut",
  "fig",
  "pomegranate",
  "apricot",
  "raspberry",
  "blackberry",
  "cranberry",
  "tangerine",
  "cantaloupe",
  "melon",
  "papaya",
  "passionfruit",
  "dragonfruit",
  "guava",
  "lychee",
  "nectarine",
  "persimmon",
  "avocado",
  "grapefruit",
  "kumquat",
  "date",
  "elderberry",
  "boysenberry",
  "mulberry",
  "honeydew",
  "rhubarb",
  "starfruit",
  "tamarind",
  "quince",
  "plantain",
  "jackfruit",
  "cucumber",
  "zucchini",
  "eggplant",
  "carrot",
  "tomato",
  "potato",
  "sweet potato",
  "bell pepper",
  "jalapeno",
  "chili pepper",
  "onion",
  "garlic",
  "ginger",
  "broccoli",
  "cauliflower",
  "cabbage",
  "lettuce",
  "spinach",
  "kale",
  "arugula",
  "parsley",
  "cilantro",
  "basil",
  "oregano",
  "thyme",
  "rosemary",
  "mint",
  "dill",
  "chives",
  "bay leaf",
  "sage",
  "cinnamon",
  "nutmeg",
  "cloves",
  "allspice",
  "cardamom",
  "coriander",
  "cumin",
  "paprika",
  "turmeric",
  "mustard",
  "horseradish",
  "wasabi",
  "vanilla",
  "chocolate",
  "coffee",
  "tea",
  "lemonade",
  "soda",
  "juice",
  "water",
];

const getRandomWord = () => {
  return randomWords[Math.floor(Math.random() * randomWords.length)];
};

const ParaGenerator = () => {
  const [para, setPara] = useState("");
  const [numberOfWords, setNumberOfWords] = useState(0);

  const generatePara = (numberOfWords) => {
    let para = "";
    for (let i = 0; i < numberOfWords; i++) {
      para += getRandomWord() + " ";
    }
    setPara(para);
  };

  const handelChange = (e) => {
    setNumberOfWords(e.target.value);
  };

  return (
    <>
      <div className="main-body">
        <div className="container">
          <div className="para-heading">
            <h1 className="heading">Para Generator</h1>
          </div>
          <div className="inputbox">
            <input
              placeholder="Enter the number of words"
              type="number"
              className="input-box"
              value={numberOfWords}
              onChange={handelChange}
            />
            <button
              className="generate"
              onClick={() => {
                generatePara(numberOfWords);
              }}
            >
              Generate
            </button>
          </div>
        </div>
        <div className="para-container">
          <div className="para">
            <p>{para}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParaGenerator;
