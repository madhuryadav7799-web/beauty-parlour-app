// ===== GlamBook - Beauty Parlour Management App =====

// ===== Sample Data =====
let appointments = [
    { id: 1, customer: "Anita Sharma", phone: "9876543210", service: "Hair Spa - ₹1500", date: "2026-03-23", time: "10:00", staff: "Priya Sharma", amount: "₹1,500", status: "Confirmed" },
    { id: 2, customer: "Meena Patel", phone: "9876543211", service: "Facial - ₹800", date: "2026-03-23", time: "11:30", staff: "Neha Gupta", amount: "₹800", status: "Pending" },
    { id: 3, customer: "Kavita Singh", phone: "9876543212", service: "Bridal Makeup - ₹15000", date: "2026-03-23", time: "13:00", staff: "Ritu Singh", amount: "₹15,000", status: "Confirmed" },
    { id: 4, customer: "Pooja Verma", phone: "9876543213", service: "Manicure - ₹500", date: "2026-03-23", time: "14:30", staff: "Anjali Verma", amount: "₹500", status: "Completed" },
    { id: 5, customer: "Rekha Jain", phone: "9876543214", service: "Hair Color - ₹2000", date: "2026-03-23", time: "16:00", staff: "Priya Sharma", amount: "₹2,000", status: "Pending" },
];

let customers = [
    { name: "Anita Sharma", phone: "9876543210", email: "anita@email.com", visits: 12, spent: "₹18,500", lastVisit: "2026-03-23" },
    { name: "Meena Patel", phone: "9876543211", email: "meena@email.com", visits: 8, spent: "₹12,000", lastVisit: "2026-03-20" },
    { name: "Kavita Singh", phone: "9876543212", email: "kavita@email.com", visits: 3, spent: "₹25,000", lastVisit: "2026-03-18" },
    { name: "Pooja Verma", phone: "9876543213", email: "pooja@email.com", visits: 15, spent: "₹22,000", lastVisit: "2026-03-22" },
    { name: "Rekha Jain", phone: "9876543214", email: "rekha@email.com", visits: 6, spent: "₹9,500", lastVisit: "2026-03-15" },
];

let services = [
    { name: "Hair Cut", category: "💇 Hair", duration: "30 min", price: "₹300" },
    { name: "Hair Spa", category: "💇 Hair", duration: "60 min", price: "₹1,500" },
    { name: "Hair Color", category: "💇 Hair", duration: "90 min", price: "₹2,000" },
    { name: "Keratin Treatment", category: "💇 Hair", duration: "120 min", price: "₹5,000" },
    { name: "Gold Facial", category: "💆 Skin", duration: "60 min", price: "₹800" },
    { name: "Cleanup", category: "💆 Skin", duration: "45 min", price: "₹500" },
    { name: "Manicure", category: "💅 Nails", duration: "40 min", price: "₹500" },
    { name: "Pedicure", category: "💅 Nails", duration: "45 min", price: "₹600" },
    { name: "Nail Art", category: "💅 Nails", duration: "60 min", price: "₹800" },
    { name: "Bridal Makeup", category: "💄 Makeup", duration: "180 min", price: "₹15,000" },
    { name: "Party Makeup", category: "💄 Makeup", duration: "90 min", price: "₹3,000" },
    { name: "Full Body Spa", category: "🧖 Spa", duration: "120 min", price: "₹4,000" },
    { name: "Threading", category: "💆 Skin", duration: "15 min", price: "₹100" },
    { name: "Waxing (Full Arms)", category: "💆 Skin", duration: "30 min", price: "₹500" },
];

