let research = {
  name: 'Research',
  roname: '',
  desc: `Research projects may address topics such as: network architectures, operating systems, wireless sensor networks, peer-to-peer systems, network security and mobile platforms.
  Network architecture research focuses on designing, implementing, optimizing and evaluating communication networks. Research covers all network communication layers, taking into consideration both the hardware and software solutions required for building a communication network.
  OS research aims to take advantage of new platforms and improve resource management, in the context opened by the exponential development of mobile solutions;
  WSN research focuses on improving resource consumption, scalability, adaptability, reliability, fault-tolerance, security, self-configurability and QoS in sensor networks, with a focus on security mechanisms, trust and reputation models, routing protocols and simulation tools;
  The main challenges in the Peer-to-Peer systems consist of dealing with rogue peers, differentiated participation, high peer churn, and resource availability. In order to solve these challenges, research has focused on developing and testing new architectures for resource sharing, new communication protocols, extending current clients and evaluating new and efficient ways of peer interaction.
  Network security research focuses on improving authentication protocols, intrusion detection and prevention systems, and network device security.
  Mobile devices raise several development challenges, such as power consumption, application connectivity, and reduced screen real-estate. Research tries to tackle these challenges by leveraging operating system features, designing new and improved algorithms for resource management, and using the latest technologies for interconnecting devices.`,
  url: 'https://systems.cs.pub.ro/teaching/master-projects/',
  customButton: 'Topics & calendar',
  image: 'research.jpg',
  teachers: 'Laura Gheorghe',
  active: true
};

let optional = {
  name: 'Elective Course',
  active: false
};

