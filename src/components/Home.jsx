import React from 'react';

import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';
import img5 from '../img/5.png';
import img6 from '../img/6.jpeg';
import img7 from '../img/7.jpeg';
import img8 from '../img/8.jpeg';
import img9 from '../img/9.png';
import img10 from '../img/10.png';
import img11 from '../img/11.jpeg';
import img12 from '../img/12.png';
import img13 from '../img/13.jpeg';
import img14 from '../img/14.jpeg';
import img15 from '../img/15.png';
import img16 from '../img/16.png';
import img17 from '../img/17.jpeg';
import img18 from '../img/18.png';
import img19 from '../img/19.png';
import img20 from '../img/20.jpeg';
import img21 from '../img/21.png';

const sections = [
  {
    id: 1,
    images: [img1, img2],
    text: "Minecraft offers breathtaking landscapes and endless creativity. From building cozy homes to crafting beautiful animal farms, it’s a world where your imagination comes to life.",
  },
  {
    id: 2,
    images: [img3, img4, img5],
    text: "Some creations bring a smile — like our underground White House, a vibrant pink bedroom, and a quirky beach near Oliwier’s house. All enhanced by hilarious mods that make every adventure unique.",
  },
  {
    id: 3,
    images: [img6, img7],
    text: "Adventure is thrilling but beware — friends can push you into lava during parkour challenges! The journey is full of surprises and a bit of friendly rivalry.",
  },
  {
    id: 4,
    images: [img8],
    text: "Our Minecraft world has a cemetery dedicated to those who’ve changed or perished, especially from the antics of 'krystek_to_ziom'. It’s a quirky yet meaningful tribute.",
  },
  {
    id: 5,
    images: [img9, img10],
    text: "Building mishaps happen often, especially when wielding a wooden axe by mistake. These funny fails add charm and keep the experience genuine and fun.",
  },
  {
    id: 6,
    images: [img11, img12],
    text: "Christian-themed mods bring an extra layer of humor and creativity — from blessings to biblical quotes, they add a unique twist to our Minecraft adventures.",
  },
  {
    id: 7,
    images: [img13, img14, img15],
    text: "Animals are vital members of our world. Their well-being is essential, and we make sure to respect and protect them always.",
  },
  {
    id: 8,
    images: [img16, img17],
    text: "Glitched villagers are just as important as animals. They bring an unpredictable charm and deserve protection from harm.",
  },
  {
    id: 9,
    images: [img18, img19, img20],
    text: "Minecraft unites a diverse group of quirky players who share laughs, adventures, and creative chaos — making every moment memorable.",
  },
  {
    id: 10,
    images: [img21],
    text: "Our world features churches, cemeteries, and even Saint Francis, showing how Minecraft can beautifully blend faith and creativity.",
  },
];

const Home = () => {
  return (
    <main className="home">
      <section className="home__intro">
        <h1 className="home__title">Why Play Minecraft?</h1>
        <p className="home__description">
          Minecraft is more than a game it’s a creative universe full of endless possibilities. Build, explore, and connect with a vibrant community around the world.
        </p>
      </section>

      {sections.map((section) => (
        <section key={section.id} className="home__section">
          <div className="home__wrapper">
            <div className="home__images">
              {section.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`Minecraft scene ${section.id}-${idx}`}
                  className="home__image"
                />
              ))}
            </div>
            <div className="home__text">
              <p>{section.text}</p>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Home;
