import moment from "moment";
import React, { useEffect, useState } from "react";

const Systemtime = () => {
  const [systemtime, setSystemtime] = useState(
    moment().format("DD.MM.YYYY HH:mm:ss")
  );

  useEffect(() => {
    setInterval(() => {
      setSystemtime(
        (prevSystemtime) =>
          (prevSystemtime = moment().format("DD.MM.YYYY HH:mm:ss"))
      );
    }, 1000);
  });

  return (
    <div id="systemTime" class="title half">
      SYSTEM TIME {systemtime}
    </div>
  );
};

export default Systemtime;
