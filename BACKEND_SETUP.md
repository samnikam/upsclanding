# Form Backend Setup Guide

## ✅ What's Done:
- API endpoint created at `/api/submit-form`
- Form connected to backend
- Success message shows to users
- All field data captured

## 🚀 Setup Steps:

### Step 1: Install Required Package
```bash
npm install resend
```

### Step 2: Get Free Resend API Key (for Email Notifications)
1. Go to https://resend.com
2. Sign up for FREE account
3. Verify your email
4. Go to API Keys section
5. Create new API key
6. Copy the API key

### Step 3: Configure Environment Variables
Open `.env.local` file and add:

```env
# Your Resend API Key
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Your email to receive leads
ADMIN_EMAIL=your-email@gmail.com

# Google Sheets URL (optional - see Step 4)
GOOGLE_SHEETS_URL=
```

### Step 4: Setup Google Sheets (Optional - for storing leads)

#### Option A: Using Google Apps Script (Recommended)
1. Create new Google Sheet
2. Name columns: Name | Email | Contact | Aspirant Type | Attempt Year | Program | Timestamp
3. Go to Extensions > Apps Script
4. Paste this code:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.name,
    data.email,
    data.contact,
    data.aspirantType,
    data.attemptYear,
    data.program,
    data.timestamp
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

5. Click Deploy > New Deployment
6. Select "Web app"
7. Execute as: "Me"
8. Who has access: "Anyone"
9. Click Deploy
10. Copy the Web App URL
11. Add URL to `.env.local` as `GOOGLE_SHEETS_URL`

#### Option B: Use Airtable (Alternative)
1. Go to https://airtable.com
2. Create free account
3. Create base with same fields
4. Use Airtable API

### Step 5: Restart Development Server
```bash
pnpm dev
```

## 📧 What Happens When User Submits Form:

1. ✅ User fills form
2. ✅ Data sent to API
3. ✅ Email sent to you with lead details
4. ✅ Data saved to Google Sheets (if configured)
5. ✅ Success message shown to user
6. ✅ Form resets after 3 seconds

## 📊 Where to View Leads:

1. **Email Inbox** - You'll receive email for each submission
2. **Google Sheets** - All leads stored in spreadsheet
3. **Future**: Build admin dashboard to view all leads

## 🔒 Security Notes:

- Never commit `.env.local` to Git (already in .gitignore)
- Keep API keys secret
- Resend free tier: 100 emails/day (enough for testing)

## 💡 Next Steps (Optional):

1. Add email validation
2. Add phone number validation
3. Send confirmation email to user
4. Add spam protection (reCAPTCHA)
5. Build admin panel to view leads

## 🆘 Troubleshooting:

**Form not submitting?**
- Check console for errors
- Verify `.env.local` has correct values
- Restart dev server after changing .env

**Not receiving emails?**
- Verify Resend API key is correct
- Check spam folder
- Verify ADMIN_EMAIL is correct

**Google Sheets not working?**
- Verify Apps Script is deployed
- Check Web App URL is correct
- Make sure "Anyone" has access

## 📞 Support:
If you need help, check:
- Resend docs: https://resend.com/docs
- Next.js API routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
