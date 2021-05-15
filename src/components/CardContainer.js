import React, { useState, useEffect } from "react";
import CardComp from "./CardComp";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  idvItem: {
    padding: theme.spacing(2),
  },
}));

const CardContainer = ({ seed }) => {
  const classes = useStyles();

  const [data, setData] = useState({ results: [] });
  const [pageNumber, setPageNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const nextPage = () => {
    setIsLoading(false);
    setPageNumber(pageNumber + 1);
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  useEffect(() => {
    fetchData(pageNumber);
  }, [pageNumber]);

  const fetchData = async (pageNumber) => {
    const res = await axios(
      `https://randomuser.me/api/?page=${pageNumber}&results=9&seed=${seed}`
    );
    setData(() => res.data.results);
  };

  const getFullUserName = (data) => {
    const {
      name: { first, last },
    } = data;
    return `${first} ${last}`;
  };

  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "50px",
        }}
      >
        <div>
          <Button variant="outlined" color="primary" onClick={prevPage}>
            <ArrowBackIcon />
            Prev Page
          </Button>
        </div>
        <div></div>
        <div>
          <Button variant="contained" color="primary" onClick={nextPage}>
            Next Page
            <ArrowForwardIcon />
          </Button>
        </div>
      </Container>

      <div className={classes.cardGrid}>
        <Container>
          <Grid
            style={{
              background:
                "linear-gradient(0deg, rgba(34,182,195,1) 0%, rgba(40,14,255,0.4192051820728291) 100%)",
              paddingBottom: "1rem",
            }}
            container
            spacing={3}
          >
            {isLoading ? (
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  display: "flex",
                  justifyContent: "center",
                  color: "#fff",
                  alignItems: "center",
                }}
              >
                <h3>Try clicking "Next Page" to load the First set of users</h3>
              </div>
            ) : (
              data &&
              data.map((user) => (
                <Grid item xs={12} md={4}>
                  <CardComp
                    userName={getFullUserName(user)}
                    country={user.nat}
                    imgSrc={user.picture.large}
                    gender={user.gender}
                    age={user.dob.age}
                    className={classes.idvItem}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default CardContainer;
