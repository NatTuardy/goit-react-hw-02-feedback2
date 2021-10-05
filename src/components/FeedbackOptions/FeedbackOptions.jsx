import PropTypes from "prop-types";
import style from './FeedbackOptions.module.css'

const FeedbackOptions = ({onLeaveFeedback, options}) => {

const buttonListItems = options.map((item)=> <button key={item} onClick={()=> onLeaveFeedback(item)}className={style.btn}>{item}</button>)
    return ( <div>
        {buttonListItems}
    </div> );
}
 
export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };