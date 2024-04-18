import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { demoChannelUrl } from "../utils/constants";
import { demoProfilePicture } from "../utils/constants";
import { Check, CheckCircle } from "@mui/icons-material";

const ChannelCard = (props) => {
  const snippet = props.channelDetail.snippet;
  const channelId = props.channelDetail.snippet.channelId;

  return (
    // {props.channelDetail.snippet.channelTitle}
    <Card
      sx={{
        width: {
          md: "320px",
          xs: "100%",
          backgroundColor: "#000",
          justifyContent: "center",
          textAlign: "center",
          display: "inline",
          flexDirection: "column",
          color: "#fff",
        },
      }}
    >
      <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={snippet?.channelTitle}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: 2,
            border: "1px solid #e3e3e3",
          }}
          component="img"
        />
      </Link>
      <Typography variant="h6">
        {snippet?.channelTitle}
        <CheckCircle sx={{ fontSize: 14, ml: "5px" }} />
      </Typography>
    </Card>
  );
};

export default ChannelCard;
