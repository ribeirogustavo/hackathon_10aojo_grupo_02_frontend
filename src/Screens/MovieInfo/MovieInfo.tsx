import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import Colors from "../../Utils/Common/Colors";
import { IMovie } from "../../Interfaces/IMovies";
import { useEffect, useState } from "react";
import useAPI from "../../Services/APIs/Common/useAPI";
import Movies from "../../Services/APIs/Movies/Movies";
import CardView from "../../Components/CardView";

type IProps = {
    movieId: string;  
  };

const MovieInfo = ({movieId}: IProps) => {
    const [movie, setInfo] = useState<IMovie | null>(null);
    const getMovies = useAPI(Movies.getMovieInfo);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    useEffect(() => {
        getMoviesData();
      }, []);

    const getMoviesData = () => {
        setIsLoading(true);
        getMovies
          .requestPromise(movieId)
          .then((movie: IMovie) => {        
            console.log('movie: ', movie);
    
            setInfo(movie);
            setIsLoading(false);
          })
          .catch((movie: any) => {
            console.log(movie);
          });
      };
    
    return(
        <Container maxWidth="lg">
        <Grid item lg={6}>
            <Typography variant="h1" color={Colors.PrimaryLight}>
                Movie Info
            </Typography>
        </Grid>
        <Grid item lg={12}>
            <Grid container spacing={2} className="header">
            <Grid item xs={8} key={movie?.id}>
        <Card>
      <CardMedia
        sx={{ height: 140 }}
        image={movie?.cover_uri}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color={Colors.PrimaryLight} className="titleClass">
          Title: {movie?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="descriptionClass">
          Description: {movie?.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="descriptionClass">
          Category: {movie?.category}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="descriptionClass">
          Release Date: {movie?.release_date}
        </Typography>
      </CardContent>
    </Card>
      </Grid>
            </Grid>
          </Grid>
      </Container>
    );
}

export default MovieInfo;