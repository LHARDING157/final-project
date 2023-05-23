import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [random, setRandom] = useState({});
  const [random2, setRandom2] = useState({});
  const [random3, setRandom3] = useState({});

  useEffect(() => {
    getRandom();
    getRandom2();
    getRandom3();
  }, []);

  async function getRandom() {
    const API = `https://www.themealdb.com/api/json/v1/1/random.php`;
    const res = await axios.get(API);
    setRandom(res.data.meals[0]);
  }

  async function getRandom2() {
    const API = `https://www.themealdb.com/api/json/v1/1/random.php`;
    const res = await axios.get(API);
    setRandom2(res.data.meals[0]);
  }

  async function getRandom3() {
    const API = `https://www.themealdb.com/api/json/v1/1/random.php`;
    const res = await axios.get(API);
    setRandom3(res.data.meals[0]);
  }

  return (
    <div className="home-container">
      <h3>Welcome</h3>
      <div className="home-img">
        <img src={random.strMealThumb} alt="" />
        <img src={random2.strMealThumb} alt="" />
        <img src={random3.strMealThumb} alt="" />
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam at
        porro qui adipisci, tenetur cum in, beatae labore ipsa quas commodi
        facere, asperiores ducimus maiores accusantium unde maxime provident
        numquam dignissimos sequi dolores. Beatae, voluptate qui recusandae
        excepturi odit soluta doloremque in quia obcaecati repellendus, minima
        eum vitae, quod perspiciatis officia molestiae dicta fugit ullam. Atque
        porro nobis ducimus similique labore, saepe deleniti laboriosam. Nam
        error vel architecto harum, soluta pariatur ipsam enim amet dicta
        accusamus, praesentium suscipit explicabo nostrum?
      </p>
    </div>
  );
}
