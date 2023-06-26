import React from "react";
import { Link } from "gatsby";
import { urlFor } from "../library/helpers";

function ProjectPreview({ headingClass, ...props }) {
  return (
    <Link className="previewCard ms-0" to={`/work/${props?.id}`}>
      <div className="leadMediaThumb mb-1">
        {props.previewPoster && props.previewPoster.asset && (
          <img
            className="previewPosterImg"
            src={urlFor(props.previewPoster)
              .auto("format")
              .fit("max")
              .height(200)
              .url()}
            alt={props.previewPoster.alt}
          />
        )}
      </div>
      <h3 className={headingClass}>{props.title}</h3>

      <div>
        <p className="mb-0">{props.description}</p>
      </div>
    </Link>
  );
}
export default ProjectPreview;
