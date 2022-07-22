import React from "react";
import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div class="a-left">
        <div class="a-card bg"></div>
        <div class="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            class="a-img"
          />
        </div>
      </div>
      <div class="a-right">
        <h1 class="a-title">About me</h1>
        <p class="a-sub">This is a long sub title</p>
        <p class="a-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo adipisci
          nisi aspernatur voluptate laborum dolor ducimus, at eveniet eligendi
          placeat quam, quia hic doloribus corporis facere sed harum quisquam
          ut!
        </p>
        <div class="a-award">
          <img src={Award} alt="" class="a-award-img" />
          <div class="a-award-texts">
            <h4 class="award-title">Award heading test</h4>
            <p class="a-award-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              labore culpa esse
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
