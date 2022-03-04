import { useEffect, useState } from "react";
import { useStyles } from "./Styles/countDown";
import { Typography} from "@mui/material";

const CountDown = () => {
  const dateTarget = new Date("08/14/2022 4:00 PM");

  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  // aca estamos probando

  const milliseconds_of_a_Second = 1000;
  const milliseconds_of_a_minute = milliseconds_of_a_Second * 60;
  const milliseconds_of_a_hour = milliseconds_of_a_minute * 60;
  const milliseconds_of_a_day = milliseconds_of_a_hour * 24;

  function updateCountdown() {
    // Calcs
    const now = new Date();
    const duration = dateTarget - now;
    const remainingDays = Math.floor(duration / milliseconds_of_a_day);
    const remainingHours = Math.floor(
      (duration % milliseconds_of_a_day) / milliseconds_of_a_hour
    );
    const remainingMinutes = Math.floor(
      (duration % milliseconds_of_a_hour) / milliseconds_of_a_minute
    );
    const remainingSeconds = Math.floor(
      (duration % milliseconds_of_a_minute) / milliseconds_of_a_Second
    );

    setDays(remainingDays);
    setHours(remainingHours);
    setMinutes(remainingMinutes);
    setSeconds(remainingSeconds);
  }

  useEffect(() => {
    setInterval(updateCountdown, milliseconds_of_a_Second);
  });

  const classes = useStyles();

  return (
    <div className={classes.containerBox}>
      <div className={classes.containerDescription}>
      <Typography variant="h6" className={classes.typographySize}>Campaña de Recoleccion de juguetes</Typography>
            <p className={classes.typographySize}>Lleva un juguete nuevo o usado para un niño
            La cita sera el dia 14 de agosto del 2022 en Facultad de derecho de la ciudad de Buenos Aires</p>
      </div>
      <div className={classes.ContainerCountDown}>
          <p className={classes.CountDownTypography}>Quedan {days} Días {hours} Horas {minutes} Minutos</p>
      </div>
    </div>
  );
};

export default CountDown;
