export const blogs = [
  {
    id: "b1",
    topic: "what is cors?",
    published: "26 Oct 2022",
    description:
      "Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. \n\nCross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.\n\nVulnerabilities arising from CORS configuration issues. Many modern websites use CORS to allow access from subdomains and trusted third parties. Their implementation of CORS may contain mistakes or be overly lenient to ensure that everything works, and this can result in exploitable vulnerabilities.",
    img: "https://i.ibb.co/PhnS5wP/cors.png",
  },
  {
    id: "b2",
    topic:
      "Why are you using firebase? What other options do you have to implement authentication?",
    published: "26 Oct 2022",
    description:
      "Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together. \n\nFirebase is an all-in-one backend as a service provider (BaaS) that provides a database, authentication, and cloud storage among its many services. In this tutorial you're going to learn how to use the Firebase Real-Time Database service in a React application. \n\nThe Firebase Realtime Database allows data to be stored securely on Google cloud servers and synchronized in realtime across all clients sharing the same database.\n\nFirebase Hosting is a fully-managed hosting service for static and dynamic content as well as microservices. The service is backed by SSD storage and a global CDN (content delivery network). Zero-configuration SSL is built into Firebase Hosting, so content is always delivered securely.",
    img: "https://i.ibb.co/7vt3MsZ/firebase.jpg",
  },
  {
    id: "b3",
    topic: "How does the private route work?",
    published: "27 Oct 2022",
    description:
      "Protected routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route. For instance, your application can require only logged-in users be able to visit the dashboard page.\n\nThe react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.\n\nThe private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.",
    img: "https://i.ibb.co/nwd7c6F/react-router.png",
  },
  {
    id: "b4",
    topic: "What is Node? How does Node work?",
    published: "27 Oct 2022",
    description:
      "It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.\n\nNode. js takes a different approach. It runs a single-threaded event loop registered with the system to handle connections, and each new connection causes a JavaScript callback function to fire.\n\nNode JS Web Server internally maintains a Limited Thread pool to provide services to the Client Requests. Node JS Web Server receives those requests and places them into a Queue. It is known as “Event Queue”. Node JS Web Server internally has a Component, known as “Event Loop”.\n\nExpress is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.",
    img: "https://i.ibb.co/xm7tLQT/nodejs.png",
  },
];
