import Counter from "./presentation";
import { connect } from "react-redux";

import { increment, decrement } from "../../redux/count/actions";

const mapStateProps = ({ count }) => ({ count });

const mapDispatchProps = dispatch => ({
  increment: count => {
    dispatch(increment(count));
  },
  decrement: count => {
    dispatch(decrement(count));
  }
});

export default connect(
  mapStateProps,
  mapDispatchProps
)(Counter);