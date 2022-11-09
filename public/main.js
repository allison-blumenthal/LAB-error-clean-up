// import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line

import { students, voldysArmy, houses } from '../components/student-data';
import renderToDOM from '../utils/renderToDom';
import htmlStructure from '../components/basic-html-structure/html-structure';
import header from '../components/basic-html-structure/html-head';
import startSortingBtn from '../components/basic-html-structure/start-sorting-btn';
import studentAreas from '../components/basic-html-structure/student-areas';
import studentsOnDom from '../components/basic-html-structure/students-on-dom';
import filterBtnRow from '../components/basic-html-structure/filter-btn-row';
import createId from '../components/basic-html-structure/create-id';

// ********** LOGIC  ********** //
// sorts student to a house and then place them in the students array
const sortStudent = (e) => {
  e.preventDefault();
  const sortingHat = houses[Math.floor(Math.random() * houses.length)];

  if (e.target.id === 'sorting') {
    const student = document.querySelector('#student-name');

    // create the new student object
    students.push({
      id: createId(students),
      name: student.value,
      house: sortingHat.house,
      crest: sortingHat.crest
    });

    student.value = ''; // reset value of input
    studentsOnDom('#students', students);
  }
};

// add form to DOM on start-sorting click.
// Add events for form after the form is on the DOM
const form = () => {
  const domString = `<form id="sorting" class="d-flex flex-column form-floating ">
    <input
    type="text"
    class="form-control mb-1"
    id="student-name"
    placeholder="Enter a name"
    required
  />
  <label for="floatingInputValue">Name to be sorted</label>
<button type="submit" class="btn btn-success">Get Sorted!</button>
</form>`;

  renderToDOM('#form-container', domString);

  // has to be put on the DOM after form is on DOM, not before
  // on form submit, sort student
  document.querySelector('#sorting').addEventListener('submit', sortStudent);
};

const events = () => {
  // get form on the DOM on button click
  document.querySelector('#start-sorting').addEventListener('click', () => {
    // put html elements on the DOM on click
    form(); // form
    filterBtnRow(); // filter buttons
    studentAreas(); // students and voldy's army divs
  });

  // target expel buttons to move to voldys army
  document
    .querySelector('#student-container')
    .addEventListener('click', (e) => {
      if (e.target.id.includes('expel')) {
        const [, id] = e.target.id.split('--');
        const index = students.findIndex((student) => student.id === Number(id));

        // move from one array to another
        voldysArmy.push(...students.splice(index, 1));
        // get both sets of students on the DOM
        studentsOnDom('#students', students);
        studentsOnDom('#voldy', voldysArmy);
      }
    });

  // target filter buttons on Dom
  document.querySelector('#filter-container').addEventListener('click', (e) => {
    if (e.target.id.includes('filter')) {
      const [, house] = e.target.id.split('--');

      if (house === 'all') {
        studentsOnDom('#students', students);
      } else if (house) {
        const filter = students.filter((student) => student.house === house);
        studentsOnDom('#students', filter, house);
      }
    }
  });
};

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
