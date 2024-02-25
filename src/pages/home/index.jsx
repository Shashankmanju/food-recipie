import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div className="text-center my-8 text-gray-600">Loading... Please wait!</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10 items-stretch">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div className="text-center bg-gray-100 p-8 rounded-lg hover:bg-gray-200 transition-transform transform hover:scale-105">
          <p className="lg:text-4xl text-xl text-black font-extrabold mb-4">
            Nothing to show. Please search something.
          </p>
          <p className="text-lg text-gray-600">
            Try refining your search criteria or explore more recipes!
          </p>
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Explore Recipes
          </button>
          <p className="text-sm text-gray-500 mt-4">
            © Shashank M @2024. All rights reserved.
          </p>
        </div>
      )}
    </div>
  );
}
