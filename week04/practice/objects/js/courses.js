// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    { 
      sectionNum: 1, 
      roomNum: 'STC 353', 
      enrolled: 26, 
      days: 'TTh', 
      instructor: 'Bro T' 
    },
    { 
      sectionNum: 2, 
      roomNum: 'STC 347', 
      enrolled: 28, 
      days: 'TTh', 
      instructor: 'Sis A' 
    }
  ],
  updateEnrolled: function(sectionNum, add = true) {
    const section = sectionNum -1;
    if (this.sections[section].sectionNum == sectionNum) {
      if (add) {
        this.sections[section].enrolled++;
      }
      else {
        this.sections[section].enrolled--;
      }
      updateTable(aCourse);
    }
  }
};

//Set the headings based on the object's values
document.querySelector('#courseCode').textContent = aCourse.code;
document.querySelector('#courseName').textContent = aCourse.name;

//event handler for enroll student button
document.querySelector('#enrollStudent').addEventListener('click', (e) => {
  const section = +document.querySelector('#sectionNumber').value;
  aCourse.updateEnrolled(section);
});
//event handler for drop student button
document.querySelector('#dropStudent').addEventListener('click', (e) => {
  const section = +document.querySelector('#sectionNumber').value;
  aCourse.updateEnrolled(section, false);
});
//function to update the table
function updateTable(aCourse) {
  document.querySelector('table').innerHTML = aCourse.sections.map((section) =>`<tr>
  <td>${section.sectionNum}</td>
  <td>${section.roomNum}</td>
  <td>${section.enrolled}</td>
  <td>${section.days}</td>
  <td>${section.instructor}</td>
  </tr>`).join('');
}