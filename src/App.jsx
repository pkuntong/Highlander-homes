import React, { useState, useEffect, useCallback } from 'react';

// --- Mock Data ---
// In a real application, this data would come from a backend API
const MOCK_USERS = {
  'landlord@example.com': { id: 'landlord1', type: 'landlord', name: 'Alex Owner' },
  'tenant1@example.com': { id: 'tenant1', type: 'tenant', name: 'Bob Tenant', propertyId: 'prop1', rentDue: 8, rentAmount: 1500 },
  'tenant2@example.com': { id: 'tenant2', type: 'tenant', name: 'Charlie Tenant', propertyId: 'prop2', rentDue: 15, rentAmount: 1800 },
};

const MOCK_PROPERTIES = {
  'prop1': { id: 'prop1', address: '123 Main St, Anytown, USA', tenantId: 'tenant1' },
  'prop2': { id: 'prop2', address: '456 Oak Ave, Anytown, USA', tenantId: 'tenant2' },
  'prop3': { id: 'prop3', address: '789 Pine Ln, Anytown, USA', tenantId: null }, // Vacant
  'prop4': { id: 'prop4', address: '101 Maple Dr, Anytown, USA', tenantId: null }, // Vacant
  'prop5': { id: 'prop5', address: '202 Birch Rd, Anytown, USA', tenantId: null }, // Vacant
};

const MOCK_RENT_HISTORY = {
  'tenant1': [
    { id: 'rh1', date: '2025-03-01', amount: 1500, status: 'Paid' },
    { id: 'rh2', date: '2025-02-01', amount: 1500, status: 'Paid' },
    { id: 'rh3', date: '2025-01-01', amount: 1500, status: 'Paid' },
  ],
  'tenant2': [
    { id: 'rh4', date: '2025-03-10', amount: 1800, status: 'Paid' },
    { id: 'rh5', date: '2025-02-12', amount: 1800, status: 'Paid' },
    { id: 'rh6', date: '2025-01-15', amount: 1800, status: 'Paid' },
  ],
};

const MOCK_MAINTENANCE_REQUESTS = [
  { id: 'mr1', tenantId: 'tenant1', propertyId: 'prop1', date: '2025-03-20', issue: 'Leaky faucet in kitchen', status: 'Open' },
  { id: 'mr2', tenantId: 'tenant2', propertyId: 'prop2', date: '2025-03-15', issue: 'Toilet flush not working', status: 'In Progress' },
];

const MOCK_MESSAGES = {
  'tenant1': [
      { id: 'msg1', from: 'landlord', date: '2025-03-28', text: 'Reminder: Rent is due on the 8th.' },
  ],
  'tenant2': [
      { id: 'msg2', from: 'landlord', date: '2025-03-25', text: 'Maintenance scheduled for the toilet on Friday.' },
  ]
};

// --- UI Components (using Tailwind classes) ---

// Simple Button Component
const Button = ({ onClick, children, className = '', variant = 'primary' }) => {
  const baseStyle = 'px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// Simple Card Component
const Card = ({ children, className = '', title }) => (
  <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
    {title && <h3 className="text-lg font-semibold p-4 bg-gray-50 border-b border-gray-200">{title}</h3>}
    <div className="p-4">
      {children}
    </div>
  </div>
);

// Simple Input Component
const Input = ({ type = 'text', value, onChange, placeholder, className = '', ...props }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${className}`}
    {...props}
  />
);

// Simple Textarea Component
const Textarea = ({ value, onChange, placeholder, className = '', rows = 3, ...props }) => (
  <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows={rows}
    className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${className}`}
    {...props}
  />
);

// Simple Table Component
const Table = ({ headers, data, renderRow }) => (
    <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {headers.map((header, index) => (
                        <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item, index) => renderRow(item, index))}
            </tbody>
        </table>
    </div>
);

// Simple Message Box
const MessageBox = ({ message, type = 'info', onClose }) => {
    const colors = {
        info: 'bg-blue-100 border-blue-500 text-blue-700',
        success: 'bg-green-100 border-green-500 text-green-700',
        warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
        error: 'bg-red-100 border-red-500 text-red-700',
    };
    if (!message) return null;
    return (
        <div className={`border-l-4 p-4 my-4 rounded-md ${colors[type]}`} role="alert">
            <div className="flex justify-between items-center">
                <p className="font-bold">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
                {onClose && (
                     <button onClick={onClose} className="text-xl font-semibold leading-none">&times;</button>
                )}
            </div>
            <p>{message}</p>
        </div>
    );
};


