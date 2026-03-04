# Ecommerce Phones

Proyecto final ITBA - E-commerce de muebles premium

## Descripción

Hermanos Jota es una aplicación web para la venta de muebles premium, desarrollada como proyecto para ITBA. Permite explorar productos, ver detalles, filtrar por categoría y precio, y simular compras.
Se pueden crear usuarios y dependiendo de su rol asignado tiene diferentes acciones posibles: El usuario por defecto se crea con un rol **_user_** el cual es necesario para poder acceder al carrito y realizar tus compras. Por otra lado tenemos los usuarios de rol **_admin_** el cual nos permite controlar el stock de productos(agregar, editar o eliminar un producto) y a su vez nos permite adminstrar los usuarios.

## Tecnologías

- **Frontend:** React.js, Tyescrpit,Tailwindcss y lucide-react (para icons).
- **Backend:** Javascript + Typescript (Entorno de ejecución Node.js)
- **Base de datos:** MongoDB, mongoose
- **Otros:** JWT, bcrypt, nodemailer

## Instalación

1. Clona el repositorio:

   ```
   git clone https://github.com/faustoleal/ecommerce-phones

   ```

2. Instala las dependencias:

   ```
   npm install
   ```

## Ejecución

- Inicia la app:

  ```
  npm start o npm run dev
  ```

  La aplicación corre en `http://localhost:3000`.

## Despliegue

- La app se encuentra desplega en Render, puedes verla [aquí](https://ecommerce-phones-79c2.onrender.com/)

## Funcionalidades

- **Vistas:** inico, listado de productos (filtro + pagination), producto detallado (con productos relacionados por marca), contacto, login , register, carrito y panel de adminstración.
- **Contacto:** cuando el formulario de contacto se envia, el administrador recibe el mail con la consulta realizada.
- **Creación de usuarios:** con bycpry para el guardado seguro del password.
- **Autenticación:** JWT para login seguro y persistencia de sesión.
- **Carrito de compras:** CRUD completa, sincronización entre el frontend y backend, simulación de compra + envio de email de confirmación de pedido.
- **Rol admin:** si posees el rol de amdinistrador, puedes: ver los pedidos que se realizaron y modificar su estatus, y también ver los productos que tenes, crear uno nuevo, modificar la cantidad en stock o eliminar uno.

## Estructura de carpetas

```
ecommerce-phones/
├── src/
│   ├── app/
│   │   ├── admin/page.tsx
│   │   ├── api/
|   |   |   ├── carrito/[id]
|   |   |   |   ├──[productoId]
|   |   |   |   |  └── route.ts
|   |   |   |   └── route.ts
|   |   |   ├── login/
|   |   |   |   └──route.ts
|   |   |   ├── pedidos/
|   |   |   |   ├── [id]
|   |   |   |   |   └── route.ts
|   |   |   |   └── route.ts
|   |   |   ├── phones/
|   |   |   |   ├──[id]
|   |   |   |   |  └── route.ts
|   |   |   |   ├── destacados/
|   |   |   |   |   └── route.ts
|   |   |   |   ├── relacionados/
|   |   |   |   |   └── route.ts
|   |   |   |   └── route.ts
|   |   |   ├── user/
|   |   |   |   ├── [id]
|   |   |   |   |   └── route.ts
|   |   |   |   └── route.ts
|   |   |   └── route.ts
|   |   ├── carrito/page.tsx
|   |   ├── login/pages.tsx
|   |   ├── productos/
|   |   |   ├── [id]/page.tsx
|   |   |   └── page.tsx
|   |   ├── register/page.tsx
|   |   ├── favicon.ico
|   |   ├── globals.css
|   |   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
|   |   ├── admin/
|   |   |   ├── CreateForm.tsx
|   |   |   ├── PedidosTable.tsx
|   |   |   ├── ProductosTable.tsx
|   |   |   └── StatusSelect.tsx
|   |   ├── carrito/
|   |   |   ├── NotContentCarrito.tsx
|   |   |   └── NotUserCarrito.tsx
|   |   ├── display/
|   |   |   ├── Card.tsx
|   |   |   ├── Modal.tsx
|   |   |   └── Table.tsx
|   |   ├── feedback/
|   |   |   ├── Toaster.tsx
|   |   |   └── ToasterContainer.tsx
|   |   ├── forms/
|   |   |   ├── CreateAccountForm.tsx
|   |   |   └── LoginForm.tsx
|   |   ├── layout/
|   |   |   ├── DropdownMenu.tsx
|   |   |   ├── Footer.tsx
|   |   |   ├── MobileMenu.tsx
|   |   |   └── Navbar.tsx
|   |   ├── productos/
|   |   |   ├── Destacados.tsx
|   |   |   ├── DestacadosSection.tsx
|   |   |   ├── FiltroSection.tsx
|   |   |   ├── PhoneList.tsx
|   |   |   ├── PhoneSection.tsx
|   |   |   └── Relacionados.tsx
|   |   ├── ui/
|   |   |   ├── Button.tsx
|   |   |   ├── Input.tsx
|   |   |   ├── Label.tsx
|   |   |   ├── Pagination.tsx
|   |   |   ├── RatingEstrellas.tsx
|   |   |   ├── Select.tsx
|   |   |   └── Textarea.tsx
|   |   └── views/
|   |       ├── AdminPage.tsx
|   |       ├── CarritoPage.tsx
|   |       ├── ContactoPage.tsx
|   |       ├── HomePage.tsx
|   |       ├── LoginPage.tsx
|   |       ├── ProductosByIdPage.tsx
|   |       ├── ProductosPage.tsx
|   |       └── RegisterPage.tsx
|   ├── context/
|   |   ├── authFunction.ts
|   |   ├── cartFunction.ts
|   |   ├── PedidosContext.tsx
|   |   ├── ToastContext.tsx
|   |   └── UserContext.tsx
|   ├── controllers/
|   |   ├── carrito.ts
|   |   ├── login.ts
|   |   ├── pedidos.ts
|   |   ├── phones.ts
|   |   └── user.ts
|   ├── lib/
|   |   ├── db.ts
|   |   └── mailer.ts
|   ├── models/
|   |   ├── index.ts
|   |   ├── pedidos.ts
|   |   ├── phones.ts
|   |   └── user.ts
|   ├── services/
|   |   ├── carritoService.ts
|   |   ├── pedidoService.ts
|   |   ├── phonesService.ts
|   |   └── userService.ts
|   └── types/
|       ├── pedidos.ts
|       ├── phones.ts
|       └── user.ts
├── .gitignore
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Autor

- Fausto Leal
