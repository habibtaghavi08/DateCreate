import React from "react"
import "./style.css";

export default function Modal(){
  return (
    <div>
      <button type="button" class="btn btn-light" data-toggle="modal" data-target="#exampleModalLong">
       CLICK FOR T.O.S.
      </button>
      
       <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title" id="exampleModalLongTitle">TERMS OF SERVICE</h2>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              BY ENTERING THIS SITE, USER AGREES THAT THEY ARE 18 YEARS OF AGE, OR OLDER. DATE-CREATE IS NOT RESPONSIBLE, IF USER IS NOT OF AGE. THANK YOU AND ENJOY OUR SITE.
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" class="btn-1" data-dismiss="modal">AGREE</button>
             </div>
          </div>
        </div>
      </div>

    </div>
  )
}
