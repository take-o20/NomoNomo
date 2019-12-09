import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {TwitterTweetEmbed} from 'react-twitter-embed';
import "./MenuInfo.css"

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

export default function MenuInfo() {
  const classes = useStyles();
  return(
    <div className="menu-info">
      <Card className="menu-card1">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          News
        </Typography>
        <TwitterTweetEmbed tweetId="1202771041925251072" placeholder="Loading"/>
      </CardContent>
    </Card>
    </div>
  )
}