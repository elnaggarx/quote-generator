import './App.css';
import React, {useState} from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  GabShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  WorkplaceShareButton,
  XIcon,
} from "react-share";
const App = () => {
  const shareUrl = window.location.href;
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>

          </div>
          <div className='sm-buttons'>
            <FacebookShareButton  url={url} hashtag={quote.author + " once said: " + quote.content}>
              <FacebookIcon></FacebookIcon>
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={quote.author + " once said: " + quote.content}>
              <XIcon></XIcon>
            </TwitterShareButton>
            <WhatsappShareButton url={shareUrl} title={quote.author + " once said: " + quote.content}>
              <WhatsappIcon></WhatsappIcon>
            </WhatsappShareButton>
            <TelegramShareButton url={shareUrl} title={quote.author + " once said: " + quote.content}>
              <TelegramIcon></TelegramIcon>
            </TelegramShareButton>
            
            <EmailShareButton subject={quote.author + " once said : "} body={quote.content} url={shareUrl}>
              <EmailIcon ></EmailIcon>
            </EmailShareButton>


        </div>
      </div>
    </>
  )
}


export default App;
