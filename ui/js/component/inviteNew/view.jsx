import React from "react";
import { BusyMessage, CreditAmount } from "component/common";
import Link from "component/link";
import { FormRow } from "component/form.js";

class FormInviteNew extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  handleEmailChanged(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.inviteNew(this.state.email);
  }

  render() {
    const { errorMessage, isPending } = this.props;

    return (
      <form>
        <FormRow
          type="text"
          label="Email"
          placeholder="youremail@example.org"
          name="email"
          value={this.state.email}
          errorMessage={errorMessage}
          onChange={event => {
            this.handleEmailChanged(event);
          }}
        />
        <div className="form-row-submit">
          <Link
            button="primary"
            label={__("Send Invite")}
            disabled={isPending}
            onClick={event => {
              this.handleSubmit(event);
            }}
          />
        </div>
      </form>
    );
  }
}

class InviteNew extends React.PureComponent {
  render() {
    const {
      errorMessage,
      invitesRemaining,
      inviteNew,
      inviteStatusIsPending,
      isPending,
      rewardAmount,
    } = this.props;

    return (
      <section className="card">
        <div className="card__title-primary">
          <CreditAmount amount={rewardAmount} />
          <h3>
            {__("Invite a Friend")}
          </h3>
        </div>
        {/*
        <div className="card__content">
          {invitesRemaining > 0 &&
            <p>{__("You have %s invites remaining.", invitesRemaining)}</p>}
          {invitesRemaining <= 0 &&
            <p className="empty">{__("You have no invites.")}</p>}
        </div> */}
        <div className="card__content">
          <p>
            {__(
              "Or an enemy. Or your cousin Jerry, who you're kind of unsure about."
            )}
          </p>
          <FormInviteNew
            errorMessage={errorMessage}
            inviteNew={inviteNew}
            isPending={isPending}
          />
        </div>
      </section>
    );
  }
}

export default InviteNew;
