const showMenu = () => {
  const menu = document.querySelector(".navigation");
  menu.classList.toggle("active");
};

const hideGrid = () => {
  const grid = document.querySelectorAll(".card");
  for (let i = 0; i < grid.length; i++) {
    grid[i].classList.toggle("active");
  }
};

const changeColor = () => {
  const sideBar = document.querySelector(".box");
  sideBar.classList.toggle("active");
};

const helloWorld = () => {
    const helloWorld = document.querySelector('.title')
    helloWorld.classList.toggle("active")
};
