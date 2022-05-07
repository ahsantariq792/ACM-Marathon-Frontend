import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../App.css"

export default function ImgMediaCard(props) {
  return (
    <Card className="card-main" sx={{ maxWidth: 345 }}>
      <CardContent className="card">
        <Typography gutterBottom variant="h6" component="div">
          Task Name: {props.title}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Task Nature: {props.tasknature}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Status: {props.status}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Created By: {props.createdby}
        </Typography>
        <Typography variant="p" color="text.secondary">
          Last Updated: {props.lastupdated}
        </Typography>
      </CardContent>
      <CardActions className="cardDetails-btn">
        <Button variant="contained" className="order">Details</Button>
      </CardActions>
    </Card>
  );
}