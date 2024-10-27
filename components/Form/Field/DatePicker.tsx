import { formattedDateHasNaN, dateToDatetime } from "@/utils/datetime";
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface DatePickerProps {
  date: string;
  isVisible: boolean;
  minimumDate?: string;
  handleConfirm: (value: string) => void;
  handleCancel: () => void;
}

const DatePicker = ({
  date,
  isVisible,
  handleConfirm,
  handleCancel,
  minimumDate,
}: DatePickerProps) => {
  const formattedDate = formattedDateHasNaN(date);
  const formattedMinimumDate = formattedDateHasNaN(minimumDate);

  return (
    <DateTimePickerModal
      date={formattedDate}
      minimumDate={formattedMinimumDate}
      isVisible={isVisible}
      mode="date"
      onConfirm={(value) => handleConfirm(dateToDatetime(value))}
      onCancel={handleCancel}
    />
  );
};

export default DatePicker;
