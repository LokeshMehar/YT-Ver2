export default function abbreviateNumber(views) {
  if (views < 1000) {
    return views;
  } else if (views > 999 && views < 10000) {
    return (views / 1000).toFixed(1) + "K";
  } else if (views > 9999 && views < 1000000) {
    return Math.floor(views / 1000) + "K";
  } else if (views > 999999 && views < 1000000000) {
    return (views / 1000000).toFixed(1) + "M";
  } else {
    return (views / 1000000000).toFixed(1) + "B";
  }
}
