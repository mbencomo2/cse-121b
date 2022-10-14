import aCourse from './course.js'

//Insert Course details
aCourse.init();

//event handler for enroll student button
document.querySelector('#enrollStudent').addEventListener('click', (e) => {
  const section = +document.querySelector('#sectionNumber').value;
  aCourse.changeEnrollment(section);
});

//event handler for drop student button
document.querySelector('#dropStudent').addEventListener('click', (e) => {
  const section = +document.querySelector('#sectionNumber').value;
  aCourse.changeEnrollment(section, false);
});
