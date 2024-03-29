interface PropsType {
  width: number;
  height: number;
}
const Search = ({ width, height }: PropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33333 12.6668C10.2789 12.6668 12.6667 10.2789 12.6667 7.33343C12.6667 4.38791 10.2789 2.00009 7.33333 2.00009C4.38781 2.00009 2 4.38791 2 7.33343C2 10.2789 4.38781 12.6668 7.33333 12.6668Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.0001 14.0001L11.1001 11.1001"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Search;
