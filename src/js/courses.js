let courseSection = '.courses ';

// Get course elements
let courseElements = [].slice.call(
  document.querySelectorAll(courseSection + '.entry')
);

//Add events
courseElements.map(addCourseSelectEvent);

function addCourseSelectEvent(e) {
  e.addEventListener(
    'click',
    selectCourse
  );
}

selectCourse(courseElements[0]);

function selectCourse(e) {
  let elem;

  if(e.currentTarget){
    if(e.currentTarget.classList.contains('disabled'))
      return;
  } else
    elem = e;

  // Get data
  let current = elem ? elem : e.currentTarget,
      name = current.dataset.name,
      roname = current.dataset.roname,
      desc = current.dataset.desc,
      url = current.dataset.url,
      imageSrc = current.dataset.image,
      teacherData = JSON.parse(current.dataset.teachers);

  // Get elements
  let header = document.querySelector( courseSection + '.content h2' ),
      subheader = document.querySelector( courseSection + '.content h3' ),
      body = document.querySelector( courseSection + '.content .text' ),
      image = document.querySelector( courseSection + '.content .info img' ),
      link = document.querySelector( courseSection + '.content a' ),
      teachers = document.querySelector( courseSection + '.teachers' );

  // Replace newlines with <br>
  desc = desc.replace( /(?:\r\n|\r|\n)/g, '<br /><br />' );

  // Assign data
  header.innerHTML = name;
  subheader.innerHTML = roname;
  body.innerHTML = desc;
  link.href = url;
  image.src = imageSrc;

  teachers.innerHTML = '';
  teacherData.map(
    data => teachers.appendChild(
      generateTeacher(data)
    )
  );

  // Set active attribute
  let active = document.querySelector(courseSection + '.entry.active');
  if(active)
    active.className = 'entry';
  current.className = 'entry active';
}

function generateTeacher(data) {
  let container = document.createElement('div'),
      photo = document.createElement('img'),
      name = document.createElement('h2');

  container.className = 'teacher';
  photo.src = 'img/people/' + data.photo;
  name.innerHTML = data.name;

  container.appendChild(photo);
  container.appendChild(name);

  return container;
}