import React from "react";
import s from "./Status.module.css";

class Status extends React.Component {
    state = {
        isActiveStatus: false,
        status: this.props.status || "status is absent",
    };

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status });
        }
    }

    activateEditMode = () => {
        this.setState({ isActiveStatus: true });
    };
    deActivateEditMode = () => {
        this.setState({ isActiveStatus: false });
        if (this.state.status !== this.props.status && this.state.status !== "") {
            this.props.updateStatus(this.state.status, this.props.userId);
        }
    };
    changeStatus = (e) => {
        this.setState({ status: e.currentTarget.value });
    };
    render() {
        return (
            <div className={s.statusWrapper}>
                {!this.state.isActiveStatus ? (
                    <div className={s.status}>
                        <span onClick={this.activateEditMode}>
                            {this.props.status || "status is absent"}
                        </span>
                    </div>
                ) : (
                    <div className={s.inputStatus}>
                        <input
                            onChange={this.changeStatus}
                            autoFocus
                            onBlur={this.deActivateEditMode}
                            type="text"
                            value={this.state.status}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default Status;
