import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {  TwitterTweetEmbed } from 'react-twitter-embed';
import "./StoreInfo.css"

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 15,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function StoreInfo() {
  const classes = useStyles();
  return(
    <div className="store-info">
      <Card className="store-card1">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          News
        </Typography>
        <TwitterTweetEmbed tweetId="1201857902740267009" placeholder="Loading"/>
      </CardContent>
    </Card>
    </div>
  )
}