import { cssBundleHref } from "@remix-run/css-bundle";
import styles from "./styles/app.css";
import 'flowbite';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import NavBar from "./components/NavBar";
import FooTer from "./components/FooTer";
import 'react-toastify/dist/ReactToastify.css';

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    // { rel: "stylesheet", href: cssBundleHref },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NavBar/>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <FooTer/>
      </body>
    </html>
  );
}
