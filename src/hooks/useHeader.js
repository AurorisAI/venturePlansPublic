import { useState, useRef } from "react";
import {
  navbarOptionNames,
  navbarOptions,
  businessPlanMenu,
  financingMenu,
} from "../utils/constants/header";

const useHeader = () => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState();
  const setMenuContent = e => {
    switch (e.target.name) {
      case navbarOptionNames.BUSINESS_PLAN: {
        setContent(businessPlanMenu);
        break;
      }
      case navbarOptionNames.FINANCING: {
        setContent(financingMenu);
        break;
      }
      default: {
        console.log("Not listed in menus");
      }
    }
  };
  return {
    setContent,
    show,
    setShow,
    content,
    setMenuContent,
  };
};

export default useHeader;
