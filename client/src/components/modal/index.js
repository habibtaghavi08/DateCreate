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
              <h4>Terms and Conditions</h4>

              <p className="tosFont">Please read these Terms and Conditions (“Terms”, “Terms and Conditions”) carefully before using the https://cryptic-temple-44760.herokuapp.com/  DateCreate website (the “Service”) operated by: Team OverReactors part of the Vanderbilt Coding bootcamp. (“us”, “we”, or “our”).</p>

              <p className="tosFont">Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service. You warrant that you are at least 18-years-old and you are legally capable of entering into binding contracts. If you are under 18-years-old, I think it's time for you to find a different website. Terms can be updated, and info will be supplied to verified accounts (see accounts)</p>

              <p className="tosFont">By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>
              <h4>Availability, Errors and Inaccuracies</h4>
              <p className="tosFont">We are constantly updating our website and the function of the Service. The product or services available on our website may be mispriced, described inaccurately, or unavailable, and we may experience delays in updating information on the website.</p>

              <p className="tosFont">We cannot and do not guarantee the accuracy or completeness of any information, including prices, product images, specifications, availability, and services. We reserve the right to change or update information and to correct errors, inaccuracies, or omissions at any time without prior notice.</p>

              <p className="tosFont">The content is provided without warranties or conditions of any kind either express or implied, including but not limited to implied warranties and conditions of merchantability, fitness for a particular purpose or non-infringement.</p>
              <h4>Accounts</h4>
              <p className="tosFont">When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
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
