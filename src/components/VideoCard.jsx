const VideoCard = ({ video, onClick }) => {
  return (
    <div className="video-card" onClick={onClick}>
      <img 
        src={video.snippet.thumbnails.medium.url} 
        alt={video.snippet.title}
      />
      <div className="video-info">
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;
