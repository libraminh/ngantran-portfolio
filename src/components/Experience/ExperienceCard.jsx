import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import { ThemeContext } from "../../contexts/ThemeContext";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";

import expImgBlack from "../../assets/svg/experience/expImgBlack.svg";
import expImgWhite from "../../assets/svg/experience/expImgWhite.svg";

import "./Experience.css";

function ExperienceCard({ id, company, jobtitle, date, content }) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    experienceCard: {
      backgroundColor: theme.primary30,
      "&:hover": {
        backgroundColor: theme.primary50,
      },
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <div key={id} className={`w-full`}>
        <Accordion
          className={`experience-card ${classes.experienceCard} !flex-col !rounded-2xl`}
        >
          <AccordionSummary
            className="w-full !p-0 "
            expandIcon={
              <ExpandMoreIcon className="text-4xl fill-white bg-white rounded-full" />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div
              className="expcard-img"
              style={{ backgroundColor: theme.primary }}
            >
              <img
                src={theme.type === "light" ? expImgBlack : expImgWhite}
                alt=""
              />
            </div>

            <div className="experience-details !ml-5">
              <h6 style={{ color: theme.primary }}>{date}</h6>
              <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
              <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
            </div>
          </AccordionSummary>

          <AccordionDetails className="experience-details !w-full font-poppins">
            <div
              className="text-white text-lg"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </AccordionDetails>
        </Accordion>
      </div>
    </Fade>
  );
}

export default ExperienceCard;
