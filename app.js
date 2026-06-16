// ── DATA ─────────────────────────────────────────────────────────────────────

const TEST_CASES = [
  // LOGIN
  { id:"TC-L01", module:"Login", scenario:"Valid credentials login", type:"Functional", priority:"Critical", status:"Pass" },
  { id:"TC-L02", module:"Login", scenario:"Invalid password shows error message", type:"Functional", priority:"Critical", status:"Pass" },
  { id:"TC-L03", module:"Login", scenario:"Empty email field validation", type:"Functional", priority:"High", status:"Pass" },
  { id:"TC-L04", module:"Login", scenario:"Empty password field validation", type:"Functional", priority:"High", status:"Pass" },
  { id:"TC-L05", module:"Login", scenario:"SQL injection in email field", type:"Functional", priority:"Critical", status:"Pass" },
  { id:"TC-L06", module:"Login", scenario:"XSS attempt in login form", type:"Functional", priority:"Critical", status:"Pass" },
  { id:"TC-L07", module:"Login", scenario:"Brute force — account lock after 5 attempts", type:"Functional", priority:"High", status:"Pass" },
  { id:"TC-L08", module:"Login", scenario:"Remember Me persists session", type:"Functional", priority:"Medium", status:"Pass" },
  { id:"TC-L09", module:"Login", scenario:"Forgot password email sent", type:"Functional", priority:"High", status:"Fail" },
  { id:"TC-L10", module:"Login", scenario:"Password reset link expires in 24h", type:"Functional", priority:"High", status:"Pass" },
  { id:"TC-L11", module:"Login", scenario:"Logout clears session correctly", type:"Functional", priority:"High", status:"Pass" },
  { id:"TC-L12", module:"Login", scenario:"Login page UI on mobile 375px", type:"UI", priority:"Medium", status:"Pass" },
  { id:"TC-L13", module:"Login", scenario:"Tab order on login form", type:"UI", priority:"Low", status:"Pass" },
  { id:"TC-L14", module:"Login", scenario:"Password field masking toggle", type:"UI", priority:"Low", status:"Pass" },
  { id:"TC-L15", module:"Login", scenario:"Login with Google OAuth", type:"Functional", priority:"Medium", status:"Pass" },
  { id:"TC-L16", module:"Login", scenario:"Session timeout after 30 min inactivity", type:"Functional", priority:"Medium", status:"Pass" },
  { id:"TC-L17", module:"Login", scenario:"Regression — login after password change", type:"Regression", priority:"High", status:"Pass" },
  { id:"TC-L18", module:"Login", scenario:"Regression — login after cart update", type:"Regression", priority:"Medium", status:"Pass" },
  // CART
  { id:"TC-C01", module:"Cart", scenario:"Add single item to cart", type:"Functional", priority:"Critical", status:"Pass" },
  { id:"TC-C02", module:"Cart", scenario:"Add duplicate item increments quantity", type:"Functional", priority:"High", status:"Pass" },
  { id:"TC-C03", module:"Cart", scenario:"Remove item from cart", type:"Functional", priority:"Critical", status:"Pass" },
  { id:"TC-C04", module:"Cart", scenario:"Update item quantity to 0 removes item", type:"Functional", priority:"High", status:"Pass" },
  { id:"TC-C05", module:"Cart", scenario:"Cart total price calculation accuracy", type:"Functional", priority:"Critical", status:"Pass" },
  { id:"TC-C06", module:"Cart", scenario:"Apply valid coupon code discount", type:"Functional", priority:"High", status:"Pass" },
  { id:"TC-C07", module:"Cart", scenario:"Apply expired coupon shows error", type:"Functional", priority:"High", status:"Fail" },
  { id:"TC-C08", module:"Cart", scenario:"Cart persists after logout and re-login", type:"Functional", priority:"Medium", status:"Pass" },
  { id:"TC-C09", module:"Cart", scenario:"Max quantity limit enforcement", type:"Functional", priority:"Medium", status:"Pass" },
  { id:"TC-C10", module:"Cart", scenario:"Out of stock item disabled in cart", type:"Functional", priority:"High", status:"Pass" },
  { id:"TC-C11", module:"Cart", scenario:"Cart count badge updates in header", type:"UI", priority:"Medium", status:"Pass" },
  { id:"TC-C12", module:"Cart", scenario:"Cart UI on tablet 768px", type:"UI", priority:"Low", status:"Pass" },
  { id:"TC-C13", module:"Cart", scenario:"Total recalculates on coupon removal", type:"Functional", priority:"High", status:"Pass" },
  { id:"TC-C14", module:"Cart", scenario:"Regression — cart after product price update", type:"Regression", priority:"High", status:"Pass" },
  { id:"TC-C15", module:"Cart", scenario:"Cart total with >10 quantity discount", type:"Functional", priority:"Medium", status:"Fail" },
  // PAYMENT
  { id:"TC-P01", module:"Payment", scenario:"Valid Visa card payment success", type:"Functional", priority:"Critical", status:"Pass" },
  { id:"TC-P02", module:"Payment", scenario:"Valid Mastercard payment success", type:"Functional", priority:"Critical", status:"Pass" },
  { id:"TC-P03", module:"Payment", scenario:"Expired card shows error", type:"Functional", priority:"Critical", status:"Pass" },
  { id:"TC-P04", module:"Payment", scenario:"Invalid CVV rejected", type:"Functional", priority:"Critical", status:"Pass" },
  { id:"TC-P05", module:"Payment", scenario:"Insufficient funds declined gracefully", type:"Functional", priority:"High", status:"Pass" },
  { id:"TC-P06", module:"Payment", scenario:"Duplicate transaction blocked", type:"Functional", priority:"Critical", status:"Fail" },
  { id:"TC-P07", module:"Payment", scenario:"Payment timeout rolls back transaction", type:"Functional", priority:"Critical", status:"Pass" },
  { id:"TC-P08", module:"Payment", scenario:"UPI deeplink opens correctly", type:"Functional", priority:"High", status:"Pass" },
  { id:"TC-P09", module:"Payment", scenario:"Net banking redirect and return", type:"Functional", priority:"High", status:"Pass" },
  { id:"TC-P10", module:"Payment", scenario:"Payment confirmation page displayed", type:"Functional", priority:"High", status:"Pass" },
  { id:"TC-P11", module:"Payment", scenario:"Payment page SSL indicator visible", type:"UI", priority:"High", status:"Pass" },
  { id:"TC-P12", module:"Payment", scenario:"Card number auto-formatting (XXXX XXXX)", type:"UI", priority:"Low", status:"Pass" },
  { id:"TC-P13", module:"Payment", scenario:"Regression — payment after coupon applied", type:"Regression", priority:"High", status:"Pass" },
  // CHECKOUT
  { id:"TC-CH01", module:"Checkout", scenario:"Full checkout flow — end to end", type:"Functional", priority:"Critical", status:"Pass" },
  { id:"TC-CH02", module:"Checkout", scenario:"Valid shipping address accepted", type:"Functional", priority:"Critical", status:"Pass" },
  { id:"TC-CH03", module:"Checkout", scenario:"Invalid PIN code shows error", type:"Functional", priority:"High", status:"Pass" },
  { id:"TC-CH04", module:"Checkout", scenario:"Order summary matches cart total", type:"Functional", priority:"Critical", status:"Pass" },
  { id:"TC-CH05", module:"Checkout", scenario:"Order confirmation email sent", type:"Functional", priority:"High", status:"Blocked" },
  { id:"TC-CH06", module:"Checkout", scenario:"COD option available for eligible address", type:"Functional", priority:"Medium", status:"Pass" },
  { id:"TC-CH07", module:"Checkout", scenario:"Guest checkout without login", type:"Functional", priority:"Medium", status:"Pass" },
  { id:"TC-CH08", module:"Checkout", scenario:"Order placed in Jira tracked to completion", type:"Functional", priority:"High", status:"Pass" },
  { id:"TC-CH09", module:"Checkout", scenario:"Checkout UI on mobile 375px", type:"UI", priority:"Medium", status:"Pass" },
  { id:"TC-CH10", module:"Checkout", scenario:"Regression — checkout after coupon expiry fix", type:"Regression", priority:"High", status:"Pass" },
];

