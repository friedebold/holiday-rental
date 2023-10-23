interface Props {
  width?: number | string;
  height?: number | string;
}

const Spacer: React.FC<Props> = ({ width, height }) => {
  return (
    <div style={{ width: width ? width : 0, height: height ? height : 0 }} />
  );
};

export default Spacer;
