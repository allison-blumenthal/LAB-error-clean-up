// import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line

import htmlStructure from '../components/basic-html-structure/html-structure';
import header from '../components/basic-html-structure/html-head';
import startSortingBtn from '../components/basic-html-structure/start-sorting-btn';
import events from '../components/logic/events';

// ********** LOGIC  ********** //

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
