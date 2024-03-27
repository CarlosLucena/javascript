const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const populateFunc = (item, index) => `<p>Item ${index + 1}: ${item}</p>`
const breakfastMenuItemsHTML = breakfastMenu
  .map(populateFunc)
  .join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
const populateMainMenuFunc = (item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;}

mainCourseMenu.forEach(populateMainMenuFunc);
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
//const populateDessertFunc = 
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