const BUGS = [
  { id:"BUG-001", title:"Forgot password email delayed over 1 minute", module:"Login", severity:"Medium", priority:"Medium", status:"Closed", steps:"1. Click Forgot Password\n2. Enter email\n3. Check inbox — email arrives after >60s", tool:"Jira + Chrome DevTools" },
  { id:"BUG-002", title:"Expired coupon code shows no error message to user", module:"Cart", severity:"High", priority:"High", status:"Closed", steps:"1. Add item to cart\n2. Apply expired coupon code\n3. No error displayed — form silently fails", tool:"Jira + Postman" },
  { id:"BUG-003", title:"Duplicate payment transaction not blocked — double charge", module:"Payment", severity:"Critical", priority:"High", status:"Closed", steps:"1. Initiate payment\n2. Double-click Pay button\n3. Two charges applied to card", tool:"Jira + Postman" },
  { id:"BUG-004", title:"DELETE /api/cart/:id returns 404 for valid cart item", module:"API", severity:"High", priority:"High", status:"Closed", steps:"1. POST item to cart (201 success)\n2. DELETE same item by ID\n3. Receives 404 Not Found", tool:"Postman" },
  { id:"BUG-005", title:"Order confirmation email not sent for COD orders", module:"Checkout", severity:"Medium", priority:"Medium", status:"Open", steps:"1. Place order with Cash on Delivery\n2. Order confirmed in UI\n3. No email received in inbox", tool:"Jira" },
  { id:"BUG-006", title:"Cart total incorrect when quantity exceeds 10 with bulk discount", module:"Cart", severity:"High", priority:"High", status:"Closed", steps:"1. Add item, set qty to 11\n2. Bulk discount should apply\n3. Total shows wrong amount", tool:"Chrome DevTools + Jira" },
  { id:"BUG-007", title:"UI breaks on 320px mobile viewport — buttons overflow", module:"Checkout", severity:"Low", priority:"Low", status:"Closed", steps:"1. Open checkout on 320px viewport\n2. CTA buttons overflow container", tool:"Chrome DevTools" },
];

