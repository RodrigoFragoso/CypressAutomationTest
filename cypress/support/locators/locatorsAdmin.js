const locators = {

    LOGIN: {
        INPUT_EMAIL: '[id=Email]',
        TEXT_EMAIL: 'admin@yourstore.com',
        INPUT_PASSWORD: '[id=Password]',
        TEXT_PASSWORD: 'admin',
        CHECKBOX_REMEMBERME: '[id=RememberMe]',
        BUTTON_LOGIN: '.login-button',
        TEXT_H1: 'Admin area demo',
        TEXT_H2: 'Defaults for admin area'
    },
    DASHBOARD: {
        INPUT_EMAIL: '[id=Email]',
        BUTTON_CATALOG: '.sidebar-menu > :nth-child(2) > :nth-child(1)',
        BUTTON_CATEGORIES: 'a[href="/Admin/Category/List"]',
        TEXT_H1: 'Dashboard'
    },
    CATEGORIES: {
        INPUT_CATEGORY_NAME: '[id=SearchCategoryName]',
        BUTTON_SEARCH: '[id=search-categories]'
    },
    CONFIGURATION: {
        BUTTON_CONFIGURATION: '.fa fa-gears',
        BUTTON_EMAIL_ACOUNTS: 'a[href="/Admin/EmailAccount/List"]',
        BUTTON_ADD_NEW_EMAIL: 'a[href="/Admin/EmailAccount/Create"]',
        DIV_EMAIL_ACCOUNTS: '[id=email-accounts-grid_wrapper]',
        TEXT_H1: 'Add a new email account',
        INPUT_EMAIL: '[id=Email]',
        INPUT_DISPLAY_EMAIL: '[id=DisplayName]',
        INPUT_HOST: '[id=Host]',
        INPUT_PORT: '[id=Port]',
        INPUT_USER: '[id=Username]',
        INPUT_PASSWORD: '[id=Password]',
        CHECKBOX_SSL: '[id=EnableSsl]',
        CHECKBOX_CREDENTIALS: '[id=UseDefaultCredentials]',
        BUTTON_SAVE: '[name=save]',
        BUTTON_SAVE_CONTINUE: '[name=save-continue]'
    },
    LOGOUT: {
        BUTTON_LOGOUT: 'a[href="/logout"]'
    },
}
export default locators;