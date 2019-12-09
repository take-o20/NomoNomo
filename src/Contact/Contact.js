import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import "./Contact.css"
import CompanyLogo from "./Contact.png"
import {CopyToClipboard} from 'react-copy-to-clipboard';

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

export default function Contact(){
  const [copied, setCopied]=useState(false);
  const classes= useStyles();
  return (
    <div className="contact">
      <Card className="contact-card">
        <CardActionArea>
        <CardMedia
          component="img"
          alt="Company logo"
          image={CompanyLogo}
          title="Company log"
        />
        {/* </CardActionArea> */}
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Contact
        </Typography>
        <p className="contact-message">出店依頼、各種お問い合わせはコチラから</p><br/>
        <p className="mail">Mail</p>
        <p className="mailaddress">nomo2.nomou@gmail.com</p>
      </CardContent>
      </CardActionArea>
      <CardContent>
      <CopyToClipboard text="nomo2.nomou@gmail.com"
          onCopy={()=>{setCopied(true)}}>
        <button className="copy-button">Copy Mail Address</button>
      </CopyToClipboard>
      {copied ? 
        <span style={{color: '#3385ff'}}> Copied.</span> 
        :null}
      </CardContent>
    </Card>

    </div>
  )
}