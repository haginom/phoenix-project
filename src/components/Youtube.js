import getYouTubeId from "get-youtube-id";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Preview = (props) => {
  const { url, renderDefault } = props;
  if (!url) {
    return <div>Missing YouTube URL</div>;
  }
  const id = getYouTubeId(url);
  return (
    <div>
      // 👇 Renders the default preview UI
      {renderDefault({ ...props, title: "YouTube Embed" })}
      // 👇 Renders the video preview below
      <LiteYouTubeEmbed id={id} />
    </div>
  );
};

export default Preview;
