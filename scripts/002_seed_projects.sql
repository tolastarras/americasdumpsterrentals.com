-- Seed some example programming projects
INSERT INTO projects (title, description, long_description, category, tech_stack, preview_image, file_url) VALUES
(
  'E-Commerce Dashboard',
  'A complete admin dashboard for managing products, orders, and customers.',
  'This comprehensive e-commerce dashboard includes product management, order tracking, customer analytics, inventory management, and sales reports. Built with modern React patterns and includes both light and dark themes.',
  'Web App',
  ARRAY['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  '/placeholder.svg?height=400&width=600',
  'https://example.com/downloads/ecommerce-dashboard.zip'
),
(
  'Real-Time Chat Application',
  'Full-stack chat app with WebSocket support and message persistence.',
  'A fully functional chat application featuring real-time messaging, user presence indicators, typing indicators, message history, file sharing capabilities, and group chat support. Includes both web and mobile-responsive designs.',
  'Full Stack',
  ARRAY['Node.js', 'Socket.io', 'React', 'PostgreSQL'],
  '/placeholder.svg?height=400&width=600',
  'https://example.com/downloads/chat-app.zip'
),
(
  'AI Image Generator',
  'Integration with AI APIs to generate images from text prompts.',
  'This project demonstrates how to build an AI-powered image generation tool. Includes prompt management, image history, download functionality, and API rate limiting. Perfect for learning AI integration patterns.',
  'AI/ML',
  ARRAY['Python', 'FastAPI', 'React', 'OpenAI'],
  '/placeholder.svg?height=400&width=600',
  'https://example.com/downloads/ai-image-gen.zip'
),
(
  'Task Management System',
  'Kanban-style task manager with drag-and-drop and team collaboration.',
  'A powerful task management system featuring Kanban boards, drag-and-drop functionality, task assignments, due dates, labels, file attachments, and team collaboration tools. Includes notification system and activity logs.',
  'Web App',
  ARRAY['Vue.js', 'Vuex', 'Node.js', 'MongoDB'],
  '/placeholder.svg?height=400&width=600',
  'https://example.com/downloads/task-manager.zip'
),
(
  'REST API Starter Kit',
  'Production-ready API boilerplate with authentication and documentation.',
  'A comprehensive REST API starter kit with JWT authentication, role-based access control, request validation, error handling, rate limiting, API documentation with Swagger, and testing setup. Perfect foundation for any backend project.',
  'Backend',
  ARRAY['Node.js', 'Express', 'PostgreSQL', 'JWT'],
  '/placeholder.svg?height=400&width=600',
  'https://example.com/downloads/api-starter.zip'
),
(
  'Mobile Weather App',
  'Cross-platform weather app with beautiful animations and forecasts.',
  'A stunning weather application with location-based forecasts, 7-day predictions, hourly breakdowns, weather alerts, and beautiful weather-themed animations. Includes offline caching and widget support.',
  'Mobile',
  ARRAY['React Native', 'TypeScript', 'Weather API'],
  '/placeholder.svg?height=400&width=600',
  'https://example.com/downloads/weather-app.zip'
);
