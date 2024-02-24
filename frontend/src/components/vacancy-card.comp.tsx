import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Badge, Button, CardActionArea, CardActions } from "@mui/material";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import { VacancyCardProps } from "./types/vacancy-card.type";

export default function VacancyCard(props: VacancyCardProps) {
  const { title, description, logo, candidates } = props;
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "80%", md: "60%", lg: "40%", xl: "30%" },
        height: "65vh",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={logo}
          alt="vacancy logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            sx={{ height: "28vh", overflowY: "auto" }}
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Badge badgeContent={candidates.length} color="primary">
            <EmojiPeopleIcon />
          </Badge>
          <Button size="small" color="primary">
            Apply
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
