// assets
import { AiOutlineClose } from 'react-icons/ai';

export default function ReminderHeader ({ children, onClose }) {
  return (
    <div className="flex flex-row flex-nowrap items-center justify-between">
      <div className="truncate">{children}</div>
      <button type="button" className="p-1" onClick={onClose}>
        <AiOutlineClose/>
      </button>
    </div>
  );
};