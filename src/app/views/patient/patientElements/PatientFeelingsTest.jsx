import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300
  },
  margin: {
    height: theme.spacing(3)
  }
}));

const marks = [
  {
    value: 0,
    label: "Mal"
  },
  {
    value: 20,
    label: "Meh"
  },
  {
    value: 50,
    label: "Bien"
  },
  {
    value: 100,
    label: "Feliz"
  }
];

const marksFeelings = [
  {
    value: 0,
    label: "Mal"
  },
  {
    value: 20,
    label: "Meh"
  },
  {
    value: 50,
    label: "Bien"
  },
  {
    value: 100,
    label: "Feliz"
  }
];

const marksAnsiedad = [
  {
    value: 0,
    label: "Pa"
  },
  {
    value: 20,
    label: "Un"
  },
  {
    value:50,
    label: "Ba"
  },
  {
    value:80,
    label: "mu"
  },
  {
    value:100,
    label: "es"
  }
];

const marksThoughts = [
  {
    value: 0,
    label: "Pe"
  },
  {
    value: 20,
    label: "An"
  },
  {
    value:50,
    label: "Es"
  },
  {
    value:80,
    label: "Me"
  },
  {
    value:100,
    label: "La"
  }
];

const marksEat = [
  {
    value: 0,
    label: "No"
  },
  {
    value: 20,
    label: "Co"
  },
  {
    value:50,
    label: "Co"
  },
  {
    value:80,
    label: "Co"
  },
  {
    value:100,
    label: "Co"
  }
];

function valuetext(value) {
  return `${value}sentimientos`;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}

export default function PatientTest() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Estado de ánimo
      </Typography>
      <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks={marksFeelings}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-custom" gutterBottom>
        ¿Te sientes ansioso?
      </Typography>
      <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marksAnsiedad}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-restrict" gutterBottom>
        ¿Cómo están tus pensamientos?
      </Typography>
      <Slider
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marksThoughts}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
        Otro
      </Typography>
      <Slider
        defaultValue={80}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marksEat}
        valueLabelDisplay="on"
      />
    </div>
  );
}