const loadProduct = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayProduct(data));
};

const loadCategory = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data));
};

const loadProductCategoryWise = () => {
  fetch("https://fakestoreapi.com/products/categories/${category}")
    .then((res) => res.json())
    .then((data) => displayCategory(data));
};



const displayCategory = (categories) => {
  for (let category of categories) {
    const allProductContent = document.getElementById("allProduct-content");
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = "";
    btnDiv.innerHTML = `
     <div class="mb-5">
     <button class="btn btn-outline rounded-full">${category}</button>
     </div>
    `;

    allProductContent.append(btnDiv);
  }
};

const displayProduct = (products) => {
  const filtered = products.filter((product) => product.rating.rate <= 4);
  const firstThree = filtered.slice(0, 3);
  //   console.log(firstThree);
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  for (let data of firstThree) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
<div class=" bg-base-100 shadow-sm mb-5">
                    <figure class="bg-gray-100 flex justify-center items-center">
                        <img class="h-[250px] w-[250px] px-5 items-center" src=${data.image}
                            alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <div class="card-title flex justify-between ">
                          <div class="text-blue-700 bg-blue-50 rounded-full py-1 px-2"> ${data.category}</div>

                            <div class=""><i class="fa-solid fa-star text-yellow-500 mr-2"></i>${data.rating.rate}(${data.rating.count})</div>
                        </div>
                        <p>${data.title}
                        </p>
                        <p class="font-bold">$${data.price}</p>
                        <div class="flex justify-between items-center gap-5">
                            <div class="btn btn-outline hover:bg-blue-700 hover:text-white px-8"><i class="fa-regular fa-eye"></i>Details</div>
                            <div class="btn btn-outline hover:bg-blue-700 hover:text-white px-8"><i class="fa-solid fa-cart-plus"></i>Add</div>
                        </div>
                    </div>
                </div>
`;
    levelContainer.append(btnDiv);
  }
};

const hideAndShow = () => {
  const bannerContainer = document
    .getElementById("banner-container")
    .classList.add("hidden");

  const chooseContainer = document
    .getElementById("choose-container")
    .classList.add("hidden");

  const trendingContainer = document
    .getElementById("trending-container")
    .classList.add("hidden");
};

const displayAllCategory = () => {
  hideAndShow();
  const btnHome = document.getElementById("btn-home");
  btnHome.classList.remove("text-blue-500", "font-bold");

  const btnProduct = document.getElementById("btn-product");
  btnProduct.classList.add("text-blue-500", "font-bold");

  const allProductContainer = document.getElementById("allProduct-container");
  allProductContainer.removeAttribute("hidden");
  // .removeAttribute("hidden");

  loadCategory();
};

loadProduct();
// loadCategory();
