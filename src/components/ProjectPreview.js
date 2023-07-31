import React from "react";
import Image from "gatsby-plugin-sanity-image";

function ProjectPreview({
  isFifthWork,
  isOffset,
  work,
  headingClass,
  ...props
}) {
  return (
    <a
      className={`previewCard ms-0 ${work && "work-preview-card"} ${
        isOffset && "isOffset"
      } ${isFifthWork && "full-width-preview-card"}`}
      href={`/work/${props?.id}`}
    >
      <div className="leadMediaThumb mb-1">
        {props.previewPoster && props.previewPoster.asset && (
          <>
            <Image
              alt={props.previewPoster.alt}
              className="previewPosterImg relative"
              asset={props.previewPoster.asset}
              width={600}
              height={360}
              style={{
                width: "100%",
                objectFit: "contain",
              }}
            />
            {props.logo && (
              <Image
                className="previewPosterImg absolute"
                asset={props.logo?.asset}
                style={{
                  width: "80%",
                  height: "100%",
                  objectFit: "contain",
                  left: "50%",
                  right: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            )}
          </>
        )}
      </div>
      <div>
        <h3 className={`mb-2 display-5 ${headingClass}`}>{props.title}</h3>
        <div>
          <p className="mb-0 projectPreviewText">{props.description}</p>
        </div>
      </div>
    </a>
  );
}
export default ProjectPreview;
