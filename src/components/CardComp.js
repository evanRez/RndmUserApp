import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardOutline: {
    // position: "relative",
    padding: "20px 0",
    width: "100%",
    background: "#fff",
    borderRadius: "3px 3px 0px 0px",
    borderRight: "1px solid rgba(0,0,0,.15)",
    borderLeft: "1px solid rgba(0,0,0,.15)",
    borderTop: "1px solid rgba(0,0,0,.15)",
    borderBottom: "none",
    overflow: "hidden",
    textAlign: "center",
    zIndex: "5",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    "&:After": {
      content: "",
      display: "block",
      // position: "absolute",
      width: "100%",
      height: "130px",
      top: 0,
      background: "#f9f9f9",
      zIndex: -1,
    },
  },
  StatContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "10px",
  },
  NameHeader: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: "12px",
    color: "gray",
    margin: "4px 0px",
  },
  boxContainer: {
    display: "inline-flex",
    width: "100%",
    borderTop: "1px solid rgba(0,0,0,.15)",
  },
  boxLeft: {
    borderRight: "0.5px solid rgba(0,0,0,.15)",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 0",
  },
  boxRight: {
    borderLeft: "0.5px solid rgba(0,0,0,.15)",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 0",
  },
  statHeader: {
    fontSize: "14px",
    fontWeight: "bold",
  },

  cardContent: {
    borderRight: "1px solid rgba(0,0,0,.15)",
    borderLeft: "1px solid rgba(0,0,0,.15)",
    borderBottom: "1px solid rgba(0,0,0,.15)",
    borderRadius: "0px 0px 3px 3px",
    width: "100%",
  },
}));

const CardComp = (props) => {
  const classes = useStyles();

  return (
    <Card>
      <div className={classes.cardOutline}>
        <div
          className={classes.imgContainter}
          style={{
            backgroundImage: `url(${props.imgSrc})`,
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            backgroundSize: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        ></div>
      </div>
      <div className={classes.cardContent}>
        <div className={classes.StatContainer}>
          <div className={classes.NameHeader}>{props.userName}</div>
          <span></span>
          <div className={classes.subHeader}>{props.age}</div>
        </div>

        <div className={classes.boxContainer}>
          <div className={classes.boxLeft}>
            <div className={classes.subHeader}>Gender</div>
            <div className={classes.statHeader}>{props.gender}</div>
          </div>

          <div className={classes.boxRight}>
            <div className={classes.subHeader}>Country</div>
            <div className={classes.statHeader}>{props.country}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardComp;
