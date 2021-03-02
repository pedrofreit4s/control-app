import queryString from "query-string";
import { useEffect, useRef } from "react";
import { RouterProps } from "react-router-dom";
import Swal from "sweetalert2";
import AuthTemplate from "../../templates/auth";
import api, { TrateException } from "../../utils/api";

export default function Activate(p: any, { history }: RouterProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const urlParams = queryString.parse(p.history.location.search);

  let closeOverlay = () => {
    overlayRef.current?.classList.remove("overlay__loadding");
    overlayRef.current?.classList.add("overlay__loadding__none");
  };

  useEffect(() => {
    api.get(`/account/activate/${p.match.params.token}`).then(({ data }) => {
      TrateException(
        data,
        () => {
          setTimeout(() => {
            Swal.fire({
              title: "Sucesso!",
              text: data.message,
              icon: "success",
            }).then(() =>
              p.history.push(
                `/auth${urlParams.email ? `?email=${urlParams.email}` : ""}`
              )
            );
            closeOverlay();
          }, 2000);
        },
        () => {
          setTimeout(() => {
            Swal.fire({
              title: "Problema",
              text: data.message,
              icon: "error",
            }).then(() =>
              p.history.push(
                `/auth${urlParams.email ? `?email=${urlParams.email}` : ""}`
              )
            );
            closeOverlay();
          }, 2000);
        }
      );
    });
  }, []);

  return (
    <AuthTemplate title="Ative a sua conta!">
      <div ref={overlayRef} className="overlay__loadding">
        <div className="wrapper__cover">
          <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
          </div>
          <h3>Ativando sua conta!</h3>
          <p>Espere alguns segundos, validamos os seus dados..</p>
        </div>
      </div>
    </AuthTemplate>
  );
}
