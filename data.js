let fs = require('fs');

let data = {
  copy: {
    why: [
      `Security professionals are increasingly called upon to migrate from the boundaries and gates of information systems to the very core of  digital infrastructure design and management. Information systems are permeating all fields of daily lives, from the intimate zones of the household to the corporate world. Appliances become interconnected in the Internet of Things; people work, chat, and observe reality through mobile connections; entire continents of business migrate to the cloud. Meanwhile, the stakes of malicious attacks become higher, and vulnerabilities increase, in the mismatch of old and new technologies and interconnected platforms.`,

      `Join SRIC to gain indepth knowledge, hands-on mastery and broader perspectives on a variety of technologies of cybersecurity. Make your voice heard in the SRIC community of alumni, professors, students and security specialists.`,

      `If you enjoy making computing systems work, hardening and securing system components and continuously improving IT infrastructures, you are the ideal candidate for the SRIC masters program.`
    ],
    career: {
      careers: [ {
        name: 'Security Researcher',
        desc: 'One further step in the academic world will be to take on a PhD position, or similar researcher  jobs can also be found in the industry. SRIC prepares future researchers by teaching a diverse number of programming languages, advanced topics on operating systems, cryptography, network security and others. Moreover, we also provide the background for solid forensics and reverse engineering, promoting desire for edge technology.',
        image: 'researcher.jpg'
      }, {
        name: 'Security Auditor',
        desc: 'A security auditor’s job is to provide a detailed report of systems security for a company. These reports will be used to enhance the global security of the enterprise and to help the company make necessary changes to boost the integrity of their infrastructure. During the SRIC master, you will learn how to use auditing tools required to perform such an operation and what are the laws and procedures governing security, making you suitable for following such a career.',
        image: 'auditor.jpg'
      }, {
        name: 'Security Network Engineer',
        desc: 'A security network engineer is vital to any large organisation and should provide security services for networks, data centers and endpoints by deploying, configuring and administration of many devices including firewalls, VPNs, IPS, and other more. We, at SRIC, provide the hands-on experience required for such a job, by partnering with top-vendors and bringing the latest technology into the class. You will learn how to protect your servers and network devices from the industry leaders.',
        image: 'engineer.jpg'
      } ]
    },
    community: {
      activities: [
        {
          name: 'Security Summer School',
          desc: `Do you want to gain an edge and make new friends in the cybersecurity community? The next edition of the Security Summer School will take place in June 2017!
          In 2016, the third edition of the Security Summer School engaged students between June 20th and July 25th, at the Faculty of Automatic Control and Computers, UPB, focusing on Practical Software Exploitation. Students went through an in-depth tour of what it means to discover, successfully exploit and patch a software vulnerability, developing the necessary skills and insights for such an endeavor.
          Activities took place during three intensive training sessions per week, as well as two Capture the Flag (CTF) contests which were held mid-term and at the end of the summer school.
          The final CTF contest was the highlight of the summer school, as students were able to showcase their new skills.`,
          url: 'https://security.cs.pub.ro/summer-school/wiki/',
          image: 'sss.jpg'
        },
      /*  {
          name: 'Capture The Flag',
          desc: `Do you want to gain an edge and make new friends in the cybersecurity community? The next edition of the Security Summer School will take place in June 2017!
          In 2016, the third edition of the Security Summer School engaged students between June 20th and July 25th, at the Faculty of Automatic Control and Computers, UPB, focusing on Practical Software Exploitation. Students went through an in-depth tour of what it means to discover, successfully exploit and patch a software vulnerability, developing the necessary skills and insights for such an endeavor.
          Activities took place during three intensive training sessions per week, as well as two Capture the Flag (CTF) contests which were held mid-term and at the end of the summer school.
          The final CTF contest was the highlight of the summer school, as students were able to showcase their new skills.`,
          url: 'https://security.cs.pub.ro/summer-school/wiki/',
          image: 'ctf.jpg'
        },*/
        {
          name: 'Hacker\'s Night Out',
          desc: `What’s the point of keeping the world cybersafe if we don’t get to tell all those fabulous stories?
          Are you a SRIC student? Are you a SRIC teacher? Are you something else? Hold up your wizard night plans for Friday, October 21rd 2016, and join us to Hackers’ Night Out! We’ll be board-gaming, karaoking, musicing, dancing and hacking all around in Room 706 PRECIS from 20:00 till dawn. Don’t knock, come in!
          Please address your inquires to the master of ceremonies at sric@systems.cs.pub.ro`,
          customButton: 'E-mail MC',
          url:'mailto:sric@systems.cs.pub.ro',
          image: 'hackers.jpg'
        }
      ]
    }
  },
  people: [
    {
      name: 'Ion Bică',
      position: 'Professor',
      photo: 'ionbica.jpg'
    },
    {
      name: 'Marius Bunget',
      position: 'Assistant Professor',
      photo: 'mariusbunget.jpg'
    },
    {
      name: 'Mihai Carabaș',
      position: 'Assistant Professor',
      photo: 'mihaicarabas.jpg'
    },
    {
      name: 'Alex Carp',
      position: 'Assistant Professor',
      photo: 'alexcarp.jpg'
    },
    {
      name: 'Mihai Chiroiu',
      position: 'Assistant Professor',
      photo: 'mihaichiroiu.jpg'
    },
    {
      name: 'Dan Gioga',
      position: 'Assistant Professor',
      photo: 'dangioga.jpg'
    },
    {
      name: 'Răzvan Deaconescu',
      position: 'Assistant Professor',
      photo: 'razvandeaconescu.jpg'
    },
    {
      name: 'Adrian Furtună',
      position: 'Assistant Professor',
      photo: 'adrianfurtuna.jpg'
    },
    {
      name: 'Laura Gheorghe',
      position: 'Assistant Professor',
      photo: 'lauragheorghe.jpg'
    },
    {
      name: 'Dragoș Niculescu',
      position: 'Professor',
      photo: 'dragosniculescu.jpg'
    },
    {
      name: 'Radu Petean',
      position: 'Assistant Professor',
      photo: 'radupetean.jpg'
    },
    {
      name: 'Răzvan Rughiniș',
      position: 'Professor',
      photo: 'razvanrughinis.jpg'
    },
    {
      name: 'Nicolae Țăpuș',
      position: 'Professor',
      photo: 'nicolaetapus.jpg'
    }
  ]
};

function getData(dir) {
  // Get courses from provided file
  let courses = fs.readFileSync(dir + '/data.json', 'utf-8');
  data.courses = JSON.parse(courses)['Course info'];
  data.courses = data.courses.map(
    course => {
      if(course.active == 'TRUE')
        course.active = true;
      else
        course.active = false;
      return course;
    }
  )
  return data;
}

module.exports = {
  getData
};