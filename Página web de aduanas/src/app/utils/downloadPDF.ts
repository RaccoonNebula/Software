export function downloadTestPDF(filename = 'archivo-de-prueba.pdf') {
  const stream = 'BT /F1 14 Tf 72 720 Td (archivo de prueba) Tj ET';

  const obj1 = '1 0 obj\n<</Type /Catalog /Pages 2 0 R>>\nendobj\n';
  const obj2 = '2 0 obj\n<</Type /Pages /Kids [3 0 R] /Count 1>>\nendobj\n';
  const obj3 =
    '3 0 obj\n<</Type /Page /MediaBox [0 0 612 792] /Parent 2 0 R /Contents 4 0 R /Resources <</Font <</F1 5 0 R>>>>>>\nendobj\n';
  const obj4 = `4 0 obj\n<</Length ${stream.length}>>\nstream\n${stream}\nendstream\nendobj\n`;
  const obj5 =
    '5 0 obj\n<</Type /Font /Subtype /Type1 /BaseFont /Helvetica>>\nendobj\n';

  const header = '%PDF-1.4\n';
  const offset1 = header.length;
  const offset2 = offset1 + obj1.length;
  const offset3 = offset2 + obj2.length;
  const offset4 = offset3 + obj3.length;
  const offset5 = offset4 + obj4.length;

  const body = header + obj1 + obj2 + obj3 + obj4 + obj5;
  const xrefOffset = body.length;

  const pad = (n: number) => String(n).padStart(10, '0');
  const xref =
    `xref\n0 6\n` +
    `0000000000 65535 f \n` +
    `${pad(offset1)} 00000 n \n` +
    `${pad(offset2)} 00000 n \n` +
    `${pad(offset3)} 00000 n \n` +
    `${pad(offset4)} 00000 n \n` +
    `${pad(offset5)} 00000 n \n` +
    `trailer\n<</Size 6/Root 1 0 R>>\nstartxref\n${xrefOffset}\n%%EOF`;

  const blob = new Blob([body + xref], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
