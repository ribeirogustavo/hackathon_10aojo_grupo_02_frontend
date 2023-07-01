import {
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { IMovie } from "../Interfaces/IMovies";
import Colors from "../Utils/Common/Colors";
import "./CardStyles.css"

type IProps = {
  movie: IMovie;  
};

const CardView = ({movie} : IProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={movie.cover_uri}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color={Colors.PrimaryLight} className="titleClass">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="descriptionClass">
          {movie.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardView;;