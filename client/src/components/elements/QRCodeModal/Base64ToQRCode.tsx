// pages/qr-code.js

import { useEffect, useRef } from 'react';
import { createCanvas, Image } from 'canvas';
import QRCode from 'qrcode';

function QrCodeImage({ base64QRCode }: { base64QRCode: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = createCanvas(200, 200); // Set the width and height as needed
    const ctx = canvas.getContext('2d');

    QRCode.toCanvas(canvas, base64QRCode, (error) => {
      if (error) {
        console.error('Error generating QR code:', error);
      } else {
        const image = new Image();
        image.src = canvas.toDataURL('image/png');
        ctx.drawImage(image, 0, 0);
      }
    });
  }, [base64QRCode]);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default QrCodeImage;
