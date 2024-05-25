## Auth Endpoints

### Register

```http
  POST /api/auth/register
```

| Body       | Type     | Description                                                  |
| :--------- | :------- | :----------------------------------------------------------- |
| `email`    | `string` | **Required**                                                 |
| `password` | `string` | **Required** Min. 8 characters, Min. 3 numbers, Min 1 letter |
| `username` | `string` | **Required** Min. 5 characters                               |

#### Example code:

```js
fetch("/api/auth/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "test@test.com",
    username: "testuser1",
    password: "testpw12345",
  }),
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    // { success: true, message: 'user created' }
  });
```

### Login

```http
  POST /api/login
```

| Body       | Type     | Description  |
| :--------- | :------- | :----------- |
| `username` | `string` | **Required** |
| `password` | `string` | **Required** |

#### Example code:

```js
fetch("/api/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "testuser1",
    password: "testpw12345",
  }),
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    /*
        {
  success: true,
  token: 'json web token'
}
        */
  });
```
