const breakfastMenu = ['Pancakes - $12.00', 'Eggs Benedict - $22.99', 'Oatmeal - $21.99', 'Frittata - $15'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const joinFunc = (acc, item) => acc + item
const buildItemFunc = (item, index) => {return `<p>Item ${index + 1}: ${item}</p>`}
const listItemFunc = (arr) => arr
  .map(buildItemFunc)
  .reduce(joinFunc, '')

document.getElementById('breakfastMenuItems').innerHTML = listItemFunc(breakfastMenu);
document.getElementById('maincourseMenuItems').innerHTML = listItemFunc(mainCourseMenu);
document.getElementById('dessertMenuItems').innerHTML = listItemFunc(dessertMenu);
