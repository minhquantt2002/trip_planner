import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface TimePickerProps {
  time: string;
  isVisible: boolean;
  minimumDate?: string;
  handleConfirm: (value: string) => void;
  handleCancel: () => void;
}

const TimePicker = ({
  time,
  isVisible,
  handleConfirm,
  handleCancel,
  minimumDate,
}: TimePickerProps) => {
  let formattedTime: Date | undefined = moment(time, "HH:mm").toDate();
  if (isNaN(formattedTime.getDate())) {
    formattedTime = new Date();
  }

  return (
    <DateTimePickerModal
      date={formattedTime}
      isVisible={isVisible}
      mode="time"
      onConfirm={(value) => {
        handleConfirm(moment(value).format("HH:mm"));
      }}
      onCancel={handleCancel}
    />
  );
};

export default TimePicker;
