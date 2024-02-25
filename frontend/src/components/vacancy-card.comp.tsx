import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { VacancyCardProps } from "./types/vacancy-card.type";
import CandidatesModal from "./candidates-modal.comp";
import { styled } from "@mui/system";

const StyledTypography = styled(Typography)`
  height: 28vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: blue;
  }
`;

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
          <StyledTypography variant="body2" color="text.secondary">
            {description}
          </StyledTypography>
        </CardContent>
        <CardActions>
          <CandidatesModal candidates={candidates} />
          <Button size="small" color="primary">
            Apply
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