let staffMembers = [
    { name: "Priya Sharma", role: "Senior Stylist", rating: 4.9, status: "available", initials: "PS" },
    { name: "Neha Gupta", role: "Skin Specialist", rating: 4.8, status: "busy", initials: "NG" },
    { name: "Ritu Singh", role: "Bridal Makeup Artist", rating: 4.9, status: "available", initials: "RS" },
    { name: "Anjali Verma", role: "Nail Technician", rating: 4.7, status: "available", initials: "AV" },
    { name: "Sunita Devi", role: "Spa Therapist", rating: 4.6, status: "off", initials: "SD" },
    { name: "Komal Yadav", role: "Junior Stylist", rating: 4.5, status: "available", initials: "KY" },
];

let invoices = [
    { id: "INV-001", customer: "Anita Sharma", services: "Hair Spa, Facial", amount: "₹2,300", payment: "UPI", date: "2026-03-23" },
    { id: "INV-002", customer: "Kavita Singh", services: "Bridal Makeup", amount: "₹15,000", payment: "Cash", date: "2026-03-23" },
    { id: "INV-003", customer: "Pooja Verma", services: "Manicure, Pedicure", amount: "₹1,100", payment: "Card", date: "2026-03-22" },
];

let invoiceCounter = 4;

// ===== Page Navigation =====
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;

        // Remove active from all
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

        // Set active
        link.classList.add('active');
        document.getElementById(page).classList.add('active');

        // Close sidebar on mobile
        document.getElementById('sidebar').classList.remove('active');
    });
});

// ===== Mobile Menu Toggle =====
document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
});

