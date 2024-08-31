interface TimestampButtonProps {
  onClick: () => void;
  label: string;
}

const TimestampButton = ({ onClick, label }: TimestampButtonProps) => {
  return (
    <div className="timestamp-button">
      <button onClick={onClick}>{label}</button>
    </div>
  );
};

export default TimestampButton;
