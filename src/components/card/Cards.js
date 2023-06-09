import React, { Fragment, useState, useEffect } from "react";
import { Container,Stack,Typography,Box,Card, Button,CardContent,CardMedia,} from "@mui/material";
import celebs from "../../assests/images/celebs.png";
import line from "../../assests/images/line.png";
import downarrow from "../../assests/images/downarrow.png";
import uparrow from "../../assests/images/uparrow.png";
import firstlogo from "../../assests/images/firstlogo.png";
import greenarrow from "../../assests/images/greenarrow.png";
import mlppic from "../../assests/images/mlppic.png";
import third from "../../assests/images/third.png";
import arrows from "../../assests/images/arrows.png";
import dot from "../../assests/images/dot.png";
import dollars from "../../assests/images/dollars.png";
import cardprofile1 from "../../assests/images/cardprofile1.png";
import cardprofile2 from "../../assests/images/cardprofile2.png";
import cardprofilepic3 from "../../assests/images/cardprofilepic3.png";
import Alert from '@mui/material/Alert';
import {cardHeaderText, cardV2fText,cardIconText,cebLine,cardMediaSx,
  cardMediaBox,logoSx,celebsBox,v2fValueBox,coinRow,priceRow,bottomArrow, 
  dotBox,flexBox,} from "../../styles/style";
import fetchCardList from "../../api/CardsApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from '@mui/material/CircularProgress';
import { celebStack, celebsBoxSx, dollariconSx, dotSx, greenArrowSx, greenarrowSx, mlppicSx } from "./style";

const notify = (error) => toast(error);

