/* eslint-disable react/prop-types */
import "./board.css";
const Board = (props) => {
  const { arrays1, arrays2, arrays3, updateState } = props;
  const handleClick = (array, value) => {
    console.log(array, value);
    updateState(array, value);
  };
  return (
    <table>
      <tbody>
        <tr>
          {arrays1.map((item, index) => (
            <td onClick={() => handleClick(1, index)} key={index}>
              {item[0]}
            </td>
          ))}
        </tr>
        <tr>
          {arrays2.map((item, index) => (
            <td onClick={() => handleClick(2, index)} key={index}>
              {item[0]}
            </td>
          ))}
        </tr>
        <tr>
          {arrays3.map((item, index) => (
            <td onClick={() => handleClick(3, index)} key={index}>
              {item[0]}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Board;
