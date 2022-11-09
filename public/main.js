// import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line

import { students, voldysArmy, houses } from '../components/data/student-data';
import renderToDOM from '../utils/renderToDom';
import htmlStructure from '../components/basic-html-structure/html-structure';
import header from '../components/basic-html-structure/html-head';
import startSortingBtn from '../components/basic-html-structure/start-sorting-btn';
import studentAreas from '../components/basic-html-structure/student-areas';
import studentsOnDom from '../components/basic-html-structure/students-on-dom';
import filterBtnRow from '../components/basic-html-structure/filter-btn-row';
import createId from '../components/basic-html-structure/create-id';
import form from '../components/logic/form-on-dom';

// ********** LOGIC  ********** //




const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