const Cards = () => {

  const [data, setData] = useState([]);
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState();
  const [showData , setShowData] = useState(false);

  const [show, setShow] = useState("auto");
  const [picTop, setpicTop] = useState("30px");
  const [arrow, setArrow] = useState(uparrow);

  const [showSecond, setShowSecond] = useState("auto");
  const [picTopSecond, setpicTopSecond] = useState("30px");
  const [arrowSecond, setArrowSecond] = useState(uparrow);

  const [showThird, setShowThird] = useState("120px");
  const [picTopThird, setpicTopThird] = useState("-25px");
  const [arrowThird, setArrowThird] = useState(downarrow);

  useEffect(() => {
    fetchCardList(setData, notify,setLoading,setError,setShowData);
  }, []);

  console.log("This is card component data", data);

  const showCard = () => {
    setShow((pre) => (pre == "120px" ? "auto" : "120px"));
    setpicTop((pre) => (pre == "30px" ? "-25px" : "30px"));
    setArrow((pre) => (pre == downarrow ? uparrow : downarrow));
    console.log(show);
  };

  const showCardSecond = () => {
    setShowSecond((pre) => (pre == "120px" ? "auto" : "120px"));
    setpicTopSecond((pre) => (pre == "30px" ? "-25px" : "30px"));
    setArrowSecond((pre) => (pre == downarrow ? uparrow : downarrow));
    console.log(showSecond);
  };

  const showCardThird = () => {
    setShowThird((pre) => (pre == "120px" ? "auto" : "120px"));
    setpicTopThird((pre) => (pre == "30px" ? "-25px" : "30px"));
    setArrowThird((pre) => (pre == downarrow ? uparrow : downarrow));
    console.log(showThird);
  };

  return (
    <Fragment>
      <Container maxWidth="custom" sx={{ backgroundColor: "#f9f0f6" }}>
        <Stack
          direction={{ xl: "row", lg: "column", xs: "column" }}
          justifyContent={{ lg: "space-around", md: "center" }}
          alignItems={{ lg: "space-around" }}
        >
          <Box sx={celebsBox}>
            <Box
              component="img"
              src={celebs}
              sx={celebsBoxSx}
            ></Box>
            <Box component="img" src={line} sx={cebLine}></Box>
          </Box>

          <Stack
            sx={celebStack}
            direction={{ md: "row", xs: "column" }}
            justifyContent="space-around"
            alignItems="center"
            spacing={{ xl: 9, md: 2, xs: 4 }}
          >

         {loading &&
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
         </Box>
          }

          

         {!showData && !loading ? (
          <>
          {!showData && data.length !==0 && (
          <>
            {data.map((data) => (
              <Box sx={{ position: "relative" }}>
                <Card
                  sx={{
                    maxWidth: "500px",
                    width: {
                      xl: "350px",xlg: "400px",lg: "350px",md: "350px",sm: "500px",xs: "320px",
                    },
                    height: show,
                  }}
                >
                  <CardMedia sx={cardMediaSx}>
                    <Box sx={cardMediaBox}>
                      <Typography sx={cardHeaderText}>
                        {data.userName}
                      </Typography>
                      <Box component="img" src={firstlogo} sx={logoSx}></Box>
                    </Box>
                  </CardMedia>

                  <CardContent sx={{ padding: "0px" }}>
                    <Box
                      component="img"
                      src={cardprofile1}
                      sx={{
                        width: { sm: "auto", xs: "170px" },
                        height: { sm: "auto", xs: "170px" },
                        position: "absolute",
                        left: { sm: "-65px", xs: "-36px" },
                        top: picTop,
                        zIndex: 9999,
                        overflow: "visible",
                      }}
                    ></Box>
                    <Box sx={v2fValueBox}>
                      <Typography sx={cardV2fText}>v2f Value</Typography>

                      <Box sx={flexBox}>
                        <Box
                          component="img"
                          src={greenarrow}
                          sx={greenArrowSx}
                        ></Box>
                        <Typography sx={cardIconText}>
                          {data.coinV2FValue}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={coinRow}>
                      <Typography sx={cardV2fText}>Coin</Typography>

                      <Box sx={flexBox}>
                        <Box
                          component="img"
                          src={mlppic}
                          sx={mlppicSx}
                        ></Box>
                        <Typography sx={cardIconText}>
                          {data.coinName}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={priceRow}>
                      <Typography sx={cardV2fText}>Price</Typography>

                      <Box sx={flexBox}>
                        <Box
                          component="img"
                          src={dollars}
                          sx={dollariconSx}
                        ></Box>
                        <Typography sx={cardIconText}>
                          {data.coinValue}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>

                <Box sx={{ position: "relative" }}>
                  <Box onClick={showCard}>
                    <Box sx={bottomArrow}>
                      <Box component="img" src={arrow}></Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}

            {data.map((data) => (
              <Box sx={{ position: "relative" }}>
                <Card
                  sx={{
                    maxWidth: "500px",
                    width: {
                      xl: "350px",xlg: "400px",lg: "350px",md: "350px",sm: "500px",xs: "320px",
                    },

                    height: showSecond,
                  }}
                >
                  <CardMedia sx={cardMediaSx}>
                    <Box sx={cardMediaBox}>
                      <Typography sx={cardHeaderText}>
                        {data.userName}
                      </Typography>
                      <Box component="img" src={firstlogo} sx={logoSx}></Box>
                    </Box>
                  </CardMedia>

                  <CardContent sx={{ padding: "0px" }}>
                    <Box
                      component="img"
                      src={cardprofile2}
                      sx={{
                        width: { sm: "auto", xs: "170px" },
                        height: { sm: "auto", xs: "170px" },
                        position: "absolute",
                        left: { sm: "-65px", xs: "-36px" },
                        top: picTopSecond,
                        zIndex: 9999,
                        overflow: "visible",
                      }}
                    ></Box>
                    <Box sx={v2fValueBox}>
                      <Typography sx={cardV2fText}>v2f Value</Typography>

                      <Box sx={flexBox}>
                        <Box
                          component="img"
                          src={greenarrow}
                          sx={greenArrowSx}
                        ></Box>
                        <Typography sx={cardIconText}>
                          {data.coinV2FValue}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={coinRow}>
                      <Typography sx={cardV2fText}>Coin</Typography>

                      <Box sx={flexBox}>
                        <Box
                          component="img"
                          src={mlppic}
                          sx={mlppicSx}
                        ></Box>
                        <Typography sx={cardIconText}>
                          {data.coinName}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={priceRow}>
                      <Typography sx={cardV2fText}>Price</Typography>

                      <Box sx={flexBox}>
                        <Box
                          component="img"
                          src={dollars}
                          sx={dollariconSx}
                        ></Box>
                        <Typography sx={cardIconText}>
                          {data.coinValue}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>

                <Box sx={{ position: "relative" }}>
                  <Box onClick={showCardSecond}>
                    <Box sx={bottomArrow}>
                      <Box component="img" src={arrowSecond}></Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}

            {data.map((data) => (
              <Box sx={{ position: "relative" }}>
                <Card
                  sx={{
                    maxWidth: "500px",
                    // height: { sm: "238px", xs: "200px" },
                    width: {
                      xl: "350px",xlg: "400px",lg: "350px",md: "350px",sm: "500px", xs: "320px",
                    },

                    height: showThird,
                  }}
                >
                  <CardMedia sx={cardMediaSx}>
                    <Box sx={cardMediaBox}>
                      <Typography sx={cardHeaderText}>
                        {data.userName}
                      </Typography>
                      <Box component="img" src={third} sx={logoSx}></Box>
                    </Box>
                  </CardMedia>

                  <CardContent sx={{ padding: "0px" }}>
                    <Box
                      component="img"
                      src={cardprofilepic3}
                      sx={{
                        width: { sm: "auto", xs: "170px" },
                        height: { sm: "auto", xs: "170px" },
                        position: "absolute",
                        left: { sm: "-65px", xs: "-36px" },
                        top: picTopThird,
                        zIndex: 9999,
                        overflow: "visible",
                      }}
                    ></Box>
                    <Box sx={v2fValueBox}>
                      <Typography sx={cardV2fText}>v2f Value</Typography>

                      <Box sx={flexBox}>
                        <Box
                          component="img"
                          src={greenarrow}
                          sx={greenArrowSx}
                        ></Box>
                        <Typography sx={cardIconText}>
                          {data.coinV2FValue}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={coinRow}>
                      <Typography sx={cardV2fText}>Coin</Typography>

                      <Box sx={flexBox}>
                        <Box
                          component="img"
                          src={mlppic}
                          sx={mlppicSx}
                        ></Box>
                        <Typography sx={cardIconText}>
                          {data.coinName}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={priceRow}>
                      <Typography sx={cardV2fText}>Price</Typography>

                      <Box sx={flexBox}>
                        <Box
                          component="img"
                          src={dollars}
                          sx={dollariconSx}
                        ></Box>
                        <Typography sx={cardIconText}>
                          {data.coinValue}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>

                <Box sx={{ position: "relative" }}>
                  <Box onClick={showCardThird}>
                    <Box sx={bottomArrow}>
                      <Box component="img" src={arrowThird}></Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}

            </>
         )}

          </>
         ) : (
          <>
          {showData && !loading && ( 
         
         <Alert variant="filled" severity="error">
         {error}
        </Alert>
         
          )}

          </>
         )}
         
          </Stack>
        </Stack>

        <Box sx={dotBox}>
          <Box component="img" src={arrows}></Box>
          <Box
            component="img"
            src={dot}
            sx={dotSx}
          ></Box>
        </Box>

       
      </Container>
      <ToastContainer />
    </Fragment>
  );
};
export default Cards;