const API_TESTS = [
  { id:"API-01", method:"POST", endpoint:"/api/auth/login", expected:"200 OK + JWT token", actual:"200 OK", response:"142ms", status:"Pass" },
  { id:"API-02", method:"POST", endpoint:"/api/auth/login (invalid)", expected:"401 Unauthorized", actual:"401 Unauthorized", response:"98ms", status:"Pass" },
  { id:"API-03", method:"GET",  endpoint:"/api/products", expected:"200 OK + product array", actual:"200 OK", response:"210ms", status:"Pass" },
  { id:"API-04", method:"GET",  endpoint:"/api/products/:id", expected:"200 OK + product object", actual:"200 OK", response:"88ms", status:"Pass" },
  { id:"API-05", method:"POST", endpoint:"/api/cart/add", expected:"201 Created", actual:"201 Created", response:"156ms", status:"Pass" },
  { id:"API-06", method:"PUT",  endpoint:"/api/cart/:id", expected:"200 OK + updated cart", actual:"200 OK", response:"134ms", status:"Pass" },
  { id:"API-07", method:"DELETE", endpoint:"/api/cart/:id", expected:"200 OK", actual:"404 Not Found", response:"45ms", status:"Fail" },
  { id:"API-08", method:"GET",  endpoint:"/api/cart", expected:"200 OK + cart items", actual:"200 OK", response:"112ms", status:"Pass" },
  { id:"API-09", method:"POST", endpoint:"/api/coupons/validate", expected:"200 OK + discount %", actual:"200 OK", response:"167ms", status:"Pass" },
  { id:"API-10", method:"POST", endpoint:"/api/orders/checkout", expected:"201 Created + order ID", actual:"201 Created", response:"389ms", status:"Pass" },
  { id:"API-11", method:"GET",  endpoint:"/api/orders/:id", expected:"200 OK + order details", actual:"200 OK", response:"95ms", status:"Pass" },
  { id:"API-12", method:"GET",  endpoint:"/api/orders", expected:"200 OK + order list", actual:"200 OK", response:"178ms", status:"Pass" },
  { id:"API-13", method:"POST", endpoint:"/api/payment/initiate", expected:"200 OK + payment URL", actual:"200 OK", response:"445ms", status:"Pass" },
  { id:"API-14", method:"POST", endpoint:"/api/payment/verify", expected:"200 OK + status", actual:"200 OK", response:"312ms", status:"Pass" },
  { id:"API-15", method:"GET",  endpoint:"/api/users/profile", expected:"200 OK + user object", actual:"200 OK", response:"73ms", status:"Pass" },
  { id:"API-16", method:"PUT",  endpoint:"/api/users/profile", expected:"200 OK + updated user", actual:"200 OK", response:"188ms", status:"Pass" },
  { id:"API-17", method:"POST", endpoint:"/api/auth/logout", expected:"200 OK, session cleared", actual:"200 OK", response:"56ms", status:"Pass" },
  { id:"API-18", method:"GET",  endpoint:"/api/products/search?q=shoe", expected:"200 OK + results", actual:"500 Internal Error", response:"2100ms", status:"Fail" },
];

