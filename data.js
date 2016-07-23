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
        desc: `Cursul de Gestiunea Serviciilor de Retea transmite cunostinte si competente in zona administrarii de servicii de retea si configurare de aplicatii specifice.

        Se urmareste un profil de sysdevops, o persoana capabila sa inteleaga specificul infrastructurii si sistemelor cu care lucreaza si sa aiba competentele pentru dezvoltarea a noi utilitare care sa asigure scalabilitaea si flexibilitea infrastructurii.
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
      }, {
        name: 'Elective course',
        active: false
      }, {
        name: 'Research',
        active: false
      }
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
      }, {
        name: 'Elective course',
        active: false
      }, {
        name: 'Elective course',
        active: false
      }, {
        name: 'Research',
        active: false
      }
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
        teachers: 'Ion Bica, Adrian Furtună',
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
      }, {
        name: 'Elective Course',
        active: false
      }, {
        name: 'Elective Course',
        active: false
      }, {
        name: 'Research',
        active: false
      }
    ]
  },
  copy: {
    why: 'Laboris commodo nisi tempor excepteur officia consequat sit ipsum magna ea ullamco laboris amet voluptate ullamco laborum. Sint officia minim do nostrud adipisicing nulla adipisicing Lorem incididunt exercitation id quis consequat laboris nulla. Reprehenderit non anim cillum excepteur id esse sit amet adipisicing amet incididunt magna quis. Ipsum quis ex adipisicing Lorem laborum et officia nulla minim laboris id enim. Ea proident in reprehenderit nisi aliqua esse deserunt aliqua. Occaecat minim eiusmod irure Lorem cillum tempor velit ut mollit eiusmod duis fugiat aliqua tempor qui nulla laboris.',
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
      desc: 'Qui consequat consequat dolore eiusmod mollit incididunt tempor nulla proident Lorem dolor fugiat duis laborum aliquip.',
      activities: [ {
        name: 'Board games',
        desc: 'Et dolor exercitation reprehenderit veniam labore Lorem enim. Culpa anim sint Lorem deserunt duis consectetur ea nostrud fugiat incididunt aliqua et consequat. Est ullamco minim sunt cillum enim dolore qui labore laboris excepteur ex cillum fugiat non proident ad sunt. Nostrud excepteur ex ipsum aliqua irure magna deserunt nulla exercitation. Ipsum anim occaecat fugiat et exercitation occaecat et. Enim Lorem ullamco irure non ad qui irure cillum quis ad voluptate magna. Cupidatat ea anim qui ex consequat sint dolore eiusmod eiusmod laborum eu velit esse voluptate cupidatat do quis.',
        image: 'boardgames.png'
      }, {
        name: 'Hacker\'s Night Out',
        desc: 'Anim qui pariatur qui tempor consequat magna incididunt Lorem occaecat dolor deserunt quis est enim. Duis dolore sint est anim nulla nostrud aute culpa nisi nisi. Commodo id est cillum officia non adipisicing fugiat consequat labore velit non deserunt eiusmod reprehenderit laborum. Ipsum pariatur do incididunt in laboris qui est cupidatat et sit et officia tempor id ut proident. Commodo quis ipsum incididunt do aliqua elit ex aliqua amet ut voluptate. Officia et ad dolore ullamco adipisicing fugiat aliquip eiusmod anim.',
        image: 'hackers.jpg'
      }, {
        name: 'Capture The Flag',
        desc: 'Tempor est tempor fugiat proident irure est ea laboris in eiusmod voluptate commodo pariatur. Voluptate minim anim deserunt proident sit tempor ex consectetur amet aute tempor elit laboris. Ea elit eu ea labore sint duis commodo exercitation. Cupidatat enim sunt irure amet ea magna sint sunt veniam consectetur labore eiusmod non deserunt. Laborum id dolore enim ex in proident laboris eu dolor cupidatat qui eu nostrud sunt. Tempor pariatur officia est tempor laboris do cupidatat occaecat reprehenderit adipisicing enim aliqua officia.',
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
      name: 'Mihai Chiroiu',
      position: 'Assistant Professor',
      photo: 'mihaichiroiu.jpg'
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
      name: 'Radu Petean',
      position: 'Assistant Professor',
      photo: 'radupetean.jpg'
    },
    {
      name: 'Ion Bică',
      position: 'Professor',
      photo: 'ionbica.jpg'
    },
    {
      name: 'Dragoș Niculescu',
      position: 'Professor',
      photo: 'dragosniculescu.jpg'
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