// --- App Components ---

// Login Screen
function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Password check is mocked
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    const user = MOCK_USERS[email];
    if (user) {
      // In a real app, you'd verify the password against a hash
      console.log(`Logging in as ${user.type}: ${user.name}`);
      onLogin(user);
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md" title="Login">
        <form onSubmit={handleLogin} className="space-y-4">
          {error && <MessageBox message={error} type="error" onClose={() => setError('')} />}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
}

// --- Tenant Dashboard Components ---

function TenantProfile({ tenant, property }) {
    return (
        <Card title="My Profile & Property">
            <p><strong>Name:</strong> {tenant.name}</p>
            <p><strong>Email:</strong> {tenant.id}</p> {/* Using email as ID here */}
            {property && <p><strong>Property Address:</strong> {property.address}</p>}
            <p><strong>Monthly Rent:</strong> ${tenant.rentAmount}</p>
            <p><strong>Rent Due Day:</strong> {tenant.rentDue}{getDaySuffix(tenant.rentDue)} of the month</p>
        </Card>
    );
}

function RentHistory({ history }) {
    const headers = ['Payment Date', 'Amount', 'Status'];
    const renderRow = (item, index) => (
        <tr key={item.id || index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.date}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.amount}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
                 <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    item.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                 }`}>
                    {item.status}
                 </span>
            </td>
        </tr>
    );
    return (
        <Card title="Rent Payment History">
            {history && history.length > 0 ? (
                <Table headers={headers} data={history} renderRow={renderRow} />
            ) : (
                <p>No payment history available.</p>
            )}
        </Card>
    );
}

function PayRent({ tenant, onPayment }) {
    const [showConfirm, setShowConfirm] = useState(false);
    const [message, setMessage] = useState('');

    const handlePayClick = () => {
        setMessage('');
        setShowConfirm(true);
    };

    const handleConfirmPay = () => {
        // Simulate payment processing
        console.log(`Simulating payment of $${tenant.rentAmount} for ${tenant.name}`);
        setShowConfirm(false);
        setMessage(`Successfully processed payment of $${tenant.rentAmount}.`);
        onPayment({ // Pass mock payment data up
            id: `rh_new_${Date.now()}`,
            date: new Date().toISOString().split('T')[0], // Today's date
            amount: tenant.rentAmount,
            status: 'Paid'
        });
        // Hide success message after a few seconds
        setTimeout(() => setMessage(''), 5000);
    };

    return (
        <Card title="Pay Rent">
            {message && <MessageBox message={message} type="success" onClose={() => setMessage('')} />}
            {!showConfirm && !message && (
                <div className="space-y-3">
                    <p>Your next rent payment of <strong>${tenant.rentAmount}</strong> is due on the <strong>{tenant.rentDue}{getDaySuffix(tenant.rentDue)}</strong>.</p>
                    <Button onClick={handlePayClick}>Pay ${tenant.rentAmount} Now</Button>
                    <p className="text-xs text-gray-500">Note: This is a mock payment button. No real transaction will occur.</p>
                </div>
            )}
            {showConfirm && (
                <div className="space-y-3">
                    <p>Confirm payment of <strong>${tenant.rentAmount}</strong>?</p>
                    <div className="flex space-x-2">
                        <Button onClick={handleConfirmPay} variant="primary">Confirm Payment</Button>
                        <Button onClick={() => setShowConfirm(false)} variant="secondary">Cancel</Button>
                    </div>
                </div>
            )}
        </Card>
    );
}


function MaintenanceRequestForm({ tenant, property, onSubmitRequest }) {
    const [issue, setIssue] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!issue.trim()) {
            setMessage('Please describe the issue.');
            return;
        }
        const newRequest = {
            id: `mr_new_${Date.now()}`,
            tenantId: tenant.id,
            propertyId: property.id,
            date: new Date().toISOString().split('T')[0],
            issue: issue.trim(),
            status: 'Open'
        };
        console.log("Submitting maintenance request:", newRequest);
        onSubmitRequest(newRequest); // Pass the new request up
        setIssue('');
        setMessage('Maintenance request submitted successfully.');
        setTimeout(() => setMessage(''), 5000); // Clear message after 5s
    };

    return (
        <Card title="Submit Maintenance Request">
             {message && <MessageBox message={message} type={message.includes('successfully') ? 'success' : 'warning'} onClose={() => setMessage('')} />}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">Describe the Issue</label>
                    <Textarea
                        id="issue"
                        value={issue}
                        onChange={(e) => setIssue(e.target.value)}
                        placeholder="e.g., The kitchen sink is leaking."
                        required
                    />
                </div>
                <Button type="submit">Submit Request</Button>
            </form>
        </Card>
    );
}

function TenantMessages({ messages }) {
     return (
        <Card title="Messages from Landlord">
            {messages && messages.length > 0 ? (
                <ul className="space-y-3">
                    {messages.map((msg) => (
                        <li key={msg.id} className="p-3 bg-blue-50 rounded-md border border-blue-200">
                            <p className="text-sm text-gray-600"><strong>From:</strong> {msg.from} | <strong>Date:</strong> {msg.date}</p>
                            <p className="mt-1">{msg.text}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No messages.</p>
            )}
        </Card>
     );
}


// Tenant Dashboard
function TenantDashboard({ user, onLogout, rentHistory, maintenanceRequests, messages, onPayment, onSubmitRequest }) {
  const property = MOCK_PROPERTIES[user.propertyId];

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <header className="flex justify-between items-center mb-6 pb-4 border-b border-gray-300">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Tenant Dashboard</h1>
        <Button onClick={onLogout} variant="secondary">Logout</Button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Column 1 */}
        <div className="space-y-6">
          <TenantProfile tenant={user} property={property} />
          <PayRent tenant={user} onPayment={onPayment} />
          <TenantMessages messages={messages[user.id] || []} />
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          <MaintenanceRequestForm tenant={user} property={property} onSubmitRequest={onSubmitRequest} />
          <RentHistory history={rentHistory[user.id] || []} />
           {/* Display Submitted Requests */}
           <Card title="My Maintenance Requests">
                {maintenanceRequests && maintenanceRequests.length > 0 ? (
                    <Table
                        headers={['Date', 'Issue', 'Status']}
                        data={maintenanceRequests.filter(req => req.tenantId === user.id)}
                        renderRow={(req, index) => (
                            <tr key={req.id || index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{req.date}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{req.issue}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        req.status === 'Open' ? 'bg-yellow-100 text-yellow-800' :
                                        req.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                        'bg-green-100 text-green-800' // Assuming 'Closed' or other status
                                    }`}>
                                        {req.status}
                                    </span>
                                </td>
                            </tr>
                        )}
                    />
                ) : (
                    <p>You haven't submitted any requests yet.</p>
                )}
            </Card>
        </div>
      </div>
    </div>
  );
}


