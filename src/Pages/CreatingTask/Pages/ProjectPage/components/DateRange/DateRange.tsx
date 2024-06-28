import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateRange.scss";

interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

const CustomDateRangePicker: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });
  const { startDate, endDate } = dateRange;

  const handleStartDateChange = (date: Date | null) => {
    setDateRange({ ...dateRange, startDate: date });
  };

  const handleEndDateChange = (date: Date | null) => {
    setDateRange({ ...dateRange, endDate: date });
  };

  return (
    <div className="range-picker-wrapper">
      <DatePicker
        className="date-picker"
        selected={startDate ?? undefined} // Use undefined instead of null
        onChange={handleStartDateChange} // Adjusted to accept Date | null
        selectsStart
        startDate={startDate ?? undefined} // Use undefined instead of null
        endDate={endDate ?? undefined} // Use undefined instead of null
        placeholderText="Start date"
      />
      <DatePicker
        className="date-picker"
        selected={endDate ?? undefined} // Use undefined instead of null
        onChange={handleEndDateChange} // Adjusted to accept Date | null
        selectsEnd
        startDate={startDate ?? undefined} // Use undefined instead of null
        endDate={endDate ?? undefined} // Use undefined instead of null
        minDate={startDate ?? undefined} // Use undefined instead of null
        placeholderText="End date"
      />
    </div>
  );
};

export default CustomDateRangePicker;
