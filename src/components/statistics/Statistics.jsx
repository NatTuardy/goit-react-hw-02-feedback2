import PropTypes from "prop-types";
import style from "./Statistics.module.css";

const Statistics = ({
  data,
  good,
  neutral,
  bad,
  total,
  positivePercentage,

}) => {
  const arrayFromData = Object.entries(data).map((item) => {
    return (
      <div key={item} className={style.wrapper}>
        <h3 className={style.title}>
          {item[0]}: {item[1]}
        </h3>
      </div>
    );
  });

  return (
    <>
      <h3>Good: {good}</h3>
      <h3>Neutral: {neutral}</h3>
      <h3>Bad: {bad}</h3>
      <h3>Total: {total}</h3>
      <h3>
        Positive feedback: {positivePercentage ? positivePercentage + "%" : "0"}
      </h3>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  data: PropTypes.object.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
