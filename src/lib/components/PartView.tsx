import React from "react";
import { Part } from "../types/Part";

export const PartView: React.FC<{
  part: Part;
}> = ({ part }) => {
  return (
    <div className="">
      <h2>Part</h2>
      <p>
        <strong>Type:</strong> {part.type}
      </p>
      <p>
        <strong>Item Alpha-Numeric:</strong> {part.codes.us ?? part.codes.eu}
      </p>
      <ul>
        <li>
          <strong>What It Is:</strong> {part.name}
        </li>
        <li>
          <strong>Feature:</strong> {part.details.feature}
        </li>
        <li>
          <strong>Wattage:</strong> {part.details.wattage}
        </li>
        <li>
          <strong>Voltage:</strong> {part.details.voltage}
        </li>
      </ul>
      <p>
        <strong>Equivalents:</strong>
      </p>
      <ul>
        <li>
          <strong>Japan:</strong> {part.codes.japan}
        </li>
        <li>
          <strong>EU:</strong> {part.codes.eu}
        </li>
        <li>
          <strong>China:</strong> {part.codes.china}
        </li>
        <li>
          <strong>Russia:</strong> {part.codes.russia}
        </li>
        <li>
          <strong>Other:</strong> {part.codes.other}
        </li>
      </ul>
    </div>
  );
};
