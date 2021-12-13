import React from 'react';
import HelpAPI from "../API/HelpAPI";
function Help() {
    const [q, setQ] = React.useState(HelpAPI)
    return (
        <div className="Help-section">
            <span><i className="close-Help fas fa-times"></i></span>
            <div className="base-help-section">
                {
                    q.map(e => {
                        return (
                            <div className="Help-content">
                                <div className="info">
                                    <h1>{e.Question}</h1>
                                    <p>{e.Answer}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Help
