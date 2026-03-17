import { categories } from "../data/categories";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="sidebar">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "active" : ""}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;