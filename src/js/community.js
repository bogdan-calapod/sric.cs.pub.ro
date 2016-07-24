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

selectCommunity({currentTarget: communities[0]});


function selectCommunity(e) {
  // Get data
  let current = e.currentTarget,
      name = current.dataset.name,
      desc = current.dataset.desc;
      img = current.dataset.image,
      url = current.dataset.url;

  // Get elements
  let header = document.querySelector(commSection + '.content h2'),
      body = document.querySelector(commSection + '.content .text p'),
      image = document.querySelector (commSection + '.content img'),
      link = document.querySelector(commSection + '.content a');

  // Replace newlines with <br>
  desc = desc.replace( /(?:\r\n|\r|\n)/g, '<br /><br />' );

  // Assign data
  header.innerHTML = name;
  body.innerHTML = desc;
  image.src = img;
  link.href = url;

  // Set custom button text if exists
  if(current.dataset.custombutton)
    link.querySelector('button').innerHTML = current.dataset.custombutton;
  else
    link.querySelector('button').innerHTML = 'More info';

  // Set active attribute
  let active = document.querySelector(commSection + '.entry.active');
  if(active)
    active.className = 'entry';
  current.className = 'entry active';
}