const COVERAGE = [
  { module:"Login", total:18, passed:16, failed:1, blocked:1, pct:89, types:["Functional (11)","UI (3)","Regression (2)","Security (2)"] },
  { module:"Cart", total:15, passed:13, failed:2, blocked:0, pct:87, types:["Functional (10)","UI (2)","Regression (2)","Performance (1)"] },
  { module:"Payment", total:13, passed:12, failed:1, blocked:0, pct:92, types:["Functional (9)","UI (2)","Regression (1)","Security (1)"] },
  { module:"Checkout", total:10, passed:9, failed:0, blocked:1, pct:90, types:["Functional (6)","UI (2)","Regression (1)","E2E (1)"] },
];

// ── NAVIGATION ───────────────────────────────────────────────────────────────
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('view-' + btn.dataset.view).classList.add('active');
    if (btn.dataset.view === 'testcases') renderTests();
    if (btn.dataset.view === 'bugs') renderBugs();
    if (btn.dataset.view === 'api') renderAPI();
    if (btn.dataset.view === 'coverage') renderCoverage();
  });
});

// date
document.getElementById('today-date').textContent = new Date().toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });

// ── RENDER TEST CASES ────────────────────────────────────────────────────────
function renderTests() {
  const module = document.getElementById('moduleFilter').value;
  const status = document.getElementById('statusFilter').value;
  const data = TEST_CASES.filter(t =>
    (!module || t.module === module) &&
    (!status || t.status === status)
  );
  document.getElementById('testBody').innerHTML = data.map(t => `
    <tr>
      <td>${t.id}</td>
      <td><span class="badge badge-functional" style="font-size:10px">${t.module}</span></td>
      <td style="color:var(--text);max-width:280px">${t.scenario}</td>
      <td><span class="badge badge-${t.type.toLowerCase()}">${t.type}</span></td>
      <td><span class="badge badge-${t.priority.toLowerCase()}">${t.priority}</span></td>
      <td><span class="badge badge-${t.status.toLowerCase()}">${t.status}</span></td>
    </tr>`).join('');
}

function filterTests() { renderTests(); }

// ── RENDER BUGS ──────────────────────────────────────────────────────────────
function renderBugs() {
  document.getElementById('bugGrid').innerHTML = BUGS.map(b => `
    <div class="bug-card sev-${b.severity.toLowerCase()}">
      <div class="bug-id">${b.id} · ${b.tool}</div>
      <div class="bug-title">${b.title}</div>
      <div class="bug-meta">
        <span class="badge badge-${b.severity.toLowerCase()}">${b.severity}</span>
        <span class="badge badge-${b.status.toLowerCase()}">${b.status}</span>
        <span class="bug-module">${b.module}</span>
      </div>
    </div>`).join('');
}

// ── RENDER API ───────────────────────────────────────────────────────────────
function renderAPI() {
  document.getElementById('apiBody').innerHTML = API_TESTS.map(a => `
    <tr>
      <td>${a.id}</td>
      <td><span class="method-${a.method.toLowerCase()}">${a.method}</span></td>
      <td><span class="endpoint">${a.endpoint}</span></td>
      <td style="font-size:11px;color:var(--text2)">${a.expected}</td>
      <td style="font-size:11px;color:var(--text2)">${a.actual}</td>
      <td><span class="response-time">${a.response}</span></td>
      <td><span class="badge badge-${a.status.toLowerCase()}">${a.status}</span></td>
    </tr>`).join('');
}

// ── RENDER COVERAGE ──────────────────────────────────────────────────────────
function renderCoverage() {
  document.getElementById('coverageGrid').innerHTML = COVERAGE.map(c => `
    <div class="coverage-card">
      <div class="coverage-title">${c.module} Module</div>
      <div class="coverage-pct">${c.pct}%</div>
      <div class="coverage-bar-outer"><div class="coverage-bar-inner" style="width:${c.pct}%"></div></div>
      <div class="coverage-breakdown">
        <div class="cov-row"><span class="cov-label">Total Test Cases</span><span class="cov-val">${c.total}</span></div>
        <div class="cov-row"><span class="cov-label" style="color:var(--green)">Passed</span><span class="cov-val" style="color:var(--green)">${c.passed}</span></div>
        <div class="cov-row"><span class="cov-label" style="color:var(--red)">Failed</span><span class="cov-val" style="color:var(--red)">${c.failed}</span></div>
        <div class="cov-row"><span class="cov-label" style="color:var(--amber)">Blocked</span><span class="cov-val" style="color:var(--amber)">${c.blocked}</span></div>
        <div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--border)">
          ${c.types.map(ty => `<div class="cov-row" style="margin-bottom:3px"><span class="cov-label">${ty}</span></div>`).join('')}
        </div>
      </div>
    </div>`).join('');
}
