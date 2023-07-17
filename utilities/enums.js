module.exports = {
    APP_HOME: {
        BUTTONS: {
            GET_PENDING_APPROVALS: {
                value: "app-home-get-pending-approvals",
                actionId: "app-home-get-pending-approvals",
                text: "📥 Pending My Approval",
            },
            GET_APPROVED: {
                value: "app-home-get-approved",
                actionId: "app-home-get-approved",
                text: "📤 Approved By Me",
            },
            WORKATO_WEBHOOK: {
                value: "app-home-workato-webhook",
                actionId: "app-home-workato-webhook",
                text: "Workato Webhook",
            },
            GET_VENDOR_DETAILS: {
                value: "app-home-get-vendor-details",
                actionId: "app-home-get-vendor-details",
                text: "💵 Get Vendor Spend",
            },
            GET_INVOICE_DETAILS: {
                value: "app-home-get-invoice-details",
                actionId: "app-home-get-invoice-details",
                text: "🧾 Get Invoice Details",
            },
            DELEGATE_APPROVAL: {
                value: "app-home-delegate-approval",
                actionId: "app-home-delegate-approval",
                text: "🏖 Delegation",
            },
        },
        FIELDS: {
            GET_VENDOR_DETAILS_OPTIONS: "get-vendor-details-options",
            GET_INVOICE_DETAILS: "get-invoice-details",
            GET_DELEGATION_EMPLOYEES: "get-delegation-employees-options",
        },
        APPROVED: {
            CALLBACK_ID: "app-home-approved",
        },
        PENDING_APPROVAL: {
            CALLBACK_ID: "app-home-pending",
        },
    },
    MODALS: {
        GET_VENDOR_DEATILS_MODAL: {
            callbackId: "get_invoice_details",
        },
        GET_DELEGATION_EMPLOYEES: {
            callbackId: "get_delegation_employees",
            INPUTS: {
                DELEGATION_TO_EMPLOYEE: "delegation-to-employee",
                DELEGATION_FROM_DATE: "delegation-from-date",
                DELEGATION_TO_DATE: "delegation-to-date",
            },
        },
    },
    TABS: {
        APPROVAL_APP: {
            value: "app-home-approval-app",
            actionId: "app-home-approval-app",
            text: "🗃 Approval Dashboard",
        },
        ANOTHER_APP: {
            value: "app-home-another-app",
            actionId: "app-home-another-app",
            text: "📂 Another Dashboard",
        },
    },
};
