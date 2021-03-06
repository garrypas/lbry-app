import React from "react";
import { connect } from "react-redux";
import { selectUnclaimedRewardValue } from "selectors/rewards";
import RewardSummary from "./view";

const select = state => ({
  unclaimedRewardAmount: selectUnclaimedRewardValue(state),
});

export default connect(select, null)(RewardSummary);
