"use client";

import { useState, useEffect } from "react";
import QRGenerator from "./qr-generator";

const dummyData = [
  {
    qrcode: "123456",
    factory: "Factory A",
    idAlarm: "A001",
    type: "Fire",
    noAlarm: "001",
    area: "Zone 1",
    location: "Building 1",
    zone: "Red",
  },
 
];

export default function InspectList() {
  const [alarmData, setAlarmData] = useState([]);

  useEffect(() => {
    setAlarmData(dummyData);
  }, []);

  return (
    <div className="w-full flex flex-col gap-2 py-4">
      {alarmData.length > 0 &&
        alarmData.map((alarm, index) => (
          <div key={index} className="w-full flex rounded-xl bg-[#282a2c] p-4 items-center">
            <div className=" px-4 py-2 flex-grow"><QRGenerator value={alarm.qrcode}/></div>
            <div className=" px-4 py-2 flex-grow">{alarm.qrcode}</div>
            <div className=" px-4 py-2 flex-grow">{alarm.factory}</div>
            <div className=" px-4 py-2 flex-grow">{alarm.idAlarm}</div>
            <div className=" px-4 py-2 flex-grow">{alarm.type}</div>
            <div className=" px-4 py-2 flex-grow">{alarm.noAlarm}</div>
            <div className=" px-4 py-2 flex-grow">{alarm.area}</div>
            <div className=" px-4 py-2 flex-grow">{alarm.location}</div>
            <div className=" px-4 py-2 flex-grow">{alarm.zone}</div>
          </div>
        ))}
    </div>
  );
}
