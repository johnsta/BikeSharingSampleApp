// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

function FormatValue(props) {
    var value = props.theValue;
    if (!isNaN(value)) {
        value = parseFloat(Math.round(value*100)/100).toFixed(1);
    }
    return <span>{value}</span>
}

const Field = (props) => (
    <div>
        <div className="fieldLabel" tabIndex="0">{props.label}</div>
        <div className="fieldValue" tabIndex="0">{props.value}</div>
        {/* <div className="fieldValue" tabIndex="0"><FormatValue theValue={props.value} /></div> */}
        <style jsx>{`
            .fieldLabel {
                padding-top: 12px;
                text-transform: uppercase;
                font-size: 10px;
                font-weight: 600;
            }

            .fieldValue {
                font-size: 14px;
                font-weight: 100;
            }

            div {
                color: #2A3531;
                letter-spacing: 1px;
            }
        `}</style>
    </div >
)

export default Field
