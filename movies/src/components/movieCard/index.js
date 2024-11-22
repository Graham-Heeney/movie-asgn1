import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Avatar from '@mui/material/Avatar';
import { MoviesContext } from "../../contexts/moviesContext";
import { Link } from "react-router-dom";
import img from '../../images/film-poster-placeholder.png';
import { useTheme } from "@mui/material/styles";

export default function MovieCard({ movie, action }) {
  const { favorites, addToFavorites } = useContext(MoviesContext);
  const theme = useTheme();

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false;
  }

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(movie);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: theme.palette.primary.main, 
        transition: 'transform 0.3s',
        '&:hover': { transform: 'scale(1.05)' },
      }}
    >
      <CardHeader
        avatar={
          movie.favorite ? (
            <Avatar sx={{ backgroundColor: 'red', width: 30, height: 30 }}>
              <FavoriteIcon fontSize="small" />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h6" component="p" sx={{ fontWeight: 'bold', color: 'white' }}> 
            {movie.title}
          </Typography>
        }
        sx={{
          backgroundColor: theme.palette.primary.main, 
        }}
      />
      <CardMedia
        sx={{
          height: 400,
          objectFit: 'cover',
        }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent sx={{ backgroundColor: theme.palette.primary.main }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="body2" component="p" sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
              <CalendarIcon fontSize="small" sx={{ mr: 1 }} />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" component="p" sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
              <StarRateIcon fontSize="small" sx={{ mr: 1 }} />
              {movie.vote_average}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing sx={{ backgroundColor: theme.palette.primary.main }}>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
         <Button
    variant="contained"  // contained for a solid button
    size="medium"
    color="secondary"    // Use the secondary color for better contrast with the background
    sx={{
      color: 'white',       // makes the text white
      backgroundColor: 'rgba(255, 255, 255, 0.7)',  // Light background.
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // makes it darker when you hover.
      },
    }}
  >
    More Info ...
  </Button>
</Link>

        <IconButton
          onClick={handleAddToFavorite}
          sx={{
            color: movie.favorite ? 'red' : 'white', 
            '&:hover': { color: 'red' }, 
          }}
        >
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
