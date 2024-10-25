import moment from "moment";
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
    formattedDate = new Date();
  }

  return (
    <DateTimePickerModal
      date={formattedDate}
      minimumDate={formattedMinimumDate}
      isVisible={isVisible}
      mode="date"
      onConfirm={(value) => {
        handleConfirm(moment(value).format("YYYY-MM-DDTHH:mm"));
      }}
      onCancel={handleCancel}
    />
  );
};

export default DatePicker;
