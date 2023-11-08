const { google } = require('googleapis');
const { authenticate } = require('@google-cloud/local-auth');
const axios = require('axios');

// Thay thế bằng đường dẫn đến tệp JSON của Service Account bạn đã tạo
const keyFile = 'path/to/your/service-account-key.json';

// Thay thế bằng ID của bảng tính Google của bạn
const spreadsheetId = 'your-spreadsheet-id';

const runGoogleAPI = async(data) => {
    const auth = await authenticate({
        keyfilePath: keyFile,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    try {
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1', // Thay thế bằng tên sheet của bạn
            valueInputOption: 'RAW',
            insertDataOption: 'INSERT_ROWS',
            resource: {
                values: [
                    [data.name, data.email, data.subject, data.message]
                ],
            },
        });

        if (response.status === 200) {
            console.log('Data successfully appended to Google Sheets.');
        } else {
            console.error('Error appending data to Google Sheets:', response.statusText);
        }
    } catch (error) {
        console.error('Error appending data to Google Sheets:', error);
    }
};

// Đoạn mã này lắng nghe một POST request và gửi dữ liệu vào Google Sheets
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const formData = req.body;

    // Gửi dữ liệu đến Google Sheets
    runGoogleAPI(formData);

    // Trả lại phản hồi
    res.json({ message: 'Data received and submitted to Google Sheets.' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});