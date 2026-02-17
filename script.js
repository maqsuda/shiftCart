const loadCategory = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayCategory(data));
};
const displayCategory = (products) => {
  const filtered = products.filter((product) => product.rating.rate <= 4);
  const firstThree = filtered.slice(0, 3);
  //   console.log(firstThree);
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  for (let data of firstThree) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
<div class=" bg-base-100 shadow-sm mb-5">
                    <figure>
                        <img class="h-[250px] w-[250px] px-5" src=${data.image}
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

loadCategory();
