import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 bg-gradient-to-r from-blue-500 to-purple-500">
      <h2 className="text-3xl font-extrabold text-white">
        <NavLink to={"/"}>FoodRecipe</NavLink>
      </h2>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Search for recipes..."
          className="bg-white p-3 px-4 rounded-full outline-none lg:w-96 focus:shadow-outline-blue"
        />
        <button
          type="submit"
          className="ml-3 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
        >
          Search
        </button>
      </form>
      <ul className="flex gap-5 text-white">
        <li>
          <NavLink to={"/"} className="hover:text-gray-300 duration-300">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/favorites"} className="hover:text-gray-300 duration-300">
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
