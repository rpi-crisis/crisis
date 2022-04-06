import React, { FC, useState } from "react";
import { Transfer } from "../../../types";

const ClassesTransfers: FC<{transfers: Transfer[]}> = ({transfers}) => {

  const [display, update_display] = useState<boolean>(false);

  const toggle_shown = () => {
    update_display(!display);
  };

  return(
    <div>
        <div className="body-title transferlistTitle" onClick={toggle_shown}>
            Transfers <i className="arrow"></i>
        </div>
        <div className="transferList" id="transfers" style={{display:display ? "block" : "none"}}>
            {transfers.length > 0 ? transfers.map((el: Transfer, pos: number) => (
                <div id="class-header" key={pos}>
                    <div>{el.title}</div>
                    <div>{el.id}</div>
                    <div>{el.school}</div>
                    <div>{el.location}</div>
                </div>
            )) : <div>No Transfers</div>}
        </div>
    </div>
  );
};

export default ClassesTransfers;