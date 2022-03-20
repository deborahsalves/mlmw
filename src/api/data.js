import { google } from 'googleapis';

export const getUserDatabase = async () => {
    // Auth
    const auth = await google.auth.getClient({scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']});
    const sheets = google.sheets({version: 'v4', auth});

    // Query
    const range = `Sheet1!A:Z`


    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.REACT_APP_SHEET_ID, range, 
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse)
            return jsonResponse;
        }
        throw new Error ("API request failed")
    } catch (error){
        console.error(error);
    }
};