let data = {
  courses: {
    sem1: [
      {
        name: 'Computer and Network Security ',
        roname: 'Securitatea Calculatoarelor și Rețelelor',
        desc: `Computer and Network Security class covers the topic of computer and network security, from advanced cryptographic techniques, innovative algorithms, security protocols and policies, trust ensuring infrastructures and specific technologies for securing networks.
          At the end of this class, the students should be able to: develop a complex security policy for ensuring the safety of the provided services, identify threats and vulnerabilities at network and operating system level, identify types of attacks and mitigate them, identify the vulnerabilities of layer 2 and 3 equipments, implement a solution for ensuring a high level of security for the equipments, monitor the network, servers and workstations for identifying and stopping attacks, configuring a firewall, an IDS/IPS and an AAA system.
          This class also has an important practical component, which includes: configuring routers that define the network perimeter with the use of specific instruction set for ensuring a high level of security, configuring layer 2 and 3 equipments in a safe manner, configuring a firewall for allowing basic network operations, configuring an IDS/IPS, configuring AAA both on routers and switches.`,
        url: 'http://ocw.cs.pub.ro/courses/scr',
        image: 'scr.jpg',
        teachers: 'Răzvan Deaconescu,Dan Gioga,Adrian Furtună',
        active: true
      }, {
        name: 'Network Service Management',
        roname: 'Gestiunea Serviciilor de Reţea',
        desc: `The Network Service Management course trains students for sysdevops activities, challenging them to understand the specificity of the infrastructures and systems they work with, and to develop new solutions to ensure infrastructure scalability and flexibility. The course enhances abilities for network management and configuring specific services.
        `,
        url: 'http://ocw.cs.pub.ro/courses/gsr',
        image: 'gsr.jpg',
        teachers: 'Alex Carp, Radu Petean',
        active: true
      }, {
        name: 'Wireless Sensor Networks',
        roname: 'Infrastructură și Servicii pentru Rețele Mobile',
        desc: 'A Wireless Sensor Network (WSN) consists of a large number of sensor devices characterized by reduced dimension, low cost and low power, which are able to organize themselves into a network by communicating through a wireless medium, collaborating in order to accomplish a common task. The network design objectives and requirements include: reduced resource consumption, scalability, adaptability, reliability, fault-tolerance, security, selfconfigurability and QoS. Research in this domain focuses on: security mechanisms, trust and reputation models, routing protocols, simulation tools.',
        url: 'http://ocw.cs.pub.ro/courses/isrm',
        image: 'wsn.jpg',
        teachers: 'Dragoș Niculescu',
        active: true
      },
      optional,
      research
    ],
    sem2: [
      {
        name: 'Securing Networks with Dedicated Equipment',
        roname: 'Securitatea Rețelelor cu Echipamente Dedicate',
        desc: `Securing Networks with Dedicated Equipment focuses on advanced security topics in networking, providing knowledge and skills required to plan, implement, and configure a secure, scalable, redundant and convergent network using dedicated firewalling systems and Unified Threat Management. Course concepts are introduced and studied in depth using equipment from multiple producers, offering a comparative analysis of performance, facility in implementation and scalability, for each technology.
        With a strong practical dimension, the laboratory consists in activities that implement concepts introduced through the theoretical course, following architectures and case studies selected from the configurations of networks deployed in real, enterprise settings. During the laboratory students will configure firewalls in transparent and routed modes, advanced IP services, virtual firewalls and security contexts, IPSec tunneling and site-to-site VPNs, SSL VPNs for distance access, redundancy at firewall access, and solutions for Unified Threat Management with antivirus, antispam, antispyware and data-theft prevention services.
        When finalizing the course, students will benefit from an ample perspective on security levels available in current network architectures, and they will be able to design, implement, monitor and troubleshoot a security solution at enterprise level.`,
        url: 'http://ocw.cs.pub.ro/courses/sred',
        image: 'sred.jpg',
        teachers: 'Răzvan Rughiniș, Mihai Chiroiu, Marius Bunget',
        active: true
      }, {
        name: 'Advanced Services for ISPs',
        roname: 'Servicii Avansate pentru ISP',
        desc: `The Advanced Services for ISPs provides students with know-how and skills regarding technologies deployed in large networks and service providers. The knowledge is complemented by the in-depth skills of designing, configuring, troubleshooting and optimizing computer systems, services and computer networks. Students will gain skills in integrating advanced components for system and network services and ensuring their scalability and reliability.
        The lectures and labs will tackle concepts in areas such as virtualization, network monitoring, storage management, traffic control and high availability.
        After completing the course, students will have gained knowledge and skills useful for choosing between various solutions for providing scalable services, implementing a complete monitoring solution for a complex computer network and designing and implementing virtualization solutions that ensure scalable and highly available services.
        On the practical side, during lab sessions we will tackle applications for virtualization, monitoring, traffic control and other ISP-specific components.
        Considering system administration and management, the practical side will include installing, configuring and debugging modern virtualization solutions, providing high availability and scalability to computer systems and automating administrative tasks and improving activities in practical topics.
        Considering communication and computer system interaction, we will provide in-depth look at topics such as securing configurations and connections at system or network level and implementing security and interoperability solutions between systems.`,
        url: 'http://ocw.cs.pub.ro/courses/saisp',
        image: 'saisp.jpg',
        teachers: 'Mihai Carabaș',
        active: true
      },
      optional,
      optional,
      research
    ],
    sem3: [
      {
        name: 'Auditing Network Security',
        roname: 'Auditarea securității rețelelor',
        desc: `The course “Auditing Network Security” promotes knowledge of main concepts regarding the design of an audit for information system, starting from technical principles and current technologies, and then including considerations concerning ethical issues and legal concerns of implementation. Students will learn about the relevance of audit activities for present-day activities, current trends in this field, and specific methods for information gathering.
        The course involves students in practical activities, aiming for the development of dedicated knowledge and skills for solving typical problems in network auditing, for each stage. Students will learn to identify relevant vulnerabilities and security risks, to test for their presence, to evaluate their seriousness, and to elaborate a report. Practical activities are designed to encourage students to develop their own action plan, with a high degree of autonomy, and to search for relevant, updated information.
        After completing the course, students will acquire the capacity to diagnose functioning problems in complex networks, especially security problems, and to propose alternative solutions, taking into account financial, time, and human resource constraints. Students will also develop their knowledge and skills concerning the provision and evaluation of information security, their capacity to find relevant information for current problems, to communicate directly, to elaborate technical documents and to put to practical use information from scientific research concerning complex network security.`,
        url: '',
        image: 'asr.jpg',
        teachers: 'Ion Bică, Adrian Furtună',
        active: true
      }, {
        name: 'Parallel and Distributed Systems',
        roname: 'Sisteme Paralele și Distribuite',
        desc: `The course presents a new approach of parallel and distributed system, which consists of a collection of interconnected stand-alone heterogeneous systems cooperatively working together as a single, integrated computing resource. In the course are presented the type of clusters, cluster architecture, new concept in OS services for distributed processing, physical cluster interconnections and interconnect support, cluster programming environments, monitoring and performance analysis tools.
        The course presents the essence of Grids how to utilize highly flexible network architectures, and how to sharing of all computing resources, not just data. Are presented the grid technologies, an extensible and open Grid architecture, general aspects of basic components that enable interoperability among different Grid resources. There are presented the principal Grid characteristics: Wide geographical distribution, Heterogeneous, Resource sharing, Multiple admin policies, Resource coordination, Transparent access, Dependable, Consistent, Pervasive.  It is presented a Sample Grid Computing Environment: Resource Sharing & Aggregation and Grid Architecture for Computational Economy. The Layered Grid Architecture is presented.
        In the second part of the course the students have to choose a topic of application of the Grid computing and they have to present an essay about it.`,
        url: '',
        image: 'spd.jpg',
        teachers: 'Nicolae Țăpuș, Mihai Carabaș',
        active: true
      },
      optional,
      optional,
      research
    ]
  },
  copy: {
    why: [
      `Security professionals are increasingly called upon to migrate from the boundaries and gates of information systems to the very core of  digital infrastructure design and management. Information systems are permeating all fields of daily lives, from the intimate zones of the household to the corporate world. Appliances become interconnected in the Internet of Things; people work, chat, and observe reality through mobile connections; entire continents of business migrate to the cloud. Meanwhile, the stakes of malicious attacks become higher, and vulnerabilities increase, in the mismatch of old and new technologies and interconnected platforms.`,

      `Join SRIC to gain indepth knowledge, hands-on mastery and broader perspectives on a variety of technologies of cybersecurity. Make your voice heard in the SRIC community of alumni, professors, students and security specialists.`
    ],
    career: {
      desc: 'Velit ea non ipsum eiusmod eu duis enim officia in cillum anim. Sunt commodo fugiat proident ex irure Lorem amet excepteur consequat consectetur. Est est officia est proident proident ut nulla sit Lorem id fugiat aliquip nulla laboris id voluptate officia. Amet do esse nostrud ad et aliqua elit mollit sunt fugiat sint ex sint consequat. Do aliqua veniam enim laborum cillum officia ex reprehenderit id duis.',
      careers: [ {
        name: 'Ad adipisicing deserunt',
        desc: 'Consequat nulla ut minim do aute dolor in eiusmod tempor in consectetur laboris eu. Est mollit eu id aute consectetur officia deserunt. Ipsum tempor qui ex laboris est non do esse est Lorem non quis ea voluptate. Reprehenderit aute cupidatat laborum eu eiusmod velit minim do. Dolor in consequat culpa occaecat ea commodo velit adipisicing deserunt laboris.',
        image: 'course.png'
      }, {
        name: 'Deserunt',
        desc: 'Consequat nulla ut minim do aute dolor in eiusmod tempor in consectetur laboris eu. Est mollit eu id aute consectetur officia deserunt. Ipsum tempor qui ex laboris est non do esse est Lorem non quis ea voluptate. Reprehenderit aute cupidatat laborum eu eiusmod velit minim do. Dolor in consequat culpa occaecat ea commodo velit adipisicing deserunt laboris.',
        image: 'course.png'
      }, {
        name: 'Aipisicing',
        desc: 'Consequat nulla ut minim do aute dolor in eiusmod tempor in consectetur laboris eu. Est mollit eu id aute consectetur officia deserunt. Ipsum tempor qui ex laboris est non do esse est Lorem non quis ea voluptate. Reprehenderit aute cupidatat laborum eu eiusmod velit minim do. Dolor in consequat culpa occaecat ea commodo velit adipisicing deserunt laboris.',
        image: 'course.png'
      } ]
    },
    community: {
      activities: [
      {
        name: 'Hacker\'s Night Out',
        desc: `What’s the point of keeping the world cybersafe if we don’t get to tell all those fabulous stories?
        Are you a SRIC student? Are you a SRIC teacher? Are you something else? Hold up your wizard night plans for Friday, October 21rd 2016, and join us to Hackers’ Night Out! We’ll be board-gaming, karaoking, musicing, dancing and hacking all around in Room 706 PRECIS from 20:00 till dawn. Don’t knock, come in!
        Please address your inquires to the master of ceremonies at sric@systems.cs.pub.ro`,
        customButton: 'E-mail MC',
        url:'mailto:sric@systems.cs.pub.ro',
        image: 'hackers.jpg'
      }, {
        name: 'Capture The Flag',
        desc: `Do you want to gain an edge and make new friends in the cybersecurity community? The next edition of the Security Summer School will take place in June 2017!
        In 2016, the third edition of the Security Summer School engaged students between June 20th and July 25th, at the Faculty of Automatic Control and Computers, UPB, focusing on Practical Software Exploitation. Students went through an in-depth tour of what it means to discover, successfully exploit and patch a software vulnerability, developing the necessary skills and insights for such an endeavor.
        Activities took place during three intensive training sessions per week, as well as two Capture the Flag (CTF) contests which were held mid-term and at the end of the summer school.
        The final CTF contest was the highlight of the summer school, as students were able to showcase their new skills.`,
        url: 'https://security.cs.pub.ro/summer-school/wiki/',
        image: 'ctf.jpg'
      }, {
        name: 'Security Summer School',
        desc: 'Mollit laboris dolor eu et nostrud ipsum enim. Nostrud veniam sit aliqua reprehenderit id culpa occaecat duis ex id adipisicing sint laboris velit deserunt aute occaecat. Qui ipsum amet do esse ad nostrud nostrud ullamco duis aliqua qui. Occaecat ullamco aute pariatur consequat cillum Lorem duis sint dolore laboris consequat dolore laboris laborum cupidatat proident.',
        image: 'sss.jpg'
      } ]
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

module.exports = {
  data
};