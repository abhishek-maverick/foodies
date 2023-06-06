import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  const { status, statusText } = err;
  return (
    <>
      <h1>OOps...! page not existing</h1>
      <h2>{status + " - " + statusText}</h2>
    </>
  );
};

export default Error;
