import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-gray-100/75 shadow-lg hover:shadow-2xl gap-5 border-2 rounded-2xl border-white transition-transform transform hover:scale-105">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img
          src={item?.image_url}
          alt={item?.title}
          className="block w-full h-full object-cover rounded-xl shadow-md"
        />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <span className="text-sm text-cyan-700 font-medium">
            {item?.publisher}
          </span>
          <h3 className="font-bold text-2xl truncate text-black mt-2">
            {item?.title}
          </h3>
        </div>
        <div className="mt-4">
          <Link
            to={`/recipe-item/${item?.id}`}
            className="text-sm p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-700 hover:to-indigo-900 text-white transition"
          >
            Recipe Details
          </Link>
        </div>
      </div>
    </div>
  );
}
