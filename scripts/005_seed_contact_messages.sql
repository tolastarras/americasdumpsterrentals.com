-- Seed some example contact messages with priority levels
INSERT INTO contact_messages (name, email, subject, message, status, priority, created_at) VALUES
(
  'John Smith',
  'john.smith@example.com',
  'Partnership Inquiry',
  'Hello, I represent TechCorp Inc. and we''re interested in exploring partnership opportunities with your company. Your recent work on the e-commerce dashboard particularly caught our attention. Could we schedule a brief call next week to discuss potential collaboration?',
  'new',
  'high',
  '2024-01-15 09:30:00+00'
),
(
  'Jes Fuentes',
  'jes.fuentes@email.com',
  'Feedback on Chat Application',
  'I recently downloaded your chat application project and I must say it''s quite impressive! The WebSocket implementation is very smooth. However, I noticed that the mobile responsiveness could be improved on smaller screens. Would you consider adding more breakpoints?',
  'read',
  'medium',
  '2024-01-14 14:20:00+00'
),
(
  'Dorothy Chen',
  'dorothy.chen@startup.io',
  'Bug Report: Task Manager',
  'Hi there, I found an issue with the task management system. When dragging tasks between columns, sometimes they disappear if dropped too quickly. Also, the due date picker doesn''t work in Firefox. These are both reproducible issues.',
  'new',
  'high',
  '2024-01-15 11:45:00+00'
),
(
  'Sarah Johnson',
  'sarah.j@designstudio.com',
  'Design Collaboration',
  'Love your work! I''m a UI/UX designer looking to collaborate on an open-source project. Your AI Image Generator has great potential but could benefit from better user experience design. I''d be happy to contribute some design mockups.',
  'replied',
  'medium',
  '2024-01-13 16:10:00+00'
),
(
  'Robert Wilson',
  'robert.wilson@university.edu',
  'Research Inquiry',
  'Dear team, I''m a computer science professor researching modern web architectures. Your REST API Starter Kit seems like an excellent educational resource. Would you be interested in presenting it to my graduate students next month?',
  'read',
  'low',
  '2024-01-12 10:15:00+00'
),
(
  'Lisa Smith',
  'lisa.smith@mobileapps.co',
  'Job Opportunity - URGENT',
  'We''re looking for talented React Native developers at MobileApps Co. Your weather application demonstrates exactly the kind of skills we need. Are you open to new opportunities? We offer competitive packages for remote positions.',
  'new',
  'high',
  '2024-01-15 08:05:00+00'
),
(
  'Michael Chang',
  'michael.c@fake-google.com',
  'General Question',
  'I''m just starting out in web development and found your projects inspiring. What resources would you recommend for someone trying to build their first full-stack application? Any particular learning path you followed?',
  'archived',
  'low',
  '2024-01-10 13:40:00+00'
),
(
  'John Davis',
  'john.davis@entemailer.com',
  'Enterprise License',
  'Our company is interested in using your e-commerce dashboard for internal training purposes. We''d need to modify it slightly for our specific use case. Do you offer enterprise licensing options or custom development services?',
  'replied',
  'high',
  '2024-01-14 17:30:00+00'
),
(
  'James Miller',
  'james.m@opensource.org',
  'Open Source Contribution',
  'I noticed your API starter kit is on GitHub. I''d love to contribute by adding GraphQL support. I have experience with Apollo Server and would be happy to implement it. What''s your process for accepting pull requests?',
  'read',
  'medium',
  '2024-01-11 15:25:00+00'
),
(
  'Alex Turner',
  'alex.t@musicapp.com',
  'Feature Request: Music Integration',
  'Would love to see music streaming API integration in your chat app. Discord-like features would be amazing!',
  'new',
  'medium',
  '2024-01-14 10:30:00+00'
),
(
  'Zoe Rodriguez',
  'zoe.r@healthtech.io',
  'Healthcare API Project',
  'Looking to build a HIPAA-compliant patient portal. Could your REST API starter handle healthcare data security requirements?',
  'read',
  'high',
  '2024-01-14 09:15:00+00'
),
(
  'Benjamin Clark',
  'ben.c@startuplabs.com',
  'Incubator Program',
  'Your projects show great promise! Would you consider joining our startup incubator program? Funding available.',
  'new',
  'high',
  '2024-01-14 08:45:00+00'
),
(
  'Chloe Adams',
  'chloe.a@edu.org',
  'Student Project Help',
  'I''m a student trying to replicate your e-commerce dashboard for my final project. Stuck on shopping cart logic.',
  'read',
  'low',
  '2024-01-13 16:20:00+00'
),
(
  'Daniel White',
  'daniel.w@cloudservices.com',
  'Cloud Migration Query',
  'How difficult would it be to migrate your task manager to AWS? Need estimates for containerization.',
  'replied',
  'medium',
  '2024-01-13 14:10:00+00'
),
(
  'Grace Lee',
  'grace.l@fintech.bank',
  'Banking Security Audit',
  'Your authentication implementation looks solid. Would you consult on our fintech app''s security architecture?',
  'new',
  'high',
  '2024-01-13 11:30:00+00'
),
(
  'Henry Scott',
  'henry.s@gamingstudio.com',
  'Game Dev Collaboration',
  'We''re building an MMO and need real-time chat. Your Socket.io implementation is exactly what we need!',
  'read',
  'medium',
  '2024-01-12 17:45:00+00'
),
(
  'Isabella King',
  'isabella.k@artgallery.com',
  'Digital Exhibition',
  'Love the AI image generator! Could we feature it in our digital art exhibition next month?',
  'archived',
  'low',
  '2024-01-12 15:30:00+00'
),
(
  'Jack Evans',
  'jack.e@logistics.co',
  'Supply Chain Dashboard',
  'Need a customized version of your e-commerce dashboard for logistics tracking. Timeline?',
  'new',
  'high',
  '2024-01-12 13:15:00+00'
),
(
  'Katherine Hall',
  'katherine.h@recruiting.com',
  'Technical Interview',
  'Your projects are impressive! Would you be available for a technical interview with our Fortune 500 client?',
  'read',
  'medium',
  '2024-01-11 18:20:00+00'
),
(
  'Liam Baker',
  'liam.b@opensource.org',
  'Documentation Improvement',
  'Noticed some gaps in your API documentation. I''d like to help improve it if you''re open to contributions.',
  'replied',
  'low',
  '2024-01-11 16:40:00+00'
),
(
  'Mia Nelson',
  'mia.n@edtech.com',
  'Learning Platform Integration',
  'Your weather app would be perfect for our climate science curriculum. Licensing options for educational use?',
  'new',
  'medium',
  '2024-01-11 14:25:00+00'
),
(
  'Noah Carter',
  'noah.c@automation.io',
  'CI/CD Pipeline',
  'Your projects need better CI/CD! I can help set up GitHub Actions with automated testing.',
  'read',
  'medium',
  '2024-01-10 19:10:00+00'
),
(
  'Olivia Mitchell',
  'olivia.m@consulting.group',
  'Digital Transformation',
  'Our client needs help modernizing their legacy systems. Your tech stack expertise is exactly what we need.',
  'new',
  'high',
  '2024-01-10 17:05:00+00'
),
(
  'Peter Roberts',
  'peter.r@ai-research.edu',
  'Research Paper Citation',
  'Planning to cite your AI image generator in our academic paper. Need technical details for methodology section.',
  'read',
  'low',
  '2024-01-10 15:00:00+00'
),
(
  'Quinn Walker',
  'quinn.w@accessibility.org',
  'Accessibility Audit',
  'Ran your projects through accessibility scanners. Found several WCAG compliance issues that need fixing.',
  'new',
  'high',
  '2024-01-09 20:30:00+00'
),
(
  'Rachel Young',
  'rachel.y@travelapp.com',
  'Travel Planning Features',
  'Your task manager would be perfect for trip planning with some modifications. Interested in custom development?',
  'replied',
  'medium',
  '2024-01-09 18:15:00+00'
),
(
  'Samuel Allen',
  'samuel.a@quantumcomputing.io',
  'Quantum Computing Integration',
  'Fascinating projects! Ever considered quantum algorithm implementations? We''re exploring hybrid classical-quantum apps.',
  'archived',
  'low',
  '2024-01-09 16:00:00+00'
),
(
  'Taylor Wright',
  'taylor.w@socialmedia.com',
  'Social Features Request',
  'Your chat app needs social features: profiles, friend lists, status updates. Could build these together?',
  'new',
  'medium',
  '2024-01-08 21:45:00+00'
),
(
  'Uma Harris',
  'uma.h@medresearch.org',
  'Medical Data Visualization',
  'Your dashboard skills could help visualize COVID-19 research data. Pro bono opportunity with major impact.',
  'read',
  'high',
  '2024-01-08 19:30:00+00'
),
(
  'Victor Martin',
  'victor.m@blockchain.dev',
  'Blockchain Integration',
  'Smart contract integration with your task manager would be revolutionary. Interested in Web3 development?',
  'new',
  'high',
  '2024-01-08 17:15:00+00'
),
(
  'Wendy Thompson',
  'wendy.t@remotework.com',
  'Remote Team Tools',
  'Your projects are perfect for distributed teams! Would you create a version optimized for remote collaboration?',
  'read',
  'medium',
  '2024-01-07 22:00:00+00'
),
(
  'Xavier Garcia',
  'xavier.g@languageai.com',
  'Multilingual Support',
  'Your chat app needs i18n! I can help add 10+ language translations if you provide the framework.',
  'replied',
  'medium',
  '2024-01-07 20:45:00+00'
),
(
  'Yara Martinez',
  'yara.m@inclusivetech.org',
  'Diversity in Tech',
  'Your work inspires underrepresented groups in tech. Would you speak at our Women in STEM conference?',
  'new',
  'low',
  '2024-01-07 18:30:00+00'
),
(
  'Zachary Davis',
  'zachary.d@legaltech.com',
  'Legal Document Automation',
  'Your AI project could revolutionize legal document generation. Serious investment available for development.',
  'read',
  'high',
  '2024-01-06 23:15:00+00'
),
(
  'Ava Robinson',
  'ava.r@parentingapp.com',
  'Family Task Manager',
  'Need a family-friendly version of your task manager with child accounts and parental controls.',
  'new',
  'medium',
  '2024-01-06 21:00:00+00'
),
(
  'Blake Lewis',
  'blake.l@greenenergy.io',
  'Sustainability Dashboard',
  'Could adapt your dashboard for carbon footprint tracking. Climate tech venture funding secured.',
  'read',
  'high',
  '2024-01-06 18:45:00+00'
),
(
  'Cameron Walker',
  'cameron.w@ar-vr.dev',
  'AR/VR Integration',
  'Your weather app in augmented reality would be amazing! Have HoloLens development experience.',
  'archived',
  'low',
  '2024-01-05 23:30:00+00'
),
(
  'Dakota Hall',
  'dakota.h@mentalhealth.app',
  'Therapy Session Scheduler',
  'Your scheduling logic would work perfectly for therapy appointments. HIPAA compliance is crucial.',
  'new',
  'high',
  '2024-01-05 21:15:00+00'
),
(
  'Elliot King',
  'elliot.k@cryptotrading.com',
  'Trading Bot Dashboard',
  'Need real-time dashboard for crypto trading signals. Your e-commerce dashboard is close to what we need.',
  'read',
  'high',
  '2024-01-05 19:00:00+00'
),
(
  'Frankie Wright',
  'frankie.w@podcast.net',
  'Podcast Interview',
  'Would love to have you on our tech podcast to discuss modern web development patterns.',
  'replied',
  'low',
  '2024-01-04 23:45:00+00'
),
(
  'Grayson Scott',
  'grayson.s@realestate.ai',
  'Property Management System',
  'Your task manager could revolutionize property management with some customizations. Large market opportunity.',
  'new',
  'medium',
  '2024-01-04 21:30:00+00'
),
(
  'Harper Green',
  'harper.g@agriculture.tech',
  'Farm Management Software',
  'Precision agriculture needs dashboards like yours. Could adapt for crop monitoring and equipment tracking.',
  'read',
  'medium',
  '2024-01-04 19:15:00+00'
),
(
  'Ivy Adams',
  'ivy.a@fashiontech.com',
  'E-commerce Customization',
  'Your dashboard is perfect for our fashion e-commerce startup. Need inventory management enhancements.',
  'new',
  'high',
  '2024-01-03 23:00:00+00'
),
(
  'Jordan Baker',
  'jordan.b@sportsanalytics.com',
  'Sports Performance Tracker',
  'Athlete training data visualization needs. Your dashboard skills could create something groundbreaking.',
  'read',
  'medium',
  '2024-01-03 20:45:00+00'
),
(
  'Kai Carter',
  'kai.c@spacex.edu',
  'Satellite Data Dashboard',
  'NASA adjacent project needs dashboard for satellite telemetry data. Your expertise is valuable.',
  'archived',
  'low',
  '2024-01-03 18:30:00+00'
),
(
  'Leo Davis',
  'leo.d@musicfestival.com',
  'Event Management System',
  'Large music festival needs attendee management system. Your task manager could scale with modifications.',
  'new',
  'high',
  '2024-01-02 22:15:00+00'
),
(
  'Maya Evans',
  'maya.e@nonprofit.health',
  'Vaccination Tracker',
  'Developing country vaccination campaign needs tracking system. Humanitarian project, limited budget.',
  'read',
  'high',
  '2024-01-02 20:00:00+00'
),
(
  'Nico Foster',
  'nico.f@gameengine.dev',
  'Game Dev Tools',
  'Your real-time chat would be perfect for in-game communication. Could integrate with Unity/Unreal.',
  'replied',
  'medium',
  '2024-01-02 17:45:00+00'
),
(
  'Olive Garcia',
  'olive.g@fooddelivery.com',
  'Delivery Logistics',
  'Food delivery optimization needs real-time tracking dashboard. Your e-commerce base is 80% there.',
  'new',
  'high',
  '2024-01-01 23:30:00+00'
),
(
  'Phoenix Harris',
  'phoenix.h@civictech.org',
  'Government Transparency',
  'Making government data accessible through your dashboard skills. Grant-funded open source project.',
  'read',
  'medium',
  '2024-01-01 21:15:00+00'
),
(
  'Quincy Clark',
  'quincy.c@accessibility.dev',
  'Screen Reader Optimization',
  'Your projects need better screen reader support. I''m blind and can help test/improve accessibility.',
  'new',
  'high',
  '2024-01-01 19:00:00+00'
),
(
  'Riley Johnson',
  'riley.j@eldercare.tech',
  'Senior Care Monitoring',
  'Remote elderly care monitoring system needs your dashboard expertise. Social impact venture.',
  'read',
  'high',
  '2023-12-31 22:45:00+00'
),
(
  'Skyler Lee',
  'skyler.l@musicproduction.com',
  'Audio Collaboration Tool',
  'Musicians need real-time collaboration like your chat app but for audio files. Unique market niche.',
  'new',
  'medium',
  '2023-12-31 20:30:00+00'
),
(
  'Taylor Martin',
  'taylor.m@urbanplanning.gov',
  'Smart City Dashboard',
  'Municipal smart city initiative needs IoT data dashboard. Your skills match our technical requirements.',
  'read',
  'high',
  '2023-12-31 18:15:00+00'
),
(
  'Uriel Nelson',
  'uriel.n@ethicalai.org',
  'AI Ethics Dashboard',
  'Monitoring AI systems for bias needs visualization tools. Your dashboard could have ethical impact.',
  'archived',
  'low',
  '2023-12-30 23:00:00+00'
),
(
  'Valentina Roberts',
  'valentina.r@culturalsites.com',
  'Museum Exhibit Guide',
  'Interactive museum guides need your weather app''s beautiful UI but for artifact information.',
  'new',
  'medium',
  '2023-12-30 20:45:00+00'
),
(
  'Weston Scott',
  'weston.s@disasterresponse.org',
  'Emergency Response System',
  'Natural disaster coordination needs real-time communication like your chat app but for first responders.',
  'read',
  'high',
  '2023-12-30 18:30:00+00'
),
(
  'Ximena Turner',
  'ximena.t@languageteach.com',
  'Language Learning Platform',
  'Interactive language practice needs chat functionality with translation features. Your base is perfect.',
  'replied',
  'medium',
  '2023-12-29 22:15:00+00'
),
(
  'Yael White',
  'yael.w@renewable.energy',
  'Energy Grid Monitoring',
  'Renewable energy grid needs real-time monitoring dashboard. Your technical stack matches perfectly.',
  'new',
  'high',
  '2023-12-29 20:00:00+00'
),
(
  'Zane Young',
  'zane.y@construction.tech',
  'Construction Site Management',
  'Large construction projects need task management with photo uploads and location tracking.',
  'read',
  'medium',
  '2023-12-29 17:45:00+00'
);