let commSection = '.community ';

// Get course elements
let communities = [].slice.call(
  document.querySelectorAll(commSection + '.entry')
);

//Add events
communities.map(addCommunitySelectEvent);

function addCommunitySelectEvent(e) {
  e.addEventListener(
    'click',
    selectCommunity
  );
}

function selectCommunity(e) {
  // Get data
  let current = e.currentTarget,
      name = current.dataset.name,
      desc = current.dataset.desc;
      img = current.dataset.image;

  // Get elements
  let header = document.querySelector(commSection + '.content h2'),
      body = document.querySelector(commSection + '.content .text p'),
      image = document.querySelector (commSection + '.content img');

  // Assign data
  header.innerHTML = name;
  body.innerHTML = desc;
  image.src = img;

  // Set active attribute
  let active = document.querySelector(commSection + '.entry.active');
  if(active)
    active.className = 'entry';
  current.className = 'entry active';
}