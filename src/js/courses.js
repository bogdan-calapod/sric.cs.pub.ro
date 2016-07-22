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
  // Get data
  let current = e.currentTarget,
      name = current.dataset.name,
      desc = current.dataset.desc,
      url = current.dataset.url,
      imageSrc = current.dataset.image;

  // Get elements
  let header = document.querySelector(courseSection + '.content h2'),
      body = document.querySelector(courseSection + '.content .text'),
      image = document.querySelector(courseSection + '.content .info img'),
      link = document.querySelector(courseSection + '.content a');

  // Assign data
  header.innerHTML = name;
  body.innerHTML = desc;
  link.href = url;
  image.src = imageSrc;

  // Set active attribute
  let active = document.querySelector(courseSection + '.entry.active');
  if(active)
    active.className = 'entry';
  current.className = 'entry active';
}