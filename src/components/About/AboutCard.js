import React from "react";
import Card from "react-bootstrap/Card";
import MovieIcon from "@mui/icons-material/Movie";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Ben Silver </span>
             from <span className="purple"> Burlington, Vermont.</span>
            <br />I'm a Software Engineer graduate with my Bachelors from Vermont Technical College. I am also self taught a majority of languages and technoligies I know.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <MovieIcon /> Watching Movies
            </li>
            
            <li className="about-activity">
              <ScreenSearchDesktopIcon /> Researching about latest tech / code
            </li>
          </ul>

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;