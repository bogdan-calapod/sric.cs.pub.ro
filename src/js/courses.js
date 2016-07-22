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

function selectCourse(e) {
  if(e.currentTarget.classList.contains('disabled'))
    return;

  // Get data
  let current = e.currentTarget,
      name = current.dataset.name,
      desc = current.dataset.desc,
      url = current.dataset.url,
      imageSrc = current.dataset.image,
      teacherData = JSON.parse(current.dataset.teachers);

  // Get elements
  let header = document.querySelector(courseSection + '.content h2'),
      body = document.querySelector(courseSection + '.content .text'),
      image = document.querySelector(courseSection + '.content .info img'),
      link = document.querySelector(courseSection + '.content a'),
      teachers = document.querySelector(courseSection + '.teachers');

  // Assign data
  header.innerHTML = name;
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