// ===== Modal Functions =====
function openModal(id) {
    document.getElementById(id).classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

// Close modal on outside click
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

// ===== Render Functions =====
function renderAppointments() {
    const tbody = document.getElementById('appointmentTable');
    const allTbody = document.getElementById('allAppointmentsTable');

    const rows = appointments.map(apt => `
        <tr>
            <td>${apt.customer}</td>
            <td>${apt.service.split(' - ')[0]}</td>
            <td>${apt.time}</td>
            <td>${apt.staff}</td>
            <td>${apt.amount}</td>
            <td><span class="status status-${apt.status.toLowerCase()}">${apt.status}</span></td>
            <td>
                <button class="btn btn-success btn-sm" onclick="updateStatus(${apt.id}, 'Completed')">✓</button>
                <button class="btn btn-danger btn-sm" onclick="updateStatus(${apt.id}, 'Cancelled')">✕</button>
            </td>
        </tr>
    `).join('');

    const allRows = appointments.map(apt => `
        <tr>
            <td>#${apt.id}</td>
            <td>${apt.customer}</td>
            <td>${apt.service.split(' - ')[0]}</td>
            <td>${apt.date}</td>
            <td>${apt.time}</td>
            <td>${apt.staff}</td>
            <td>${apt.amount}</td>
            <td><span class="status status-${apt.status.toLowerCase()}">${apt.status}</span></td>
            <td>
                <button class="btn btn-success btn-sm" onclick="updateStatus(${apt.id}, 'Completed')">✓</button>
                <button class="btn btn-danger btn-sm" onclick="updateStatus(${apt.id}, 'Cancelled')">✕</button>
            </td>
        </tr>
    `).join('');

    if (tbody) tbody.innerHTML = rows;
    if (allTbody) allTbody.innerHTML = allRows;
}

function renderCustomers() {
    const tbody = document.getElementById('customerTable');
    const rows = customers.map(c => `
        <tr>
            <td><strong>${c.name}</strong></td>
            <td>${c.phone}</td>
            <td>${c.email}</td>
            <td>${c.visits}</td>
            <td>${c.spent}</td>
            <td>${c.lastVisit}</td>
            <td>
                <button class="btn btn-primary btn-sm" onclick="alert('Viewing ${c.name}')">View</button>
            </td>
        </tr>
    `).join('');
    if (tbody) tbody.innerHTML = rows;
}

function renderServices() {
    const grid = document.getElementById('servicesGrid');
    const cards = services.map((s, i) => `
        <div class="service-card">
            <div class="category">${s.category}</div>
            <h3>${s.name}</h3>
            <div class="duration"><i class="fas fa-clock"></i> ${s.duration}</div>
            <div class="price">${s.price}</div>
            <div class="actions">
                <button class="btn btn-primary btn-sm" onclick="alert('Edit: ${s.name}')">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteService(${i})">Delete</button>
            </div>
        </div>
    `).join('');
    if (grid) grid.innerHTML = cards;
}

function renderStaff() {
    const grid = document.getElementById('staffGrid');
    const cards = staffMembers.map(s => `
        <div class="staff-card">
            <div class="staff-avatar">${s.initials}</div>
            <h3>${s.name}</h3>
            <div class="role">${s.role}</div>
            <div class="rating">
                ${'★'.repeat(Math.floor(s.rating))}${'☆'.repeat(5 - Math.floor(s.rating))} ${s.rating}
            </div>
            <span class="staff-status ${s.status}">
                ${s.status === 'available' ? '🟢 Available' : s.status === 'busy' ? '🟡 Busy' : '🔴 Day Off'}
            </span>
        </div>
    `).join('');
    if (grid) grid.innerHTML = cards;
}

function renderBilling() {
    const tbody = document.getElementById('billingTable');
    const rows = invoices.map(inv => `
        <tr>
            <td><strong>${inv.id}</strong></td>
            <td>${inv.customer}</td>
            <td>${inv.services}</td>
            <td><strong>${inv.amount}</strong></td>
            <td>${inv.payment}</td>
            <td>${inv.date}</td>
            <td>
                <button class="btn btn-primary btn-sm" onclick="printInvoice('${inv.id}')">
                    <i class="fas fa-print"></i> Print
                </button>
            </td>
        </tr>
    `).join('');
    if (tbody) tbody.innerHTML = rows;
}

function renderPopularServices() {
    const container = document.getElementById('popularServices');
    const popular = [
        { name: "Hair Spa", bookings: 85, percent: 85 },
        { name: "Bridal Makeup", bookings: 72, percent: 72 },
        { name: "Facial", bookings: 68, percent: 68 },
        { name: "Hair Color", bookings: 55, percent: 55 },
        { name: "Manicure & Pedicure", bookings: 48, percent: 48 },
    ];

    const html = popular.map((s, i) => `
        <div class="popular-item">
            <div class="popular-info">
                <div class="popular-rank">${i + 1}</div>
                <div>
                    <strong>${s.name}</strong>
                    <div style="color: var(--text-light); font-size: 13px;">${s.bookings} bookings this month</div>
                </div>
            </div>
            <div class="progress-bar">
                <div class="fill" style="width: ${s.percent}%"></div>
            </div>
        </div>
    `).join('');
    if (container) container.innerHTML = html;
}

// ===== Action Functions =====
function updateStatus(id, status) {
    const apt = appointments.find(a => a.id === id);
    if (apt) {
        apt.status = status;
        renderAppointments();
    }
}

function addAppointment(e) {
    e.preventDefault();
    const newApt = {
        id: appointments.length + 1,
        customer: document.getElementById('aptCustomer').value,
        phone: document.getElementById('aptPhone').value,
        service: document.getElementById('aptService').value,
        date: document.getElementById('aptDate').value,
        time: document.getElementById('aptTime').value,
        staff: document.getElementById('aptStaff').value,
        amount: document.getElementById('aptService').value.split('₹')[1] ? '₹' + document.getElementById('aptService').value.split('₹')[1] : '₹0',
        status: "Confirmed"
    };
    appointments.unshift(newApt);
    renderAppointments();
    closeModal('appointmentModal');
    e.target.reset();
    alert('✅ Appointment booked successfully!');
}

function addCustomer(e) {
    e.preventDefault();
    const newCust = {
        name: document.getElementById('custName').value,
        phone: document.getElementById('custPhone').value,
        email: document.getElementById('custEmail').value || '-',
        visits: 0,
        spent: '₹0',
        lastVisit: new Date().toISOString().split('T')[0]
    };
    customers.unshift(newCust);
    renderCustomers();
    closeModal('customerModal');
    e.target.reset();
    alert('✅ Customer added successfully!');
}

function addService(e) {
    e.preventDefault();
    const newSvc = {
        name: document.getElementById('svcName').value,
        category: document.getElementById('svcCategory').value,
        duration: document.getElementById('svcDuration').value + ' min',
        price: '₹' + parseInt(document.getElementById('svcPrice').value).toLocaleString()
    };
    services.unshift(newSvc);
    renderServices();
    closeModal('serviceModal');
    e.target.reset();
    alert('✅ Service added successfully!');
}

function deleteService(index) {
    if (confirm('Are you sure you want to delete this service?')) {
        services.splice(index, 1);
        renderServices();
    }
}

function generateBill(e) {
    e.preventDefault();
    const selected = Array.from(document.getElementById('billServices').selectedOptions);
    const discount = parseInt(document.getElementById('billDiscount').value) || 0;

    if (selected.length === 0) {
        alert('Please select at least one service!');
        return;
    }

    let total = 0;
    const serviceNames = [];
    selected.forEach(opt => {
        const [name, price] = opt.value.split('|');
        serviceNames.push(name);
        total += parseInt(price);
    });

    const discountAmount = total * (discount / 100);
    const finalAmount = total - discountAmount;

    const newInvoice = {
        id: `INV-${String(invoiceCounter++).padStart(3, '0')}`,
        customer: document.getElementById('billCustomer').value,
        services: serviceNames.join(', '),
        amount: '₹' + finalAmount.toLocaleString(),
        payment: document.getElementById('billPayment').value,
        date: new Date().toISOString().split('T')[0]
    };

    invoices.unshift(newInvoice);
    renderBilling();
    closeModal('billModal');
    e.target.reset();
    alert(`✅ Invoice Generated!\n\nInvoice: ${newInvoice.id}\nCustomer: ${newInvoice.customer}\nServices: ${newInvoice.services}\nTotal: ₹${total.toLocaleString()}\nDiscount: ${discount}% (-₹${discountAmount.toLocaleString()})\nFinal Amount: ${newInvoice.amount}\nPayment: ${newInvoice.payment}`);
}

function printInvoice(id) {
    const inv = invoices.find(i => i.id === id);
    if (inv) {
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
            <head><title>Invoice - ${inv.id}</title>
            <style>
                body { font-family: 'Poppins', Arial, sans-serif; padding: 40px; }
                h1 { color: #9b59b6; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                td, th { padding: 10px; border: 1px solid #ddd; }
                th { background: #f5f5f5; }
                .total { font-size: 24px; font-weight: bold; color: #9b59b6; }
            </style></head>
            <body>
                <h1>💜 GlamBook Beauty Salon</h1>
                <p>123, Main Street, City Center, New Delhi - 110001</p>
                <p>Phone: +91 98765 43210</p>
                <hr>
                <h2>Invoice: ${inv.id}</h2>
                <p><strong>Customer:</strong> ${inv.customer}</p>
                <p><strong>Date:</strong> ${inv.date}</p>
                <table>
                    <tr><th>Services</th><td>${inv.services}</td></tr>
                    <tr><th>Payment Mode</th><td>${inv.payment}</td></tr>
                </table>
                <p class="total">Total: ${inv.amount}</p>
                <hr>
                <p>Thank you for visiting GlamBook! 💜</p>
            </body></html>
        `);
        printWindow.document.close();
        printWindow.print();
    }
}

// ===== Filter Buttons =====
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// ===== Initialize =====
function init() {
    renderAppointments();
    renderCustomers();
    renderServices();
    renderStaff();
    renderBilling();
    renderPopularServices();

    // Set today's date as default
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('aptDate');
    if (dateInput) dateInput.value = today;
}

init();
