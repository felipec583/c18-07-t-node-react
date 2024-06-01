import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Bookpal API",
      description:
        "API que permite el registro y autorización de los usuarios, ver libros, operaciones CRUD con reseñas a un libro, comentarios a reseñas, operaciones CRUD con listas de libros y biblioteca del usuario",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Development server",
      },
      {
        url: "https://production.example.com/api",
        description: "Production server",
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "jwt",
          description: "JWT Authorization header using the Bearer scheme.",
          name: "Authorization",
          in: "header",
        },
      },
      security: {
        BearerAuth: [],
      },
    },
  },
  customCssUrl: "/theme-material.css",
  apis: ["./src/docs/*.js"],
};

const openApiSpecification = swaggerJSDoc(options);

const swaggerDoc = (app, port) => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(openApiSpecification));

  console.log(`Documentación de la API en http://localhost:${port}/api/docs`);
  //Docs in json format

  app.get("/api/docs.json", (req, res) => {
    res.json(openApiSpecification);
  });
};

export default swaggerDoc;
