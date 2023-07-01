import {
  Container,
  Grid,
  Button,
  TextField,
  Typography,
  Box,
  Modal
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

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Home = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const getMovies = useAPI(Movies.getMovies);
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    }
  }, [isLoading]);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  const getMoviesData = () => {
    setIsLoading(true);
    console.log("text: ", searchText)
    getMovies
      .requestPromise(searchText)
      .then((info: IMovie[]) => {        
        console.log('info: ', info);

        if(!info.length)
          setModal(true);

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
              <Button variant="contained" onClick={() => getMoviesData()}>Buscar</Button>
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
        <Grid>
          <Modal
            open={modal}
            onClose={() => setModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
              <Box sx={modalStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Busca de filmes
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Nenhum filme foi encontrado para a sua busca
              </Typography>
            </Box>
          </Modal>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
