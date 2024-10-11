import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface DateTimePickerProps {
  date: string;
  isVisible: boolean;
  minimumDate?: string;
  handleConfirm: (value: Date) => void;
  handleCancel: () => void;
}

const DateTimePicker = ({
  date,
  isVisible,
  handleConfirm,
  handleCancel,
  minimumDate,
}: DateTimePickerProps) => {
  let formattedMinimumDate: Date | undefined = moment(
    minimumDate,
    "ddd, DD MMM YYYY",
  ).toDate();

  if (isNaN(formattedMinimumDate.getDate())) {
    formattedMinimumDate = undefined;
  }

  let formattedDate: Date | undefined = moment(
    date,
    "ddd, DD MMM YYYY",
  ).toDate();

  if (isNaN(formattedDate.getDate())) {
    formattedMinimumDate = new Date();
  }

  return (
    <DateTimePickerModal
      date={formattedDate}
      minimumDate={formattedMinimumDate}
      isVisible={isVisible}
      mode="date"
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
};

export default DateTimePicker;
