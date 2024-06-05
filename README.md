# Bookpal
## Simulación laboral - No Country - Mayo 2024

## Descripción

Bookpal es un proyecto web que busca facilitar la búsqueda de libros de ciertos géneros o autores creando una comunidad en donde se pueden conocer diversas opiniones sobre un libro o preferencias personales.

## Instalación

### Variables de entorno:

#### Servidor
Usar el archivo .env.template como referencia para agregar las variables necesarias a tu .env

```
PORT=3000

#Conexión a la base de datos de Mongo
MONGO_URI= La URI de accesso a la base de datos de mongo DB

#Llave secreta del jsonwebtoken
JWT_SECRET= cualquier valor, pero podría ser una serie de carácteres hexadecimales.

Para las variables de entorno GOOGLE_CLIENT_ID y GOOGLE_CLIENT_SECRET es necesario registrar un proyecto con credenciales 

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

[Información sobre las credenciales de Google](https://developers.google.com/identity/protocols/oauth2)
### Requisitos:

- NodeJS 18 o mayor
- Cuenta en mongodb
### Cliente

#### Instalación de dependencias
```
npm install
```

#### Iniciar

- Ambiente de desarrollo:

```
npm run dev
```

### Servidor

#### Instalación de dependencias

```
npm install
```
#### Iniciar

- Ambiente de desarrollo:

```
npm run dev
```

> [!IMPORTANT]
> Procurar que los puertos del servidor y cliente no sean los mismos. Se puede correr el cliente primero y después se agrega un puerto distinto al .env en /server/.env

## Tecnologías

### Frontend

- React
- Tailwind

<p align="">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,tailwind" />
  </a>
</p>


### Backend

- NodeJS
- Express

<p align="">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nodejs" />
  </a>
</p>

### UX/UI

- Figma

<p align="left  ">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=figma" />
  </a>
</p>


### Testing

## Colaboradores

- Felipe Castillo - Backend
- Pablo Palazzetti - Frontend
- Pablo López - Backend 
- Bianca - UX/UI
- Mauricio Fernando - Testing