# Bug Report — E-Commerce Website Testing

> **Project:** E-Commerce Web Application  
> **Tested By:** QA Engineer  
> **Tool:** Jira, Postman, Chrome DevTools  
> **Total Bugs Found:** 7  

---

## Bug Summary

| Bug ID | Module | Severity | Priority | Status |
|--------|--------|----------|----------|--------|
| BUG-001 | Login | Medium | Medium | ✅ Closed |
| BUG-002 | Cart | High | High | ✅ Closed |
| BUG-003 | Payment | Critical | High | ✅ Closed |
| BUG-004 | API | High | High | ✅ Closed |
| BUG-005 | Checkout | Medium | Medium | 🔴 Open |
| BUG-006 | Cart | High | High | ✅ Closed |
| BUG-007 | Checkout | Low | Low | ✅ Closed |

---

## Detailed Bug Reports

### BUG-001 — Forgot Password Email Delayed
- **Module:** Login
- **Severity:** Medium | **Priority:** Medium | **Status:** Closed
- **Tool:** Jira + Chrome DevTools
- **Steps to Reproduce:**
  1. Click "Forgot Password" on login page
  2. Enter registered email address
  3. Click "Send Reset Link"
  4. Check inbox
- **Expected:** Reset email received within 30 seconds
- **Actual:** Email arrived after 70+ seconds
- **Fix:** Email queue processing delay fixed by DevOps team

---

### BUG-002 — Expired Coupon No Error Message
- **Module:** Cart
- **Severity:** High | **Priority:** High | **Status:** Closed
- **Tool:** Jira + Postman
- **Steps to Reproduce:**
  1. Add any item to cart
  2. Enter an expired coupon code (e.g. SAVE10)
  3. Click "Apply"
- **Expected:** Error message: "This coupon has expired"
- **Actual:** No error shown — form silently accepts and ignores coupon
- **Fix:** Backend validation added; frontend now surfaces error response

---

### BUG-003 — Duplicate Payment Transaction (CRITICAL)
- **Module:** Payment
- **Severity:** Critical | **Priority:** High | **Status:** Closed
- **Tool:** Jira + Postman
- **Steps to Reproduce:**
  1. Add item to cart and proceed to payment
  2. Fill card details
  3. Double-click "Pay Now" button rapidly
- **Expected:** Only one charge processed; second click ignored
- **Actual:** Two separate charges applied to the card
- **Fix:** Button disabled after first click; server-side idempotency key added

---

### BUG-004 — DELETE /api/cart/:id Returns 404
- **Module:** API
- **Severity:** High | **Priority:** High | **Status:** Closed
- **Tool:** Postman
- **Steps to Reproduce:**
  1. POST to `/api/cart/add` — 201 Created, capture `cart_item_id`
  2. DELETE to `/api/cart/{cart_item_id}` with valid auth token
- **Expected:** 200 OK with `{ deleted: true }`
- **Actual:** 404 Not Found
- **API Call:**
  ```
  DELETE /api/cart/item_abc123
  Authorization: Bearer <valid_token>
  
  Response: 404 Not Found
  { "error": "Cart item not found" }
  ```
- **Fix:** Route parameter mismatch resolved in cart controller

---

### BUG-005 — COD Order Confirmation Email Not Sent (OPEN)
- **Module:** Checkout
- **Severity:** Medium | **Priority:** Medium | **Status:** 🔴 Open
- **Tool:** Jira
- **Steps to Reproduce:**
  1. Add item to cart
  2. Checkout with Cash on Delivery payment
  3. Order confirmed in UI
  4. Check registered email inbox
- **Expected:** Order confirmation email within 2 minutes
- **Actual:** No email received for COD orders (card payments work fine)
- **Note:** Scheduled for Sprint 8 fix

---

### BUG-006 — Wrong Cart Total with Qty > 10 Bulk Discount
- **Module:** Cart
- **Severity:** High | **Priority:** High | **Status:** Closed
- **Tool:** Chrome DevTools + Jira
- **Steps to Reproduce:**
  1. Add a product with bulk discount (10% off for qty ≥ 10)
  2. Set quantity to 11
  3. Check cart total
- **Expected:** Total = price × 11 × 0.90 (10% discount applied)
- **Actual:** Total = price × 11 (discount not applied)
- **Fix:** Discount calculation logic corrected in cart service

---

### BUG-007 — UI Overflow on 320px Viewport
- **Module:** Checkout
- **Severity:** Low | **Priority:** Low | **Status:** Closed
- **Tool:** Chrome DevTools
- **Steps to Reproduce:**
  1. Open checkout page
  2. Set viewport to 320px width in DevTools
  3. Observe layout
- **Expected:** All elements fit within viewport — no horizontal scroll
- **Actual:** "Place Order" button overflows container
- **Fix:** CSS flexbox adjustment on checkout CTA container
