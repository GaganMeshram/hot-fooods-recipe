import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import {AiOutlineHome} from 'react-icons/ai'
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div className="container d-flex mt-3 justify-content-center justify-content-around">
      <NavLink
        className="text-center text-decoration-none text-info "
        to={"/"}
      >
        <h2>
          <AiOutlineHome />
        </h2>
        <h5>Home</h5>
      </NavLink>
      <NavLink
        className="text-center text-decoration-none text-danger "
        to={"cuisine/Italian"}
      >
        <h2>
          <FaPizzaSlice />
        </h2>
        <h5>Italian</h5>
      </NavLink>
      <NavLink
        className="text-center text-decoration-none text-primary "
        to={"cuisine/Chinese"}
      >
        <h2>
          <GiChopsticks />
        </h2>
        <h5>Chinese</h5>
      </NavLink>
      <NavLink
        className="text-center text-decoration-none text-dark"
        to={"cuisine/American"}
      >
        <h2>
          <FaHamburger className="" />
        </h2>
        <h5>American</h5>
      </NavLink>
      <NavLink
        className="text-center text-decoration-none text-success"
        to={"cuisine/Thai"}
      >
        <h2>
          <GiNoodles />
        </h2>
        <h5>Thai food</h5>
      </NavLink>
    </div>
  );
};

export default Category;
