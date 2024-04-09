export function formatDate(dateString: string): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(dateString);
  const monthIndex = date.getMonth();
  const year = date.getFullYear().toString();
  const day = date.getDate();

  return `${months[monthIndex]} ${day}, ${year}`;
}
