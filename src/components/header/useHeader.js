import { useState, useCallback } from "react";
import {
  navbarOptionNames,
  businessPlanMenu,
  financingMenu,
} from "../../utils/constants/header";
import _ from "lodash";

const useHeader = () => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState();
  const debouncedSetShowFalse = useCallback(
    _.debounce(() => {
      setShow(false);
    }, 500),
    []
  );
  const setShowWithCancel = useCallback(show => {
    debouncedSetShowFalse.cancel();
    setShow(show);
  }, []);
  const setMenuContent = content => {
    switch (content) {
      case navbarOptionNames.BUSINESS_PLAN: {
        setContent(businessPlanMenu);
        break;
      }
      case navbarOptionNames.FINANCING: {
        setContent(financingMenu);
        break;
      }
      default: {
        setContent(content);
      }
    }
  };
  return {
    setContent,
    show,
    setShowWithCancel,
    debouncedSetShowFalse,
    content,
    setMenuContent,
  };
};

export default useHeader;
