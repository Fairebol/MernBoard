import { useEffect, useRef, useState } from 'react';
import timeseries from '../../../server/config/jsondata.json'
import PlotFigure from '../api/PlotFigure'
import * as Plot from "@observablehq/plot";

export default function Barchart({x_axis, y_axis}) {
    return (
        <PlotFigure
        options={{
          x: { tickFormat: ",", grid: true },
          y: { tickFormat: "m", grid: true},
          marks: [Plot.barY(timeseries, { x: x_axis, y: y_axis })]
        }}
      />
    );
}