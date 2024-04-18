import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Check, CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card sx={{ width: { md: "320px", xs: "100%" } }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
          component="img"
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 40) || demoVideoTitle.slice(0, 40)}
          </Typography>
        </Link>
        <Link
          to={
            snippet.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle.slice(0, 40) ||
              demoChannelTitle.slice(0, 40)}
            <CheckCircle sx={{ fontSize: 12, ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
