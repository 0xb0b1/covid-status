type DataProps = {
  defaultDate: string;
  min: string;
  max: string;
  handleOnChange: (date: string) => void;
};

export const DataFilter = ({
  defaultDate,
  min,
  max,
  handleOnChange,
}: DataProps) => {
  return (
    <div className="relative py-6 w-default">
      {/* <label htmlFor="datePicker">Filter by date</label> */}
      <input
        id="datePicker"
        type="date"
        className="has-tooltip form-range px-4 py-2 bg-gray-200 appearance-none rounded"
        min={min}
        max={max}
        step="1"
        value={defaultDate}
        onChange={(event) => handleOnChange(event.target.value)}
      />
    </div>
  );
};
