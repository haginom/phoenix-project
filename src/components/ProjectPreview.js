import React from "react";
import { Link } from "gatsby";
import { urlFor } from "../library/helpers";

function ProjectPreview(props) {
  return (
    <Link className="previewCard ms-0" to={`/${props.id}`}>
      <div className="leadMediaThumb mb-3">
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
      <h3>{props.title}</h3>

      <div>
        <p>{props.description}</p>
      </div>
    </Link>
  );
}
export default ProjectPreview;