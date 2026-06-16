# 🧪 E-Commerce Website Testing

> **QA Project | Jira · Postman · Chrome DevTools · Test Case Documentation**

A complete, real-world QA testing project for an E-Commerce Web Application — featuring a live interactive dashboard, structured test cases, Postman API collection, and a full bug report.

---

## 📸 Live Dashboard

Open `index.html` directly in any browser — no setup, no install needed.

---

## ✅ What's Covered

| Module | Test Cases | Pass | Fail | Blocked |
|--------|-----------|------|------|---------|
| Login | 18 | 16 | 1 | 1 |
| Cart | 15 | 13 | 2 | 0 |
| Payment | 13 | 12 | 1 | 0 |
| Checkout | 10 | 9 | 0 | 1 |
| **Total** | **56** | **50** | **4** | **2** |

---

## 🔍 Testing Types

- **Functional Testing** — core user flows (login, cart, payment, checkout)
- **Regression Testing** — re-validation after every bug fix
- **UI Testing** — layout, responsiveness, form validation
- **API Testing** — REST endpoints via Postman (18 test cases)

---

## 🛠️ Tools Used

| Tool | Purpose |
|------|---------|
| **Jira** | Test management, sprint tracking, bug logging |
| **Postman** | REST API testing & response validation |
| **Chrome DevTools** | UI inspection, network monitoring, console errors |
| **Excel / CSV** | Test case documentation & repository |

---

## 📁 Project Structure

```
qa-ecommerce-testing/
│
├── index.html                        ← Interactive QA Dashboard (open in browser)
├── assets/
│   ├── style.css                     ← Dashboard styles
│   └── app.js                        ← Dashboard logic & test data
│
├── test-cases/
│   └── test_cases_ecommerce.csv      ← 56 structured test cases (importable)
│
├── postman/
│   └── ECommerce_API_Collection.json ← Postman collection (18 API tests)
│
└── docs/
    └── bug_report.md                 ← 7 detailed bug reports with steps
```

---

## 🚀 How to Use

### View the Dashboard
1. Clone or download this repo
2. Open `index.html` in Chrome / Firefox
3. Navigate between Overview, Test Cases, Bug Tracker, API Tests, Coverage

### Import Postman Collection
1. Open Postman
2. Click **Import** → select `postman/ECommerce_API_Collection.json`
3. Set `base_url` variable to your API server
4. Run the collection

### View Test Cases
- Open `test-cases/test_cases_ecommerce.csv` in Excel or Google Sheets

---

## 🐛 Bug Highlights

| ID | Issue | Severity | Status |
|----|-------|----------|--------|
| BUG-003 | Duplicate payment transaction — double charge | 🔴 Critical | Closed |
| BUG-002 | Expired coupon shows no error | 🟠 High | Closed |
| BUG-004 | DELETE /api/cart/:id returns 404 | 🟠 High | Closed |
| BUG-005 | COD order confirmation email not sent | 🟡 Medium | **Open** |

---

## 👤 Author

**QA Engineer**  
Tools: Jira · Postman · Chrome DevTools  
Modules Tested: Login · Cart · Payment · Checkout  

---

> ⭐ Star this repo if it helped you understand QA testing workflows!
