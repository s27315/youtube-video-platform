export const formatViews = (count) => {
  if (!count) return "0 views";
  return `${Number(count).toLocaleString()} views`;
};

export const formatSubscribers = (count) => {
  if (!count) return "0 subscribers";
  return `${Number(count).toLocaleString()} subscribers`;
};