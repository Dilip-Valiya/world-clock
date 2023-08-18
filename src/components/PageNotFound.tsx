import React from "react";
import styles from "../styles/PageNotFound.module.css";
import { useNavigate } from "react-router-dom";
import useDocumentTitle from "../lib/useDocumentTitle";
import { Button } from "antd";
import { WORLD_CLOCK } from "../constant";

function PageNotFound() {
  const navigate = useNavigate();
  useDocumentTitle("World Clock UI | Page Not Found");

  return (
    <div id={styles["notfound"]}>
      <div className={styles.notfound}>
        <div className={styles["notfound-404"]}>
          <h1>404</h1>
        </div>
        <h2>We are sorry, Page not found!</h2>
        <p>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Button
          data-testid="return-home-button"
          className={styles["button-home"]}
          type="primary"
          onClick={() => navigate(WORLD_CLOCK)}
        >
          Back To Homepage
        </Button>
      </div>
    </div>
  );
}

export default PageNotFound;
