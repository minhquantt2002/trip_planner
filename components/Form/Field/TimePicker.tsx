import { dateToTime, formattedDateHasNaN } from "@/utils/datetime";
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface TimePickerProps {
  time: string;
  isVisible: boolean;
  handleConfirm: (value: string) => void;
  handleCancel: () => void;
}

const TimePicker = ({
  time,
  isVisible,
  handleConfirm,
  handleCancel,
}: TimePickerProps) => {
  let formattedTime = formattedDateHasNaN(time);

  return (
    <DateTimePickerModal
      date={formattedTime}
      isVisible={isVisible}
      mode="time"
      onConfirm={(value) => handleConfirm(dateToTime(value))}
      onCancel={handleCancel}
    />
  );
};

export default TimePicker;
