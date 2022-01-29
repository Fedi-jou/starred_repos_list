import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Card.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  // marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({
  avatar,
  username,
  reponame,
  stars,
  issues,
  description,
  link,
  date,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const full_date = new Date(date);
  const day = full_date.getDate();
  const month = full_date.getMonth();
  const year = full_date.getFullYear();

  return (
    <div className="wrapper">
      <Card sx={{ height: "auto", Width: 500, mb: 8 }} className="card">
        <div className="flex_header">
          <CardHeader
            avatar={
              <Avatar
                alt="person avatar"
                src={avatar}
                sx={{ width: 100, height: 100 }}
              />
            }
          />
          <div>
            <Typography
              variant="h5"
              color="text.secondary"
              fontSize={{
                md: 35,
                sm: 23,
                xs: 12,
              }}
            >
              {username}
            </Typography>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{ fontWeight: "Medium" }}
              fontSize={{
                md: 40,
                sm: 25,
                xs: 14,
              }}
            >
              {reponame}
            </Typography>
          </div>
        </div>

        <CardContent>
          <Typography
            mb={1}
            sx={{ fontFamily: "Monospace" }}
            color="text.secondary"
            variant="h6"
            fontSize={{
              md: 25,
              sm: 20,
              xs: 17,
            }}
          >
            Description :
          </Typography>

          {`${description}` === "null" ? (
            <Typography
              variant="h7"
              sx={{ fontFamily: "Source Code Pro", fontWeight: "500" }}
            >
              Sorry... No Description is available.
            </Typography>
          ) : (
            <Typography
              variant="h7"
              sx={{ fontFamily: "Source Code Pro", fontWeight: "500" }}
            >
              {description} .
            </Typography>
          )}
        </CardContent>
        <div className="flex_footer">
          <div>
            <IconButton>
              <StarBorderRoundedIcon />
            </IconButton>
            <Typography
              variant="h7"
              sx={{ fontWeight: "Medium", letterSpacing: 2, mb: 0 }}
            >
              {stars} Stars
            </Typography>
          </div>
          <div>
            <IconButton>
              <AdjustRoundedIcon />
            </IconButton>
            {`${issues}` <= 1 ? (
              <Typography
                variant="h7"
                sx={{ fontWeight: "Medium", letterSpacing: 2 }}
              >
                {issues} Issue
              </Typography>
            ) : (
              <Typography
                variant="h7"
                sx={{ fontWeight: "Medium", letterSpacing: 2 }}
              >
                {issues} Issues
              </Typography>
            )}
          </div>

          <div>
            <Typography
              variant="h8"
              sx={{ fontWeight: "Medium", letterSpacing: 2 }}
            >
              Created at : {day}/{month + 1}/{year}
            </Typography>
          </div>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </div>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className="wrapper">
            <Typography sx={{ fontWeight: "700", letterSpacing: 2 }}>
              Do you feel curious about this repository ?
            </Typography>
            <Typography sx={{ fontWeight: "500", letterSpacing: 2 }}>
              Check their work and rate it , Why not fork some code too ...
            </Typography>
            <IconButton aria-label="share">
              <a href={link} target="_blank" rel="noreferrer">
                <GitHubIcon
                  sx={{ mt: 3 }}
                  style={{ fontSize: 60, color: "black" }}
                />
              </a>
            </IconButton>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
