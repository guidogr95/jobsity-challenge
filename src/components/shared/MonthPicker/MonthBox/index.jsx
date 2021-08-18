export default function MonthBox ({ value, onClick }) {
  const innerOnClick = () => onClick && onClick();
  return (
    <div className="flex-grow text-center text-2xl font-medium"  onClick={innerOnClick}>
      <label className="month-label" >{value || ''}</label>
    </div>
  );
};