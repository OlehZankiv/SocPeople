import React from "react";
import s from "./Status.module.css";

class Status extends React.Component {
    state = {
        isActiveStatus: false,
    };

    toggleStatus = () => {
        let activeStatus;
        if (this.state.isActiveStatus) {
            activeStatus = false;
        } else {
            activeStatus = true;
        }
        this.setState(() => ({ isActiveStatus: activeStatus }));
    };

    render() {
        return (
            <div className={s.statusWrapper}>
                {!this.state.isActiveStatus ? (
                    <div className={s.status}>
                        <span onClick={this.toggleStatus}>
                            {this.props.status}
                        </span>
                    </div>
                ) : (
                    <div className={s.inputStatus}>
                        <input autoFocus onBlur={this.toggleStatus} type="text" value={this.props.status} />
                    </div>
                )}
            </div>
        );
    }
}

export default Status;
