import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  /**
   * Challenge:
   * 1. Set up the text inputs to save to
   *    the `topText` and `bottomText` state variables.
   * 2. Replace the hard-coded text on the image with
   *    the text being saved to state.
   */

  const [meme, setMeme] = React.useState({
<<<<<<< HEAD
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
=======
    topText: "",
    bottomText: "",
>>>>>>> e5fc7c22ffe1e0dd2bccb35a29ffab6ffe8d7f65
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

<<<<<<< HEAD
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  console.log(meme);
  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        />
=======
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
>>>>>>> e5fc7c22ffe1e0dd2bccb35a29ffab6ffe8d7f65
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
<<<<<<< HEAD
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
=======
        <h2 className="meme--text top">One does not simply</h2>
        <h2 className="meme--text bottom">Walk into Mordor</h2>
>>>>>>> e5fc7c22ffe1e0dd2bccb35a29ffab6ffe8d7f65
      </div>
    </main>
  );
}
