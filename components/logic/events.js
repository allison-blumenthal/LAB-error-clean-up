import form from './form-on-dom';
import filterBtnRow from '../basic-html-structure/filter-btn-row';
import studentAreas from '../basic-html-structure/student-areas';

const events = () => {
  // get form on the DOM on button click
  document.querySelector('#start-sorting').addEventListener('click', () => {
    // put html elements on the DOM on click
    form(); // form
    filterBtnRow(); // filter buttons
    studentAreas(); // students and voldy's army divs
  });
};

















export default events;