// --- Landlord Dashboard Components ---

function TenantList({ tenants, properties, rentHistory }) {
    const getTenantRentStatus = (tenantId) => {
        const history = rentHistory[tenantId] || [];
        // Basic check: Assumes latest payment is for the current/previous month
        // A real app needs more robust date logic.
        if (history.length > 0 && history[0].status === 'Paid') {
             // Let's check if the latest payment is recent enough (e.g., within last 40 days)
             const lastPaymentDate = new Date(history[0].date);
             const today = new Date();
             const daysDiff = (today - lastPaymentDate) / (1000 * 60 * 60 * 24);
             return daysDiff < 40 ? 'Paid' : 'Due';
        }
        return 'Due';
    };

    const headers = ['Name', 'Property Address', 'Rent Status', 'Actions'];
    const renderRow = (tenant, index) => {
        const property = properties[tenant.propertyId];
        const rentStatus = getTenantRentStatus(tenant.id);
        return (
            <tr key={tenant.id || index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tenant.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{property ? property.address : 'N/A'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        rentStatus === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                     }`}>
                        {rentStatus}
                     </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    {/* Add buttons for landlord actions like 'View Details', 'Send Reminder' etc. */}
                    <Button size="sm" variant="secondary" onClick={() => console.log('View details for:', tenant.name)}>Details</Button>
                    {rentStatus === 'Due' && (
                        <Button size="sm" variant="primary" onClick={() => console.log('Send reminder to:', tenant.name)}>Send Reminder</Button>
                    )}
                </td>
            </tr>
        );
    };

    const tenantData = Object.values(tenants).filter(t => t.type === 'tenant');

    return (
        <Card title="Tenant Overview">
            {tenantData.length > 0 ? (
                <Table headers={headers} data={tenantData} renderRow={renderRow} />
            ) : (
                <p>No tenants found.</p>
            )}
        </Card>
    );
}

function MaintenanceRequestsList({ requests, properties, tenants, onUpdateRequestStatus }) {
    const getTenantName = (tenantId) => tenants[tenantId]?.name || 'Unknown Tenant';
    const getPropertyAddress = (propertyId) => properties[propertyId]?.address || 'Unknown Property';

    const headers = ['Date', 'Tenant', 'Property', 'Issue', 'Status', 'Actions'];
    const renderRow = (req, index) => (
        <tr key={req.id || index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{req.date}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{getTenantName(req.tenantId)}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{getPropertyAddress(req.propertyId)}</td>
            <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{req.issue}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
                 <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        req.status === 'Open' ? 'bg-yellow-100 text-yellow-800' :
                        req.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800' // Assuming 'Closed' or other status
                    }`}>
                    {req.status}
                 </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                 {req.status === 'Open' && (
                    <Button size="sm" variant="primary" onClick={() => onUpdateRequestStatus(req.id, 'In Progress')}>Start Work</Button>
                 )}
                 {req.status === 'In Progress' && (
                    <Button size="sm" variant="primary" onClick={() => onUpdateRequestStatus(req.id, 'Closed')}>Mark Closed</Button>
                 )}
                 <Button size="sm" variant="secondary" onClick={() => console.log('View details for request:', req.id)}>Details</Button>
            </td>
        </tr>
    );

    return (
        <Card title="Maintenance Requests">
            {requests && requests.length > 0 ? (
                <Table headers={headers} data={requests} renderRow={renderRow} />
            ) : (
                <p>No maintenance requests found.</p>
            )}
        </Card>
    );
}

function SendMessageForm({ tenants, onSendMessage }) {
    const [selectedTenant, setSelectedTenant] = useState('');
    const [messageText, setMessageText] = useState('');
    const [message, setMessage] = useState(''); // For success/error feedback

    const tenantOptions = Object.values(tenants)
                                .filter(t => t.type === 'tenant')
                                .map(t => ({ value: t.id, label: `${t.name} (${MOCK_PROPERTIES[t.propertyId]?.address || 'N/A'})` }));

    const handleSend = (e) => {
        e.preventDefault();
        setMessage('');
        if (!selectedTenant || !messageText.trim()) {
            setMessage('Please select a tenant and enter a message.');
            return;
        }

        const newMessage = {
            id: `msg_new_${Date.now()}`,
            from: 'landlord',
            to: selectedTenant, // Keep track of recipient
            date: new Date().toISOString().split('T')[0],
            text: messageText.trim()
        };

        console.log("Sending message:", newMessage);
        onSendMessage(newMessage); // Pass message up to parent state

        // Reset form and show success
        setSelectedTenant('');
        setMessageText('');
        setMessage('Message sent successfully.');
        setTimeout(() => setMessage(''), 5000); // Clear message
    };

    return (
        <Card title="Send Message / Reminder">
            {message && <MessageBox message={message} type={message.includes('successfully') ? 'success' : 'warning'} onClose={() => setMessage('')} />}
            <form onSubmit={handleSend} className="space-y-4">
                <div>
                    <label htmlFor="tenantSelect" className="block text-sm font-medium text-gray-700 mb-1">Select Tenant</label>
                    <select
                        id="tenantSelect"
                        value={selectedTenant}
                        onChange={(e) => setSelectedTenant(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="" disabled>-- Select a Tenant --</option>
                        {tenantOptions.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="messageText" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea
                        id="messageText"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        placeholder="Type your message or rent reminder here..."
                        required
                    />
                </div>
                <Button type="submit">Send Message</Button>
            </form>
        </Card>
    );
}


// Landlord Dashboard
function LandlordDashboard({ user, onLogout, tenants, properties, rentHistory, maintenanceRequests, messages, onUpdateRequestStatus, onSendMessage }) {
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <header className="flex justify-between items-center mb-6 pb-4 border-b border-gray-300">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Landlord Dashboard</h1>
        <Button onClick={onLogout} variant="secondary">Logout</Button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {/* Column 1 */}
        <div className="space-y-6">
            <TenantList tenants={tenants} properties={properties} rentHistory={rentHistory} />
            <SendMessageForm tenants={tenants} onSendMessage={onSendMessage} />
        </div>

         {/* Column 2 */}
        <div className="space-y-6">
            <MaintenanceRequestsList
                requests={maintenanceRequests}
                properties={properties}
                tenants={tenants}
                onUpdateRequestStatus={onUpdateRequestStatus}
            />
            {/* Potentially add other components like Property Overview, Financial Summary etc. */}
        </div>
      </div>
    </div>
  );
}

// --- Helper Functions ---
function getDaySuffix(day) {
    if (day > 3 && day < 21) return 'th'; // Covers 4th to 20th
    switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}


// --- Main App Component ---
function App() {
  // State for authentication
  const [currentUser, setCurrentUser] = useState(null); // null: logged out, object: logged in

  // State for application data (would be managed via API calls and possibly context/global state)
  const [users, setUsers] = useState(MOCK_USERS);
  const [properties, setProperties] = useState(MOCK_PROPERTIES);
  const [rentHistory, setRentHistory] = useState(MOCK_RENT_HISTORY);
  const [maintenanceRequests, setMaintenanceRequests] = useState(MOCK_MAINTENANCE_REQUESTS);
  const [messages, setMessages] = useState(MOCK_MESSAGES);

  // --- Data Update Handlers ---
  // These functions simulate updating data after user actions

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  // Tenant action: Simulate adding a new payment record
  const handleTenantPayment = useCallback((paymentData) => {
      setRentHistory(prevHistory => {
          const tenantId = currentUser?.id;
          if (!tenantId) return prevHistory; // Should not happen if logged in
          const currentTenantHistory = prevHistory[tenantId] || [];
          // Add new payment to the beginning of the array
          const updatedHistory = [paymentData, ...currentTenantHistory];
          return {
              ...prevHistory,
              [tenantId]: updatedHistory
          };
      });
  }, [currentUser]); // Depend on currentUser to get the tenantId

  // Tenant action: Simulate adding a new maintenance request
  const handleTenantSubmitRequest = useCallback((newRequest) => {
      setMaintenanceRequests(prevRequests => [...prevRequests, newRequest]);
  }, []);

  // Landlord action: Simulate updating the status of a request
   const handleUpdateRequestStatus = useCallback((requestId, newStatus) => {
        setMaintenanceRequests(prevRequests =>
            prevRequests.map(req =>
                req.id === requestId ? { ...req, status: newStatus } : req
            )
        );
    }, []);

  // Landlord action: Simulate sending a message (add to recipient's message list)
   const handleLandlordSendMessage = useCallback((newMessage) => {
        setMessages(prevMessages => {
            const recipientId = newMessage.to;
            const recipientMessages = prevMessages[recipientId] || [];
            return {
                ...prevMessages,
                [recipientId]: [newMessage, ...recipientMessages] // Add new message to the top
            };
        });
   }, []);


  // --- Render Logic ---
  if (!currentUser) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (currentUser.type === 'tenant') {
    return <TenantDashboard
                user={currentUser}
                onLogout={handleLogout}
                rentHistory={rentHistory}
                maintenanceRequests={maintenanceRequests}
                messages={messages}
                onPayment={handleTenantPayment}
                onSubmitRequest={handleTenantSubmitRequest}
            />;
  }

  if (currentUser.type === 'landlord') {
    return <LandlordDashboard
                user={currentUser}
                onLogout={handleLogout}
                tenants={users}
                properties={properties}
                rentHistory={rentHistory}
                maintenanceRequests={maintenanceRequests}
                messages={messages} // Landlord might view sent messages later
                onUpdateRequestStatus={handleUpdateRequestStatus}
                onSendMessage={handleLandlordSendMessage}
           />;
  }

  // Fallback for unknown user type (shouldn't happen with current logic)
  return (
      <div>
          <p>Error: Unknown user type.</p>
          <Button onClick={handleLogout}>Logout</Button>
      </div>
  );
}

export default App;
