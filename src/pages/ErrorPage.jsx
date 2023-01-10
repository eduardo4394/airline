import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Ups!</h1>
      <p>Disculpas ha ocurrido un error.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Ir al Inicio</Link>
    </div>
  );
}
