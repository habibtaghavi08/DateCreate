import React from "react"
import "./style.css";

export default function Modal() {
  return (
    <div>
      <a className="btn btn-light" href="/repo" role="button">Github Repo</a>
      <button type="button" className="btn btn-light" data-toggle="modal" data-target="#exampleModalLong">
        Terms of Service
      </button>
      <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLongTitle">TERMS OF SERVICE</h2>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              By entering this site, the user confirms that they are 18 years of age or older.<br />
              DateCreate is not responsible
            </div>
            <div className="modal-footer">
              <form action="#" onSubmit="if(document.getElementById('agree').checked) { return true; } else { alert('Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy'); return false; }">
                <input type="checkbox" name="checkbox" value="check" id="agree" /> I have read and agree to the Terms and Conditions and Privacy Policy
              <input type="submit" name="submit" value="Submit" className="btn btn-primary btn-1" />
              </form>

            </div>
          </div>
        </div>
      </div>

      <a className="btn btn-light" href="/about" role="button">About Us</a>

    </div>
  )
}
