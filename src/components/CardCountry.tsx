import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  IconButtonProps,
  styled,
  Typography,
} from "@mui/material";
import Country from "./Country";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

interface CardCountryProps {
  country: Country;
}
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export default function CardCountry({ country }: CardCountryProps) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card>
      <CardHeader title={country.name.common}></CardHeader>
      <CardHeader title={country.region}></CardHeader>
      <CardMedia
        component="img"
        alt={country.name.common}
        height="140"
        image={country.flags.png}
      />

      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="ver más"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            sx={{ marginBottom: 2 }}
            variant="body2"
          >{`Nombre Nativo: ${country.name.nativeName?.eng?.official||country.name.nativeName?.chi?.official||country.name.nativeName?.spa?.official||country.name.nativeName?.fra?.official}`}</Typography>
          <Typography
            sx={{ marginBottom: 2 }}
            variant="body2"
          >{`alpha3Code: ${country.cca2}`}</Typography>
          <Typography
            sx={{ marginBottom: 2 }}
            variant="body2"
          >{`Capital: ${country.capital}`}</Typography>
          <Typography
            sx={{ marginBottom: 2 }}
            variant="body2"
          >{`Poblacion: ${country.population}`}</Typography>
          <Typography
            sx={{ marginBottom: 2 }}
            variant="body2"
          >{`Codigo Telefono: ${country.idd.root}${country.idd.suffixes}`}</Typography>
          <Typography
            sx={{ marginBottom: 2 }}
            variant="body2"
          >{`Miembro de la ONU: ${country.unMember?"Si":"No"}`}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

const ExpandMore = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "expand", // Evita que 'expand' se pase al DOM
})<ExpandMoreProps>(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? "rotate(180deg)" : "rotate(0deg)", // Se usa 'expand' aquí
}));
