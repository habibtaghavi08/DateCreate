import React from "react";
import Button from 'react-bootstrap/Button';

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="3" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-info">
      {props.children}
    </button>
  );
}
export function ProfileBtn(props)
{
  return (
<Button {...props} className="btn btn-info" variant="info" size="lg" block>
{props.children}
</Button>
  );
}
export function CompletedBtn(props)
{
  return (
<Button {...props} className="btn btn-info" variant="info" size="lg" block>
{props.children}
</Button>
  );
}
export function PlannedDateBtn(props)
{
  return (
<Button {...props} className="btn btn-info" variant="info" size="lg" block>
{props.children}
</Button>
  );
}