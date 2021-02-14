//fetch data
fetch("https://kea-alt-del.dk/t7/api/categories")
  //loop through
  .then((res) => res.json())
  .then(gotData);

function gotData(data) {
  //console.log(data);
  data.forEach(showCategory);
}

function showCategory(category) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  //change content
  copy.querySelector("h2").textContent = category.category;
  copy.querySelector(
    "a"
  ).href = `articleGallery.html?category=${category.category}`;
  const topParent = document.querySelector(".categoryList");
  const elemParent = topParent.querySelector("ol");
  elemParent.appendChild(copy);
}
//grab clone change append
