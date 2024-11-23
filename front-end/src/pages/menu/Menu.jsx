import React, { useEffect, useState } from "react";
import { FaFilter, FaStar } from "react-icons/fa"; // Import star icon for rating
import Card from "../../components/Card";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [fillteredItems, setFillteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/menu");
        const data = await response.json();
        setMenu(data);
        setFillteredItems(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const fillterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setFillteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const showAll = () => {
    setFillteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  const handelOptions = (option) => {
    setSortOption(option);
    let sortedItems = [...fillteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Low-to-High":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "High-to-Low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFillteredItems(sortedItems);
    setCurrentPage(1);
  };

  // Pagination logic
  const indexOfLastItems = currentPage * itemsPerPage;
  const indexOfFirstItems = indexOfLastItems - itemsPerPage;
  const currentItems = fillteredItems.slice(indexOfFirstItems, indexOfLastItems);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle rating submission
  const handleRating = async (itemId, rating) => {
    try {
      const response = await fetch(`http://localhost:3001/menu/${itemId}/rate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating }),
      });
      const updatedItem = await response.json();
      // Update the menu state with the new ratings
      setMenu(menu.map((item) => (item._id === updatedItem._id ? updatedItem : item)));
      setFillteredItems(fillteredItems.map((item) => (item._id === updatedItem._id ? updatedItem : item)));
    } catch (error) {
      console.log("Error rating item:", error);
    }
  };

  return (
    <div>
      <div className="bg-white">
        {/* Menu banner */}
        <div className="py-48 flex flex-col justify-center items-center gap-8">
          <div className="text-center space-y-7 px-8">
            <h2 className="md:text-5xl text-4xl text-black font-bold md:leading-snug leading-snug">
              For the Love of Delicious
              <span className="text-gamboge"> Food</span>
            </h2>
            <p className="text-xl text-[#4A4A4A] md:w-8/9 mx-auto">
              Come with family & feel the joy of mouthwatering food as Geek Salad, Lasagne, Butternut Pumkin, Tokusen Wagyu, Olivas Rellenas and more for a moderate cost.
            </p>
          </div>
        </div>

        {/* Menu shop section */}
        <div className="section-container object-cover">
          <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
            {/* Category buttons and sorting options */}
            <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap text-secondary">
              <button onClick={showAll} className={selectedCategory === "all" ? "active" : ""}>
                All
              </button>
              <button onClick={() => fillterItems("rice")} className={selectedCategory === "rice" ? "active" : ""}>Rice</button>
              <button onClick={() => fillterItems("kottu")} className={selectedCategory === "kottu" ? "active" : ""}>Kottu</button>
              <button onClick={() => fillterItems("salad")} className={selectedCategory === "salad" ? "active" : ""}>Salad</button>
              <button onClick={() => fillterItems("pizza")} className={selectedCategory === "pizza" ? "active" : ""}>Pizza</button>
              <button onClick={() => fillterItems("soup")} className={selectedCategory === "soup" ? "active" : ""}>Soups</button>
              <button onClick={() => fillterItems("dessert")} className={selectedCategory === "dessert" ? "active" : ""}>Desserts</button>
              <button onClick={() => fillterItems("drinks")} className={selectedCategory === "drinks" ? "active" : ""}>Drinks</button>
            </div>

            {/* Sorting options */}
            <div className="flex justify-end mb-4 rounded-sm">
              <div className="bg-gamboge p-2">
                <FaFilter className="h-4 w-4 text-white" />
              </div>
              <select
                name="sort"
                id="sort"
                onChange={(e) => handelOptions(e.target.value)}
                value={sortOption}
                className="bg-gamboge text-white px-2 py-1 rounded-sm"
              >
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="Low-to-High">Low to High</option>
                <option value="High-to-Low">High to Low</option>
              </select>
            </div>
          </div>

          {/* Product cards */}
          <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5">
            {currentItems.map((item) => (
              <Card key={item._id} item={item}>
                {/* Displaying rating */}
                <div className="flex items-center">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      className={`cursor-pointer ${item.ratings && item.ratings.length > 0 && index < item.ratings.reduce((a, b) => a + b, 0) / item.ratings.length ? 'text-yellow-500' : 'text-gray-400'}`}
                      onClick={() => handleRating(item._id, index + 1)}
                    />
                  ))}
                  <span className="ml-2">
                    {item.ratings && item.ratings.length > 0
                      ? (item.ratings.reduce((a, b) => a + b, 0) / item.ratings.length).toFixed(1)
                      : "No rating yet"}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center my-8">
          {Array.from({
            length: Math.ceil(fillteredItems.length / itemsPerPage),
          }).map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? "bg-gamboge text-white" : "bg-gray-200 text-secondary"}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
