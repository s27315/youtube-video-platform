import { categories } from "../data/categories";

const CategoryPills = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="category-pills">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "active-pill" : ""}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryPills;