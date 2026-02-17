const loadCategory = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data));
};
const displayCategory = (data) => {
  console.log(data);
};

loadCategory();
