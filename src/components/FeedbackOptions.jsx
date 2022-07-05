export const FeedbackOptions = ({ options, onLeaveFeedback}) => {
    return (
          <button type="button" onClick={onLeaveFeedback}>
            {options}
          </button>
    );
}