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
  init: function () {
    setCourseInfo(this);
    updateTable(this);
  },
  changeEnrollment: function (sectionNum = 1, add = true) {
    const section = sectionNum - 1;
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
function setCourseInfo(aCourse) {
  document.querySelector('#courseCode').textContent = aCourse.code;
  document.querySelector('#courseName').textContent = aCourse.name;
};

//function to update the table
function updateTable(aCourse) {
  const list = document.querySelector('table');
  
  //reset the table to include this header
  list.innerHTML = `<thead>
  <tr>
  <th>Section#</th>
  <th>Room#</th>
  <th>#Enrolled</th>
  <th>Days</th>
  <th>Instructor</th>
  </tr>
  </thead>`;

  for (let i = 0; i < aCourse.sections.length; i++) {
    const section = aCourse.sections[i];

    //Create the html elements needed
    const listItem = document.createElement('tr');
    
    //set the inner html to include the data we want
    listItem.innerHTML = `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`


    //append the table row we created
    list.appendChild(listItem);
  }
}

export default aCourse;