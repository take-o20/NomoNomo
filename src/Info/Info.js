import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import InstagramEmbed from 'react-instagram-embed';
import "./Info.css"

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
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Info() {
    const classes = makeStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
      <div className="info">
        <div className="twitter">
          <h2 className="tweet-h2">Twitter</h2>
          <div className="tweet-embed">
            <TwitterTweetEmbed tweetId="1165240819948736512" placeholder="Loading"/>
          </div>
        </div>
        <div className="instagram">
          <h2 className="insta-h2">Instagram</h2>
          <div className="insta-embed">
            <InstagramEmbed
              url='https://www.instagram.com/p/B2G-Q7Jn_6G/?utm_source=ig_web_button_share_sheet'
              maxWidth={500}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}} 
            />
          </div>
        </div>
    </div>
    )
  }