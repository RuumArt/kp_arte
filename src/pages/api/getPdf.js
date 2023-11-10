import ReactPDF from '@react-pdf/renderer';
import MyDocument from 'pages/Pdf/MyDocument';

export default async (req, res) => {
  const data = req.body;
  const nowDate = new Date();
  const [month, day, year, hours, minutes] = [
    nowDate.getMonth(),
    nowDate.getDate(),
    nowDate.getFullYear(),
    nowDate.getHours(),
    nowDate.getMinutes(),
  ];

  const fileName = `${
    data.manager?.value || 'example'
  } (${day}-${month}-${year} ${hours}-${minutes}`;

  const fileSrc = `public/pdf/${fileName}).pdf`;

  await ReactPDF.render(<MyDocument data={data} />, fileSrc)
    .then(() => {
      res.status(200).json({ src: fileSrc });
    })
    .catch(() => {
      res.status(500).json({});
    });
};
