let costumerName = document.querySelector('#customer-name')
let courseName = document.querySelector('#course-name')
let authorName = document.querySelector('#author-name')
let allCourses = document.querySelector('.courses')

const COURSE_FORM = document.querySelector('.course-form')

let courses = []

function Course (costumerName, courseName, authorName){
  this.costumerName = costumerName,
  this.courseName = courseName,
  this.authorName = authorName
}

COURSE_FORM.addEventListener('submit', (e) => {
  e.preventDefault()
  let course = new Course(costumerName.value, courseName.value, authorName.value)
  courses.push(course)
  printCourse(course)
  costumerName.value = ''
  courseName.value = ''
  authorName.value = ''
})

const printCourse = (course) => {
    let newCourse = document.createElement('div')
    newCourse.innerHTML = `<img src="https://placeimg.com/300/200/animals" alt="img-comes-here">
    <div class="course-details">
        <p class="Name"><span>Name:</span>${course.costumerName}</p>
        <p class="Course"><span>Course:</span>${course.courseName}</p>
        <p class="Author"><span>Author:</span>${course.authorName}</p>
    </div>`
    allCourses.appendChild(newCourse)
}
let allInput = document.querySelectorAll('input[type=text')