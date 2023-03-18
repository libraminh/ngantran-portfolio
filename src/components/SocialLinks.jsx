import { useQuery } from "@apollo/client";
import { Tooltip } from "@material-ui/core";
import React, { useContext } from "react";
import { FaEnvelope, FaLinkedin, FaMobileAlt } from "react-icons/fa";
import { ThemeContext } from "../contexts/ThemeContext";
import { fetchSocial } from "../graphql/queries";

const SocialLinks = () => {
  const { theme } = useContext(ThemeContext);
  const { data: socialData } = useQuery(fetchSocial);
  const { social } = socialData || {};

  return (
    <>
      {social?.linkedinUrl && (
        <Tooltip title="Ngan Tran">
          <a href={social.linkedinUrl} target="_blank" rel="noreferrer">
            <FaLinkedin
              className="landing--social"
              style={{ color: theme.secondary }}
              aria-label="LinkedIn"
            />
          </a>
        </Tooltip>
      )}

      {social?.emailAddress && (
        <Tooltip title={social.emailAddress}>
          <a
            href={`mailto:${social.emailAddress}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope
              className="landing--social"
              style={{ color: theme.secondary }}
              aria-label="LinkedIn"
            />
          </a>
        </Tooltip>
      )}

      {social?.phoneNumber && (
        <Tooltip title={social.phoneNumber}>
          <a
            href={`tel:${social.phoneNumber}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaMobileAlt
              className="landing--social"
              style={{ color: theme.secondary }}
              aria-label="LinkedIn"
            />
          </a>
        </Tooltip>
      )}
    </>
  );
};

export default SocialLinks;
