import { useEffect } from "react";
import { Wrapper } from "./NavContextStyles";
import $ from "jquery";

export const NavContext: React.FC = (props) => {
  useEffect(() => {
    $("#addPost").css({ opacity: 0 });
    $("#addPost").animate({ opacity: 1 }, 500);
    setTimeout(() => {
      $("body").on("click", () => {
        $("#addPost").animate({ opacity: 0 }, 500);
      });
    }, 1500);
  }, []);
  return <Wrapper id="addPost">{props.children}</Wrapper>;
};
