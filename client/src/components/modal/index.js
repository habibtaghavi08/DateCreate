import React from "react"
import "./style.css";

export default function Modal() {
  return (
    <div className="button-group">
      <a className="btn btn-light" href="/repo" role="button">Github Repo</a>
      <button type="button" className="btn btn-light" data-toggle="modal" data-target="#exampleModalLong">
        Terms of Service
      </button>
      <div className="modal fade" data-backdrop="false" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLongTitle">TERMS OF SERVICE</h2>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              By entering this site, the user confirms that they are 18 years of age or older.<br />
              DateCreate is not responsible
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary btn-1" data-dismiss="modal">Agree</button>
            </div>
          </div>
        </div>
      </div>

      <a className="btn btn-light" href="/about" role="button">About Us</a>

    </div>
  )
}
