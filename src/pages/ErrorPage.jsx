/* eslint-disable no-unused-vars */
import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  if (error.status == 404) {
    return (
      <div className="error-container container">
        <div>
          <h3>
            404 Error: Page not found. But don`t worry, our developers are on a
            treasure hunt to recover it.
          </h3>
          <Link to={"/"} className="btn">
            Go to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="error-container container">
      <div>
        <h3>
          Oops! Looks like our web page did a somersault and landed in a digital
          rabbit hole. We`re working on untangling the code. Hang tight!
        </h3>
        <Link to={"/"} className="btn">
          Go to home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
