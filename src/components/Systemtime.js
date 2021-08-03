import moment from "moment";
import $ from "jquery";
import React, { useEffect, useState } from "react";

const Systemtime = () => {
  const [systemtime, setSystemtime] = useState(
    moment().format("DD.MM.YYYY hh:mm:ss")
  );

  useEffect(() => {
    setInterval(() => {
      setSystemtime(
        (prevSystemtime) =>
          (prevSystemtime = moment().format("DD.MM.YYYY hh:mm:ss"))
      );
    }, 1000);
  });

  return (
    <div id="systemTime" class="title half">
      {systemtime}
    </div>
  );
};

export default Systemtime;
