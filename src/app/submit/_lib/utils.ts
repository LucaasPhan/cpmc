import {google} from 'googleapis';
import { NextResponse } from 'next/server';

const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: atob(process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY!);
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

export const getSheetData = async (authenticated_email) => {
    const sheets = google.sheets({ version: "v4", auth: await auth.getClient() });
    const range = `'SHEET CHECK IN'!A:Z`;
  
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range,
      });
  
      let data = response.data.values;
      for (let i = ROW_SHIFT; i < data.length; i++) {
        if (data[i][EMAIL_INDEX] == authenticated_email) {
          return data[i];
        }
      }
      return null;
    } catch (error) {
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
};

