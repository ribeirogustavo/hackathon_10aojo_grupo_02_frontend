import {
  Container,
  Grid,
  Button,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import CardView from "../../Components/CardView";
import { IMovie } from "../../Interfaces/IMovies";
import useAPI from "../../Services/APIs/Common/useAPI";
import Movies from "../../Services/APIs/Movies/Movies";
import Colors from "../../Utils/Common/Colors";
import CircularProgress from "@mui/material/CircularProgress";
import { Else, If, Then } from "react-if";
import "./HomeStyles.css";

const Home = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const getPersonAPI = useAPI(Movies.getMovies);

  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    setIsLoading(true);
    getPersonAPI
      .requestPromise(searchText)
      .then((info: IMovie[]) => {        
        console.log(info);
        setMovies(info);
        setIsLoading(false);
      })
      .catch((info: any) => {
        console.log(info);
      });
  };

  const onChangeSearch = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchText(event.target.value);
  };


  let arrayInfo: JSX.Element[] = [];
  movies.forEach((movie: IMovie) => {
    arrayInfo.push(
      <Grid item xs={4} key={movie.id}>
        <CardView movie={movie} />
      </Grid>
    );
  });

  return (
    <Container maxWidth="lg">
      <Grid container direction="row" spacing={15}>
        <Grid item lg={12}>
          <Grid container spacing={2} className="header">
            <Grid item lg={6}>
              <Typography variant="h1" color={Colors.PrimaryLight}>
                Movies Catalog
              </Typography>
            </Grid>
            <Grid item lg={6} className="buttonsDiv">
              <TextField
                id="filled-basic"
                label="Pesquisar"
                size="small"
                onChange={onChangeSearch}
              /> &nbsp;
              <Button variant="contained" onClick={() => getData()}>Buscar</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12} className="divCards">
          <If condition={isLoading}>
            <Then>
              <Box className="progress">
                <CircularProgress />
              </Box>
            </Then>
            <Else>
              <Grid container spacing={2}>
                {arrayInfo}
              </Grid>
            </Else>
          </If>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
