/**
 * Options
 *
 */
AccountsTemplates.configure({
  defaultLayout: 'appLayout',
  defaultContentRegion: 'area',

  showForgotPasswordLink: true,
  overrideLoginErrors: true,
  enablePasswordChange: true,
  sendVerificationEmail: false,

  //enforceEmailVerification: true,
  //confirmPassword: true,
  //continuousValidation: false,
  //displayFormLabels: true,
  //forbidClientAccountCreation: false,
  //formValidationFeedback: true,
  //homeRoutePath: '/',
  //showAddRemoveServices: false,
  //showPlaceholders: true,

  negativeValidation: true,
  positiveValidation:true,
  negativeFeedback: false,
  positiveFeedback:false,

  // Privacy Policy and Terms of Use
  //privacyUrl: 'privacy',
  //termsUrl: 'terms-of-use',
});

/**
 * Routes
 *
 */
AccountsTemplates.configureRoute('changePwd', {
  path: '/zmena-hesla',
});
//AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd', {
  path: '/zabudnute-heslo',
});
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn', {
  path: '/prihlasenie',
});
AccountsTemplates.configureRoute('signUp', {
  path: '/registracia',
});
AccountsTemplates.configureRoute('verifyEmail');
