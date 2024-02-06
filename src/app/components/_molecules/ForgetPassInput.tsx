interface inputProps {
  width: string;
  height: string;
}

const Input: React.FC<inputProps> = ({ width, height }) => {
  return <input style={{ width, height }} />;
};

export default Input;
