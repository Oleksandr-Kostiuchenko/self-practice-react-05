import style from "./About.module.css";

import { NavLink, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <h2>Abot section:</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti enim
        aliquam optio natus iusto veritatis voluptatum recusandae minus
        voluptates quia! Vel sapiente obcaecati atque quasi molestias, eligendi
        blanditiis ducimus consectetur?
      </p>
      <ul className={style.materialList}>
        <li>
          <NavLink to="mission">Read about our misson</NavLink>
        </li>
        <li>
          <NavLink to="team">Our team:</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default About;
