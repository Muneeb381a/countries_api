import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <p className="error-message">
          Oops! The page youre looking for doesnt exist.
        </p>
        <a href="/" className="error-button">
          Go Back Home
         </a>
        <div className="hidden">{error & <p>{error.data}</p>}</div>
      </div>
    </div>
  );
};

export default ErrorPage;
