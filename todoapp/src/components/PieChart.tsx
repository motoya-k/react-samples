import React, { useEffect, useRef } from "react";

type Props = {
  percent: number;
  color?: string;
};

export const PieChart: React.VFC<Props> = (props: Props) => {
  const { percent, color = "#ff0000" } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null!);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, 100, 100);
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(50, 50);
      ctx.arc(50, 50, 50, 0, (percent / 100) * Math.PI * 2, false);
      ctx.lineTo(50, 50);
      ctx.fill();
    }
  });

  return <canvas ref={canvasRef} width={100} height={100} />;
};
