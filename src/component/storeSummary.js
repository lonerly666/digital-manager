export default function StoreSummary(props) {
  const date = new Date();
  const day = date.toLocaleString('default', { weekday: 'long' });
  const month = date.toLocaleString('default', { month: 'long' });
  const dayNum = date.getDate();
  const year = date.getFullYear();

  return (
    <div className="summary-container">
      <h1>{day}</h1>
      <h2>
        {month} {dayNum}, {year}
      </h2>
      <p>Today's Total Sale: {}</p>
      <p>Today's Total Order: {}</p>
      <p>Current Shift: {}</p>
    </div>
  );
}
