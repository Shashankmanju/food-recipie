import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => (
          <RecipeItem key={item.id} item={item} isFavoritePage />
        ))
      ) : (
        <div className="text-center">
          <p className="lg:text-4xl text-xl text-black font-extrabold mb-4">
            Nothing is added in favorites.
          </p>
          <p className="text-lg text-gray-600">
            Explore recipes and add your favorites!
          </p>
        </div>
      )}
    </div>
  );
}
